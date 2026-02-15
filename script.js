const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const resultContainer = document.querySelector("#result-container");
  const resultValue = document.querySelector("#result-value");
  const resultStatus = document.querySelector("#result-status");

  if (height === "" || height < 0 || isNaN(height)) {
    alert("Please provide a valid height");
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    alert("Please provide a valid weight");
  } else {
    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Show result
    resultContainer.classList.remove("hidden");
    resultValue.innerHTML = bmi;

    // Categorize result
    if (bmi < 18.6) {
      resultStatus.innerHTML = "Underweight";
      resultStatus.style.color = "#ffeb3b";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      resultStatus.innerHTML = "Normal Range";
      resultStatus.style.color = "#8bc34a";
    } else {
      resultStatus.innerHTML = "Overweight";
      resultStatus.style.color = "#ff5722";
    }
  }
});
