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
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        Difference = leftWristX - rightWristX;
        Math.floor(Difference);
        console.log("leftWristX = " + leftWristX + "rightWristX + " + rightWristX + "Difference = " + Difference);
    }
}

function modelLoaded() {
    console.log("PoseNet Is Intialized");
}

function draw() {
    background('#d0e8f2');

    textSize(Difference);
    fill(25, 40, 65);
    text('SPARSH', 10, 200);

    document.getElementById("font-size").innerHTML = "Font Size = " + Difference +"px ";
}