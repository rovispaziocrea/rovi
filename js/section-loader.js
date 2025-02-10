window.sectionLoader = {
    async loadSection(sectionPath) {
        const response = await fetch(sectionPath);
        const html = await response.text();
        return html;
    }
};
