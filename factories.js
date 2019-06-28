// Define an object factory that will accept our data and return a task object
export const taskFactory = (description, priority, dueDate) => {
    const complete = false
    const id = taskID
    taskID += 1
    return {description, dueDate, priority, complete, id}
}

// Define a factory that returns HTML based on the contents of the task object
export const taskHTML = (targetTask) => {
    let taskColor = 'text-normal'

    switch (targetTask.priority) {
        case 'high':
            taskColor = 'text-danger'
        break
        case 'low':
            taskColor = 'text-info'
        break
    }

    // Ternary if statement. If no date is present, do not render date button
    const dateButton = targetTask.dueDate !== '' ? `<div class="input-group-append">
                            <button class="btn btn-outline-secondary ${taskColor} font-weight-bold" type="button" id="button-addon2">${targetTask.dueDate}</button>
                        </div>` : `&nbsp;`

    const strikethrough = targetTask.complete ? 'strike' : null

    let description = `<input type="text" class="form-control ${strikethrough} ${taskColor} font-weight-bold" value="${targetTask.description}" readonly>`

    const html = `<div class="row">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="checkbox" class="taskCheckbox" id="checkbox-${targetTask.id}">
                        </div>
                    </div>
                    ${description}
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary ${taskColor}" type="button" id="button-addon2"><i class="fas fa-exclamation-triangle"></i></button>
                    </div>
                    ${dateButton}
                </div>
            </div>`
    return html
}