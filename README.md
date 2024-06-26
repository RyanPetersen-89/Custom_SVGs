# Custom SVGs

Custom SVGs is a command-line application that allows users to create custom SVG logos by providing input for file name, text, text color, shape, and shape color. The application generates an SVG file with the specified name based on the user's input and displays the generated logo in a browser.

- Accepts user input for file name, text, text color, shape, and shape color.

- Supports color keywords or hexadecimal numbers for colors.

- Provides a list of shapes to choose from: circle, triangle, and square.

- Generates an SVG file with the specified name.

- Outputs the message "`Generated ${fileName}!`" upon successful file creation.

## Installation

To install Custom SVGs:

- Clone the repository: [https://github.com/RyanPetersen-89/Custom_SVGs](https://github.com/RyanPetersen-89/Custom_SVGs)

- Navigate to the project directory

- Open the terminal and run the command: `npm install`

## Usage

To use Custom SVGs use the terminal to run the command: `node index.js`

- You will be prompted to enter the name of the SVG file to be created. The file will be saved to the folder: generated-logos with the provided name and a .svg extension.

- You will be prompted to enter text for the logo - you can enter up to three characters.

- You will be prompted to enter the color for the text - you can enter a color keyword or a hexadecimal number.

- You will be prompted to choose a shape for the logo - available shapes are circle, triangle, and square.

- You will be prompted to enter the color for the shape - you can enter a color keyword or a hexadecimal number.

After entering all the prompts, an SVG file with the specified name will be created and the command line will output "`Generated ${fileName}!`" The logo will be displayed as a 300x200 pixel image.

### [Link to Walk Through Video](https://app.screencastify.com/v3/watch/k2uxMqlP3ociF4SAKyI4)

<br>
<img src="./lib/assets/Custom_SVGs_Screenshot.png" 
 alt="screenshot of the terminal application" width="800px" height="100%" style=object-position: center;>
<br>

## Credits

This project was made possible with the help of:

[Adam Rosenberg](https://github.com/AcoderRose)

[Kaila Ronquillo](https://github.com/girlnotfound)


## Tests

To run the tests for Custom SVGs run the following command in the command line: `npm test`

