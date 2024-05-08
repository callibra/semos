// Funkcija za prikazuvanje na forma za Add new Course/Academy
function showAddForm() {
    var addForm = document.getElementById("addForm");
    if (addForm.style.display !== "block") {
        addForm.style.display = "block";
    } else {
        addForm.style.display = "none";
    }
}

// Funkcija za prikazuvanje na forma za edit/update na Course
function showEditForm(courseId) {
    var editForm = document.getElementById("editForm" + courseId);
    if (editForm.style.display !== "block") {
        editForm.style.display = "block";
    } else {
        editForm.style.display = "none";
    }
}

// Funkcija za prikazuvanje na forma za edit/update na Academy
function showEditForm(academyId) {
    var editForm = document.getElementById("editForm" + academyId);
    if (editForm.style.display !== "block") {
        editForm.style.display = "block";
    } else {
        editForm.style.display = "none";
    }
}

// Funkcija za prikazuvanje notifikacija
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.innerHTML = `<div class="notification-message ${type}">${message}</div>`;
       setTimeout(() => {
        hideNotification();
    }, 3000); 
}

// Funkcija za brisenje na notifikacija
function hideNotification() {
    const notification = document.getElementById('notification');
    notification.innerHTML = ''; 
}

// Funkcija za brisenje na URL parametri
function clearUrlParams() {
    const urlWithoutParams = window.location.href.split('?')[0];
    window.history.replaceState({}, document.title, urlWithoutParams);
}

// Prikazuvanje na notifikacija koga se vcituva stranata
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const successMessage = params.get('successMessage');
    const errorMessage = params.get('errorMessage');
        if (successMessage) {
             showNotification(successMessage, 'success');
             clearUrlParams();  
        } else if (errorMessage) {
             showNotification(errorMessage, 'error');
           clearUrlParams();  
        }
});