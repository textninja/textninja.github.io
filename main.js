import * as d3 from "https://cdn.skypack.dev/d3@7";

function hideWhenFinished() {
    document.querySelector("#dimmer").style.display = "none";
}

document.querySelector("header input[type=search]").addEventListener("focus", () => {
    document.querySelector("#dimmer").removeEventListener("transitionend", hideWhenFinished);
    document.querySelector("#dimmer").style.display = "block";
    setTimeout(() => document.querySelector("#dimmer").className = "active", 0);
});

document.querySelector("header input[type=search]").addEventListener("blur", () => {
    document.querySelector("#dimmer").addEventListener("transitionend", hideWhenFinished);    
    document.querySelector("#dimmer").className = "";
});

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