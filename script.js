const commentsContainer = document.getElementById('new-comments-section')
// let = commentbox = document.getElementById('comment-div-template')
const form = document.getElementById('input-form')
const fname = document.getElementById('first-name-input')
const lname = document.getElementById('last-name-input')
const comment = document.getElementById('comment-output')
const submitButton = document.getElementById('submit-button')

function postComment() {
    let newCommentDiv = document.createElement('div')
    if (fname.value === "") {
        alert("You haven't written your first name")
        return     
    }
    if (lname.value === "") {
        alert("You haven't written your last name")
        return     
    }
    if (comment.value === "") {
        alert("You haven't written your comment")
        return     
    }
    const now = new Date()
    const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "America/Mexico_City",
        timeZoneName: "short",
      };
    const commentDay = Intl.DateTimeFormat("es-MX", options).format(now);
    const random = Math.random()
    const uuid = Math.floor(random * 10000)
    newCommentDiv.id = "C" + uuid
    newCommentDiv.innerHTML =
    `<div class="comment-div-template">
        <img src="user.png" alt="User Profile Picture">
        <div id="comments-div" class="comments-div">
            <div id="comments-info" class="comments-info">
                <div id="user-name" class="user-name">
                    <span id="user-info" class="user-info">${fname.value} ${lname.value}</span>
                    <span id="date-info" class="date-info">${commentDay}</span>
                </div>
                <div id="delete-button" class="delete-button">
                    <button type="button" id=${uuid} class="delete-comment-button">Delete Post</button>
                </div>
            </div>
            <div id="comment" class="comment">
                <p id="comment-text" class="comment-text">${comment.value}</p>
            </div>
        </div>
    </div>`
    commentsContainer.appendChild(newCommentDiv)
    fname.value = ""
    lname.value = ""
    comment.value = ""
    const deleteButtons = document.querySelectorAll(".delete-button button")
    for (let i = 0; i < deleteButtons.length; i++){
        const deleteButton = deleteButtons[i]        
        deleteButton.addEventListener('click', function(){
            const id = deleteButton.getAttribute("id")
            const deleteDiv = document.querySelector(`#C${id}`)            
            deleteDiv && deleteDiv.remove()
        })
    }
}

submitButton.addEventListener("click", postComment)
