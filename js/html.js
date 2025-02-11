function showContent(pageId) {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}