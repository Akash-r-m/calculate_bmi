const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
    } 
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let message = `<span>Your BMI is ${bmi}</span><br/>`;

        if (bmi < 18.6) {
        message += `<p>Under Weight</p>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
        message += `<p>Normal Weight</p>`;
        } else {
        message += `<p>Overweight</p>`;
        }

        results.innerHTML = message;

    }
});

