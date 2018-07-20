
   // Cria Sessão

   if(window.localStorage){

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    //date
    if(dd < 10){dd = '0' + dd; }
    if(mm < 10){mm = '0' + mm; }

    //time
    if(h < 10){h = '0' + h; }
    if(m < 10){m = '0' + m; }
    if(s < 10){s = '0' + s; }

    var dateValue = dd + '/' + mm + '/' + yyyy + ' - ' + h + ':' + m + ':' + s;

    var user = document.getElementById('user');
    var pws = document.getElementById('pws');

    // Recupera o valor da sessão e devolve para o input

    if(localStorage.getItem('user') == ''){

        user.value = sessionStorage.getItem('user');

    }else{

        user.value = localStorage.getItem('user'); //Recupera o valor da sessão
        pws.value = localStorage.getItem('pws');

    }

    

    user.addEventListener('input', function(){   //Cria a seesão com o valor do input

        localStorage.setItem('user', user.value);
        localStorage.setItem('time', dateValue);
    
    }), false;

    pws.addEventListener('input', function(){

        localStorage.setItem('pws', pws.value);
        localStorage.setItem('time', dateValue);
   
    }), false;


}

 //console.log(getBanco);

 var usuario = (localStorage.getItem('user'));
 var senha = (localStorage.getItem('pws'));
 var tempo = (localStorage.getItem('time'));

 local = JSON.stringify({'email':usuario,'senha':senha, 'time':tempo});

 //console.log(local);
 
 //JSON.stringify(sessao);
  
 local = JSON.parse(local);






 function logar(){

    var banco = [{
        "nome": "Thiago", "sobrenome": "Braga", "email": "thiagomatrix@gmail.com", "senha":"123456"
        },
        {
        "nome": "Isabela", "sobrenome": "Monnerat", "email": "belamonnerat@gmail.com", "senha":"123456"
        }
        ];

var result = {};
var acesso = {};

inputUser = document.getElementById('user').value;
inputPws = document.getElementById('pws').value;

 
 banco.forEach(element => {

    //console.log('banco: ' + element["email"]);
    //console.log('local: ' + local["email"]);


    if(element['email'] == inputUser && element['senha'] == inputPws){

        result = '{';
        result += '"nome"' + ':' + '"' + (element['nome']) + '"'+ ',';
        result += '"sobrenome"' + ':' + '"' + element['sobrenome'] + '"' + ',';
        result += '}';

        acesso = true;

    }
     
 });



//console.log(dateValue);


    if(acesso == true){

        result = result.replace(/\,(?!\s*?[\{\[\"\'\w])/g, ''); 

        result = JSON.parse(result);
        
         console.log(result);
        
         logado = result.nome + ' ' + result.sobrenome;

        logado = localStorage.setItem('usuario', logado); 

        window.location.assign('./get.html'); 

    }else{

        window.location.assign('./index.html');

    }

 }

 //console.log(local);