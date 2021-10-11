let canvas = document.getElementById("canvas");


canvas.width = innerWidth - 80;
canvas.height = innerHeight - 80;

cw = canvas.width;
ch = canvas.height;

c = canvas.getContext("2d");
c.strokeStyle = "white";
c.lineWidth = 0.2;
c.fillStyle="lightblue";

let GroupsNumber = 20;
let GroupsArray = [];

class Group {
    constructor() {
        let CircleNumber = parseInt(Math.random() * 10);
        this.CircleNumber = CircleNumber;


        let CircleArray = [];

        for (let i = 0; i < CircleNumber; i++) {

            let radius = Math.random() * 2 + 2;
            let x = Math.random() * (cw / GroupsNumber - 2 * radius) + radius;
            let y = (Math.random() * (ch/2 - 2 * radius) + radius)+ch/4;
            let dx = (Math.random()-0.5) * 1;
            let dy = (Math.random()-0.5) * 1;

            CircleArray[i] = new Point(x, y, dx, dy, radius);
            CircleArray[i].NodeLevel = parseInt(Math.random() * (CircleNumber - 1));
        }

        this.CircleArray = CircleArray;
    }
}

for (let i = 0; i < GroupsNumber; i++) {
    GroupsArray[i] = new Group();
    for (let k = 0; k < GroupsArray[i].CircleNumber; k++) {
        GroupsArray[i].CircleArray[k].x += i * (cw / GroupsNumber);
        GroupsArray[i].CircleArray[k].Fx=GroupsArray[i].CircleArray[k].x;
        GroupsArray[i].CircleArray[k].Fy=GroupsArray[i].CircleArray[k].y;
    }

    console.log(GroupsArray[i]);
}



function Point(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.Fx;
    this.Fy;

    this.Move = function () {

        if (this.x >= cw - this.radius || this.x <= 0 + this.radius) {
            this.dx = -this.dx;
        }
        if (this.y >= ch - this.radius || this.y <= 0 + this.radius) {
            this.dy = -this.dy;
        }
        if(this.x >= this.Fx+350 || this.x <= this.Fx-350){
            this.dx = -this.dx;
        }
        if(this.y >= this.Fy+150 || this.y <= this.Fy-150){
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

    }
}





function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, cw, ch);

    for (let k = 0; k < GroupsNumber; k++) {
        for (let i = 0; i < GroupsArray[k].CircleNumber; i++) {

            x = GroupsArray[k].CircleArray[i].x;
            y = GroupsArray[k].CircleArray[i].y;
            c.beginPath();
            c.moveTo(x, y);
            for (let j = 0; j < GroupsArray[k].CircleArray[i].NodeLevel; j++) {
                X = GroupsArray[k].CircleArray[j].x;
                Y = GroupsArray[k].CircleArray[j].y;

                c.lineTo(X, Y);
                c.stroke();
            }

        }



        for (let i = 0; i < GroupsArray[k].CircleNumber; i++) {

            x = GroupsArray[k].CircleArray[i].x;
            y = GroupsArray[k].CircleArray[i].y;
            radius = GroupsArray[k].CircleArray[i].radius;
            c.beginPath();
            c.arc(x, y, radius, 0, Math.PI * 2, false);
            c.fill();

            GroupsArray[k].CircleArray[i].Move();

        }
    }


}

animate();





