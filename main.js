status="";
img="";
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
}
function modelLoaded(){
    console.log("model loaded!!");
    status=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}


function draw(){
    image(img,0,0,640,420);
    fill("#0000FF");
    text('Dog',35,55,15,15);
    noFill();
    stroke("#0000FF")
    rect(30,50,450,350);

    fill("#0000FF");
    text('Cat',275,65,15,15);
    noFill();
    stroke("#0000FF");
    rect(270,60,350,350);
}