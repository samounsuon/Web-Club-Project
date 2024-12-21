const contentMap = {
    color: 
        "<h1>CSS Color</h1>" +
        "<p>Colors are displayed by combining RED, GREEN, and BLUE light.</p>" +
        "<div class='content-box'>" +
            "<div class='code-box'>" +
                "&lt;!DOCTYPE html&gt;<br>" +
                "&lt;html&gt;<br>" +
                "&lt;body&gt;<br>" +
                "&lt;div style='background-color:red'&gt;Red Background&lt;/div&gt;<br>" +
                "&lt;div style='background-color:blue'&gt;Blue Background&lt;/div&gt;<br>" +
                "&lt;div style='background-color:yellow'&gt;Yellow Background&lt;/div&gt;<br>" +
                "&lt;/body&gt;<br>" +
                "&lt;/html&gt;" +
            "</div>" +
            "<div class='code-box'>" +
                "&lt;div style='background-color:#ff0000;'&gt;&lt;/div&gt;<br>" +
                "&lt;div style='background-color:#00ff00;'&gt;&lt;/div&gt;<br>" +
                "&lt;div style='background-color:#0000ff;'&gt;&lt;/div&gt;" +
            "</div>" +
        "</div>",

    background: 
        "<h1>CSS Background</h1>" +
        "<p>Set the background color or image of an element.</p>" +
        "<div class='code-box'>" +
            "&lt;div style='background-color:lightblue;'&gt;Light Blue&lt;/div&gt;<br>" +
            "&lt;div style='background-image:url(\"example.jpg\");'&gt;Background Image&lt;/div&gt;" +
        "</div>",

    margin: 
        "<h1>CSS Margin</h1>" +
        "<p>Create space outside an element's border.</p>" +
        "<div class='code-box'>" +
            "&lt;div style='margin:10px;'&gt;10px Margin&lt;/div&gt;<br>" +
            "&lt;div style='margin:20px;'&gt;20px Margin&lt;/div&gt;" +
        "</div>",

    padding: 
        "<h1>CSS Padding</h1>" +
        "<p>Create space inside an element's border.</p>" +
        "<div class='code-box'>" +
            "&lt;div style='padding:10px;'&gt;10px Padding&lt;/div&gt;<br>" +
            "&lt;div style='padding:20px;'&gt;20px Padding&lt;/div&gt;" +
        "</div>",

    "height-width": 
        "<h1>CSS Height and Width</h1>" +
        "<p>Set the size of an element.</p>" +
        "<ul>" +
            "<li>auto: Browser calculates height/width</li>" +
            "<li>length: Set values in px, cm, etc.</li>" +
            "<li>%: Set relative to parent</li>" +
            "<li>initial: Default value</li>" +
            "<li>inherit: Inherits from parent</li>" +
        "</ul>"
};

function showContent(topic) {
    var content = contentMap[topic] || 
        "<h1>Welcome to the CSS Tutorial</h1>" +
        "<p>Select a topic to see details here.</p>";
    document.getElementById('main-content').innerHTML = content;
}
