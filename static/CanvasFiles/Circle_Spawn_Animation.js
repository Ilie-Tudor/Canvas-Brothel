let canvas = document.getElementById("canvas");

canvas.width = innerWidth - 80;
canvas.height = innerHeight - 80;

let cw = canvas.width;
let ch = canvas.height;

let date=new Date;
let c = canvas.getContext("2d");

let cursor0={
    x: cw/2,
    y: ch/2
}

canvas.addEventListener("mousemove", function (e) {

    let cursor = {
        x: e.offsetX,
        y: e.offsetY
    }

    if(Math.sqrt(Math.pow(cursor.x-cursor0.x,2)+Math.pow(cursor.y-cursor0.y,2))>10){
        Spawn(cursor);
        cursor0=cursor;
    
    }

    
});



function Circle(x, y, dx, dy, radius,ddx,ddy) {
    this.ddx=ddx;
    this.ddy=ddy;
    this.radius = radius;
    this.dr=-0.5;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.move = function () {
        this.dx=this.dx+this.ddx;
        this.dy=this.dy+this.ddy;

        if(this.dx*this.dx>12){
            this.ddx=-this.ddx;
        }

        if(this.dy*this.dy>12){
            this.ddy=-this.ddy;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        this.radius+=this.dr;
        if(this.radius<3){
            this.radius=3;
        }
    }
    this.aliveTime=5;
    this.color=getRandomColor();
}

let CircleArray = [];
let CircleAlphanumber = 0;

function Spawn(cursorObj) {
    let CircleNumber = Math.floor(Math.random() * 5 + 1);
    let k = CircleAlphanumber;
    CircleAlphanumber = CircleAlphanumber + CircleNumber;
    for (let i = k; i < CircleAlphanumber; i++) {

        let x = (Math.random() - 0.5) * 20;
        x = x + cursorObj.x;
        let y = (Math.random() - 0.5) * 20;
        y = y + cursorObj.y;

        let radius = Math.random() * 50 + 2;
        let dx = (Math.random() - 0.5) * 5;
        let dy = (Math.random() - 0.5) * 5;

        let ddx=(Math.random()-0.5)*0.5;
        let ddy=(Math.random()-0.5)*0.5;


        CircleArray[i] = new Circle(x, y, dx, dy, radius,ddx,ddy);
    }



}

function getRandomColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, cw, ch);


    for (let i = 0; i < CircleArray.length; i++) {
        if (CircleArray[i]) {


            c.beginPath();
            c.arc(CircleArray[i].x, CircleArray[i].y, CircleArray[i].radius, 0, Math.PI * 2, false);
            c.lineWidth=1.3;
            c.fillStyle = CircleArray[i].color;
            c.fill();
            CircleArray[i].move();
            if (CircleArray[i].x > cw || CircleArray[i].x < 0) {
                delete(CircleArray[i]);
            }
            else if (CircleArray[i].y > ch || CircleArray[i].y < 0) {
                delete(CircleArray[i]);
            }
        }
    }
}
let seconds=0;
setInterval(function(){
    
    for(let i=0;i<CircleArray.length;i++){
        
        if(CircleArray[i]===undefined){
            CircleArray.splice(i,1);
        }
        
    }
    
},5000);
setInterval(function(){
    for(let i=0;i<CircleArray.length;i++){
        if(CircleArray[i]){
            if(CircleArray[i].aliveTime<=0){
                CircleArray[i]=undefined;
            }
            else{
                CircleArray[i].aliveTime-=0.05;
            }
        }
    }
},10);
animate();


