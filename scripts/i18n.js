// Основные языки сайта
const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uk', name: 'Українська', flag: '🇺🇦' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
];

// Текущий язык (по умолчанию - русский или из localStorage)
let currentLanguage = localStorage.getItem('language') || 'ru';

// Элементы, которые нужно перевести
const translatableElements = [
    // Навигация
    { selector: '.nav-link[href="#home"]', key: 'nav.home' },
    { selector: '.nav-link[href="#about"]', key: 'nav.about' },
    { selector: '.nav-link[href="#projects"]', key: 'nav.projects' },
    { selector: '.nav-link[href="#contact"]', key: 'nav.contact' },
    
    // Hero секция
    { selector: '.hero-subtitle', key: 'hero.subtitle' },
    { selector: '.hero-text', key: 'hero.description' },
    { selector: '.hero-buttons .btn-primary', key: 'hero.contactBtn' },
    { selector: '.hero-buttons .btn-outline', key: 'hero.downloadBtn' },
    
    // About секция
    { selector: '#about .section-title', key: 'about.title' },
    { selector: '.about-text h3:first-of-type', key: 'about.whoAmI' },
    { selector: '.text-content p:nth-child(1)', key: 'about.bio1' },
    { selector: '.text-content p:nth-child(2)', key: 'about.bio2' },
    { selector: '.text-content p:nth-child(3)', key: 'about.bio3' },
    { selector: '.about-text h3:nth-of-type(2)', key: 'about.languages' },
    { selector: '.language-item:nth-child(1) .language-name', key: 'about.languageRussian', append: ':' },
    { selector: '.language-item:nth-child(2) .language-name', key: 'about.languageUkrainian', append: ':' },
    { selector: '.language-item:nth-child(3) .language-name', key: 'about.languageGerman', append: ':' },
    { selector: '.language-item:nth-child(4) .language-name', key: 'about.languageEnglish', append: ':' },
    { selector: '.language-item:nth-child(1) .language-level', key: 'about.native' },
    { selector: '.language-item:nth-child(2) .language-level', key: 'about.native' },
    { selector: '.about-details h3:first-of-type', key: 'about.skills' },
    { selector: '.about-details h3:nth-of-type(2)', key: 'about.education' },
    
    // Образование - добавляем переводы для каждого пункта
    { selector: '.education-item:nth-child(1) .education-info', key: 'about.edu2025' },
    { selector: '.education-item:nth-child(2) .education-info', key: 'about.edu2024' },
    { selector: '.education-item:nth-child(3) .education-info', key: 'about.edu2023_2024' },
    { selector: '.education-item:nth-child(4) .education-info', key: 'about.edu2020_2022' },
    { selector: '.education-item:nth-child(5) .education-info', key: 'about.edu2015_2020' },
    { selector: '.education-item:nth-child(6) .education-info', key: 'about.edu2010_2014' },
    
    // Projects секция
    { selector: '#projects .section-title', key: 'projects.title' },
    { selector: '#projects .section-description', key: 'projects.description' },
    { selector: '.project-card:nth-child(1) .project-title', key: 'projects.portfolioTitle' },
    { selector: '.project-card:nth-child(1) .project-description', key: 'projects.portfolioDesc' },
    { selector: '.project-card:nth-child(2) .project-title', key: 'projects.weatherTitle' },
    { selector: '.project-card:nth-child(2) .project-description', key: 'projects.weatherDesc' },
    { selector: '.project-card:nth-child(3) .project-title', key: 'projects.taskTitle' },
    { selector: '.project-card:nth-child(3) .project-description', key: 'projects.taskDesc' },
    { selector: '.view-more .btn-outline', key: 'projects.viewMore' },
    
    // Contact секция
    { selector: '#contact .section-title', key: 'contact.title' },
    { selector: '#contact .section-description', key: 'contact.description' },
    { selector: '.contact-info h3:first-of-type', key: 'contact.contactInfo' },
    { selector: '.contact-info h3:nth-of-type(2)', key: 'contact.socialMedia' },
    { selector: 'label[for="name"]', key: 'contact.formName' },
    { selector: 'label[for="email"]', key: 'contact.formEmail' },
    { selector: 'label[for="message"]', key: 'contact.formMessage' },
    { selector: '.submit-btn .btn-text', key: 'contact.formSubmit' },
    { selector: '.form-success p', key: 'contact.formSuccess' },
    { selector: '#sendAnotherBtn', key: 'contact.formAnother' },
    { selector: '#name', attr: 'placeholder', key: 'contact.namePlaceholder' },
    { selector: '#email', attr: 'placeholder', key: 'contact.emailPlaceholder' },
    { selector: '#message', attr: 'placeholder', key: 'contact.messagePlaceholder' },
    
    // Footer
    { selector: '.copyright', key: 'footer.rights', prepend: '&copy; <span id="year"></span> Kostiantyn Vundervald. ' }
];

// Функция для получения перевода по ключу
function getTranslation(key, lang) {
    const keys = key.split('.');
    let translation = window.translations[lang];
    
    for (const k of keys) {
        if (translation && translation[k]) {
            translation = translation[k];
        } else {
            return key; // Если ключ не найден, возвращаем сам ключ
        }
    }
    
    return translation;
}

// Функция для перевода всех элементов на странице
function translatePage(lang) {
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('language', lang);
    currentLanguage = lang;
    
    // Добавляем класс для анимации перевода
    document.body.classList.add('translating');
    
    // Обновляем все переводимые элементы
    translatableElements.forEach(element => {
        const els = document.querySelectorAll(element.selector);
        if (els.length > 0) {
            els.forEach(el => {
                const translation = getTranslation(element.key, lang);
                
                if (element.attr) {
                    // Перевод атрибута (например, placeholder)
                    el.setAttribute(element.attr, translation);
                } else {
                    // Перевод текста элемента
                    let text = translation;
                    if (element.prepend) {
                        text = element.prepend + text;
                    }
                    if (element.append) {
                        text = text + element.append;
                    }
                    el.innerHTML = text;
                }
            });
        }
    });
    
    // Удаляем класс анимации после завершения
    setTimeout(() => {
        document.body.classList.remove('translating');
    }, 500);
    
    // Обновляем текст ошибок в форме
    window.formErrorMessages = {
        nameError: getTranslation('contact.nameError', lang),
        emailError: getTranslation('contact.emailError', lang),
        emailInvalid: getTranslation('contact.emailInvalid', lang),
        messageError: getTranslation('contact.messageError', lang),
        sending: getTranslation('contact.sending', lang)
    };
    
    // Обновляем отображение переключателя языков
    document.querySelectorAll('.language-item').forEach(item => {
        const itemLang = item.getAttribute('data-lang');
        if (itemLang === lang) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Обновляем иконку текущего языка с эффектом
    const currentLangIcon = document.querySelector('.current-language');
    if (currentLangIcon) {
        // Эффект смены флага
        currentLangIcon.style.transform = 'scale(0.5)';
        currentLangIcon.style.opacity = '0';
        
        setTimeout(() => {
            currentLangIcon.textContent = getCurrentLanguageFlag();
            currentLangIcon.style.transform = 'scale(1)';
            currentLangIcon.style.opacity = '1';
        }, 150);
    }
    
    // Обновляем HTML аттрибут lang
    document.documentElement.lang = lang;
}

// Функция для создания переключателя языков
function createLanguageSwitcher() {
    const navbar = document.querySelector('.nav-menu');
    
    if (navbar) {
        // Создаем контейнер для переключателя языков
        const langContainer = document.createElement('li');
        langContainer.className = 'nav-item language-dropdown';
        
        // Создаем кнопку для открытия меню языков
        const langButton = document.createElement('button');
        langButton.className = 'language-switcher';
        langButton.innerHTML = `<span class="current-language">${getCurrentLanguageFlag()}</span>`;
        langButton.setAttribute('aria-label', 'Switch language');
        langButton.title = 'Изменить язык / Change language';
        
        // Функция для центрирования эмодзи флага
        const centerFlag = () => {
            const flagElement = langButton.querySelector('.current-language');
            if (flagElement) {
                // Сбрасываем предыдущие стили
                flagElement.style.transform = 'translateY(0)';
                
                // Проверяем текущий флаг и применяем индивидуальную корректировку при необходимости
                const flag = flagElement.textContent;
                
                // Особые корректировки для некоторых флагов, которые могут быть не идеально центрированы
                if (flag === '🇷🇺' || flag === '🇺🇦' || flag === '🇬🇧' || 
                    flag === '🇩🇪' || flag === '🇪🇸' || flag === '🇵🇹' || flag === '🇯🇵') {
                    // Мелкие корректировки положения по вертикали, если нужно
                    flagElement.style.transform = 'translateY(0)';
                }
            }
        };
        
        // Вызываем центрирование при создании
        centerFlag();
        
        // Создаем выпадающее меню языков
        const dropdownContent = document.createElement('div');
        dropdownContent.className = 'language-dropdown-content';
        
        // Добавляем языки в выпадающее меню
        languages.forEach(lang => {
            const langItem = document.createElement('button');
            langItem.className = 'language-item';
            langItem.setAttribute('data-lang', lang.code);
            langItem.innerHTML = `${lang.flag} <span>${lang.name}</span>`;
            
            // Добавляем эффект ховера
            langItem.addEventListener('mouseover', () => {
                langItem.style.transform = 'translateX(3px)';
            });
            
            langItem.addEventListener('mouseout', () => {
                langItem.style.transform = 'translateX(0)';
            });
            
            langItem.addEventListener('click', () => {
                if (lang.code !== currentLanguage) {
                    translatePage(lang.code);
                    
                    // Добавим небольшую анимацию при клике
                    langItem.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        langItem.style.transform = 'scale(1)';
                    }, 100);
                    
                    // Центрируем флаг после изменения
                    setTimeout(centerFlag, 150);
                }
                
                setTimeout(() => {
                    dropdownContent.classList.remove('show');
                }, 300);
            });
            
            if (lang.code === currentLanguage) {
                langItem.classList.add('active');
            }
            
            dropdownContent.appendChild(langItem);
        });
        
        // Переключаем видимость выпадающего меню по клику на кнопку
        langButton.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContent.classList.toggle('show');
            
            // Анимация кнопки при клике
            langButton.style.transform = 'scale(0.9)';
            setTimeout(() => {
                langButton.style.transform = '';
            }, 150);
        });
        
        // Закрываем выпадающее меню при клике вне его
        document.addEventListener('click', (e) => {
            if (!langButton.contains(e.target) && !dropdownContent.contains(e.target)) {
                dropdownContent.classList.remove('show');
            }
        });
        
        // Добавляем элементы в DOM
        langContainer.appendChild(langButton);
        langContainer.appendChild(dropdownContent);
        navbar.appendChild(langContainer);
        
        // Центрируем флаг при загрузке и при изменении размера экрана
        window.addEventListener('resize', centerFlag);
    }
}

// Функция для получения флага текущего языка
function getCurrentLanguageFlag() {
    const lang = languages.find(l => l.code === currentLanguage);
    return lang ? lang.flag : '🌐';
}

// Инициализация локализации при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем переключатель языков после загрузки DOM
    createLanguageSwitcher();
    
    // Переводим страницу на сохраненный или дефолтный язык
    translatePage(currentLanguage);
}); 