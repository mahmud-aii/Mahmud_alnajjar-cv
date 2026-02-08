const translations = {
    ar: {
        nav_about: "عني",
        nav_exp: "الخبرات",
        nav_skills: "المهارات",
        nav_contact: "التواصل",
        hero_greeting: "مرحباً، أنا",
        name: "محمود النجار",
        role: "متخصص المبيعات والتسويق",
        hero_bio: "متخصص في التخطيط الاستراتيجي للمبيعات وإدارة CRM ونمو العلامات التجارية عبر تركيا والسعودية.",
        btn_contact: "تواصل معي",
        btn_email: "أرسل لي بريد",
        education_title: "التعليم",
        skills_tech: "المهارات التقنية والشخصية",
        skills_lang: "اللغات",
        location: "إسطنبول، تركيا"
    },
    en: {
        nav_about: "About",
        nav_exp: "Experience",
        nav_skills: "Skills",
        nav_contact: "Contact",
        hero_greeting: "Hello, I am",
        name: "Mahmud Alnajjar",
        role: "Sales & Marketing Specialist",
        hero_bio: "Specialized in strategic sales planning, CRM management, and brand growth across Turkey and Saudi Arabia.",
        btn_contact: "Contact Me",
        btn_email: "Email Me",
        education_title: "Education",
        skills_tech: "Technical & Soft Skills",
        skills_lang: "Languages",
        location: "Istanbul, Turkey"
    },
    tr: {
        nav_about: "Hakkımda",
        nav_exp: "Deneyim",
        nav_skills: "Beceriler",
        nav_contact: "İletişim",
        hero_greeting: "Merhaba, ben",
        name: "Mahmud Alnajjar",
        role: "Satış ve Pazarlama Uzmanı",
        hero_bio: "Türkiye ve Suudi Arabistan'da stratejik satış planlama, CRM yönetimi ve marka büyümesinde uzmanlaşmıştır.",
        btn_contact: "Benimle İletişime Geçin",
        btn_email: "Bana E-posta Gönderin",
        education_title: "Eğitim",
        skills_tech: "Teknik ve Yumuşak Beceriler",
        skills_lang: "Diller",
        location: "İstanbul, Türkiye"
    }
};

const experienceData = {
    ar: [
        {
            title: "مدير فرع باشاك شهير",
            company: "مركز لغات للترجمة (Lügat)",
            date: "2022 - حتى الآن",
            description: ["إدارة الفرع بشكل كامل والإشراف على سير العمليات اليومية.", "وضع استراتيجيات التسويق وقياس حجم النمو بشكل دوري.", "التفاوض مع الشركات والأفراد وتوقيع العقود وإغلاق الصفقات الكبرى.", "التنسيق المباشر مع المترجمين لضمان إتمام المشاريع وتسليمها في الموعد المحدد."]
        },
        {
            title: "مدير قسم المبيعات والتسويق - منسق عام",
            company: "شركة 24ofis",
            date: "2021 - 2022",
            description: ["وضع خطة انطلاق الشركة وتحديد الخدمات والجمهور المستهدف بدقة.", "الإشراف على بناء الهوية البصرية وإدارة الوجود الإعلامي والافتراضي للشركة.", "متابعة تنفيذ الخدمات مع العملاء والتأكد من جودة الخدمة المقدمة."]
        },
        {
            title: "مدير مبيعات (السعودية وتركيا)",
            company: "شركة IVORY (قسم التقنية)",
            date: "2018 - 2020",
            description: ["التنسيق مع فريق التسويق لوضع الرؤية والأهداف وآلية التنفيذ.", "إدارة فريق المبيعات ومتابعة الأداء عبر نظام CRM وتوزيع البيانات.", "شرح الخدمات والباقات المتوفرة للعملاء وإغلاق الصفقات وتوقيع العقود."]
        }
    ],
    en: [
        {
            title: "Branch Manager",
            company: "Lügat Translation Center (Başakşehir)",
            date: "2022 - Present",
            description: ["Managed all branch operations and daily workflows.", "Developed marketing strategies and measured growth metrics.", "Negotiated with companies/individuals and closed major deals.", "Coordinated with translators to ensure timely project delivery."]
        },
        {
            title: "Sales & Marketing Manager",
            company: "24ofis",
            date: "2021 - 2022",
            description: ["Developed the company launch plan and identified target audiences.", "Oversaw brand identity creation and online media presence.", "Monitored service execution and ensured Quality Assurance (QA)."]
        },
        {
            title: "Sales Manager (Saudi & Turkey)",
            company: "IVORY (Tech Dept)",
            date: "2018 - 2020",
            description: ["Collaborated with marketing to set vision, goals, and execution mechanisms.", "Managed sales team performance via CRM and data distribution.", "Explained services/packages to clients and signed contracts."]
        }
    ],
    tr: [
        {
            title: "Şube Müdürü",
            company: "Lügat Tercüme Merkezi (Başakşehir)",
            date: "2022 - Günümüz",
            description: ["Şube operasyonlarını tamamen yönetmek ve günlük iş akışını denetlemek.", "Pazarlama stratejileri geliştirmek ve büyüme metriklerini ölçmek.", "Şirketler/bireylerle müzakere etmek ve büyük anlaşmaları kapatmak.", "Çevirmen koordinasyonu yaparak zamanında proje teslimini sağlamak."]
        },
        {
            title: "Satış ve Pazarlama Müdürü",
            company: "24ofis",
            date: "2021 - 2022",
            description: ["Şirket lansmanı planı geliştirmek ve hedef kitleleri belirlemek.", "Marka kimliği oluşturulmasını ve çevrimiçi medya varlığını denetlemek.", "Hizmet uygulamasını izlemek ve Kalite Güvencesi (QA) sağlamak."]
        },
        {
            title: "Satış Müdürü (Suudi Arabistan ve Türkiye)",
            company: "IVORY (Teknoloji Bölümü)",
            date: "2018 - 2020",
            description: ["Pazarlama ile işbirliği yaparak vizyon, hedefler ve yürütme mekanizmalarını belirlemek.", "CRM aracılığıyla satış ekibi performansını yönetmek ve veri dağıtımı yapmak.", "Müşterilere hizmetleri/paketleri açıklamak ve sözleşme imzalamak."]
        }
    ]
};

const educationData = {
    ar: [
        { year: "2023", degree: "إدارة المبيعات والتسويق", school: "جامعة AREL" },
        { year: "2023", degree: "دورة متخصصة في المبيعات", school: "İstanbul Şişli Meslek Yüksekokulu" },
        { year: "2021 - 2023", degree: "التسويق الإلكتروني", school: "CORE ISTANBUL" },
        { year: "2020 - 2021", degree: "دبلوم في التسويق", school: "Irtikaa Academy" }
    ],
    en: [
        { year: "2023", degree: "Sales & Marketing Management", school: "Arel University" },
        { year: "2023", degree: "Salesmanship Mastery Training", school: "İstanbul Şişli Meslek Yüksekokulu" },
        { year: "2021 - 2023", degree: "E-Marketing", school: "CORE ISTANBUL" },
        { year: "2020 - 2021", degree: "Diploma in Marketing", school: "Irtikaa Academy" }
    ],
    tr: [
        { year: "2023", degree: "Satış ve Pazarlama Yönetimi", school: "Arel Üniversitesi" },
        { year: "2023", degree: "Satış Ustalığı Eğitimi", school: "İstanbul Şişli Meslek Yüksekokulu" },
        { year: "2021 - 2023", degree: "E-Pazarlama", school: "CORE ISTANBUL" },
        { year: "2020 - 2021", degree: "Pazarlama Diploması", school: "Irtikaa Academy" }
    ]
};

const skillsData = {
    ar: {
        tech: ["Microsoft Office (متقدم)", "إدارة CRM", "Adobe Applications", "التخطيط الاستراتيجي", "فن الإقناع", "القيادة وإدارة الفرق", "التسويق الرقمي"],
        languages: ["العربية (اللغة الأم)", "التركية (C1)", "الإنجليزية (B2)"]
    },
    en: {
        tech: ["Microsoft Office (Advanced)", "CRM Management", "Adobe Applications", "Strategic Planning", "Persuasion Skills", "Leadership & Team Management", "Digital Marketing"],
        languages: ["Arabic (Native)", "Turkish (C1)", "English (B2)"]
    },
    tr: {
        tech: ["Microsoft Office (İleri)", "CRM Yönetimi", "Adobe Uygulamaları", "Stratejik Planlama", "İkna Becerisi", "Liderlik ve Ekip Yönetimi", "Dijital Pazarlama"],
        languages: ["Arapça (Ana Dil)", "Türkçe (C1)", "İngilizce (B2)"]
    }
};

let currentLanguage = localStorage.getItem('preferredLang') || 'ar';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
    updateActiveButton();
}

function updateContent() {
    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });

    // Update experience
    const experienceList = document.getElementById('experience-list');
    if (experienceList) {
        experienceList.innerHTML = experienceData[currentLanguage].map(job => `
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-date">${job.date}</div>
                <div class="timeline-content">
                    <h3 class="job-title">${job.title}</h3>
                    <p class="company-name">${job.company}</p>
                    <ul class="job-desc">
                        ${job.description.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    // Update education
    const educationList = document.getElementById('education-list');
    if (educationList) {
        educationList.innerHTML = educationData[currentLanguage].map(edu => `
            <div class="edu-card">
                <div class="edu-year">${edu.year}</div>
                <h3 class="edu-degree">${edu.degree}</h3>
                <p class="edu-school">${edu.school}</p>
            </div>
        `).join('');
    }

    // Update skills
    const skillsList = document.getElementById('skills-list');
    if (skillsList) {
        skillsList.innerHTML = skillsData[currentLanguage].tech.map(skill => `<span class="tag">${skill}</span>`).join('');
    }

    const languagesList = document.getElementById('languages-list');
    if (languagesList) {
        languagesList.innerHTML = skillsData[currentLanguage].languages.map(lang => `<span class="tag">${lang}</span>`).join('');
    }
}

function updateActiveButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[onclick="setLanguage('${currentLanguage}')"]`).classList.add('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});

// Also initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setLanguage(currentLanguage);
    });
} else {
    setLanguage(currentLanguage);
}
