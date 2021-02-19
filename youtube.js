    function getUsersNames(){
        let allUserElement = document.querySelectorAll("#author-name")
        allUserElement = Array.from(allUserElement)
        let allCommentUser = allUserElement.map(comment => getCommentText(comment))
        allCommentUser = new Set(allCommentUser)
        console.log(allCommentUser)
        let userString = "\n"
        allCommentUser.forEach(userName => {
            userString = userString + " \n" + userName;
        });
        userString +=  "\n"
        return userString;
    }

function getCommentText(commentElement){
    let commentText = commentElement.textContent;
    return commentText
}
