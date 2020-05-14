var a=75,b=100,c=85.5,d=50,e=110,f=72.5,g=87.5;
var h=68.5,i=105.5,j=99,k=62,r=68.5,s=105.5,t=57.5,o=95;
var p=86,q=100,l=62.5;
var moving = false;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 

    if(moving){
  a=a+1;
  b=b+1;
  c=c+1;
  p=p+1;
  d=d+1;
  e=e+1;
  f=f+1;
  g=g+1;
  h=h+1;
  i=i+1;
  j=j+1;
  k=k+1;
  r=r+1;
  q=q+1;
  s=s+1;
  l=l+1;
  t=t+1;
  o=o+1;
    }
 background(255,255,255);
  fill(255,0,0);
  rect(360,30,40,160);

  fill(0,255,0);
  ellipse(a,25,20,20);
fill(153,0,153);
  ellipse(b,25,20,20);
  fill(255,0,0);
  ellipse(c,41.5,82.5,20);
  fill(153,255,51);
  ellipse(p,51,82.5,20);
  fill(51,255,255);
  rect(d,56.5,15,50);

  rect(e,56.5,15,50);

  rect(f,55,30,50);

 fill(255,0,0);
  ellipse(g,65.5,20,7.5);

   fill(0,128,255);
  ellipse(h,112,14.5,14.5);

  fill(255,51,255);
  ellipse(i,112,14.5,14.5);

  fill(0,0,255);
  rect(j,116.5,12.5,27.5);

  fill(102,0,204);
  rect(k,116.5,12.5,27.5);

  fill(0,255,0);
   ellipse(r,144,14.5,14.5);

  fill(102,0,204);
  ellipse(s,144,14.5,14.5);

  fill(255,102,178);
  rect(q,146.5,12.5,27.5);

  rect(l,146.5,12.5,27.5);
  fill(255,255,51);

  rect(t,170,20,20);
  fill(204,102,0);
  
  rect(o,170,20,20);

  textSize(15);
  fill(0,255,0);
  rect(40,305,40,40);
  fill(0);
  textAlign(CENTER);
  text("Start",59,330);

    if(mouseX > 40 && mouseX < 80 && mouseY > 305 && mouseY < 345 && mouseIsPressed && !moving){
        moving = true;
    }

  textSize(15);
  fill(255,0,0);
  rect(100,305,40,40);
  fill(0);
  textAlign(CENTER);
  text("Stop",120,330);

if(mouseX > 100 && mouseX < 140 && mouseY > 305 && mouseY < 345 && mouseIsPressed && moving){
        moving = false;
    }

  textSize(15);
  fill(193,193,193);
  rect(160,305,80,40);
  fill(0);
  textAlign(CENTER);
  text("Accelerate",200,330);

  textSize(15);
  fill(190,190,190);
  rect(160,350,80,40);
  fill(0);
  textAlign(CENTER);
  text("Decelerate",200,375);

  textSize(15);
  fill(255,110,180);
  ellipse(280,345,40,40);
  fill(0);
  textAlign(CENTER);
  text("Emergency",285,380);

  textSize(15);
  fill(0);
  textAlign(CENTER);
  text("Energy",360,315);
  text("Emergency",360,360);
  text("Mode",365,375);
  text("Charger",370,205);
}