// Sample data for mentors
const mentors = [
    {
        id: 1,
        name: "Anshu raj",
        field: "Computer Science",
        experience: "3",
        bio: "Passionate about teaching programming concepts and helping juniors navigate the tech industry.",
        skills: ["Java", "React", "Node.js", "Data Structures"],
        image: "anshu.jpeg"
    },
    {
        id: 2,
        name: "Avinash kumar",
        field: "Engineering",
        experience: "2+",
        bio: "computer science engineering graduate with industry experience. I enjoy mentoring students on practical applications.",
        skills: ["matplotlib", "Seaborn", "Project Management", "MATLAB"],
        image: "img3.jpeg"
    },
    {
        id: 3,
        name: "Kumar vaibhav",
        field: "Business",
        experience: "3-5",
        bio: "Marketing specialist with a focus on digital strategies. I help students understand real-world business applications.",
        skills: ["Marketing", "Business Strategy", "Social Media", "Analytics"],
        image: "img4.jpeg"
    },
    {
        id: 4,
        name: "Suhani jha",
        field: "Data science",
        experience: "5+",
        bio: "Professional data science enthuciast with a passion for teaching visual communication and creative thinking.",
        skills: ["power bi", "UI/UX", "Adobe Suite", "dataset handling"],
        image: "img5.jpeg"
    },
   
];

// Sample data for testimonials
const testimonials = [
    {
        id: 1,
        name: "AVINASH KUMAR",
        role: "Junior Computer Science Student",
        text: "Finding a mentor through Senior-Junior Connect completely changed my academic journey. My mentor helped me understand complex programming concepts and guided me through my first internship application process.",
        image: "img3.jpeg"
    },
    {
        id: 2,
        name: "Suhani jha",
        role: "Senior Engineering Student",
        text: "Being a mentor on this platform has been incredibly rewarding. I've improved my communication skills while helping juniors navigate their academic challenges. It's a win-win relationship that I highly recommend.",
        image: "img5.jpeg"
    },
    {
        id: 3,
        name: "RAUNAK KUMAR",
        role: "Junior Business Student",
        text: "The guidance I received from my mentor helped me secure a competitive internship position. The practical advice and industry insights were invaluable and went beyond what I learned in the classroom.",
        image: "img2.jpeg"
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const closeBtns = document.querySelectorAll('.close-modal');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const ctaBtn = document.querySelector('.cta-btn');
const mentorsContainer = document.getElementById('mentors-container');
const testimonialContainer = document.getElementById('testimonial-container');
const prevTestimonial = document.getElementById('prev-testimonial');
const nextTestimonial = document.getElementById('next-testimonial');
const mentorSearch = document.getElementById('mentor-search');
const fieldFilter = document.getElementById('field-filter');
const experienceFilter = document.getElementById('experience-filter');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Modal Functionality
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

ctaBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});

showRegister.addEventListener('click', () => {
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
});

showLogin.addEventListener('click', () => {
    registerModal.style.display = 'none';
    loginModal.style.display = 'block';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

// Display Mentors
function displayMentors(mentorsArray) {
    mentorsContainer.innerHTML = '';
    
    if (mentorsArray.length === 0) {
        mentorsContainer.innerHTML = '<p class="no-results">No mentors found matching your criteria. Try adjusting your filters.</p>';
        return;
    }
    
    mentorsArray.forEach(mentor => {
        const mentorCard = document.createElement('div');
        mentorCard.classList.add('mentor-card');
        
        const skillsHTML = mentor.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
        
        mentorCard.innerHTML = `
            <div class="mentor-image">
                <img src="${mentor.image}" alt="${mentor.name}">
            </div>
            <div class="mentor-info">
                <h3>${mentor.name}</h3>
                <p class="mentor-field">${mentor.field} • ${mentor.experience} Years Experience</p>
                <p class="mentor-bio">${mentor.bio}</p>
                <div class="mentor-skills">
                    ${skillsHTML}
                </div>
                <button class="connect-btn">Connect</button>
            </div>
        `;
        
        mentorsContainer.appendChild(mentorCard);
    });
}

// Filter Mentors
function filterMentors() {
    const searchTerm = mentorSearch.value.toLowerCase();
    const fieldValue = fieldFilter.value;
    const experienceValue = experienceFilter.value;
    
    const filteredMentors = mentors.filter(mentor => {
        // Search term filter
        const matchesSearch = 
            mentor.name.toLowerCase().includes(searchTerm) || 
            mentor.bio.toLowerCase().includes(searchTerm) || 
            mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm)) ||
            mentor.field.toLowerCase().includes(searchTerm);
        
        // Field filter
        const matchesField = fieldValue === '' || mentor.field.toLowerCase().includes(fieldValue.toLowerCase());
        
        // Experience filter
        const matchesExperience = experienceValue === '' || mentor.experience === experienceValue;
        
        return matchesSearch && matchesField && matchesExperience;
    });
    
    displayMentors(filteredMentors);
}

// Search and filter event listeners
mentorSearch.addEventListener('input', filterMentors);
fieldFilter.addEventListener('change', filterMentors);
experienceFilter.addEventListener('change', filterMentors);

// Display Testimonials
function displayTestimonials() {
    testimonialContainer.innerHTML = '';
    
    const testimonialSlide = document.createElement('div');
    testimonialSlide.classList.add('testimonial-slide');
    
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.classList.add('testimonial');
        
        testimonialElement.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-image">
                    <img src="${testimonial.image}" alt="${testimonial.name}">
                </div>
                <div class="testimonial-author">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
            <div class="testimonial-text">
                <p>${testimonial.text}</p>
            </div>
        `;
        
        testimonialSlide.appendChild(testimonialElement);
    });
    
    testimonialContainer.appendChild(testimonialSlide);
}

// Testimonial Slider
let currentTestimonial = 0;

function showTestimonial(index) {
    const testimonialSlide = document.querySelector('.testimonial-slide');
    const testimonialWidth = document.querySelector('.testimonial').offsetWidth;
    
    if (index < 0) {
        currentTestimonial = testimonials.length - 1;
    } else if (index >= testimonials.length) {
        currentTestimonial = 0;
    } else {
        currentTestimonial = index;
    }
    
    testimonialSlide.style.transform = `translateX(-${currentTestimonial * testimonialWidth}px)`;
}

prevTestimonial.addEventListener('click', () => {
    showTestimonial(currentTestimonial - 1);
});

nextTestimonial.addEventListener('click', () => {
    showTestimonial(currentTestimonial + 1);
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to a server
    // For this demo, we'll just show a success message
    
    formMessage.innerHTML = 'Your message has been sent successfully! We will get back to you soon.';
    formMessage.classList.add('success');
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.innerHTML = '';
        formMessage.classList.remove('success');
    }, 5000);
});

// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
    displayMentors(mentors);
    displayTestimonials();
    showTestimonial(0);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Form validation
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real application, you would validate and send the login data to a server
    alert('Login functionality would be implemented in a real application.');
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // In a real application, you would validate and send the registration data to a server
    alert('Registration functionality would be implemented in a real application.');
});

// Connect button functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('connect-btn')) {
        // In a real application, this would open a chat or connection request
        // For this demo, we'll just show a message
        alert('Connection request functionality would be implemented in a real application.');
    }
});