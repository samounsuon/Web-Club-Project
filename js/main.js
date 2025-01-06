{/* <script> */}
function showContent(pageId) {
    // Hide all content
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });

    // Show the selected content
    document.getElementById(pageId).classList.add('active');
}

function searchContent() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const contentElements = document.querySelectorAll('.content');
    const searchHistory = document.getElementById('searchHistory');

    // Filter content based on search
    contentElements.forEach(content => {
        const text = content.innerText.toLowerCase();
        if (text.includes(searchInput)) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    // Save search term in localStorage
    if (searchInput.trim() !== '') {
        let searches = JSON.parse(localStorage.getItem('searchHistory')) || [];
        if (!searches.includes(searchInput)) {
            searches.push(searchInput);
            localStorage.setItem('searchHistory', JSON.stringify(searches));
            updateSearchHistory();
        }
    }
}

function updateSearchHistory() {
    const searches = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const searchHistory = document.getElementById('searchHistory');

    // Clear old search history list
    searchHistory.innerHTML = '';

    // Add search terms to list
    searches.forEach(search => {
        const li = document.createElement('li');
        li.textContent = search;
        li.onclick = () => {
            document.getElementById('searchInput').value = search;
            searchContent();
        };
        searchHistory.appendChild(li);
    });
}

// Load search history on page load
document.addEventListener('DOMContentLoaded', updateSearchHistory);
{/* </script> */}