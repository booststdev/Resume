/**
 * script.js (Perfect Sync Edition)
 * Feature: Custom File Upload Component Multilingual Translation Pipeline Fixed.
 */

// --- 1. STATE MANAGEMENT ---
const state = {
    personalInfo: {
        fullname: '',
        title: '',
        phone: '',
        email: '',
        location: '',
        linkedin: '',
        portfolio: '',
        website: '',
        summary: '',
        avatar: ''
    },
    workExperience: [],
    education: [],
    projects: [],
    skills: {
        techSkills: '',
        softSkills: ''
    },
    languagesCerts: {
        languages: '',
        certifications: ''
    },
    awardsVolunteer: {
        awards: '',
        volunteer: ''
    },
    additional: '',
    settings: {
        darkMode: false,
        language: 'en',
        template: 'modern'
    }
};

// Bilingual Matrix Map
const i18n = {
    en: {
        'app-main-title': 'Build Your Resume',
        'editor-panel-title': 'Resume Editor Panel',
        'preview-panel-title': 'A4 Live Print Preview',

        'legend-personal': 'Personal Information',
        'legend-experience': 'Work Experience',
        'legend-education': 'Education',
        'legend-projects': 'Projects & Portfolios',
        'legend-skills': 'Skills & Core Competencies',
        'legend-languages': 'Languages & Certifications',
        'legend-awards': 'Awards & Volunteer Work',
        'legend-additional': 'Additional Information',

        summary: 'Professional Summary',
        experience: 'Work Experience',
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        awards: 'Awards & Honors',
        volunteer: 'Volunteer Experience',
        additional: 'Additional Information',
        present: 'Present',
        
        lblPhonePrefix: 'Phone: ',
        lblEmailPrefix: 'Email: ',
        lblLocationPrefix: 'Location: ',
        lblLinkedinPrefix: 'LinkedIn: ',
        lblPortfolioPrefix: 'Portfolio: ',
        lblWebsitePrefix: 'Website: ',

        lblCompany: 'Company / Organization',
        lblRole: 'Job Title / Role',
        lblDuration: 'Duration / Period',
        lblDesc: 'Description / Key Achievements',
        lblSchool: 'Institution / School',
        lblDegree: 'Degree / Major',
        lblGraduation: 'Graduation Period',
        lblEduDetails: 'Additional Details (Optional)',
        lblProjName: 'Project Name',
        lblProjLink: 'Project Link / URL',
        lblProjDesc: 'Description / Tech Stack',
        
        phCompany: 'Google Inc.',
        phRole: 'Software Engineer',
        phDuration: '2023 - Present',
        phDesc: 'Developed scalable microservices using Node.js and AWS...',
        phSchool: 'Stanford University',
        phDegree: 'B.S. in Computer Science',
        phGraduation: '2019 - 2023',
        phEduDetails: 'GPA: 3.9/4.0, Specialized in Artificial Intelligence',
        phProjName: 'E-Commerce Engine',
        phProjLink: 'https://github.com/user/repo',
        phProjDesc: 'Built an open-source high-throughput transaction platform using React and Go.',

        'lbl-fullname': 'Full Name',
        'lbl-title': 'Target Professional Title',
        'lbl-phone': 'Phone Number',
        'lbl-email': 'Email Address',
        'lbl-location': 'Location (City, Country)',
        'lbl-linkedin': 'LinkedIn URL',
        'lbl-portfolio': 'Portfolio URL',
        'lbl-website': 'Personal Website',
        'lbl-avatar': 'Profile Avatar Photo',
        'lbl-summary': 'Professional Summary / Bio',
        'lbl-tech-skills': 'Technical Skills (Comma Separated)',
        'lbl-soft-skills': 'Core / Soft Skills (Comma Separated)',
        'lbl-languages': 'Languages Spoken',
        'lbl-certifications': 'Licenses & Certifications',
        'lbl-awards': 'Honors & Awards',
        'lbl-volunteer': 'Volunteer Experience',
        'lbl-additional': 'Interests & Miscellaneous Notes',

        // Custom File Upload Translation Elements
        'btn-choose-file': '✨ Choose File',
        'file-name-display-none': 'No file chosen',

        'btn-add-experience': '➕ Add Work Experience',
        'btn-add-education': '➕ Add Education',
        'btn-add-project': '➕ Add Project',
        'btn-export-json': '💾 Export JSON Backup',
        'btn-export-pdf': '📄 Download High-Quality PDF',
        'btn-print': '🖨️ Print Resume',
        
        previewTech: 'Technical:',
        previewSoft: 'Core/Soft:',
        previewLang: 'Languages:',
        previewCert: 'Certifications:',
        previewAwards: 'Honors & Awards:',
        previewVol: 'Volunteer Work:',
        previewInterests: 'Interests & More:',
        previewPlaceholderText: 'Fill out the editor panel to automatically render your A4 live print preview layout.'
    },
    kr: {
        'app-main-title': '이력서 빌더',
        'editor-panel-title': '이력서 작성 에디터',
        'preview-panel-title': 'A4 실시간 미리보기',

        'legend-personal': '인적 사항 및 연락처',
        'legend-experience': '경력 사항',
        'legend-education': '학력 사항',
        'legend-projects': '프로젝트 및 포트폴리오',
        'legend-skills': '보유 기술 및 핵심 역량',
        'legend-languages': '외국어 및 자격증',
        'legend-awards': '수상 실적 및 봉사 활동',
        'legend-additional': '기타 추가 정보',

        summary: '자기소개 및 요약',
        experience: '경력 사항',
        education: '학력 사항',
        skills: '보유 기술',
        projects: '프로젝트 수행 이력',
        awards: '수상 내역',
        volunteer: '봉사 활동',
        additional: '기타 추가 정보',
        present: '재직 중 / 진행 중',
        
        lblPhonePrefix: '전화번호: ',
        lblEmailPrefix: '이메일: ',
        lblLocationPrefix: '지역: ',
        lblLinkedinPrefix: '링크드인: ',
        lblPortfolioPrefix: '포트폴리오: ',
        lblWebsitePrefix: '웹사이트: ',

        lblCompany: '회사명 / 기관명',
        lblRole: '직책 / 담당 역할',
        lblDuration: '재직 기간 / 참여 기간',
        lblDesc: '주요 업무 내용 및 성과',
        lblSchool: '학교명 / 교육기관명',
        lblDegree: '학위 / 전공',
        lblGraduation: '졸업 시기 / 기간',
        lblEduDetails: '기타 추가 학업 내용 (선택)',
        lblProjName: '프로젝트명',
        lblProjLink: '프로젝트 링크 / URL',
        lblProjDesc: '상세 설명 및 사용 기술 스택',
        
        phCompany: '구글 코리아',
        phRole: '소프트웨어 엔지니어',
        phDuration: '2023 - 현재',
        phDesc: 'Node.js 및 AWS를 활용한 고가용성 마이크로서비스 아키텍처 설계 및 구축...',
        phSchool: '서울대학교',
        phDegree: '컴퓨터공학부 학사',
        phGraduation: '2019 - 2023',
        phEduDetails: '학점: 3.9/4.5, 인공지능 및 데이터베이스 심화 과정 이수',
        phProjName: '이커머스 중개 플랫폼 엔진',
        phProjLink: 'https://github.com/user/repo',
        phProjDesc: 'React와 Go 언어를 기반으로 초당 트랜잭션 처리량이 높은 가상 오픈소스 거래 시스템 빌드.',

        'lbl-fullname': '이름 / 성명',
        'lbl-title': '희망 직무 / 타이틀',
        'lbl-phone': '전화번호',
        'lbl-email': '이메일 주소',
        'lbl-location': '거주지 (시/구, 국가)',
        'lbl-linkedin': '링크드인 프로필 URL',
        'lbl-portfolio': '포트폴리오 주소',
        'lbl-website': '개인 웹사이트 / 블로그',
        'lbl-avatar': '프로필 사진 등록',
        'lbl-summary': '자기소개 요약문',
        'lbl-tech-skills': '기술 스택 (쉼표로 구분)',
        'lbl-soft-skills': '핵심 역량 및 협업 능력 (쉼표로 구분)',
        'lbl-languages': '외국어 능력',
        'lbl-certifications': '자격증 및 면허',
        'lbl-awards': '수상 실적 및 훈장',
        'lbl-volunteer': '봉사 활동 이력',
        'lbl-additional': '취미, 관심사 및 기타 특이사항',

        // Custom File Upload Translation Elements
        'btn-choose-file': '✨ 파일 선택',
        'file-name-display-none': '선택된 파일 없음',

        'btn-add-experience': '➕ 경력 사항 추가',
        'btn-add-education': '➕ 학력 사항 추가',
        'btn-add-project': '➕ 프로젝트 추가',
        'btn-export-json': '💾 JSON 데이터 내보내기',
        'btn-export-pdf': '📄 고품질 PDF 다운로드',
        'btn-print': '🖨️ 이력서 인쇄',
        
        previewTech: '기술 스택:',
        previewSoft: '핵심 역량:',
        previewLang: '보유 외국어:',
        previewCert: '자격증 목록:',
        previewAwards: '수상 내역:',
        previewVol: '봉사 활동:',
        previewInterests: '기타 관심사:',
        previewPlaceholderText: '좌측 에디터 패널을 작성하면 구조화된 A4 캔버스 규격의 실시간 인쇄용 프리뷰 레이아웃이 여기에 동적으로 렌더링됩니다.'
    }
};

function translate(key) {
    const currentLang = state.settings.language || 'en';
    if (i18n[currentLang] && i18n[currentLang][key]) {
        return i18n[currentLang][key];
    }
    return i18n['en'][key] || key;
}

// --- 2. APPLICATION ENTRY POINT ---
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    setupEventListeners();
    translateStaticUI();
    renderDynamicInputs();
    applySettings();
    updatePreview();
});

// --- 3. EVENT LIFECYCLES ---
function setupEventListeners() {
    const form = document.getElementById('resume-form');
    if (!form) return;

    form.addEventListener('input', (e) => {
        const { name, id, value } = e.target;
        
        if (e.target.closest('.dynamic-item')) {
            const dynamicItem = e.target.closest('.dynamic-item');
            const type = dynamicItem.dataset.type;
            const index = parseInt(dynamicItem.dataset.index, 10);
            
            if (type === 'experience') state.workExperience[index][name] = value;
            if (type === 'education') state.education[index][name] = value;
            if (type === 'project') state.projects[index][name] = value;
        } 
        else if (id && id.startsWith('input-')) {
            if (name === 'techSkills' || name === 'softSkills') {
                state.skills[name] = value;
            } else if (name === 'languages' || name === 'certifications') {
                state.languagesCerts[name] = value;
            } else if (name === 'awards' || name === 'volunteer') {
                state.awardsVolunteer[name] = value;
            } else if (name === 'additional') {
                state.additional = value;
            } else {
                state.personalInfo[name] = value;
            }
        }
        
        saveData();
        updatePreview();
    });

    // 보강된 커스텀 아바타 파일 처리 스트림
    const avatarInput = document.getElementById('input-avatar');
    const fileNameDisplay = document.getElementById('file-name-display');

    if (avatarInput) {
        avatarInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                if (fileNameDisplay) fileNameDisplay.textContent = file.name;

                const reader = new FileReader();
                reader.onload = (event) => {
                    state.personalInfo.avatar = event.target.result;
                    saveData();
                    updatePreview();
                };
                reader.readAsDataURL(file);
            } else {
                if (fileNameDisplay) fileNameDisplay.textContent = translate('file-name-display-none');
            }
        });
    }

    document.getElementById('theme-toggle')?.addEventListener('click', toggleDarkMode);
    document.getElementById('template-select')?.addEventListener('change', (e) => switchTemplate(e.target.value));
    document.getElementById('lang-switch')?.addEventListener('change', (e) => switchLanguage(e.target.value));
    document.getElementById('btn-print')?.addEventListener('click', () => window.print());

    document.getElementById('btn-export-json')?.addEventListener('click', exportJSON);
    document.getElementById('btn-import-json')?.addEventListener('change', importJSON);
    document.getElementById('btn-export-pdf')?.addEventListener('click', exportToPDF);

    document.getElementById('btn-add-experience')?.addEventListener('click', addWorkExperience);
    document.getElementById('btn-add-education')?.addEventListener('click', addEducation);
    document.getElementById('btn-add-project')?.addEventListener('click', addProject);
}

function translateStaticUI() {
    Object.keys(i18n.en).forEach(key => {
        const node = document.getElementById(key);
        if (node) {
            node.textContent = translate(key);
            return;
        }

        if (key.startsWith('lbl-')) {
            const targetId = key.replace('lbl-', 'input-');
            const labelNode = document.querySelector(`label[for="${targetId}"]`);
            if (labelNode) labelNode.textContent = translate(key);
            return;
        }
        
        if (key.startsWith('legend-')) {
            const targetSectionId = key.replace('legend-', 'section-');
            const legendNode = document.querySelector(`#${targetSectionId} legend`);
            if (legendNode) legendNode.textContent = translate(key);
            return;
        }
    });

    // 커스텀 파일 미선택 문구 실시간 번역 처리
    const avatarInput = document.getElementById('input-avatar');
    const fileNameDisplay = document.getElementById('file-name-display');
    if (fileNameDisplay && avatarInput && !avatarInput.files.length) {
        fileNameDisplay.textContent = translate('file-name-display-none');
    }
    
    const langSelector = document.getElementById('lang-switch');
    if (langSelector) langSelector.value = state.settings.language;
}

function switchLanguage(langCode) {
    state.settings.language = langCode;
    saveData();
    translateStaticUI();
    renderDynamicInputs();
    updatePreview();
}

// --- 4. DYNAMIC SECTION MANAGEMENT ---
function addWorkExperience() {
    state.workExperience.push({ company: '', role: '', duration: '', desc: '' });
    renderDynamicInputs();
    saveData();
    updatePreview();
}

function removeWorkExperience(index) {
    state.workExperience.splice(index, 1);
    renderDynamicInputs();
    saveData();
    updatePreview();
}

function addEducation() {
    state.education.push({ school: '', degree: '', duration: '', desc: '' });
    renderDynamicInputs();
    saveData();
    updatePreview();
}

function removeEducation(index) {
    state.education.splice(index, 1);
    renderDynamicInputs();
    saveData();
    updatePreview();
}

function addProject() {
    state.projects.push({ title: '', link: '', desc: '' });
    renderDynamicInputs();
    saveData();
    updatePreview();
}

function removeProject(index) {
    state.projects.splice(index, 1);
    renderDynamicInputs();
    saveData();
    updatePreview();
}

function renderDynamicInputs() {
    const renderSection = (containerId, items, type, fieldsConfig) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        
        items.forEach((item, index) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'dynamic-item';
            wrapper.dataset.type = type;
            wrapper.dataset.index = index;

            let fieldsHtml = `
                <button type="button" class="btn-remove-item" onclick="window.removeDynamicItemSelector('${type}', ${index})">✕</button>
                <div class="form-grid">
            `;
            
            fieldsConfig.forEach(field => {
                const isFullWidth = field.tag === 'textarea' ? 'full-width' : '';
                const fieldValue = item[field.name] || '';
                
                const fieldLabel = translate(field.labelKey);
                const fieldPlaceholder = translate(field.placeholderKey);
                
                fieldsHtml += `
                    <div class="form-group ${isFullWidth}">
                        <label>${fieldLabel}</label>
                        ${field.tag === 'textarea' 
                            ? `<textarea rows="2" name="${field.name}" placeholder="${fieldPlaceholder}">${fieldValue}</textarea>`
                            : `<input type="text" name="${field.name}" placeholder="${fieldPlaceholder}" value="${fieldValue}">`
                        }
                    </div>
                `;
            });
            fieldsHtml += `</div>`;
            wrapper.innerHTML = fieldsHtml;
            container.appendChild(wrapper);
        });
    };

    renderSection('experience-container', state.workExperience, 'experience', [
        { name: 'company', tag: 'input', labelKey: 'lblCompany', placeholderKey: 'phCompany' },
        { name: 'role', tag: 'input', labelKey: 'lblRole', placeholderKey: 'phRole' },
        { name: 'duration', tag: 'input', labelKey: 'lblDuration', placeholderKey: 'phDuration' },
        { name: 'desc', tag: 'textarea', labelKey: 'lblDesc', placeholderKey: 'phDesc' }
    ]);

    renderSection('education-container', state.education, 'education', [
        { name: 'school', tag: 'input', labelKey: 'lblSchool', placeholderKey: 'phSchool' },
        { name: 'degree', tag: 'input', labelKey: 'lblDegree', placeholderKey: 'phDegree' },
        { name: 'duration', tag: 'input', labelKey: 'lblGraduation', placeholderKey: 'phGraduation' },
        { name: 'desc', tag: 'textarea', labelKey: 'lblEduDetails', placeholderKey: 'phEduDetails' }
    ]);

    renderSection('projects-container', state.projects, 'project', [
        { name: 'title', tag: 'input', labelKey: 'lblProjName', placeholderKey: 'phProjName' },
        { name: 'link', tag: 'input', labelKey: 'lblProjLink', placeholderKey: 'phProjLink' },
        { name: 'desc', tag: 'textarea', labelKey: 'lblProjDesc', placeholderKey: 'phProjDesc' }
    ]);
}

window.removeDynamicItemSelector = (type, index) => {
    if (type === 'experience') removeWorkExperience(index);
    if (type === 'education') removeEducation(index);
    if (type === 'project') removeProject(index);
};

// --- 5. LIVE PREVIEW RENDER STREAM ---
function updatePreview() {
    const outputContainer = document.getElementById('output-resume-content');
    if (!outputContainer) return;
    
    const info = state.personalInfo;

    const hasData = info.fullname || info.title || info.email || info.phone || info.summary || 
                    state.workExperience.length || state.education.length || state.projects.length ||
                    state.skills.techSkills || state.skills.softSkills || state.additional;

    if (!hasData) {
        outputContainer.innerHTML = `
            <div class="preview-placeholder">
                <p>${translate('previewPlaceholderText')}</p>
            </div>`;
        return;
    }

    const formatSkills = (skillStr) => skillStr ? skillStr.split(',').map(s => `<span>${s.trim()}</span>`).join('') : '';

    let contactItems = [];
    if (info.phone) contactItems.push(`<span>${translate('lblPhonePrefix')}${info.phone}</span>`);
    if (info.email) contactItems.push(`<span>${translate('lblEmailPrefix')}${info.email}</span>`);
    if (info.location) contactItems.push(`<span>${translate('lblLocationPrefix')}${info.location}</span>`);
    if (info.linkedin) contactItems.push(`<span>${translate('lblLinkedinPrefix')}${info.linkedin}</span>`);
    if (info.portfolio) contactItems.push(`<span>${translate('lblPortfolioPrefix')}${info.portfolio}</span>`);
    if (info.website) contactItems.push(`<span>${translate('lblWebsitePrefix')}${info.website}</span>`);

    const headerHtml = `
        <header class="resume-header">
            ${info.avatar ? `<img src="${info.avatar}" class="preview-avatar" alt="${info.fullname}">` : ''}
            <div>
                <h1>${info.fullname || ''}</h1>
                <h2>${info.title || ''}</h2>
                ${contactItems.length > 0 ? `<div class="contact-strip">${contactItems.join('')}</div>` : ''}
            </div>
        </header>`;

    const summaryHtml = info.summary ? `
        <section class="preview-section">
            <h2 class="section-title">${translate('summary')}</h2>
            <p class="item-desc" style="white-space: pre-line;">${info.summary}</p>
        </section>` : '';

    let expHtml = '';
    if (state.workExperience.length > 0) {
        let items = '';
        state.workExperience.forEach(item => {
            if (!item.company && !item.role && !item.duration && !item.desc) return;
            items += `
                <article class="experience-item">
                    <div class="item-meta"><h3><strong>${item.role || ''}</strong></h3><span>${item.duration || ''}</span></div>
                    ${item.company ? `<div class="item-sub"><span>${item.company}</span></div>` : ''}
                    ${item.desc ? `<p class="item-desc" style="white-space: pre-line;">${item.desc}</p>` : ''}
                </article>`;
        });
        if (items) expHtml = `<section class="preview-section"><h2 class="section-title">${translate('experience')}</h2>${items}</section>`;
    }

    let eduHtml = '';
    if (state.education.length > 0) {
        let items = '';
        state.education.forEach(item => {
            if (!item.school && !item.degree && !item.duration && !item.desc) return;
            items += `
                <article class="education-item">
                    <div class="item-meta"><h3><strong>${item.degree || ''}</strong></h3><span>${item.duration || ''}</span></div>
                    ${item.school ? `<div class="item-sub"><span>${item.school}</span></div>` : ''}
                    ${item.desc ? `<p class="item-desc" style="white-space: pre-line;">${item.desc}</p>` : ''}
                </article>`;
        });
        if (items) eduHtml = `<section class="preview-section"><h2 class="section-title">${translate('education')}</h2>${items}</section>`;
    }

    let skillsHtml = '';
    if (state.skills.techSkills || state.skills.softSkills) {
        let blocks = '';
        if (state.skills.techSkills) {
            blocks += `<div class="skills-block"><strong>${translate('previewTech')}</strong> <div class="skills-chips" style="display:inline-flex; gap:5px; flex-wrap:wrap; margin-left:5px;">${formatSkills(state.skills.techSkills)}</div></div>`;
        }
        if (state.skills.softSkills) {
            blocks += `<div class="skills-block"><strong>${translate('previewSoft')}</strong> <div class="skills-chips" style="display:inline-flex; gap:5px; flex-wrap:wrap; margin-left:5px;">${formatSkills(state.skills.softSkills)}</div></div>`;
        }
        if (blocks) skillsHtml = `<section class="preview-section"><h2 class="section-title">${translate('skills')}</h2><div class="skills-grid">${blocks}</div></section>`;
    }

    let projHtml = '';
    if (state.projects.length > 0) {
        let items = '';
        state.projects.forEach(item => {
            if (!item.title && !item.link && !item.desc) return;
            items += `
                <article class="project-item" style="margin-bottom: 10px;">
                    <div class="item-meta">
                        <h3><strong>${item.title || ''}</strong></h3>
                        ${item.link ? `<small style="font-weight:normal; color:var(--primary); margin-left:8px;">${item.link}</small>` : ''}
                    </div>
                    ${item.desc ? `<p class="item-desc" style="white-space: pre-line; margin-top:2px; font-size:9.5pt;">${item.desc}</p>` : ''}
                </article>`;
        });
        if (items) projHtml = `<section class="preview-section"><h2 class="section-title">${translate('projects')}</h2>${items}</section>`;
    }

    let additionalHtml = '';
    let metaBlocksHtml = '';
    if (state.languagesCerts.languages) metaBlocksHtml += `<p><strong>${translate('previewLang')}</strong> ${state.languagesCerts.languages}</p>`;
    if (state.languagesCerts.certifications) metaBlocksHtml += `<p><strong>${translate('previewCert')}</strong> ${state.languagesCerts.certifications}</p>`;
    if (state.awardsVolunteer.awards) metaBlocksHtml += `<p><strong>${translate('previewAwards')}</strong> ${state.awardsVolunteer.awards}</p>`;
    if (state.awardsVolunteer.volunteer) metaBlocksHtml += `<p><strong>${translate('previewVol')}</strong> ${state.awardsVolunteer.volunteer}</p>`;
    if (state.additional) metaBlocksHtml += `<p><strong>${translate('previewInterests')}</strong> ${state.additional}</p>`;

    if (metaBlocksHtml) {
        additionalHtml = `<section class="preview-section"><h2 class="section-title">${translate('additional')}</h2><div class="item-desc" style="font-size:9.5pt; line-height:1.5;">${metaBlocksHtml}</div></section>`;
    }

    if (state.settings.template === 'creative-minimal') {
        outputContainer.innerHTML = `
            <aside class="sidebar">
                ${info.avatar ? `<img src="${info.avatar}" class="preview-avatar" style="float:none; display:block; margin:0 0 15px 0; width:80px; height:80px;" alt="${info.fullname}">` : ''}
                <h1>${info.fullname || ''}</h1>
                <h2>${info.title || ''}</h2>
                ${contactItems.length > 0 ? `<div class="contact-info" style="font-size:8.5pt; display:flex; flex-direction:column; gap:6px; margin-bottom:20px; color:#cbd5e1;">${contactItems.join('')}</div>` : ''}
                ${skillsHtml ? `<div class="sidebar-skills" style="margin-top:20px;">${skillsHtml}</div>` : ''}
                ${additionalHtml ? `<div class="sidebar-addition" style="margin-top:20px;">${additionalHtml}</div>` : ''}
            </aside>
            <div class="main-content">
                ${summaryHtml}
                ${expHtml}
                ${projHtml}
                ${eduHtml}
            </div>
        `;
    } else {
        outputContainer.innerHTML = headerHtml + summaryHtml + expHtml + projHtml + eduHtml + skillsHtml + additionalHtml;
    }
}

// --- 6. LOCALSTORAGE CONTROL ---
function saveData() {
    localStorage.setItem('production_cv_builder_state', JSON.stringify(state));
}

function loadData() {
    const cachedJsonString = localStorage.getItem('production_cv_builder_state');
    if (cachedJsonString) {
        try {
            const reconstructedState = JSON.parse(cachedJsonString);
            Object.assign(state, reconstructedState);
            
            const bindValue = (id, val) => { const el = document.getElementById(id); if (el && val) el.value = val; };
            
            bindValue('input-fullname', state.personalInfo.fullname);
            bindValue('input-title', state.personalInfo.title);
            bindValue('input-phone', state.personalInfo.phone);
            bindValue('input-email', state.personalInfo.email);
            bindValue('input-location', state.personalInfo.location);
            bindValue('input-linkedin', state.personalInfo.linkedin);
            bindValue('input-portfolio', state.personalInfo.portfolio);
            bindValue('input-website', state.personalInfo.website);
            bindValue('input-summary', state.personalInfo.summary);
            
            bindValue('input-tech-skills', state.skills.techSkills);
            bindValue('input-soft-skills', state.skills.softSkills);
            bindValue('input-languages', state.languagesCerts.languages);
            bindValue('input-certifications', state.languagesCerts.certifications);
            bindValue('input-awards', state.awardsVolunteer.awards);
            bindValue('input-volunteer', state.awardsVolunteer.volunteer);
            bindValue('input-additional', state.additional);

            // 파일 이름 복구 노드 가드 처리
            const fileNameDisplay = document.getElementById('file-name-display');
            if (fileNameDisplay) {
                fileNameDisplay.textContent = state.personalInfo.avatar ? "✔ image_loaded.png" : translate('file-name-display-none');
            }

            if(document.getElementById('template-select')) document.getElementById('template-select').value = state.settings.template;
            if(document.getElementById('lang-switch')) document.getElementById('lang-switch').value = state.settings.language;

        } catch (error) {
            console.error("State hydration failure corrected:", error);
        }
    }
}

// --- 7. UTILITIES & CONFIGURATIONS ---
function toggleDarkMode() {
    state.settings.darkMode = !state.settings.darkMode;
    applySettings();
    saveData();
}

function applySettings() {
    document.documentElement.setAttribute('data-theme', state.settings.darkMode ? 'dark' : 'light');
    
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-pressed', state.settings.darkMode);
        themeToggleBtn.innerHTML = state.settings.darkMode ? '<span class="mode-icon" aria-hidden="true">☀️</span> Light Mode' : '<span class="mode-icon" aria-hidden="true">🌙</span> Dark Mode';
    }
    
    const targetPreviewFrame = document.getElementById('resume-preview');
    if (targetPreviewFrame) {
        targetPreviewFrame.className = `a4-page template-${state.settings.template}`;
    }
}

function switchTemplate(templateId) {
    state.settings.template = templateId;
    applySettings();
    saveData();
    updatePreview();
}

// --- 8. EXPORT PIPELINES (JSON / PDF) ---
function exportJSON() {
    const stringifiedData = JSON.stringify(state, null, 2);
    const dataBlob = new Blob([stringifiedData], { type: 'application/json' });
    const allocationUrl = URL.createObjectURL(dataBlob);
    
    const operationalAnchorNode = document.createElement('a');
    operationalAnchorNode.href = allocationUrl;
    operationalAnchorNode.download = `resume-${state.personalInfo.fullname || 'data'}.json`;
    
    document.body.appendChild(operationalAnchorNode);
    operationalAnchorNode.click();
    
    document.body.removeChild(operationalAnchorNode);
    URL.revokeObjectURL(allocationUrl);
}

function importJSON(event) {
    const fileReference = event.target.files[0];
    if (!fileReference) return;

    const streamReader = new FileReader();
    streamReader.onload = (e) => {
        try {
            const parsedStructure = JSON.parse(e.target.result);
            Object.assign(state, parsedStructure);
            saveData();
            
            translateStaticUI();
            renderDynamicInputs();
            applySettings();
            updatePreview();
            loadData();
        } catch (err) {
            alert("Malformed JSON backup structure rejected.");
        }
    };
    streamReader.readAsText(fileReference);
}

function exportToPDF() {
    const capturedTargetNode = document.getElementById('resume-preview');
    if (!capturedTargetNode) return;
    
    const configurationOptions = {
        margin: 0,
        filename: `resume-${state.personalInfo.fullname || 'download'}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    if (typeof html2pdf !== 'undefined') {
        html2pdf().set(configurationOptions).from(capturedTargetNode).save();
    } else {
        window.print();
    }
}