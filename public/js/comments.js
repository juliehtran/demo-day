$(document).ready(async () => {
    const response = await fetch('/api/comments')
    const comments = await response.json()
    comments.forEach(comment => addCommentToFeed(comment))
})

function addCommentToFeed(comment) {
    $(`#js-comment-feed`).prepend(`
        <div class="comment card">
            <div class="card-body">
                <h2 class="username card-title">${comment.user.local.email} wrote:</h2>
                <i class="fa fa-times-circle delete-button"></i>
                <p class="date">${new Date(comment.createdAt)}</p>
                <p class="message card-text">${comment.message}</p>
            </div>
        </div>
    `)
}

$(`.comment-form`).on('submit', async (event) => {
    // do not submit the form
    event.preventDefault()

    // get the message from the input box
    const input = event.target.querySelector('.js-comment-box')
    const message = input.value;

    // create an HTTP request
    const requestOptions = {
        method: event.target.method,
        body: JSON.stringify({ message }),
        headers: { "Content-Type": "application/json" }
    }

    // send request to server
    const response = await fetch(event.target.action, requestOptions)

    // parse response as text because it's HTML
    const comment = await response.json()

    // put the HTML in the DOM
    addCommentToFeed(comment)

    // clear the input box
    input.value = ""
})

document.querySelectorAll('.delete-button').forEach(deleteButton => {
    deleteButton.addEventListener('click', onDeleteClicked)
})

function onDeleteClicked(event) {
    const deleteButton = event.target
    const comment = deleteButton.closest('.comments')
    const id = comment.id
    fetch('/comments', {
        method: `DELETE`,
        body: JSON.stringify({ id: id }),
        headers: { "Content-Type": `application/json` }
    }).then(() => window.location.reload())
}
