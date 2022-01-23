objects = [];
status = "";

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 400, 400);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("object_output").value;
    console.log(object_name);
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

