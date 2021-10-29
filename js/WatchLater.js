$(document).ready(function() {
    console.log("Doc Ready")
})

$(function() {
    // checking session storage. 

    var test = sessionStorage.getItem("username");
    console.log(test);

    if (test === null) {
        window.location.href = "../pages/login.html";
    } else {
        console.log("working")
    }
})