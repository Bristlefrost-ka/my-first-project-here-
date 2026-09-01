window.program = function(processingInstance) {
    with (processingInstance) {
        size(400, 400, P3D); 
        
        var angleX = 0;
        var angleY = 0;

        draw = function() {
            background(25, 20, 30);
            ambientLight(100, 100, 150);
            directionalLight(255, 255, 255, 1, 1, -1);
            translate(200, 200, 0);
            rotateX(angleX);
            rotateY(angleY);
            stroke(0, 200, 255);
            fill(0, 100, 150, 200);
            box(100);
            
            if (mousePressed) {
                angleY += (mouseX - pmouseX) * 0.01;
                angleX -= (mouseY - pmouseY) * 0.01;
            } else {
                angleX += 0.01;
                angleY += 0.01;
            }
        };
    }
};
