import * as d3 from "https://cdn.skypack.dev/d3@7";
import './slice.js';

window.d3 = d3;
// import { viz } from './viz/20211214.js';
function viz() {}

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
    let headerPos = document.querySelector("header").getBoundingClientRect();
    let rects = [...document.querySelectorAll("header .rects")].flatMap(e => [...e.getClientRects()]);
    rects.forEach(r => {
        r.x -= headerPos.x;
        r.y -= headerPos.y;
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


    viz(canvas, w, h, rects);
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

function startMeditating() {

}

function stopMeditating() {

}

let footer = d3.select('footer');
var stars = Array(5000).fill(0).map(p => [Math.random()*window.innerWidth|0, Math.random()*window.innerHeight|0, `hsla(${Math.random()*360|0}deg 60% 95% / ${Math.random()*20|0}%)`]);

let sky = footer.append("svg")
    .classed(["sky"], true)
    .attr("width", "100%")
    .attr("height", "100%")
    .style("position", "absolute")
    .style("top", "0")
    .style("left", "0")
    .style("right", "0")
    .style("bottom", "0");

sky.selectAll("circle")
    .data(stars)
    .join("circle")
    .attr("cx", d => d[0])
    .attr("cy", d => d[1])
    .attr("r", 1)
    .attr("fill", d => d[2])        

document.addEventListener("scroll", function() {
    let de = document.documentElement;
    let footer = document.querySelector("footer");
    if (!footer) return;

    if (de.scrollHeight-de.scrollTop === window.innerHeight) {
        footer.style.transition = "";
        sky.style("transition", "");
        footer.classList.add("nightsky");
        startMeditating();
    } else if (footer.classList.contains("nightsky")) {
        footer.style.transition = "all 1s";
        sky.style("transition", "opacity 0.5s");
        footer.classList.remove("nightsky");
        stopMeditating();
    }
});


/**
 * Identify last modified
 */

let lastUpdatedMsAgo = new Date().getTime() - new Date(document.lastModified);
console.log(lastUpdatedMsAgo);

let scale = "seconds";
let scales = [[60000, "minutes"], [60, "hours"], [48, "days"], [7, "weeks"], [4, "months"], [12, "years"]];

let lastUpdated = lastUpdatedMsAgo;
let s;
while (s=scales.shift()) {
    lastUpdated /= s[0];
    if (lastUpdated >= 1) {
        scale = s[1];
    } else {
        break;
    }
}


/**
 * Add svgs to hexagons
 */


let hexagons = d3.selectAll(".hexagon");
let widths = d3.map(hexagons, h => h.offsetWidth);

let hexTop = hexagons.selectAll("div.hexagon-top")
    .data([0])
    .join(
        enter => {
            enter.append(
                () => {
                    let d = d3.create("div");
                    return d.node();
                }
            ).call(hexProps)
        },
        update => update.call(hexProps)
    );

let hexBottom = hexagons.selectAll("div.hexagon-bottom")
    .data([0])
    .join(
        enter => {
            enter.append(
                () => {
                    let d = d3.create("div");
                    return d.node();
                }
            ).call(hexProps, true)
        },
        update => update.call(hexProps, true)
    );    


function hexProps(el, bottom=false) {
    el.classed([bottom ? "hexagon-bottom" : "hexagon-top"], true)
        .style("position", "absolute")
        .style("box-sizing", "border-box")
        .style("left", "0")
        .style(bottom ? "top" : "bottom", "100%")
        .style("width", "100%")
        .style("padding-bottom", 50/Math.tan(60/180*Math.PI) + "%");

    el.selectAll("svg")
        .data([0])
        .join("svg")
        .style("position", "absolute")
        .style("left", "0")
        .style("right", "0")
        .style("top", "0")
        .style("bottom", "0")
        .style("width", "100%")
        .style("height", "100%")
        .attr("viewBox", "0 0 100 100")
        .attr("preserveAspectRatio", "none")
        .selectAll("path")
            .data([0])
            .join("path")
            .attr("d", bottom ? "M0 0 L50 100 L100 0 z" : "M0 100 L50 0 L100 100 z");
}

document.querySelector("body").classList.add("show-hexagons");



/* Hexagon scroll transitions */

let translationInterpolators = d3.map(hexagons, h => d3.interpolateTransformCss(getComputedStyle(h).transform, "translate(0, 0)"));

document.addEventListener("scroll", () => {

    let currentScroll = document.documentElement.scrollTop;
    let scrollPercent = Math.min(currentScroll / (document.querySelector("header").offsetHeight-100), 1);

    hexagons.data(translationInterpolators)
        .style("transform", d => d(scrollPercent))
    
});






// d3.each(hexagons, f => console.log(f))



document.addEventListener("scroll", function plax() {

    // let headerStuff = document.querySelectorAll("header h1, header p, header svg");
    // headerStuff.forEach(thing => {
    //     thing.style.transform = "translate(0, " + document.documentElement.scrollTop * 0.15 + "px)";
    // });

    // let headerSvg = document.querySelector("header svg");
    // headerSvg.style.transform = "translate(0, " + document.documentElement.scrollTop * 0 + "px)";    

    // document.querySelectorAll(".hexagons").forEach(hexagons => {
    //     hexagons.style.transform = "translate(0, " + document.documentElement.scrollTop * 0.15 + "px)";
    // });

    // document.querySelectorAll(".hexagons img").forEach(img => {
    //     /*img.style.transform = "translate(0, " + document.documentElement.scrollTop * -0.15 + "px)";*/
    // });

});


let bgSvg = d3.create("svg").node();
bgSvg.id = "background-svg";
bgSvg.setAttribute("viewBox", "0 0 100 100");
bgSvg.setAttribute("width", "100vw");
bgSvg.setAttribute("height", "100vh");
bgSvg.setAttribute("preserveAspectRatio", "none");
document.body.appendChild(bgSvg);

let path = d3.select(bgSvg).append("path");
path.attr("d", "M0,120 C20,100 80,100 100,120 z")
    .attr("fill", "#4c4c4c");

function resizeCircle() {
    let availScroll = document.querySelector("header").offsetHeight-100;
    let scrollPercent = Math.min(document.documentElement.scrollTop/availScroll, 1);
    let armLength = 50;
    let angle = -((60*scrollPercent-30)/360*Math.PI*2);
    let y = 120 - (140*scrollPercent); // go from 120 to -20
    let bottomY = 100-(-30/360*Math.PI*2);
    let p = `M0,${bottomY} L0,${y} C${Math.cos(angle)*armLength},${y-Math.sin(angle)*armLength} ${100-Math.cos(angle)*armLength},${y-Math.sin(angle)*armLength} 100,${y} L100,${bottomY} z`;

    path.attr("d", p);
}

document.addEventListener("scroll", resizeCircle);


