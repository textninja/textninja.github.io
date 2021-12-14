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
    
    canvas.selectAll("g.grid").data([1]).join("g").classed(["grid"], true)
        .attr("transform", "translate(" + topLeft[0] + ", " + topLeft[1] + ")")
        .selectAll("circle")
        .data(data)
        .join("circle")
            .attr("cx", (d,i) => (i%gw|0)*(cellSize+1))
            .attr("cy", (d,i) => (i/gw|0)*cellSize)
            .attr("r", d => cellSize/2*0.6*d/10)
            .attr("fill", d => d3.interpolateInferno(d/10));
}
