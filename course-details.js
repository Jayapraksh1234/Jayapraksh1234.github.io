function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Show only the relevant course details
function showCourseDetails() {
    const courseId = getQueryParam('id');
    if (courseId) {
        const section = document.getElementById(`course-details-section-${courseId}`);
        if (section) {
            section.style.display = 'block';  // Display only the relevant section
        } else {
            document.body.innerHTML = '<p>Course not found.</p>';
        }
    } else {
        // Handle case where no id is present, maybe show an error or redirect
        document.body.innerHTML = '<p>Course not found.</p>';
    }
}

// Show notification when Enroll Now button is clicked
function setupEnrollButtons() {
    const enrollButtons = document.querySelectorAll('.enroll-button');
    enrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseTitle = this.getAttribute('data-title');
            alert(`You have successfully enrolled in the ${courseTitle} course!`);
        });
    });
}

// Call the functions on page load
document.addEventListener('DOMContentLoaded', () => {
    showCourseDetails();
    setupEnrollButtons();
});