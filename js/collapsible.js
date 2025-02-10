function makeCollapsible(element) {
    if (!element) return;
    
    const header = element.querySelector('.collapsible-header');
    const content = element.querySelector('.collapsible-content');
    
    if (!header || !content) return;
    
    header.addEventListener('click', () => {
        content.classList.toggle('collapsed');
        header.classList.toggle('active');
    });
}

window.makeCollapsible = makeCollapsible;
