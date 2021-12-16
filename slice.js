function slice(e) {
    console.log(e);

    let el = d3.create("svg");

    let cy = e.clientY;

    applyStyles(
        el,
        {
            position: "fixed",
            "z-index": 9999,
            width: "100px",
            height: "100vh",
            top: "0",
            left: e.clientX-50 + "px",
            "viewBox": "0 0 100 " + window.innerHeight,
            opacity: "1",
            transition: "opacity linear 0.5s"
        }
    );

    let startX = Math.random()*50+25|0;

    el.append("line")
        .attr("x1", startX)
        .attr("y1", "0")
        .attr("x2", startX+((50-startX)/cy)*window.innerHeight)
        .attr("y2", window.innerHeight)
        .attr("stroke-width", 3+Math.random()*3)
        .attr("stroke", "var(--killer-highlight)");

    el.node().ontransitionend = () => el.remove();
    document.body.appendChild(el.node());
    setTimeout(() => el.style("opacity", "0"), 0);
}

function applyStyles(el, styles) {
    Object.entries(styles).forEach(([key, value]) => {
        el.style(key, value);
    });
}

document.onclick = slice;
