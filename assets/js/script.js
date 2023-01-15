
// settings
const buttonsRows = 10
const buttonsColumns = 10

// counters
let buttonIndex = 1
let countEven = 0
let countOdd = 0

const section = document.querySelector('#buttons-section')

// generate buttons
for (let i = 0; i < buttonsRows; i++) {
    // create row
    const row = document.createElement('div');

    // set row style
    row.style.display = 'flex';
    row.style.flexWrap = 'nowrap';
    row.style.minWidth = '0';
    row.style.flexDirection = 'row';
    row.style.marginTop = '5px';

    for (let j = 0; j < buttonsColumns; j++) {
        // create button
        const button = document.createElement('button');

        // set button class
        button.classList.add('button-3', 'mx-10');

        // set button text
        button.innerText = buttonIndex;

        // set button onClick event listener
        button.addEventListener('click', (e) => {
            countOnButtonClick(e)
        })

        // add button to parent section
        row.append(button);

        // increase counter
        buttonIndex++;
    }

    // add row to section
    section.append(row)
}

/**
 * check if number is even
 * @param _number {number}
 * @returns {boolean}
 */
function isEven(_number) {
    if(parseInt(_number) % 2 == 0) return true
    else return false
}

function refreshCountingLabels() {
    document.querySelector('#countEven').innerText = countEven
    document.querySelector('#countOdd').innerText = countOdd
}

function countOnButtonClick(_e) {
    // get button number
    const buttonNumber = parseInt(_e.target.innerText)

    if (isEven(buttonNumber)) {
        countEven += buttonNumber
    }
    else {
        countOdd += buttonNumber
    }

    // make button disabled
    _e.target.disabled = true

    refreshCountingLabels()
}

function resetCounter() {
    // reset counters
    countEven = 0
    countOdd = 0

    // refresh counting labels
    refreshCountingLabels()

    // enabled all buttons
    const buttons = section.querySelectorAll('button')
    buttons.forEach(button => {
        button.disabled = false
    })

}