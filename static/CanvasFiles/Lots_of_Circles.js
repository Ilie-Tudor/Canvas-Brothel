let canvas = document.getElementById("canvas");
console.log(canvas);
canvas.width = window.innerWidth - 80;
canvas.height = window.innerHeight - 130;


let c = canvas.getContext("2d");
c.strokeStyle = "white";

/*
for(let i=0;i<100;i++){
    let x=Math.random()*1600;
    let y= Math.random()*1000;
    c.beginPath();
    c.arc(x,y,50,0,Math.PI * 2,false);
    c.stroke();
}
*/
function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
  }

let x = [];
let y = [];
let dx=[];
let dy=[];
let radius=[];
let dradius=[];
let colornumber=[];

let b=50;

for (let i = 0; i < b; i++) {

    
    dx[i]= (Math.random()-0.5)*5;
    dy[i]= (Math.random()-0.5)*5;
    radius[i]=(Math.random()*100);
    dradius[i]=0;
    x[i] = Math.random() * (canvas.width-radius[i]*2)+radius[i];
    y[i] = Math.random() * (canvas.height-radius[i]*2)+radius[i];
    colornumber[i]=Math.random()*10;
}




    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < b; i++) {
            c.beginPath();
            c.arc(x[i], y[i], radius[i], 0, Math.PI * 2, false);



            //color
            if(colornumber[i]%10<1){
                c.strokeStyle= 'aquamarine';
            }
            else if(colornumber[i]%10<2){
                c.strokeStyle= 'red';
            }
            else if(colornumber[i]%10<3){
                c.strokeStyle= 'black';
            }
            else if(colornumber[i]%10<4){
                c.strokeStyle= 'blueviolet';
            }
            else if(colornumber[i]%10<5){
                c.strokeStyle= 'royalblue';
            }
            else if(colornumber[i]%10<6){
                c.strokeStyle= 'tomato';
            }
            else if(colornumber[i]%10<7){
                c.strokeStyle= 'chartreuse';
            }
            else if(colornumber[i]%10<8){
                c.strokeStyle= 'crimson';
            }
            else if(colornumber%10<9){
                c.strokeStyle= 'gold';
            }
            else if(colornumber%10<10){
                c.strokeStyle= 'green';
            }
            //color


            c.lineWidth= 2;
            c.stroke();

            radius[i]=radius[i]+dradius[i];

            x[i] = x[i] + dx[i];
            y[i] = y[i] + dy[i];
            if(x[i]>canvas.width-radius[i] || x[i]<radius[i]){
                dx[i]=-dx[i];
            }
            if(y[i]>canvas.height-radius[i] || y[i]<radius[i]){
                dy[i]=-dy[i];
            }
            
            if(radius[i]>150 || radius[i]<20)
            {
                dradius[i]=-dradius[i];
            }
        }
    }
    animate();
















