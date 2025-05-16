// Get elements from DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('backToTop');
const yearEl = document.getElementById('year');
const sections = document.querySelectorAll('section');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const sendAnotherBtn = document.getElementById('sendAnotherBtn');

// Variable to store error messages in current language
window.formErrorMessages = {
    nameError: 'Пожалуйста, введите ваше имя',
    emailError: 'Пожалуйста, введите ваш email',
    emailInvalid: 'Пожалуйста, введите корректный email',
    messageError: 'Пожалуйста, введите сообщение',
    sending: 'Отправка...'
};

// Set current year in footer
yearEl.textContent = new Date().getFullYear();

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll to section when nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button functionality
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form validation and submission
if (contactForm) {
    // Генерация CSRF-токена
    function generateCSRFToken() {
        const token = Math.random().toString(36).substring(2, 15) + 
                     Math.random().toString(36).substring(2, 15);
        localStorage.setItem('csrf_token', token);
        document.getElementById('csrf_token').value = token;
    }
    
    // Проверка, заполнено ли поле-ловушка для ботов
    function isHoneypotFilled() {
        const honeypot = document.getElementById('website');
        return honeypot && honeypot.value.length > 0;
    }
    
    // Защита от XSS - санитизация входящих данных
    function sanitizeInput(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }
    
    // Ограничение частоты отправки форм
    let lastSubmissionTime = 0;
    const SUBMISSION_COOLDOWN = 30000; // 30 секунд между отправками
    
    // Генерируем CSRF-токен при загрузке страницы
    document.addEventListener('DOMContentLoaded', () => {
        generateCSRFToken();
        
        // Сохраняем оригинальный текст кнопки
        const btnText = document.querySelector('.submit-btn .btn-text');
        if (btnText) {
            btnText.setAttribute('data-original-text', btnText.textContent);
        }
        
        // Инициализация reCAPTCHA в выделенном контейнере
        try {
            grecaptcha.ready(function() {
                // Явно отображаем бейдж в нашем контейнере
                const recaptchaContainer = document.getElementById('recaptcha-container');
                if (recaptchaContainer) {
                    // Сначала очищаем контейнер
                    recaptchaContainer.innerHTML = '';
                    
                    // Создаем видимый элемент с логотипом reCAPTCHA
                    const recaptchaElement = document.createElement('div');
                    recaptchaElement.className = 'g-recaptcha';
                    recaptchaElement.setAttribute('data-sitekey', '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI');
                    recaptchaElement.setAttribute('data-size', 'normal');
                    
                    recaptchaContainer.appendChild(recaptchaElement);
                    
                    // Добавляем информационный текст
                    const infoText = document.createElement('div');
                    infoText.style.textAlign = 'center';
                    infoText.style.fontSize = '0.8rem';
                    infoText.style.color = '#666';
                    infoText.style.marginTop = '5px';
                    infoText.innerHTML = 'Защищено reCAPTCHA';
                    
                    recaptchaContainer.appendChild(infoText);
                }
            });
        } catch (e) {
            console.error('reCAPTCHA initialization error:', e);
        }
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Проверка интервала между отправками
        const now = Date.now();
        if (now - lastSubmissionTime < SUBMISSION_COOLDOWN) {
            alert('Пожалуйста, подождите перед отправкой следующего сообщения');
            return;
        }
        
        // Get form inputs
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const csrfToken = document.getElementById('csrf_token');
        
        // Get error message elements
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        
        // Reset error messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        
        // Проверка поля-ловушки (honeypot)
        if (isHoneypotFilled()) {
            // Бот попался - тихо "принимаем" форму без реальной отправки
            contactForm.reset();
            return;
        }
        
        // Проверка CSRF-токена
        if (csrfToken.value !== localStorage.getItem('csrf_token')) {
            alert('Ошибка безопасности. Пожалуйста, перезагрузите страницу и попробуйте снова.');
            return;
        }
        
        // Validate inputs with enhanced security
        let isValid = true;
        
        // Валидация имени (буквы и пробелы, 2-100 символов)
        const nameValue = nameInput.value.trim();
        if (!nameValue) {
            nameError.textContent = window.formErrorMessages.nameError;
            isValid = false;
        } else if (!/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]{2,100}$/.test(nameValue)) {
            nameError.textContent = 'Имя должно содержать только буквы и пробелы';
            isValid = false;
        }
        
        // Валидация email с более строгим регексом
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            emailError.textContent = window.formErrorMessages.emailError;
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            emailError.textContent = window.formErrorMessages.emailInvalid;
            isValid = false;
        }
        
        // Валидация сообщения (не пустое, до 1000 символов)
        const messageValue = messageInput.value.trim();
        if (!messageValue) {
            messageError.textContent = window.formErrorMessages.messageError;
            isValid = false;
        } else if (messageValue.length > 1000) {
            messageError.textContent = 'Сообщение слишком длинное (максимум 1000 символов)';
            isValid = false;
        }
        
        if (isValid) {
            // Запускаем проверку reCAPTCHA перед отправкой
            grecaptcha.execute('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', {action: 'submit_form'})
                .then(function(token) {
                    // Санитизация данных перед отправкой
                    const sanitizedName = sanitizeInput(nameValue);
                    const sanitizedEmail = sanitizeInput(emailValue);
                    const sanitizedMessage = sanitizeInput(messageValue);
                    
                    // Добавляем токен reCAPTCHA к форме
                    const recaptchaToken = token;
                    
                    // Simulate form submission
                    const submitBtn = document.querySelector('.submit-btn');
                    const btnText = submitBtn.querySelector('.btn-text');
                    
                    // Change button text to show loading
                    btnText.textContent = window.formErrorMessages.sending;
                    submitBtn.disabled = true;
                    
                    // Обновляем время последней отправки
                    lastSubmissionTime = now;
                    
                    // Обновляем CSRF-токен после отправки
                    generateCSRFToken();
                    
                    // Здесь в реальном приложении мы бы отправили данные на сервер вместе с reCAPTCHA токеном
                    // для серверной валидации
                    
                    // Simulate API call or email sending
                    setTimeout(() => {
                        // Hide form and show success message
                        contactForm.style.display = 'none';
                        formSuccess.style.display = 'block';
                        
                        // Reset form
                        contactForm.reset();
                        
                        // Убеждаемся, что поле-ловушка пустое
                        if (document.getElementById('website')) {
                            document.getElementById('website').value = '';
                        }
                        
                        // Reset button
                        btnText.textContent = document.querySelector('.submit-btn .btn-text').getAttribute('data-original-text') || 'Отправить сообщение';
                        submitBtn.disabled = false;
                    }, 1500);
                })
                .catch(function(error) {
                    console.error('reCAPTCHA error:', error);
                    alert('Ошибка проверки безопасности. Пожалуйста, попробуйте еще раз позже.');
                });
        }
    });
}

// Улучшенная валидация email
function isValidEmail(email) {
    // Более строгая валидация email
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email) && email.length <= 100;
}

// Send another message button
if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener('click', () => {
        formSuccess.style.display = 'none';
        contactForm.style.display = 'block';
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    root: null, // Use viewport as root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
};

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'appear');
            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Add fade-in class to elements to animate
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to section titles and important elements
    const fadeElements = [
        ...document.querySelectorAll('.section-title'),
        ...document.querySelectorAll('.projects-grid'),
        ...document.querySelectorAll('.about-content'),
        ...document.querySelectorAll('.contact-container'),
        ...document.querySelectorAll('.hero-content'),
        ...document.querySelectorAll('.hero-image')
    ];
    
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.padding = '5px 0';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '';
        header.style.boxShadow = '';
    }
}); 