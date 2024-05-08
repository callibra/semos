import Academy from "../model/academyModel.js";

// Render funkcija za prikazuvanje na EJS stranite
const renderPage = (res, page, data) => {
    res.render(page, data);
};

// Kontrolor za kreiranje (ADD NEW ACADEMY)
export const createAcademy = async (req, res) => {
    try {
        const newAcademy = new Academy(req.body);
        const validationError = newAcademy.validateSync();
        if (validationError) {
            const errorMessage = Object.values(validationError.errors).map(error => error.message).join(', ');
            return renderPage(res, 'academy', { academys: [], message: errorMessage });
        }
        const savedAcademy = await newAcademy.save();
        res.redirect('/academy/getallacademys?successMessage=Academy successfully created.');
    } catch (error) {
        return renderPage(res, 'academy', { academys: [], message: error.message });
    }
};

// Kontrolor za listanje (ALL ACADEMY)
export const fetchAcademies = async (req, res) => {
    try {
        const academys = await Academy.find();
        if (academys.length === 0) {
            return renderPage(res, 'academy', { academys: [], message: "Academy not found.", successMessage: req.query.successMessage });
        }
        renderPage(res, 'academy', { academys, successMessage: req.query.successMessage });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Kontrolor za editiranje (UPDATE)
export const updateAcademy = async (req, res) => {
    try {
        const id = req.params.id;
        const academyExist = await Academy.findOne({ _id: id });
        if (!academyExist) {
            return renderPage(res, 'academy', { academys: [], message: "Academy not found.", successMessage: req.query.successMessage });
        }
        const updatedAcademy = await Academy.findByIdAndUpdate(id, req.body, { new: true });
        res.redirect('/academy/getallacademys?successMessage=Academy successfully updated.&type=update-academy');
    } catch (error) {
        renderPage(res, 'academy', { academys: [], message: error.message });
    }
};

// Kontrolor za brisenje (DELETE)
export const deleteAcademy = async (req, res) => {
    try {
        const id = req.params.id;
        const academyExist = await Academy.findById(id);
        if (!academyExist) {
            return renderPage(res, 'academy', { academys: [], message: "Academy not found." });
        }
        await Academy.findByIdAndDelete(id);
        const academys = await Academy.find();
        res.redirect('/academy/getallacademys?successMessage=Academy successfully deleted.&type=delete-academy');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};