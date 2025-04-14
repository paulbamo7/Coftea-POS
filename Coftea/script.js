function login(){
    let loginID = document.getElementById("loginID");
    let password = document.getElementById("passwordInput");
    if (loginID != "User" && password != "123"){
        alert("Nice");
        document.getElementById("loginID").value = "";
        document.getElementById("passwordInput").value = "";
    }
}