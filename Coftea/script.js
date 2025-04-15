function login(){
    let loginID = document.getElementById("loginID");
    let password = document.getElementById("passwordInput");
    if (loginID != "User" && password != "123"){
        window.location.href = "POS-Menu.html";
        document.getElementById("loginID").value = "";
        document.getElementById("passwordInput").value = "";
    }
}