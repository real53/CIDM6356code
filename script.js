// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inputForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from actually submitting
        // Input Values
        const inventory = parseFloat(document.getElementById("inventory").value);
        const cash = parseFloat(document.getElementById("cash").value);
        const fixedAssets = parseFloat(document.getElementById("fixedAssets").value);
        const totalAssets = parseFloat(document.getElementById("totalAssets").value);
        const currentLiabilities = parseFloat(document.getElementById("currentLiabilities").value);
        const totalLiabilities = parseFloat(document.getElementById("totalLiabilities").value);
        const sales = parseFloat(document.getElementById("sales").value);
        // Algorithm calculation
        const algorithmScore = 1.936 * (cash / currentLiabilities) + 4.766 + (totalLiabilities / totalAssets) + 0.029 * (sales / fixedAssets) + 4.263 * (inventory / totalAssets) - 5.768;
        // Probility Calculation
        const exponent = 5.768 - 4.263 * (inventory / totalAssets) - 0.029 * (sales / fixedAssets) - 4.766 * (totalLiabilities / totalAssets) - 1.936 * (cash / currentLiabilities);
        //Statement of Fraud or Not Fraud
        const probabilityOfFraud = 1 / (1 + Math.exp(exponent));

        document.getElementById("algorithmScore").value = algorithmScore.toFixed(4);
        document.getElementById("probabilityOfFraud").value = (probabilityOfFraud * 100).toFixed(0) + "%";

        const fraudConclusion = probabilityOfFraud > 0.5 ? "Fraud" : "Not Fraud";
        document.getElementById("fraudConclusion").value = fraudConclusion;
    });
});