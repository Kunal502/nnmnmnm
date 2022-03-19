music_1 = "";
music_2 = "";

left_wrist_x = 0;
left_wrist_y = 0;

right_wrist_x = 0;
right_wrist_y = 0;

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on("pose", gotPoses)
}

function preload() {
    music_1 = loadSound("music.mp3");
    music_2 = loadSound("music2.mp3")
}

function draw() {
    image(video, 0, 0, 500, 500);
}

function modalLoaded() {
    console.log("modal is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {

        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;

        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;

        console.log("left wrist x = " + left_wrist_x + "left wrist y = " + left_wrist_y + "right wrist x = " + right_wrist_x + "right wrist y = " + right_wrist_y)
    }
}