let mx = null;
let my = null;
let data = [];

export function viz(canvas, w, h, rects) {
    let rectsByTop = [...rects].sort((a,b)=>a.top-b.top);
    let rectsByRight = [...rects].sort((a,b)=>b.right-a.right);

    let topLeft = [rectsByRight[1].right + 100, rectsByTop[0].bottom+100];
    let bottomRight = [rectsByRight[0].right, h-50];
    let [areaw, areah] = bottomRight.map((c,i) => c-topLeft[i]);
    
    let cellSize = 60;
    let gw = areaw / cellSize | 0;
    let gh = areah / cellSize | 0;

    let localData = [];

    if (gw >= 5 && gh >= 4) {
        while (data.length < gh) {
            data.push([]);
        }
        for (let row of data) {
            while (row.length < gw) {
                row.push(Math.random()*10|0);
            }
        }

        localData = data.slice(0, gh).flatMap(row => row.slice(0, gw));
    }

    let centerOfArea = [topLeft[0]+areaw/2, topLeft[1]+areah/2];
    if (mx === null) {
        [mx, my] = centerOfArea;
    }

    let diff = [(centerOfArea[0]-mx)/window.innerWidth, (centerOfArea[1]-my)/window.innerHeight];

    canvas.selectAll("g.grid").data([1]).join("g").classed(["grid"], true)
        .attr("transform", "translate(" + topLeft[0] + ", " + topLeft[1] + ")")
        .selectAll("circle")
        .data(localData)
        .join("circle")
            .attr("cx", (d,i) => (i%gw|0)*(cellSize+1)+diff[0]*10)
            .attr("cy", (d,i) => (i/gw|0)*cellSize+diff[1]*10)
            .attr("r", d => cellSize/2*0.6*d/10)
            .attr("fill", d => d3.interpolateInferno(d/10));
}