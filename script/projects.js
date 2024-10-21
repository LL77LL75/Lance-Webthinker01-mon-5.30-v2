window.onload= () =>{
    const canvas = document.getElementById("canvasBoard");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    // ctx.moveTo(0,0);
    // ctx.lineTo(0,0);
    ctx.fillStyle = "rgba(200,100,0,0.5)"
    // for (let i = 0; i < 5; i++) {
    //     ctx.fillRect((10*i),(10*i),(100*i),(100*i));
    //     ctx.fillStyle = "rgba(200,100,0,0.5)";
    // }
    let gradient = ctx.createLinearGradient(0,400,200,0);
    gradient.addColorStop(0,"rgb(200,100,0,0.5)");
    gradient.addColorStop(0,"rgb(234,54,0,0.5)");
    ctx.fillStyle=gradient;
    for (let i = 0; i < 400;) {
        ctx.arc(i,i,i,0,2*Math.PI);
        i+=0.1
    }
    
    ctx.stroke();
    ctx.fill();
}