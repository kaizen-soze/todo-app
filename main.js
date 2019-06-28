import { taskFactory, taskHTML } from 'factories.js'

// Initialize all tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Define variables
const picker = new Pikaday({ field: document.getElementById('datepicker') })

// Define references to HTML elements
const datepicker = document.getElementById('datepicker')
const prioritySelect = document.getElementById('prioritySelect')
const saveButton = document.getElementById('saveButton')
const taskDescription = document.getElementById('taskDescription')
const taskList = document.getElementById('taskList')
let checkboxes = document.getElementsByClassName('taskCheckbox')

const priorities = ['high', 'normal', 'low']
const dataLayer = []

let taskID = 1

// This method creates an event listener for a checkbox
const createCheckboxEventListener = (checkboxReference) => {
    checkboxReference.addEventListener('click', event => {
        // Change task object in data layer for checkbox to
        // have completeness set to true

        // Split our ID on the dash
        const data = checkboxReference.id.split('-')
        
        // Grab the relevant ID from the 1st element in the array
        const checkboxID = data[1]

        // Iterate over the data layer, looking for the task we've just clicked on
        const checkboxIndex = dataLayer.findIndex(taskIndex => taskIndex.id == checkboxID)
        
        // Change the value of the completeness property at datalayer[index] to true
        const taskObject = dataLayer[checkboxIndex]
        
        // Set the value of complete to the opposite of what it already is
        taskObject.complete = !taskObject.complete
        dataLayer[checkboxIndex] = taskObject

        renderDataLayer(dataLayer)
        checkboxListeners()
    })
}



const renderDataLayer = (tasks) => {
    // Clear our task list
    taskList.innerHTML = ''

    tasks.forEach(task => {
        // Run our tasks through our HTML factory
        // Generate our html
        const htmlString = taskHTML(task)
        const fragment = document.createRange().createContextualFragment(htmlString)

        // Add the task to the container
        taskList.appendChild(fragment)    
    });
}

const checkboxListeners = () => {
    // Update checkbox references
    checkboxes = document.getElementsByClassName('taskCheckbox')

    for (let i = 0; i < checkboxes.length; i++) {
        createCheckboxEventListener(checkboxes[i])
    }
}

// Event listener for save button on form
saveButton.addEventListener('click', event => {
    // Define error divs
    const descriptionError = document.getElementById('descriptionError')
    const priorityError = document.getElementById('priorityError')
    
    // Check description to ensure it isn't empty. Number of characters must be greater than 0
    let taskIsValid = true
    if (taskDescription.value.length === 0) {
        // display an error message
        descriptionError.classList.remove('d-none')

        taskIsValid = false
        // Stop anything else from happening
    }

    // Check priority to ensure it is valid. Must be one of three preexisting options
    if (!priorities.includes(prioritySelect.value)) {
        // display an error message
        priorityError.classList.remove('d-none')
        taskIsValid = false
    }
    
    // Leaving this code in case we need to check the validity
    // of a date later
    //
    // // Check date to ensure it is a real date.
    // const chosenDate = moment(datepicker.value)
    // const isDateValid = chosenDate.format()
    // if (isDateValid === 'Invalid date') {
        
    // }

    // If validation fails, notify the user
    // Otherwise, everything is fine. Carry on.
    if (taskIsValid) {
        // Hide modal when save button is clicked
        $('#addTask').modal('hide')

        // Define our task object
        const task = taskFactory(taskDescription.value, prioritySelect.value, datepicker.value)

        // Add our task to the data layer
        dataLayer.push(task)

        // Generate our html
        const htmlString = taskHTML(task)
        const fragment = document.createRange().createContextualFragment(htmlString)

        // Add the task to the container
        taskList.appendChild(fragment)

        // Update checkbox references
        checkboxes = document.getElementsByClassName('taskCheckbox')

        // Create a reference to the index of checkboxes in our checkbox collection
        const cIndex = checkboxes.length - 1
        
        // Create event listener for newly created checkbox
        const newestCheckbox = checkboxes[cIndex]

        createCheckboxEventListener(newestCheckbox)

        // Reset form elements
        taskDescription.value = null
        prioritySelect.value = 'normal'
        datepicker.value = null 

        // Hide our error divs
        descriptionError.classList.add('d-none')
        priorityError.classList.add('d-none')
    }
})

dataLayer[0] = taskFactory('Task One', 'normal', '')
dataLayer[1] = taskFactory('Task Two', 'normal', '')
dataLayer[2] = taskFactory('Task Three', 'normal', '')

renderDataLayer(dataLayer)
checkboxListeners()