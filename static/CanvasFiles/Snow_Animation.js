let canvas = document.getElementById("canvas");

canvas.width = window.innerWidth - 80;
canvas.height = window.innerHeight - 120;

let cw = canvas.width;
let ch = canvas.height;


let c = canvas.getContext("2d");


c.fillStyle="white";

let FlakeNumber = 300;
let FlakeArray = [];


class SnowFlake {
    constructor(x, y, z, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }

}

function SnowFlakeGenerate(FlakeNumber) {



    for (let i = 0; i < FlakeNumber; i++) {

        let x = Math.random() * cw;
        let y = (Math.random()) * ch;
        let z = Math.round(2+Math.random() * 2)-1;
        let radius = 7.5 - z;
        let dx = (Math.random() - 0.5) * 0.8;
        let dy = 3-z/2;

        FlakeArray[i] = new SnowFlake(x, y, z, dx, dy, radius);
        console.log(FlakeArray[i]);
    }
}
SnowFlakeGenerate(FlakeNumber);

let Wind = Math.random() - 0.5;



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, cw, ch);


    for (let i = 0; i < FlakeNumber; i++) {
        c.beginPath();
        
        


        
        c.arc(FlakeArray[i].x, FlakeArray[i].y, FlakeArray[i].radius, 0, Math.PI * 2, false);
        c.fill();

        FlakeArray[i].x+=FlakeArray[i].dx;
        FlakeArray[i].y+=FlakeArray[i].dy;
        if(FlakeArray[i].y>=ch){
            FlakeArray[i].y=0;
        }

        if(FlakeArray[i].x>=cw){
            FlakeArray[i].x=1;
        }
        else if(FlakeArray[i].x<=0){
            FlakeArray[i].x=cw-1;
        }
        

        


    }



}
animate();















