import Academy from '../model/academyModel.js';

// Create new Academy
export const createAcademy = async (req, res) => {
    try {
        const academyData = new Academy(req.body);
        const { email } = academyData;
        const academyExist = await Academy.findOne({ email });
        if (academyExist) {
            return res.status(400).json({ message: "Academy already exists." });
        }
        const savedAcademy = await academyData.save();
        res.status(200).json(savedAcademy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all create Academy
export const fetchAcademies = async (req, res) => {
    try {
        const academies = await Academy.find();
        if (academies.length === 0) {
            return res.status(404).json({ message: "Academy not found." });
        }
        res.status(200).json(academies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Academy
export const updateAcademy = async (req, res) => {
    try {
        const id = req.params.id;
        const academyExist = await Academy.findOne({ _id: id });
        if (!academyExist) {
            return res.status(404).json({ message: "Academy not found." });
        }
        const updatedAcademy = await Academy.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedAcademy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Academy
export const deleteAcademy = async (req, res) => {
    try {
        const id = req.params.id;
        const academyExist = await Academy.findOne({ _id: id });
        if (!academyExist) {
            return res.status(404).json({ message: "Academy not found." });
        }
        await Academy.findByIdAndDelete(id);
        res.status(200).json({ message: "Academy deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

