let canvas = document.getElementById("canvas");


canvas.width = innerWidth - 80;
canvas.height = innerHeight - 130;

let cw = canvas.width;
let ch = canvas.height;

let c = canvas.getContext("2d");

c.strokeStyle="white";
c.fillStyle="white";

let mouse = {
    X: 0,
    Y: 0
}

let start = false;
canvas.addEventListener("mousedown", (e) => {
    mouse.X = e.offsetX;
    mouse.Y = e.offsetY;
    start = true;
    console.log(mouse);
    c.beginPath();
    c.moveTo(mouse.X, mouse.Y);
    c.fillRect(mouse.X,mouse.Y,2,2);
})
canvas.addEventListener("mouseup", (e) => {
    start = false;
})


canvas.addEventListener("mousemove", function (e) {

    if (start) {
        mouse.X = e.offsetX
        mouse.Y = e.offsetY

        c.lineTo(mouse.X, mouse.Y);
        c.stroke();
        console.log(mouse);

    }

})





