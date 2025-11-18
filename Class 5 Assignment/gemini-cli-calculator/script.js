const resultInput = document.getElementById('result');
const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

function appendToDisplay(value) {
    resultInput.value += value;
}

function clearDisplay() {
    resultInput.value = '';
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = 'Error';
    }
}
