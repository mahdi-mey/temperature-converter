let changeBtn = document.querySelector('.changeButton')
let userInput = document.querySelector('#converter');
let mainText = document.querySelector('.main');
let demo = document.querySelector('.result');
let flag = true;

changeBtn.addEventListener('click', () => {
    if (flag === true) {
        document.title = '°F to °C'
        mainText.innerHTML = 'CONVERTOR °F TO °C'
        userInput.placeholder = '°F'
        flag = false
    } else {
        document.title = '°C to °F'
        mainText.innerHTML = 'CONVERTOR °C TO °F'
        userInput.placeholder = '°C'
        flag = true
    }
    demo.innerHTML = '';
    userInput.value = '';
})