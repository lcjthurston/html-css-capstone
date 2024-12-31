/* 
 **********************************
 ******* User Profile Modal *******
 **********************************
 */

// Modal Elements
const profileModal = document.getElementById('profileModal');
const openModalButton = document.querySelector('.open-modal');
const closeModalButton = document.querySelector('.close-modal');
const profilePicInput = document.getElementById('profile-pic-input');
const previewContainer = document.getElementById('preview-container');
const profilePicForm = document.getElementById('profilePicForm');

// Open Modal
openModalButton.addEventListener('click', () => {
    profileModal.classList.add('show');
});

// Close Modal
closeModalButton.addEventListener('click', () => {
    profileModal.classList.remove('show');
});

// Close Modal When Clicking Outside Content
profileModal.addEventListener('click', (e) => {
    if (e.target === profileModal) {
        profileModal.classList.remove('show');
    }
});

// Preview Image Before Upload
profilePicInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    previewContainer.innerHTML = ''; // Clear previous content

    if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        previewContainer.appendChild(img);
    } else {
        previewContainer.innerHTML = '<p>No image selected</p>';
    }
});

// Handle Form Submission
profilePicForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const file = profilePicInput.files[0];
    if (file) {
        alert('Profile picture updated successfully!');
        profileModal.classList.remove('show');
        profilePicForm.reset();
        previewContainer.innerHTML = '<p>No image selected</p>';
    } else {
        alert('Please select a picture to upload.');
    }
});