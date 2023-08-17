noseX = 0;
noseY = 0;

function preload(){
mustache = loadImage('https://i.postimg.cc/XYFZgnGR/image-removebg-preview.png');
glasses = loadImage('https://i.postimg.cc/zvQQ8sNr/image-processing20210613-29169-mfgax6.png');
hat = loadImage('https://i.postimg.cc/htVKZr8j/image.png');
}

function setup(){
    canvas = createCanvas(400,400);
canvas.center();
video = createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('PoseNet is Initialised');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(noseX);
        console.log(noseY);
    }
}


function draw(){
image(video,0,0,400,400);
translate(width,0);
scale(-1,1);
image(video,0,0,400,400);
image(mustache,noseX - 50,noseY - 18,100,80);
image(glasses, noseX - 55, noseY - 55, 110, 40);
image(hat, noseX - 74, noseY - 160, 150, 100);
}

function take_snapshot(){
    save('myFilterImage.png');
}
