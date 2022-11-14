window.onload = function(){
    let sair = document.getElementById('sair');

    sair.addEventListener('click', function(){
        localStorage.removeItem('login');
        window.location.replace('index.html');
    });
}