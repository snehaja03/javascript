const validateForm = (event) => {
    event.preventDefault();
    let username = event.target.username
    let password = event.target.password
    let error = document.getElementById("error");
    if(username.value == "")
    {
        error.innerHTML = "Please enter Username"
        username.style.borderColor = "red";
    }
    if(password.value == "")
    {
        error.innerHTML = "Please enter Password"
        password.style.borderColor = "red";
    }
    if(username.value == "" && password.value == "")
    {
        error.innerHTML = "Please enter Username and Password"
        username.style.borderColor = "red"
        password.style.borderColor = "red"
    }
}