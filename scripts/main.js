// ============================================
// Smooth Scroll Navigation
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth < 768) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    
    // Hide navbar on scroll down, show on scroll up
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});

// ============================================
// Testimonials Carousel
// ============================================

class TestimonialsCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.cards = Array.from(document.querySelectorAll('.testimonial-card'));
        this.leftArrow = document.querySelector('.carousel-arrow-left');
        this.rightArrow = document.querySelector('.carousel-arrow-right');
        this.indicators = Array.from(document.querySelectorAll('.indicator'));
        this.currentIndex = 0;
        
        this.init();
    }
    
    init() {
        // Set initial state
        this.updateCarousel();
        
        // Event listeners
        this.leftArrow.addEventListener('click', () => this.previous());
        this.rightArrow.addEventListener('click', () => this.next());
        
        // Indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goTo(index));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previous();
            if (e.key === 'ArrowRight') this.next();
        });
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
        
        // Auto-play (optional)
        this.startAutoPlay();
    }
    
    updateCarousel() {
        // Update cards
        this.cards.forEach((card, index) => {
            card.classList.toggle('active', index === this.currentIndex);
        });
        
        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
        
        // Move track
        const offset = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${offset}%)`;
        
        // Update arrows
        this.leftArrow.disabled = this.currentIndex === 0;
        this.rightArrow.disabled = this.currentIndex === this.cards.length - 1;
    }
    
    next() {
        if (this.currentIndex < this.cards.length - 1) {
            this.currentIndex++;
            this.updateCarousel();
            this.resetAutoPlay();
        }
    }
    
    previous() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
            this.resetAutoPlay();
        }
    }
    
    goTo(index) {
        this.currentIndex = index;
        this.updateCarousel();
        this.resetAutoPlay();
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.previous();
            }
        }
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            if (this.currentIndex < this.cards.length - 1) {
                this.next();
            } else {
                this.currentIndex = 0;
                this.updateCarousel();
            }
        }, 5000); // Change slide every 5 seconds
    }
    
    resetAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.startAutoPlay();
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialsCarousel();
});

// ============================================
// Scroll Animations (Fade in on scroll)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Observe sections for animation
    const sections = document.querySelectorAll('.about, .testimonials, .location, .footer');
    sections.forEach(section => observer.observe(section));
});

// ============================================
// CTA Button Animation
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = ctaButton.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            ctaButton.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    }
});

// ============================================
// Dynamic Image Grid
// ============================================

function populateImageGrid() {
    const grid = document.getElementById('imageGrid');
    if (!grid) return;
    
    const images = JSON.parse(grid.dataset.images);
    const gridWidth = grid.offsetWidth;
    const naturalImageWidth = 214; // Fixed width of each image
    const totalNaturalWidth = naturalImageWidth * images.length; // 6 * 214 = 1284px
    
    // Clear existing grid
    grid.innerHTML = '';
    
    let imagesToShow = [];
    let imageWidth = naturalImageWidth;
    
    // If 6 images at natural size (214px each) are wider than container, scale DOWN
    if (totalNaturalWidth > gridWidth) {
        imageWidth = Math.floor(gridWidth / images.length);
        imagesToShow = images;
    } else {
        // If 6 images don't fill the container, repeat at natural size (214px)
        const imagesNeeded = Math.ceil(gridWidth / naturalImageWidth);
        for (let i = 0; i < imagesNeeded; i++) {
            imagesToShow.push(images[i % images.length]);
        }
    }
    
    // Add images to grid
    imagesToShow.forEach((imgSrc, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `Variation ${(index % images.length) + 1}`;
        img.style.width = imageWidth + 'px';
        gridItem.appendChild(img);
        grid.appendChild(gridItem);
    });
}

// Populate grid on load and resize
window.addEventListener('load', populateImageGrid);
window.addEventListener('resize', () => {
    clearTimeout(window.gridResizeTimer);
    window.gridResizeTimer = setTimeout(populateImageGrid, 250);
});
