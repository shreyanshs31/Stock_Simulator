const finputBtn = document.getElementById("finput")
const linputBtn = document.getElementById("linput")
const einputBtn = document.getElementById("einput")
const pinputBtn = document.getElementById("pinput")
const button = document.getElementById("button")

finputBtn.value = "First Name"
linputBtn.value = "Last Name"
einputBtn.value = "Email Address"
pinputBtn.value = "Password"

finputBtn.addEventListener("click", function () {
    finputBtn.value = ""
})

linputBtn.addEventListener("click", function () {
    linputBtn.value = ""
})

einputBtn.addEventListener("click", function () {
    einputBtn.value = ""
})

pinputBtn.addEventListener("click", function () {
    pinputBtn.value = ""
})

function showError(errorElement) {
    document.querySelector("."+errorElement).classList.add("display-error")
}

function clearError() {
    let error = document.querySelectorAll(".error");
    for(let err of error) {
        err.classList.remove("display-error");
    }
}

button.addEventListener("click", function() {
    clearError();
    if (finputBtn.value === "") {
        showError("first-name-error")
    } if(linputBtn.value === "") {
        showError("last-name-error")
    } if (einputBtn.value ==="") {
        showError("email-error")
    } if (pinputBtn.value ===""){
        showError("password-error")
    }
})

