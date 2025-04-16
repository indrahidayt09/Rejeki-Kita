document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbarNav = document.querySelector('.navbar-nav');
    
    hamburgerMenu.addEventListener('click', function(e) {
        e.preventDefault();
        navbarNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarNav.classList.remove('active');
        });
    });
    
    // Donation Modal
    const donateBtn = document.getElementById('donate-btn');
    const donationModal = document.getElementById('donation-modal');
    const closeModal = document.querySelector('.close-modal');
    
    donateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        donationModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    closeModal.addEventListener('click', function() {
        donationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === donationModal) {
            donationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            
            if (pageYOffset >= (sectionTop - navbarHeight - 50)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    const donationForm = document.getElementById('donation-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Pesan Anda telah terkirim. Terima kasih!');
            this.reset();
        });
    }
    
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih atas donasi Anda! Kami akan mengirimkan detail pembayaran ke email Anda.');
            this.reset();
            donationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-container, .program-card, .gallery-item, .contact-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.about-container, .program-card, .gallery-item, .contact-container');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger once on load
});