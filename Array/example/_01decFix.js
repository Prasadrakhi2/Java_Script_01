// fix the decimal value 

const height = [1.70, 1.65, 1.80, 1.60, 1.75];
const weight = [30, 55, 90, 102, 65];

for (let i = 0; i < height.length; i++) {

  const bmi = weight[i] / (height[i] * height[i]);

  let bmiCategory;
  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = "Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }

  console.log(bmi.toFixed(2) + " " + bmiCategory);
}