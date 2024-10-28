let ctx, canvas, ballRadius, x, y, dx, dy;

window.onload = () => {
    const canvas = document.getElementById("canvasBoard");
    let ctx = canvas.getContext("2d");
    let ballRadius = 10;
    let x = canvas.width / 2 - ballRadius / 2;
    let y = canvas.height / 2 - ballRadius / 2;
    let dx = 2;
    let dy = 2;


    updateCanvas();

    // ctx.beginPath();
    // // ctx.moveTo(0,0);
    // // ctx.lineTo(0,0);
    // ctx.fillStyle = "rgba(200,100,0,0.5)"
    // // for (let i = 0; i < 5; i++) {
    // //     ctx.fillRect((10*i),(10*i),(100*i),(100*i));
    // //     ctx.fillStyle = "rgba(200,100,0,0.5)";
    // // }
    // let gradient = ctx.createLinearGradient(0,400,200,0);
    // // gradient.addColorStop(0,"rgb(200,100,0,0.5)");
    // // gradient.addColorStop(0,"rgb(100,29,0,0.5)");           
    // }
    // for (let i = 0; i < 400;) {
    //     ctx.arc(i,i,i,0,2*Math.PI);
    //     i+=2.1
    // }
    
    // ctx.stroke();
    // ctx.fill();
}

const updateCanvas = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = "rgba(200,100,0,0.5)";
    ctx.fillStyle = "rgba(200,100,0,0.5)";
    ctx.arc(x,y,ballRadius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    // function to update the canvas
    if (x + dx> canvas.width-ballRadius||x+dx<ballRadius){
        dx=-dx;
    }
    if (y + dy> canvas.height - ballRadius||y + dy < ballRadius){
        dy=-dy;
    }
    x=x+dx;
    y=y+dy;

    requestAnimationFrame(updateCanvas);
}
