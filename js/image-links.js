function initImageLinksAttributes(links = [], attributes = {}) {
    links.forEach(link => {
        Object.keys(attributes).forEach(attribute => {
            link.setAttribute(attribute, attributes[attribute]);
        });
    });
}

function initImageLinkTargetBlank(formats = []) {
    formats.forEach(format => {
        const links = document.querySelectorAll(`a[href$='.${format}']`);
        initImageLinksAttributes(links, { target: "_blank" });
    });
}
