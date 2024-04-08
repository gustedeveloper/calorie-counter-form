const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;


// Function to clean input string by removing any non-numeric characters
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

// Function to check if input string contains invalid exponential notation
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" id="${entryDropdown.value}-${entryNumber}-calories" min="0" placeholder="Calories" />`
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function calculateCalories(e) {
    e.preventDefault();
    isError = false;
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
}


function getCaloriesFromInputs(list) {
    let calories = 0;

    for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);

        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }

        calories += Number(currVal);
    }

    return calories;

}


function clear() {
    const inputContainers = document.querySelectorAll('.input-container');

    inputContainers.forEach(container => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
});
    
}


addEntryButton.addEventListener("click", addEntry);
clearButton.addEventListener("click", clear);
