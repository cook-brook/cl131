img="";
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("#0000FF");
    text('Dog',35,55,15,15);
    noFill();
    stroke("#0000FF")
    rect(30,50,450,350);
}