window.onload = function(){
    var url = "https://oscorvosdeodin.profrodolfo.com.br/ArtsPlay/apobra.php";

    fetch(url)
    .then(resposta=> {
        return resposta.json();
    })
    .then(function (json){
        var d = document.querySelector('.acervo');
        var texto = '';
        for(i = 0; i < json.length; i++){
            texto += '<div class="row">';
            texto += '<div class="col-5 text-light fonte">';
            texto += '<img class="img-fluid" src="https://oscorvosdeodin.profrodolfo.com.br/ArtsPlay/imgs/'+json[i].cd+"/"+json[i].foto+'">';
            texto += '</div>';
            texto += '<div class="col-7 text-light fonte">';
            texto += '<h1>'+json[i].titulo+'</h1>';
            texto += '<h3>'+json[i].ano+'</h3>';
            texto += '<i class="uil uil-heart" value="'+json[i].cd+'"> </i>';
            texto += '</div>';
            texto += '</div>';
            texto += '<br>';
        }
        d.innerHTML += texto;
    }).catch();

    const filtro = document.querySelector("#filtro");

    filtro.addEventListener('click', function(){
        var o = document.getElementById('obra');
        fetch(url+'?ot='+o.value)
        .then(resposta=> {
            return resposta.json();
        })
        .then(function (json){
            var d = document.querySelector('.acervo');
            var texto = '';
            for(i = 0; i < json.length; i++){
                texto += '<div class="row">';
                texto += '<div class="col-5 text-light fonte">';
                texto += '<img class="img-fluid" src="https://oscorvosdeodin.profrodolfo.com.br/ArtsPlay/imgs/'+json[i].cd+"/"+json[i].foto+'">';
                texto += '</div>';
                texto += '<div class="col-7 text-light fonte">';
                texto += '<h1>'+json[i].titulo+'</h1>';
                texto += '<h3>'+json[i].ano+'</h3>';
                texto += '<i class="uil uil-heart" value="'+json[i].cd+'"> </i>';
                texto += '</div>';
                texto += '</div>';
                texto += '<br>';
            }
            d.innerHTML = texto;
        }).catch();

    });
}