// Объект с переводами для всех разделов сайта
const translations = {
    // Английский (English)
    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            subtitle: "Frontend Developer",
            description: "Creating clean, elegant, and functional web applications using modern technologies.",
            contactBtn: "Contact Me",
            downloadBtn: "Download Resume"
        },
        about: {
            title: "About Me",
            whoAmI: "Who I Am",
            bio1: "Hello! I'm Kostiantyn Vundervald, a frontend developer and student based in Bochum, Germany. I have a passion for clean code and user-friendly interfaces, blending technical knowledge with creative problem-solving.",
            bio2: "With a strong foundation in programming languages like Java and Python, along with frontend technologies, I'm constantly expanding my skills to build better web applications.",
            bio3: "Currently, I'm pursuing my education in Germany while working on personal projects to apply my knowledge and learn new technologies.",
            languages: "Languages",
            languageRussian: "Russian",
            languageUkrainian: "Ukrainian",
            languageGerman: "German",
            languageEnglish: "English",
            native: "Native",
            skills: "Skills",
            education: "Education",
            edu2025: "Successful Abitur",
            edu2024: "Pre-study course at Studienkolleg in Bochum",
            edu2023_2024: "Preliminary course at Studienkolleg in Bochum",
            edu2020_2022: "10-11th grade, general complete secondary education, «Dnipropetrovsk Regional Boarding Lyceum for Physics and Mathematics», Dnipro, Ukraine",
            edu2015_2020: "5-9th grade, basic general education, «Dnipropetrovsk Boarding Lyceum for Physics and Mathematics» & «Secondary School No. 10», Marganets, Ukraine",
            edu2010_2014: "1-4th grade elementary school, Secondary School No. 10, Marganets, Ukraine"
        },
        projects: {
            title: "My Projects",
            description: "Here are some of my recent projects. Each one represents a unique challenge and learning experience.",
            portfolioTitle: "Personal Portfolio",
            portfolioDesc: "A modern, responsive portfolio website built with pure HTML, CSS and JavaScript.",
            weatherTitle: "Weather Application",
            weatherDesc: "A weather application that fetches data from an API and displays current weather and forecasts.",
            taskTitle: "Task Manager",
            taskDesc: "A simple task management application with CRUD operations and local storage.",
            viewMore: "More on GitHub"
        },
        contact: {
            title: "Get In Touch",
            description: "Have a question or want to work together? Feel free to contact me through the form below or using my contact information.",
            contactInfo: "Contact Information",
            socialMedia: "Social Media",
            formName: "Name",
            formEmail: "Email",
            formMessage: "Message",
            formSubmit: "Send Message",
            formSuccess: "Message sent! Thank you for reaching out.",
            formAnother: "Send Another",
            namePlaceholder: "Your name",
            emailPlaceholder: "Your email",
            messagePlaceholder: "Your message",
            nameError: "Please enter your name",
            emailError: "Please enter your email",
            emailInvalid: "Please enter a valid email",
            messageError: "Please enter a message",
            sending: "Sending..."
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    
    // Русский (Russian)
    ru: {
        nav: {
            home: "Главная",
            about: "Обо мне",
            projects: "Проекты",
            contact: "Контакты"
        },
        hero: {
            subtitle: "Frontend Developer",
            description: "Создаю чистые, элегантные и функциональные веб-приложения с использованием современных технологий.",
            contactBtn: "Связаться со мной",
            downloadBtn: "Скачать резюме"
        },
        about: {
            title: "Обо мне",
            whoAmI: "Кто я",
            bio1: "Привет! Я Костянтин Вундервальд, frontend-разработчик и студент из Бохума, Германия. Я увлекаюсь чистым кодом и удобными интерфейсами, сочетая технические знания с творческим подходом к решению проблем.",
            bio2: "С прочной основой в таких языках программирования, как Java и Python, а также с опытом работы с frontend-технологиями, я постоянно расширяю свои навыки для создания лучших веб-приложений.",
            bio3: "В настоящее время я получаю образование в Германии, параллельно работая над личными проектами для применения полученных знаний и изучения новых технологий.",
            languages: "Языки",
            languageRussian: "Русский",
            languageUkrainian: "Украинский",
            languageGerman: "Немецкий",
            languageEnglish: "Английский",
            native: "Родной",
            skills: "Навыки",
            education: "Образование",
            edu2025: "Успешное получение аттестата зрелости (Abitur)",
            edu2024: "Предварительный подготовительный курс в Штудиенколлеге в Бохуме",
            edu2023_2024: "Начальный подготовительный курс в Штудиенколлеге в Бохуме",
            edu2020_2022: "10-11 классы, полное общее среднее образование, «Днепропетровской областной интернат-лицей физико-математического профиля», Днепр, Украина",
            edu2015_2020: "5-9 классы, базовое среднее образование, «Днепропетровской интернат-лицей физико-математического профиля» и «Общеобразовательная средняя школа №10», Марганец, Украина",
            edu2010_2014: "1-4 классы начальной школы, Общеобразовательная средняя школа №10, Марганец, Украина"
        },
        projects: {
            title: "Мои проекты",
            description: "Вот некоторые из моих недавних проектов. Каждый из них представляет собой уникальную задачу и опыт обучения.",
            portfolioTitle: "Персональное портфолио",
            portfolioDesc: "Современный, адаптивный сайт-портфолио, созданный с использованием чистого HTML, CSS и JavaScript.",
            weatherTitle: "Погодное приложение",
            weatherDesc: "Приложение для прогноза погоды, которое получает данные из API и отображает текущую погоду и прогнозы.",
            taskTitle: "Менеджер задач",
            taskDesc: "Простое приложение для управления задачами с операциями CRUD и локальным хранилищем.",
            viewMore: "Больше на GitHub"
        },
        contact: {
            title: "Связаться со мной",
            description: "Есть вопрос или хотите работать вместе? Не стесняйтесь связываться со мной через форму ниже или используя мои контактные данные.",
            contactInfo: "Контактная информация",
            socialMedia: "Социальные сети",
            formName: "Имя",
            formEmail: "Email",
            formMessage: "Сообщение",
            formSubmit: "Отправить сообщение",
            formSuccess: "Сообщение отправлено! Спасибо за обращение.",
            formAnother: "Отправить еще",
            namePlaceholder: "Ваше имя",
            emailPlaceholder: "Ваш email",
            messagePlaceholder: "Ваше сообщение",
            nameError: "Пожалуйста, введите ваше имя",
            emailError: "Пожалуйста, введите ваш email",
            emailInvalid: "Пожалуйста, введите корректный email",
            messageError: "Пожалуйста, введите сообщение",
            sending: "Отправка..."
        },
        footer: {
            rights: "Все права защищены."
        }
    },
    
    // Украинский (Ukrainian)
    uk: {
        nav: {
            home: "Головна",
            about: "Про мене",
            projects: "Проекти",
            contact: "Контакти"
        },
        hero: {
            subtitle: "Frontend Розробник",
            description: "Створюю чисті, елегантні та функціональні веб-додатки з використанням сучасних технологій.",
            contactBtn: "Зв'язатися зі мною",
            downloadBtn: "Завантажити резюме"
        },
        about: {
            title: "Про мене",
            whoAmI: "Хто я",
            bio1: "Привіт! Я Костянтин Вундервальд, frontend-розробник та студент із Бохума, Німеччина. Я захоплююсь чистим кодом та зручними інтерфейсами, поєднуючи технічні знання з творчим підходом до вирішення проблем.",
            bio2: "З міцною основою в таких мовах програмування, як Java та Python, а також з досвідом роботи з frontend-технологіями, я постійно розширюю свої навички для створення кращих веб-додатків.",
            bio3: "Зараз я отримую освіту в Німеччині, паралельно працюючи над особистими проектами для застосування отриманих знань та вивчення нових технологій.",
            languages: "Мови",
            languageRussian: "Російська",
            languageUkrainian: "Українська",
            languageGerman: "Німецька",
            languageEnglish: "Англійська",
            native: "Рідна",
            skills: "Навички",
            education: "Освіта",
            edu2025: "Успішне отримання атестату зрілості (Abitur)",
            edu2024: "Підготовчий курс у Штудієнколезі в Бохумі",
            edu2023_2024: "Початковий підготовчий курс у Штудієнколезі в Бохумі",
            edu2020_2022: "10-11 класи, повна загальна середня освіта, «Дніпропетровський обласний інтернат-ліцей фізико-математичного профілю», Дніпро, Україна",
            edu2015_2020: "5-9 класи, базова середня освіта, «Дніпропетровський інтернат-ліцей фізико-математичного профілю» та «Загальноосвітня середня школа №10», Марганець, Україна",
            edu2010_2014: "1-4 класи початкової школи, Загальноосвітня середня школа №10, Марганець, Україна"
        },
        projects: {
            title: "Мої проекти",
            description: "Ось деякі з моїх недавніх проектів. Кожен з них представляє собою унікальне завдання та досвід навчання.",
            portfolioTitle: "Персональне портфоліо",
            portfolioDesc: "Сучасний, адаптивний сайт-портфоліо, створений з використанням чистого HTML, CSS та JavaScript.",
            weatherTitle: "Погодний додаток",
            weatherDesc: "Додаток для прогнозу погоди, який отримує дані з API та відображає поточну погоду і прогнози.",
            taskTitle: "Менеджер завдань",
            taskDesc: "Простий додаток для управління завданнями з операціями CRUD та локальним сховищем.",
            viewMore: "Більше на GitHub"
        },
        contact: {
            title: "Зв'язатися зі мною",
            description: "Є питання або хочете працювати разом? Не соромтеся зв'язуватися зі мною через форму нижче або використовуючи мої контактні дані.",
            contactInfo: "Контактна інформація",
            socialMedia: "Соціальні мережі",
            formName: "Ім'я",
            formEmail: "Email",
            formMessage: "Повідомлення",
            formSubmit: "Надіслати повідомлення",
            formSuccess: "Повідомлення надіслано! Дякую за звернення.",
            formAnother: "Надіслати ще",
            namePlaceholder: "Ваше ім'я",
            emailPlaceholder: "Ваш email",
            messagePlaceholder: "Ваше повідомлення",
            nameError: "Будь ласка, введіть ваше ім'я",
            emailError: "Будь ласка, введіть ваш email",
            emailInvalid: "Будь ласка, введіть коректний email",
            messageError: "Будь ласка, введіть повідомлення",
            sending: "Надсилання..."
        },
        footer: {
            rights: "Усі права захищені."
        }
    },
    
    // Немецкий (German)
    de: {
        nav: {
            home: "Startseite",
            about: "Über mich",
            projects: "Projekte",
            contact: "Kontakt"
        },
        hero: {
            subtitle: "Frontend-Entwickler",
            description: "Ich erstelle saubere, elegante und funktionale Webanwendungen mit modernen Technologien.",
            contactBtn: "Kontaktiere mich",
            downloadBtn: "Lebenslauf herunterladen"
        },
        about: {
            title: "Über mich",
            whoAmI: "Wer ich bin",
            bio1: "Hallo! Ich bin Kostiantyn Vundervald, ein Frontend-Entwickler und Student aus Bochum, Deutschland. Ich habe eine Leidenschaft für sauberen Code und benutzerfreundliche Schnittstellen und verbinde technisches Wissen mit kreativem Problemlösen.",
            bio2: "Mit einer soliden Grundlage in Programmiersprachen wie Java und Python sowie Erfahrung mit Frontend-Technologien erweitere ich ständig meine Fähigkeiten, um bessere Webanwendungen zu entwickeln.",
            bio3: "Derzeit studiere ich in Deutschland und arbeite an persönlichen Projekten, um mein Wissen anzuwenden und neue Technologien zu erlernen.",
            languages: "Sprachen",
            languageRussian: "Russisch",
            languageUkrainian: "Ukrainisch",
            languageGerman: "Deutsch",
            languageEnglish: "Englisch",
            native: "Muttersprache",
            skills: "Fähigkeiten",
            education: "Bildung",
            edu2025: "Erfolgreiches Abitur",
            edu2024: "Vorstudienkurs Studienkolleg in Bochum",
            edu2023_2024: "Vorkurs Studienkolleg in Bochum",
            edu2020_2022: "10-11. Klasse, allgemeine vollständige Mittelschulbildung, «Dnipropetrowsker Gebietsinternat Lyzeum für physikalisches und mathematisches Profil», Dnipro, Ukraine",
            edu2015_2020: "5-9. Klasse, mittlere Grundallgemeinbildung, «Dnipropetrowsker Internat Lyzeum für physikalisches und mathematisches Profil» & «Allgemeinbildende Sekundarschule Nr. 10», Marganez, Ukraine",
            edu2010_2014: "1-4. Klasse Grundschule, Allgemeinbildende Sekundarschule Nr. 10, Marganez, Ukraine"
        },
        projects: {
            title: "Meine Projekte",
            description: "Hier sind einige meiner neuesten Projekte. Jedes stellt eine einzigartige Herausforderung und Lernerfahrung dar.",
            portfolioTitle: "Persönliches Portfolio",
            portfolioDesc: "Eine moderne, responsive Portfolio-Website, erstellt mit reinem HTML, CSS und JavaScript.",
            weatherTitle: "Wetter-Anwendung",
            weatherDesc: "Eine Wetter-Anwendung, die Daten von einer API abruft und aktuelles Wetter und Prognosen anzeigt.",
            taskTitle: "Aufgabenmanager",
            taskDesc: "Eine einfache Aufgabenverwaltungs-Anwendung mit CRUD-Operationen und lokalem Speicher.",
            viewMore: "Mehr auf GitHub"
        },
        contact: {
            title: "Kontakt aufnehmen",
            description: "Hast du eine Frage oder möchtest du zusammenarbeiten? Kontaktiere mich gerne über das untenstehende Formular oder meine Kontaktdaten.",
            contactInfo: "Kontaktinformationen",
            socialMedia: "Soziale Medien",
            formName: "Name",
            formEmail: "E-Mail",
            formMessage: "Nachricht",
            formSubmit: "Nachricht senden",
            formSuccess: "Nachricht gesendet! Vielen Dank für deine Anfrage.",
            formAnother: "Weitere senden",
            namePlaceholder: "Dein Name",
            emailPlaceholder: "Deine E-Mail",
            messagePlaceholder: "Deine Nachricht",
            nameError: "Bitte gib deinen Namen ein",
            emailError: "Bitte gib deine E-Mail-Adresse ein",
            emailInvalid: "Bitte gib eine gültige E-Mail-Adresse ein",
            messageError: "Bitte gib eine Nachricht ein",
            sending: "Senden..."
        },
        footer: {
            rights: "Alle Rechte vorbehalten."
        }
    },
    
    // Испанский (Spanish)
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            projects: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            subtitle: "Desarrollador Frontend",
            description: "Creo aplicaciones web limpias, elegantes y funcionales utilizando tecnologías modernas.",
            contactBtn: "Contáctame",
            downloadBtn: "Descargar CV"
        },
        about: {
            title: "Sobre mí",
            whoAmI: "Quién soy",
            bio1: "¡Hola! Soy Kostiantyn Vundervald, desarrollador frontend y estudiante en Bochum, Alemania. Me apasiona el código limpio y las interfaces amigables, combinando conocimientos técnicos con resolución creativa de problemas.",
            bio2: "Con una sólida base en lenguajes de programación como Java y Python, junto con tecnologías frontend, estoy constantemente ampliando mis habilidades para crear mejores aplicaciones web.",
            bio3: "Actualmente estoy estudiando en Alemania mientras trabajo en proyectos personales para aplicar mis conocimientos y aprender nuevas tecnologías.",
            languages: "Idiomas",
            languageRussian: "Ruso",
            languageUkrainian: "Ucraniano",
            languageGerman: "Alemán",
            languageEnglish: "Inglés",
            native: "Nativo",
            skills: "Habilidades",
            education: "Educación",
            edu2025: "Bachillerato (Abitur) exitoso",
            edu2024: "Curso preparatorio en Studienkolleg en Bochum",
            edu2023_2024: "Curso preliminar en Studienkolleg en Bochum",
            edu2020_2022: "Grados 10-11, educación secundaria general completa, «Liceo Internado Regional de Dnipropetrovsk con perfil físico-matemático», Dnipro, Ucrania",
            edu2015_2020: "Grados 5-9, educación general básica, «Liceo Internado de Dnipropetrovsk con perfil físico-matemático» y «Escuela Secundaria General No. 10», Marganets, Ucrania",
            edu2010_2014: "Grados 1-4 escuela primaria, Escuela Secundaria General No. 10, Marganets, Ucrania"
        },
        projects: {
            title: "Mis proyectos",
            description: "Aquí hay algunos de mis proyectos recientes. Cada uno representa un desafío único y una experiencia de aprendizaje.",
            portfolioTitle: "Portafolio personal",
            portfolioDesc: "Un sitio web de portafolio moderno y responsive, creado con HTML, CSS y JavaScript puros.",
            weatherTitle: "Aplicación del clima",
            weatherDesc: "Una aplicación meteorológica que obtiene datos de una API y muestra el clima actual y pronósticos.",
            taskTitle: "Administrador de tareas",
            taskDesc: "Una aplicación simple de gestión de tareas con operaciones CRUD y almacenamiento local.",
            viewMore: "Más en GitHub"
        },
        contact: {
            title: "Ponte en contacto",
            description: "¿Tienes una pregunta o quieres trabajar juntos? No dudes en contactarme a través del formulario a continuación o usando mi información de contacto.",
            contactInfo: "Información de contacto",
            socialMedia: "Redes sociales",
            formName: "Nombre",
            formEmail: "Correo electrónico",
            formMessage: "Mensaje",
            formSubmit: "Enviar mensaje",
            formSuccess: "¡Mensaje enviado! Gracias por contactarme.",
            formAnother: "Enviar otro",
            namePlaceholder: "Tu nombre",
            emailPlaceholder: "Tu correo electrónico",
            messagePlaceholder: "Tu mensaje",
            nameError: "Por favor, introduce tu nombre",
            emailError: "Por favor, introduce tu correo electrónico",
            emailInvalid: "Por favor, introduce un correo electrónico válido",
            messageError: "Por favor, introduce un mensaje",
            sending: "Enviando..."
        },
        footer: {
            rights: "Todos los derechos reservados."
        }
    },
    
    // Португальский (Portuguese)
    pt: {
        nav: {
            home: "Início",
            about: "Sobre",
            projects: "Projetos",
            contact: "Contato"
        },
        hero: {
            subtitle: "Desenvolvedor Frontend",
            description: "Criando aplicações web limpas, elegantes e funcionais usando tecnologias modernas.",
            contactBtn: "Contate-me",
            downloadBtn: "Baixar Currículo"
        },
        about: {
            title: "Sobre Mim",
            whoAmI: "Quem eu sou",
            bio1: "Olá! Sou Kostiantyn Vundervald, desenvolvedor frontend e estudante baseado em Bochum, Alemanha. Tenho paixão por código limpo e interfaces amigáveis, combinando conhecimento técnico com resolução criativa de problemas.",
            bio2: "Com uma base sólida em linguagens de programação como Java e Python, junto com tecnologias frontend, estou constantemente expandindo minhas habilidades para construir melhores aplicações web.",
            bio3: "Atualmente, estou cursando minha educação na Alemanha enquanto trabalho em projetos pessoais para aplicar meu conhecimento e aprender novas tecnologias.",
            languages: "Idiomas",
            languageRussian: "Russo",
            languageUkrainian: "Ucraniano",
            languageGerman: "Alemão",
            languageEnglish: "Inglês",
            native: "Nativo",
            skills: "Habilidades",
            education: "Educação",
            edu2025: "Ensino Médio (Abitur) bem-sucedido",
            edu2024: "Curso preparatório no Studienkolleg em Bochum",
            edu2023_2024: "Curso preliminar no Studienkolleg em Bochum",
            edu2020_2022: "10-11ª série, educação secundária geral completa, «Liceu Internato Regional de Dnipropetrovsk com perfil físico-matemático», Dnipro, Ucrânia",
            edu2015_2020: "5-9ª série, educação geral básica, «Liceu Internato de Dnipropetrovsk com perfil físico-matemático» e «Escola Secundária Geral Nº 10», Marganets, Ucrânia",
            edu2010_2014: "1-4ª série escola primária, Escola Secundária Geral Nº 10, Marganets, Ucrânia"
        },
        projects: {
            title: "Meus Projetos",
            description: "Aqui estão alguns dos meus projetos recentes. Cada um representa um desafio único e uma experiência de aprendizado.",
            portfolioTitle: "Portfólio Pessoal",
            portfolioDesc: "Um site de portfólio moderno e responsivo, construído com HTML, CSS e JavaScript puros.",
            weatherTitle: "Aplicativo de Clima",
            weatherDesc: "Um aplicativo de previsão do tempo que busca dados de uma API e exibe o clima atual e previsões.",
            taskTitle: "Gerenciador de Tarefas",
            taskDesc: "Um aplicativo simples de gerenciamento de tarefas com operações CRUD e armazenamento local.",
            viewMore: "Mais no GitHub"
        },
        contact: {
            title: "Entre em Contato",
            description: "Tem uma pergunta ou quer trabalhar junto? Sinta-se à vontade para me contatar através do formulário abaixo ou usando minhas informações de contato.",
            contactInfo: "Informações de Contato",
            socialMedia: "Redes Sociais",
            formName: "Nome",
            formEmail: "Email",
            formMessage: "Mensagem",
            formSubmit: "Enviar Mensagem",
            formSuccess: "Mensagem enviada! Obrigado por entrar em contato.",
            formAnother: "Enviar Outra",
            namePlaceholder: "Seu nome",
            emailPlaceholder: "Seu email",
            messagePlaceholder: "Sua mensagem",
            nameError: "Por favor, digite seu nome",
            emailError: "Por favor, digite seu email",
            emailInvalid: "Por favor, digite um email válido",
            messageError: "Por favor, digite uma mensagem",
            sending: "Enviando..."
        },
        footer: {
            rights: "Todos os direitos reservados."
        }
    },
    
    // Японский (Japanese)
    ja: {
        nav: {
            home: "ホーム",
            about: "自己紹介",
            projects: "プロジェクト",
            contact: "連絡先"
        },
        hero: {
            subtitle: "フロントエンド開発者",
            description: "最新技術を使用して、クリーンでエレガント、機能的なウェブアプリケーションを作成しています。",
            contactBtn: "お問い合わせ",
            downloadBtn: "履歴書をダウンロード"
        },
        about: {
            title: "自己紹介",
            whoAmI: "私について",
            bio1: "こんにちは！私はコスチャンチン・ヴンダーヴァルドです。ドイツのボーフムを拠点とするフロントエンド開発者および学生です。技術的な知識と創造的な問題解決を組み合わせ、クリーンなコードとユーザーフレンドリーなインターフェースに情熱を持っています。",
            bio2: "JavaやPythonのようなプログラミング言語と、フロントエンド技術の基盤をしっかりと持ち、より良いウェブアプリケーションを構築するためにスキルを常に拡張しています。",
            bio3: "現在、ドイツで教育を受けながら、個人プロジェクトに取り組み、知識を適用し新しい技術を学んでいます。",
            languages: "言語",
            languageRussian: "ロシア語",
            languageUkrainian: "ウクライナ語",
            languageGerman: "ドイツ語",
            languageEnglish: "英語",
            native: "ネイティブ",
            skills: "スキル",
            education: "学歴",
            edu2025: "アビトゥーア（大学入学資格）取得予定",
            edu2024: "ボーフムのシュトゥディエンコレークでの予備コース",
            edu2023_2024: "ボーフムのシュトゥディエンコレークでの入門コース",
            edu2020_2022: "10-11年生、一般的な完全中等教育、「ドニプロペトロウシク地域物理数学プロファイル寄宿学校リセウム」、ウクライナ、ドニプロ",
            edu2015_2020: "5-9年生、基礎一般教育、「ドニプロペトロウシク物理数学プロファイル寄宿学校リセウム」および「一般中等学校No.10」、ウクライナ、マルガネツ",
            edu2010_2014: "1-4年生小学校、一般中等学校No.10、ウクライナ、マルガネツ"
        },
        projects: {
            title: "プロジェクト",
            description: "最近のプロジェクトをいくつか紹介します。それぞれがユニークな挑戦と学習経験を表しています。",
            portfolioTitle: "個人ポートフォリオ",
            portfolioDesc: "純粋なHTML、CSS、JavaScriptで構築された、モダンでレスポンシブなポートフォリオウェブサイト。",
            weatherTitle: "天気アプリ",
            weatherDesc: "APIからデータを取得し、現在の天気と予報を表示する天気アプリケーション。",
            taskTitle: "タスク管理ツール",
            taskDesc: "CRUDオペレーションとローカルストレージを備えたシンプルなタスク管理アプリケーション。",
            viewMore: "GitHubでもっと見る"
        },
        contact: {
            title: "お問い合わせ",
            description: "質問がありますか、または一緒に仕事をしたいですか？下記のフォームまたは連絡先情報を使用してお気軽にお問い合わせください。",
            contactInfo: "連絡先情報",
            socialMedia: "ソーシャルメディア",
            formName: "お名前",
            formEmail: "メールアドレス",
            formMessage: "メッセージ",
            formSubmit: "メッセージを送信",
            formSuccess: "メッセージが送信されました！お問い合わせありがとうございます。",
            formAnother: "別のメッセージを送信",
            namePlaceholder: "あなたの名前",
            emailPlaceholder: "あなたのメールアドレス",
            messagePlaceholder: "あなたのメッセージ",
            nameError: "お名前を入力してください",
            emailError: "メールアドレスを入力してください",
            emailInvalid: "有効なメールアドレスを入力してください",
            messageError: "メッセージを入力してください",
            sending: "送信中..."
        },
        footer: {
            rights: "全著作権所有。"
        }
    }
};

// Экспорт переводов
window.translations = translations; 