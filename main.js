noseX = 0;
noseY = 0;
Difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    canvas = createCanvas(550, 400);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) { 
}

function modelLoaded() {
    console.log("PoseNet Is Intialized");
}

function draw() {
    background('#d0e8f2');
}