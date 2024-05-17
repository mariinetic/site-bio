document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "biomedicos23@gmail.com" && password === "f@rmatura26") {

        window.location.href = "index2.html";
    } else {
        alert("Nome de usuário ou senha incorretos. Por favor, Consulte ao Vitor ou a Mirela.");
    }
});