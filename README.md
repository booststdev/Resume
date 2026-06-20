# 🚀 Ultimate Multilingual ATS Resume Builder

[Read this in Korean](./README.ko.md)

**A web-based, all-in-one resume builder optimized for Applicant Tracking Systems (ATS).**
Create, manage, and export professional resumes directly in your browser without the need for complex document editing software.

## 🛠 Technical Highlights

* **State-Driven UI Rendering**: Real-time synchronization between user input and the `state` object, dynamically re-rendering the preview as you type.
* **Bilingual Matrix (i18n)**: Seamless UI switching between English and Korean for labels, headers, and placeholders.
* **Local Storage Persistence**: Automatic data backup using the `LocalStorage` API to ensure your progress is never lost.
* **Precision Print Engine (@media print)**: 
    * Optimized for A4 printing by stripping browser metadata.
    * Template-specific margins and font sizes to ensure a perfect 1-page layout.
    * `-webkit-print-color-adjust: exact` ensures high-quality theme rendering even in print.
* **Flexible Template System**: Built with modern CSS Grid/Flexbox to switch between 4 professional layouts instantly.

## ✨ Key Features

* **Live Preview**: See your resume take shape in real-time on a virtual A4 canvas.
* **Data Management**: Export/Import via JSON files and a 'Clear Data' feature for privacy.
* **Dynamic Sections**: Easily add or remove Work Experience, Education, and Projects.
* **Avatar Handling**: Base64 image encoding for seamless photo integration.

## 📋 Getting Started

1. **Input**: Enter your details in the left editor panel. Changes are auto-saved to your browser.
2. **Customize**: Use the top navigation to select themes, languages, or templates.
3. **Backup**: Use the 'Export JSON' button to download a backup file of your progress.
4. **Export**: Click 'Download PDF' or 'Print' to generate your final resume. (We recommend 'No Margins' in your print settings for best results.)

---
*Tip: To maximize your ATS pass rate, we recommend using the **'ATS Friendly (Classic)'** template, which uses a text-heavy, simple layout optimized for parsing software.*