/*
    1 2 3 4 5 6 7 8 9 a b c d e f
    f e d c b a 9 8 7 6 5 4 3 2 1
*/

const cssText = `
    .main-container {
        background-color: #fff;
        color: #000;
    }
    
    .main-container a, 
    .main-container a:active, 
    .main-container a:hover, 
    .main-container a:focus {
        color: #002b87;
    }
`;

function createStyleTag(cssText) {
    const style = document.createElement("style");
    style.setAttribute("type", "text/css");

    const cssTextNode = document.createTextNode(cssText);
    style.appendChild(cssTextNode);

    return style;
}

function initLightTheme() {
    document.head.appendChild(createStyleTag(cssText));
}
