
   // Cria Sessão

if(window.sessionStorage){

    var user = document.getElementById('user');
    var pws = document.getElementById('pws');

    // Recupera o valor da sessão e devolve para o input

    user.value = sessionStorage.getItem('user'); //Recupera o valor da sessão
    pws.value = sessionStorage.getItem('pws');

    user.addEventListener('input', function(){   //Cria a seesão com o valor do input

        sessionStorage.setItem('user', user.value)
    
    }), false;

    pws.addEventListener('input', function(){

        sessionStorage.setItem('pws', pws.value)
   
    }), false;


}

var banco = {'nome': 'Thiago', 'sobrenome': 'Braga', 'email': 'thiagomatrix@gmail.com', 'pws':'123456'};

 banco = JSON.stringify(banco);  //remove o formato de json e converte para string

 sessionStorage.setItem('chave', banco); //cria a sessão (precisa ser uma string)

 var getBanco = JSON.parse(sessionStorage.getItem('chave')); //pega o valor da sessão e converte para JSON

 console.log(getBanco);