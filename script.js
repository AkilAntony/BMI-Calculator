var HEIGHT, WEIGHT;
var alertBox = document.getElementById("alertBox");
//getting user inputs
function getHeight(height) {
  HEIGHT = height;
}
function getWeight(weight) {
  WEIGHT = weight;
}

const handleClick = () => {
  console.log(HEIGHT, WEIGHT);
  const BMI = Math.floor(WEIGHT / ((HEIGHT / 100) * (HEIGHT / 100)));
  console.log(Math.floor(BMI));
  if (BMI < 18.5) {
    alertBox.classList.remove("alert-primary");
    alertBox.classList.add("alert-warning");
    alertBox.textContent = "Your BMI is " + BMI + " , so you are underweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    alertBox.classList.remove("alert-primary");
    alertBox.classList.add("alert-success");
    alertBox.textContent =
      "Your BMI is " + BMI + " , so you have a normal weight";
  } else if (BMI > 24.9) {
    alertBox.classList.remove("alert-primary");
    alertBox.classList.add("alert-damger");
    alertBox.textContent = "Your BMI is " + BMI + " , so you are overweight";
  }
};
