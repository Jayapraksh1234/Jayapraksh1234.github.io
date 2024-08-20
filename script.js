document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButtons = document.querySelectorAll(".learn-more");
    const courseDetailsSection = document.getElementById("course-details");
    const courseTitle = document.getElementById("course-title");
    const courseImage = document.getElementById("course-image");
    const courseDescription = document.getElementById("course-description");
    const courseInstructor = document.getElementById("course-instructor");
    const courseDuration = document.getElementById("course-duration");
    const enrollButton = courseDetailsSection.querySelector(".button");

    // Course data (could be fetched from a database)
    const courses = {
        course1: {
            title: "Introduction to Python",
            image: "python.jpeg",
            description: "Learn Python programming from scratch in this beginner-friendly course. By the end of the course, you'll be able to write your own Python scripts and solve real-world problems.",
            instructor: "John Doe",
            duration: "10 weeks"
        },
        course2: {
            title: "Data Science Essentials",
            image: "data science.jpeg",
            description: "Master the basics of data science with hands-on projects. This course covers data manipulation, visualization, and basic machine learning techniques.",
            instructor: "Jane Smith",
            duration: "15 weeks"
        },
        course3: {
            title: "Web Development",
            image: "web development.jpeg",
            description: "Become a full-stack web developer with this comprehensive course. Learn HTML, CSS, JavaScript, and backend technologies.",
            instructor: "Raj Kumar",
            duration: "9 weeks"
        },
        course4: {
            title: "Machine Learning with Python",
            image: "ml.jpeg",
            description: "Explore the world of machine learning with Python. This course covers essential algorithms, data preparation, and model evaluation.",
            instructor: "Lokesh Yadav",
            duration: "5 weeks"
        },
        course5: {
            title: "Cybersecurity Fundamentals",
            image: "cyber.jpeg",
            description: "Understand the basics of cybersecurity and protect your data. Learn about encryption, network security, and risk management.",
            instructor: "Ganesh Reddy",
            duration: "15 weeks"
        },
        course6: {
            title: "Digital Marketing Strategies",
            image: "marketing.png",
            description: "Learn the latest digital marketing techniques and strategies. This course covers SEO, social media marketing, and content creation.",
            instructor: "Abdul Rehman",
            duration: "10 weeks"
        }
    };

    learnMoreButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const courseKey = this.closest(".course-card").getAttribute("data-course");

            if (courses[courseKey]) {
                courseTitle.textContent = courses[courseKey].title;
                courseImage.src = courses[courseKey].image;
                courseDescription.textContent = courses[courseKey].description;
                courseInstructor.textContent = `Instructor: ${courses[courseKey].instructor}`;
                courseDuration.textContent = `Duration: ${courses[courseKey].duration}`;
                courseDetailsSection.style.display = "block";
                courseDetailsSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Notification on "Enroll Now" button click
    enrollButton.addEventListener("click", function(event) {
        event.preventDefault();
        alert("You have successfully enrolled in the course!");
    });
});
