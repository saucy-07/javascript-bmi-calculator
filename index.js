function calc() {
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const output = document.getElementById("output");
    const outputsubtext = document.getElementById("output-subtext");
    const bmiRes = ((weight / ((height / 100)**2)).toFixed(2));

    if(height === "" || weight === "" || isNaN(height) || isNaN(weight) || (height <= 0) || (weight <= 0)) {
        output.innerHTML = 'INSERT ALL VALID VALUES';
        outputsubtext.innerHTML = '';
    }else{
        output.innerHTML = 'YOUR BMI IS: ' + bmiRes
    }

    if(height != 0 && weight != 0 && bmiRes > 0 && bmiRes < 18.5) {
        outputsubtext.innerHTML = 'YOU ARE UNDERWEIGHT.'
    }

    if(height != 0 && weight != 0 && bmiRes >= 18.5 && bmiRes < 25) {
        outputsubtext.innerHTML = 'YOU ARE NORMAL WEIGHT.'
    }

    if(height != 0 && weight != 0 && bmiRes >= 25 && bmiRes < 30) {
        outputsubtext.innerHTML = 'YOU ARE OVERWEIGHT.'
    }

    if(height != 0 && weight != 0 && bmiRes >= 30) {
        outputsubtext.innerHTML = 'YOU ARE OBESE.💀'
    }
}