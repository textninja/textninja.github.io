import * as d3 from "https://cdn.skypack.dev/d3@7";

function setArtSize() {
    const headerSvg = document.querySelector("header svg");
    const svgContainer = headerSvg.parentNode;

    const w = svgContainer.offsetWidth;
    const h = svgContainer.offsetHeight;

    headerSvg.setAttribute("viewBox", [0, 0, w, h]);
    headerSvg.setAttribute("width", w);
    headerSvg.setAttribute("height", h);

    return [w, h];
}

setArtSize();
window.addEventListener("resize", setArtSize);