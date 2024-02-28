# BMI-Calculator

This BMI calculator is a simple JavaScript application that calculates the Body Mass Index (BMI) based on user-provided height and weight inputs.

## Usage
To use the BMI calculator, follow these steps:

-Clone or download the repository to your local machine.

-Open the index.html file in your web browser.

-Enter your height in centimeters and your weight in kilograms in the respective input fields.

-Click the "Calculate BMI" button to see your BMI category displayed in the alert box below the input fields.

## BMI Categories
The BMI categories are interpreted as follows, based on World Health Organization (WHO) guidelines:

Underweight: BMI less than 18.5
Normal weight: BMI between 18.5 and 24.9
Overweight: BMI between 25.0 and 29.9
  
## Code Explanation
-The getHeight() and getWeight() functions store the user's height and weight inputs, respectively.

-The handleClick() function calculates the BMI using the formula BMI = weight / ((height / 100) * (height / 100)) and updates the alert box with the BMI category based on the calculated BMI value.

-The alert box's background color changes according to the BMI category: yellow for underweight, green for normal weight, and red for overweight.

## Contributing
Contributions to this project are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.
