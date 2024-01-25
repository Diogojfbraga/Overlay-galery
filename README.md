# Image Averaging and Transition

![image](https://github.com/Diogojfbraga/Overlay-galery/assets/67931865/fc508c1e-5769-49cb-9aea-3416e75bd7c7)

This p5.js project demonstrates image averaging and transition effects. A set of images is loaded, and their pixel values are averaged to create a composite image. Additionally, a transition effect allows blending between a randomly selected image and the average image.

## Features

- **Image Loading:** A set of images is loaded into an array, allowing for dynamic image manipulation.

- **Averaging Pixels:** The pixel values of corresponding pixels from multiple images are averaged to create a composite image.

- **Transition Effect:** A transition amount is calculated based on the mouse's X position, allowing for smooth blending between a selected image and the average image.

- **Random Image Selection:** Pressing a key triggers the selection of a random image, showcasing the diversity within the image set.

## How It Works

1. **Image Loading:**
   - A loop loads a set of images into an array, `imgs`.

2. **Canvas Setup:**
   - The canvas is created with a width twice that of the first image.

3. **Averaging Pixels:**
   - Pixels for all images are loaded, and a nested loop calculates the average pixel values for each channel (RGB).

4. **Transition Effect:**
   - The transition amount is calculated based on the mouse's X position using the `map` function.

5. **Pixel Averaging and Transition:**
   - Pixel values are averaged, and a transition effect is applied based on the calculated transition amount.

6. **Image Display:**
   - The original image and the averaged image are displayed side by side on the canvas.

7. **Random Image Selection (Optional):**
   - Pressing a key triggers the selection of a random image, showcasing different visuals.

## Controls

- **Mouse X Position:**
   - Adjusts the transition amount between the selected image and the averaged image.

- **Key Press:**
   - Press any key to randomly select an image, providing variety in the displayed visuals.

Feel free to experiment with different images, transition amounts, and key presses to explore the versatility of image averaging and transition effects.
