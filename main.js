function preload()
{

}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses()
{
    if(results.lenght>0)
    {
        console.log(results);
        console.log("lips x = " + results[0].pose.lips.x);
        console.log("lips y = " + results[0].pose.lips.y);
    }
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function draw()
{
    image(video, 0, 0, 300, 300);
}

function take_snapshot()
{
    save("Myfilterimage.png");
}