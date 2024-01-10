var imgs = [];          // Initializes an empty array to store image objects.
var avgImg;             // Declares a variable for an average image buffer.
var numOfImages = 30;   // Sets the number of images to be loaded and averaged.
var imgIndex = 0;       // Sets the index of the image to be displayed to 0.
var transitionAmount = 0.5; // STEP 7B - Set the amount of blending between the selected image and average image to 0.5.

//////////////////////////////////////////////////////////
function preload() { // preload() runs once
    // STEP 1  - Loads a set of images into an array img using the loop
    for (var i = 0; i < numOfImages; i++) {
        var filename = "assets/" + i + ".jpg";
        // console.log(filename);
        imgs[i] = loadImage(filename);  // Creates a file name to load into the imgs array
    }

}
//////////////////////////////////////////////////////////
function setup() {
    createCanvas(imgs[0].width * 2, imgs[0].height); // STEP 2 - Create a canvas twice as wide as the first image of the imgs array
    pixelDensity(1);    // Sets the pixel density of the canvas to 1

    // STEP 3
    // Creates an empty buffer with the same size as the first image
    avgImg = createGraphics(imgs[0].width, imgs[0].height);
}
//////////////////////////////////////////////////////////
function draw() {
    background(125);
 
    // Step 4
    // Loads pixels for all images in the imgs array
    for (var i = 0; i < numOfImages; i++) {
        imgs[i].loadPixels();
    }

    // Loads pixels for the avgImg buffer
    avgImg.loadPixels();

    // Step 7B
    // Calculates the transition pixel value based on mouseX position
    transitionAmount = map(mouseX, 0, width, 0, 1);


    //Step 5 & 6
    for (var y = 0; y < imgs[0].height; y++) {          // Loops through each pixel of the first image
        for (var x = 0; x < imgs[0].width; x++) {
            var index = (x + y * imgs[0].width) * 4;    // Calculates the pixel index in the pixels array

            // Creates variables to store the sum of each channel for that pixel
            var sumR = 0;
            var sumG = 0;
            var sumB = 0;

            // Loops through all the images in the imgs array and for each channel add its value to the corresponding sum variable
            for (var i = 0; i < imgs.length; i++) {
                var r = imgs[i].pixels[index + 0];
                var g = imgs[i].pixels[index + 1];
                var b = imgs[i].pixels[index + 2];

                sumR += r;
                sumG += g;
                sumB += b;
            }

            // Calculates the average of each channel and set it in the corresponding pixel of the avgImg buffer
            var avgR = sumR / numOfImages;
            var avgG = sumG / numOfImages;
            var avgB = sumB / numOfImages;


            // STEP 7B
            // Lerps the pixel values between the randomly selected image and the average image based on the transition amount   
            var lerpedR = lerp(imgs[imgIndex].pixels[index + 0], avgR, transitionAmount);
            var lerpedG = lerp(imgs[imgIndex].pixels[index + 1], avgG, transitionAmount);
            var lerpedB = lerp(imgs[imgIndex].pixels[index + 2], avgB, transitionAmount);

            // STEP 7B
            avgImg.pixels[index + 0] = lerpedR;
            avgImg.pixels[index + 1] = lerpedG;
            avgImg.pixels[index + 2] = lerpedB;
            avgImg.pixels[index + 3] = 255;

            // STEP 5 & 6
            // avgImg.pixels[index + 0] = avgR;
            // avgImg.pixels[index + 1] = avgG;
            // avgImg.pixels[index + 2] = avgB;
            // avgImg.pixels[index + 3] = 255;
        }
    }

    // Updates the pixels of the avgImg buffer to let p5js know that the image has had its data changed
    avgImg.updatePixels();

    // Draws the first image on the left side of the canvas
    //   image(imgs[0], 0, 0);      
    image(imgs[imgIndex], 0, 0);        // Step 7A 
    image(avgImg, imgs[0].width, 0);    // Draws the avgImg buffer on the right side of the canvas
    noLoop();                           // Stops looping
}

// Step 7A
function keyPressed() {
    // Generates a random index for the imgs array
    imgIndex = Math.floor(random(numOfImages));
    redraw();           // Redraws the canvas to display the new image
  }
