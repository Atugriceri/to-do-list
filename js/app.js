document.querySelector('#to-do-form').addEventListener('submit', formCheck)
const TO_DO_INPUT = document.querySelector('#to-do-input')
const TO_DO_UL_DOM = document.querySelector('#to-do-list')
const ALERT_DOM = document.querySelector('#alert-DOM')

TO_DO_UL_DOM.addEventListener('click', event => {
    if(event.target.name === 'delete') {
        deleteItem(event.target)
        ALERT_DOM.innerHTML = alertFunction('', 'To do has been deleted.', type="danger")
    }
    if(event.target.name === 'check') {
        checkItem(event.target)
        ALERT_DOM.innerHTML = alertFunction('', 'To do has been completed.', type="success")
    }
})

function deleteItem(item) {
    item.parentElement.parentElement.parentElement.remove()
}

function checkItem(item) {
    item.innerHTML = item.innerHTML.trim()
    if (item.innerHTML === 'Check') {
        item.classList.remove('btn-secondary')
        item.classList.add('btn-success')
        item.innerHTML = "Checked"
        item.parentElement.parentElement.classList.add('text-success', 'fw-bolder')
    } else {
        item.classList.remove('btn-success')
        item.classList.add('btn-secondary')
        item.innerHTML = "Check"
        item.parentElement.parentElement.classList.remove('text-success', 'fw-bolder')
    }

}

function formCheck(event) {
    event.preventDefault()
    
    if (TO_DO_INPUT.value) {
        addToDo(TO_DO_INPUT.value)
        TO_DO_INPUT.value = ""
    } else {
        ALERT_DOM.innerHTML = alertFunction('OPPS!', 'You did not add a to do.')
    }
}

function addToDo(todo) {
    let li = document.createElement('li')
    li.innerHTML = `
        <div class="d-grid gap-2 d-md-flex justify-content-md-between">
            ${todo}
            <div>
                <button name="check" class="btn btn-secondary me-md-2" type="button">Check</button>
                <button name="delete" class="btn btn-danger" type="button">Delete</button>
            </div>
        </div>
    `
    li.classList.add('list-group-item') //Add Class
    TO_DO_UL_DOM.prepend(li) 
}

function alertFunction(title, message, type="warning") {
    return `
    <div  class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${title}</strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
}