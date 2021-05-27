function setup() {
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 450);
canvas.position(650, 100);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getPoses);
}
function draw() {
background('#969A97');
}
function modelLoaded() {
console.log('PoseNet is initialized!');
}
function getPoses(results) {
if(results.length > 0) {
console.log(results);
}
}