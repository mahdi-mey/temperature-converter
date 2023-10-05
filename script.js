let resetBtn = document.querySelector('.resetButton')
let convertorBtn = document.querySelector('.convertButton')
let changeBtn = document.querySelector('.changeButton')
let userInput = document.querySelector('#converter')
let mainText = document.querySelector('.main')
let demo = document.querySelector('.result')
let flag = true

resetBtn.addEventListener('click', () => {
    userInput.value = ''
    demo.innerHTML = ''
})

convertorBtn.addEventListener('click',  () => {
    Number(userInput.value)
    if (flag == true) {

        //* C to F

        let C = userInput.value
        let result = ((C * 1.8) + 32).toFixed(2)
        demo.innerHTML = `${C}℃ is equal to ${result} ℉`
    }
    else if (flag == false) {

        //* F to C

        let F = userInput.value
        let secondResult = ((F - 32) / 1.8).toFixed(2)
        demo.innerHTML = `${F}℉ is equal to ${secondResult} ℃`
    }
})

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
    demo.innerHTML = ''
    userInput.value = ''
})