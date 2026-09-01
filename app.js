var sketchProc = function(processingInstance) {
    with (processingInstance) {
        
        size(400, 400); // Sets the canvas size
        background(255, 255, 255); // White background

        // Example Khan Academy drawing: A cute face
        fill(255, 255, 0); // Yellow
        ellipse(200, 200, 300, 300); // Face

        fill(0, 0, 0); // Black eyes
        ellipse(150, 150, 30, 30); 
        ellipse(250, 150, 30, 30);

    }
};

var canvas = document.getElementById("my-ka-art");
var processingInstance = new Processing(canvas, sketchProc);
