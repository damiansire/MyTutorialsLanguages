
function getUserComment(comment){
    let commentElement = comment.children[0].children[0].children[1];
    let commentUser = commentElement.children[0].children[0].textContent;
    return commentUser
}

function getUsersNames(){
    let allComment = document.getElementsByClassName("PlatformComment__Wrap-VGQIK kHrIoA")
    allComment = Array.from(allComment)
    allCommentUser = allComment.map(comment => getUserComment(comment))
    allCommentUser = new Set(allCommentUser)
    let userString = "\n"
    allCommentUser.forEach(userName => {
        userString = userString + " \n" + userName;
    });
    userString +=  "\n"
    return userString;
}

