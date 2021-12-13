import * as d3 from "https://cdn.skypack.dev/d3@7";
window.d3 = d3;

function hideWhenFinished() {
    document.querySelector("#dimmer").style.display = "none";
}

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

function updateArt() {
    let [w, h] = setArtSize();
    let rects = [...document.querySelectorAll("header .rects")].flatMap(e => [...e.getClientRects()]);
    rects.forEach(r => {
        r.x += document.documentElement.scrollLeft;
        r.y += document.documentElement.scrollTop;
    });

    let canvas = d3.select("svg#canvas");
    canvas.selectAll("rect")
        .data(rects)
        .join("rect")
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .attr("width", d => d.width)
        .attr("height", d => d.height)
        .attr("fill", "none")
        .attr("stroke", "transparent")
        .attr("stroke-width", 1);
}

updateArt();
window.addEventListener("resize", updateArt);

document.querySelector("header input[type=search]").addEventListener("focus", () => {
    document.querySelector("#dimmer").removeEventListener("transitionend", hideWhenFinished);
    document.querySelector("#dimmer").style.display = "block";
    setTimeout(() => document.querySelector("#dimmer").className = "active", 0);
});

document.querySelector("header input[type=search]").addEventListener("blur", () => {
    document.querySelector("#dimmer").addEventListener("transitionend", hideWhenFinished);    
    document.querySelector("#dimmer").className = "";
});


(function() {
    let s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/minisearch@3.2.0/dist/umd/index.min.js";
    document.head.appendChild(s);
})();


document.onkeydown = function(e) {
    if (e.key == "`" && e.ctrlKey) {
        alert("Bring up command prompt!");
    }
};