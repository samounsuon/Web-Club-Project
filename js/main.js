
function showContent(pageId) {
    // Hide all content sections
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });

    // Show the selected page
    document.getElementById(pageId).classList.add('active');
}
