function showContent(topic) {
    let content = "";
    switch (topic) {
        case 'color':
            content = `
                <h1>CSS Color</h1>
                <p>Colors are displayed by combining RED, GREEN, and BLUE light.</p>
                <div class="content-box">
                        <div class="code-box">
"<!DOCTYPE html>
<html>
<style>
div {padding:10px;}
</style>
<body>

<h1>Colors can be set using color names</h1>

<div style="background-color:red">
  <h1 style="color:white">Heading</h1>
</div>

<div style="background-color:yellow">
  <h1 style="color:blue">Heading</h1>
</div>

<div style="background-color:blue">
  <h1 style="color:yellow">Heading</h1>
</div>

</body>
</html>?

                        </div>
                        <div class="code-box">
        &lt;div style=&quot;background-color:#ff0000;&quot;&gt;&lt;/div&gt;<br>
        &lt;div style=&quot;background-color:#00ff00;&quot;&gt;&lt;/div&gt;<br>
        &lt;div style=&quot;background-color:#0000ff;&quot;&gt;&lt;/div&gt;<br>
                        </div>
                <div>
            `;
            break;
        case 'background':
            content = `
                <h1>CSS Background</h1>
                <p>The background property is used to define the background color or image of an element.</p>
                <div class="code-box">
&lt;div style=&quot;background-color:lightblue;&quot;&gt;Light Blue&lt;/div&gt;<br>
&lt;div style=&quot;background-image:url('example.jpg');&quot;&gt;Background Image&lt;/div&gt;<br>
                </div>
            `;
            break;
        case 'margin':
            content = `
                <h1>CSS Margin</h1>
                <p>Margins are used to create space around elements, outside of any defined borders.</p>
                <div class="code-box">
&lt;div style=&quot;margin:10px;&quot;&gt;10px Margin&lt;/div&gt;<br>
&lt;div style=&quot;margin:20px;&quot;&gt;20px Margin&lt;/div&gt;<br>
                </div>
            `;
            break;
        case 'padding':
            content = `
                <h1>CSS Padding</h1>
                <p>Padding is used to create space inside of an element, between the content and the border.</p>
                <div class="code-box">
&lt;div style=&quot;padding:10px;&quot;&gt;10px Padding&lt;/div&gt;<br>
&lt;div style=&quot;padding:20px;&quot;&gt;20px Padding&lt;/div&gt;<br>
                </div>
            `;
            break;
            case 'height-width':
                content=`
                <h1>CSS Height/Widht</h1>
                <p>The CSS height and width properties are used to set the height and width of an element.</p>
                <h3>CSS height and width Values </h3>
                
                <p>The height and width properties may have the following values:</p>
                <div class="height">
                <p>   <li> <a href="">auto</a> - This is default. The browser calculates the height and width</li>  </p>
                <p>   <li> <a href="">length</a> - Defines the height/width in px, cm, etc. </li> </p>
                <p>   <li> <a href="">%</a> - Defines the height/width in percent of the containing block </li> </p>
                <p>   <li> <a href="">initial </a> - Sets the height/width to its default value </li> </p>
                <p>   <li> <a href="">inherit  </a> - The height/width will be inherited from its parent value </li></p>

                `;
                break;
        default:
            content = `<h1>Welcome to the CSS Tutorial</h1><p>Select a topic from the left to see details here.</p>`;
    }
    document.getElementById('main-content').innerHTML = content;
}
