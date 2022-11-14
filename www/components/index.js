window.onload = function(){
    let form = document.getElementById("entrar");
    let login = document.getElementById("login");
    let senha = document.getElementById("senha");

    form.addEventListener("click", function(){
        let formData = new FormData();
        formData.append('login', `${login.value}`);
        formData.append('senha', `${senha.value}`);

        fetch("https://oscorvosdeodin.profrodolfo.com.br/ArtsPlay/apusuario.php", 
            {
                body: formData, 
                method: "post",
                mode: 'cors',
                cache: 'default'
        })  .then(response => {response.json()
        .then(data => {
            if(data.erro){
                alert("Usuário e/ou senha inválido!");
            }else{
                localStorage.setItem('apusuario', JSON.stringify(data.dados));
                window.location.replace("menu.html");
            }
        })
        });
    });

    Verifica();

    function Verifica(){
        let user = localStorage.usuario;
        if(user){
            window.location.replace("menu.html");
        }
    }
}