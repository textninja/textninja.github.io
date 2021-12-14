export function viz(canvas, w, h, rects) {
    let rectsByTop = [...rects].sort((a,b)=>a.top-b.top);
    let rectsByRight = [...rects].sort((a,b)=>b.right-a.right);

    let topLeft = [rectsByRight[1].right + 100, rectsByTop[0].bottom+100];
    let bottomRight = [rectsByRight[0].right, h-50];
    let [areaw, areah] = bottomRight.map((c,i) => c-topLeft[i]);
    
    let cellSize = 60;
    let gw = areaw / cellSize | 0;
    let gh = areah / cellSize | 0;

    let data = Array(gw*gh).fill(0).map(d => Math.random()*10|0);

    // canvas.selectAll("rect.grid-indicator")
    //     .data([[topLeft, bottomRight]])
    //     .join("rect")
    //         .attr("x", d => d[0][0])
    //         .attr("y", d => d[0][1])
    //         .attr("width", d => d[1][0]-d[0][0])
    //         .attr("height", d => d[1][1]-d[0][1])
    //         .attr("stroke", "yellow")
    //         .attr("stroke-width", "1");

    
    canvas.selectAll("g.grid").data([1]).join("g").classed(["grid"], true)
        .attr("transform", "translate(" + topLeft[0] + ", " + topLeft[1] + ")")
        .selectAll("circle")
        .data(data)
        .join("circle")
            .attr("cx", (d,i) => (i%gw|0)*(cellSize+1))
            .attr("cy", (d,i) => (i/gw|0)*cellSize)
            .attr("r", _ => cellSize/2*0.6)
            .attr("fill", d => d3.interpolateInferno(d/10));
}
