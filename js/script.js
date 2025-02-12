/* Javascript */
document.addEventListener("DOMContentLoaded", function () {
    const reverseButton = document.querySelector(".reverse button");
    const celciusLabel = document.querySelector("label[for='celcius']");
    const fahrenheitLabel = document.querySelector("label[for='fahrenheit']");
    const celciusInput = document.querySelector("#celcius");
    const fahrenheitInput = document.querySelector("#fahrenheit");
    const methodLabel = document.querySelector(".method span:first-child");
    const methodValue = document.querySelector("#method-value");
    const explanationTitle = document.querySelector(".explanation p");
    const explanationContent = document.querySelector(".explanation-content p");
    const formulaContent = document.querySelector(".formula");
    const resetButton = document.querySelector(".click-group button:first-child");
    const convertButton = document.querySelector(".click-group button:last-child");
    const error = document.querySelector("#error");
    let isReversed = false;
  
    resetButton.addEventListener("click", function() {
      celciusInput.value = "";
      fahrenheitInput.value = "";
      if (!isReversed) {
        methodValue.innerHTML = "𝑆<sub>(°C)</sub> x 9/5 + 32";
      } else {
        methodValue.innerHTML = "(𝑆<sub>(°F)</sub> - 32) x 5/9";
      }
    });
/* Konversi */
    convertButton.addEventListener("click", function() {
      const inputValue = parseFloat(celciusInput.value);
  
      if (!inputValue) {
        error.style.display = "block";
        return;
      }
  
      error.style.display = "none";
  
      let result;
      let calculationMethod;
  
      if (!isReversed) {
        result = (inputValue * 9/5) + 32;
        calculationMethod = `${inputValue}°C x 9/5 + 32 = ${result.toFixed(1)}°F`;
      } else {
        result = (inputValue - 32) * 5/9;
        calculationMethod = `(${inputValue}°F - 32) x 5/9 = ${result.toFixed(1)}°C`;
      }
  
      fahrenheitInput.value = result.toFixed(1);
      methodValue.innerHTML = calculationMethod;
    });
/* Reverse */

    reverseButton.addEventListener("click", function () {
      if (!isReversed) {
        celciusLabel.textContent = "Fahrenheit (°F)";
        fahrenheitLabel.textContent = "Celcius (°C)";
        celciusInput.setAttribute("id", "fahrenheit");
        fahrenheitInput.setAttribute("id", "celcius");
        methodLabel.innerHTML = "𝑆<sub>(°C)</sub> = ";
        methodValue.innerHTML = "(𝑆<sub>(°F)</sub> - 32) x 5/9";
        explanationTitle.textContent = "Cara mengkonversi Fahrenheit (°F) ke Celcius (°C)";
        explanationContent.textContent = "Suhu 𝑆 dalam derajat Celcius (°C) sama dengan suhu 𝑆 in dalam derajat Fahrenheit (°F) dikurangi 32 kali 5/9";
        formulaContent.innerHTML = `
          <p>𝑆<sub>(°C)</sub> = (𝑆<sub>(°F)</sub> - 32) x 5/9</p>
          <p>atau</p>
          <p>𝑆<sub>(°C)</sub> = (𝑆<sub>(°F)</sub> - 32) / 1.8</p>
        `;
      } else {
        celciusLabel.textContent = "Celcius (°C)";
        fahrenheitLabel.textContent = "Fahrenheit (°F)";
        celciusInput.setAttribute("id", "celcius");
        fahrenheitInput.setAttribute("id", "fahrenheit");
        methodLabel.innerHTML = "𝑆<sub>(°F)</sub> = ";
        methodValue.innerHTML = "𝑆<sub>(°C)</sub> x 9/5 + 32";
        explanationTitle.textContent = "Cara mengkonversi Celcius (°C) ke Fahrenheit (°F)";
        explanationContent.textContent = "Suhu 𝑆 dalam derajat Fahrenheit (°F) sama dengan suhu 𝑆 in dalam derajat Celcius (°C) dikali 9/5 tambah 32";
        formulaContent.innerHTML = `
          <p>𝑆<sub>(°F)</sub> = 𝑆<sub>(°C)</sub> x 9/5 + 32</p>
          <p>atau</p>
          <p>𝑆<sub>(°F)</sub> = (𝑆<sub>(°C)</sub> * 1.8) + 32</p>
        `;
      }
      
      celciusInput.value = "";
      fahrenheitInput.value = "";
      fahrenheitInput.disabled = true;
      fahrenheitInput.style.backgroundColor = "var(--darker--quaternary-color)";
      fahrenheitInput.style.cursor = "not-allowed";
  
      isReversed = !isReversed;
    });
  
    fahrenheitInput.disabled = true;
    fahrenheitInput.style.backgroundColor = "var(--darker--quaternary-color)";
    fahrenheitInput.style.cursor = "not-allowed";
  });