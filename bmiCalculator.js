function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
    const bmi = weight / (height * height);

    let result = '';
    if (isNaN(bmi)) {
        result = 'Please enter valid weight and height';
    } else if (bmi < 18.5) {
        result = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        result = 'Normal';
    } else {
        result = 'Overweight';
    }

    document.getElementById('result').innerText = `BMI: ${bmi.toFixed(2)} - ${result}`;
    localStorage.setItem('bmiCategory', result.toLowerCase());
}
function searchFood() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const bmiCategory = localStorage.getItem('bmiCategory');

    // Redirect to a new page based on the search term and BMI category
    window.location.href = `food_${bmiCategory}.html?search=${searchTerm}`;
}
