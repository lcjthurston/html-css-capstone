/* 
 **********************************
 ******** DASHBOARD MODAL *********
 **********************************
 */

// Modal Elements
const modal = document.getElementById('tripModal');
const openModalButton = document.querySelector('.open-modal');
const closeModalButton = document.querySelector('.close-modal');
const tripForm = document.getElementById('tripForm');

// Open Modal
openModalButton.addEventListener('click', () => {
    modal.classList.add('show');
});

// Close Modal
closeModalButton.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Close Modal When Clicking Outside Content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Form Submission
tripForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const budget = document.getElementById('budget').value;

    if (new Date(startDate) > new Date(endDate)) {
        alert('End date must be after start date.');
        return;
    }

    alert(`Trip saved:\nDestination: ${destination}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nBudget: $${budget}`);
    modal.classList.remove('show');
    tripForm.reset();
});
