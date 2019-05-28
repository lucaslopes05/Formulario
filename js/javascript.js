var tratadorDeFormulario = new TratadorDeFormulario();

function TratadorDeFormulario(event){
  
    // this.mutiplicaIdadePeloValorPassado = function( valor){
    //     var minhaIdade = document.getElementById('idade').value;
    //     var idadeTotal = valor * minhaIdade;
    //     console.log('Retorno da Funcao MultiplicaIdade ', idadeTotal);
    //     console.log('Teste 1 ' + self);
    //     console.log('teste 2', self);
    // }


    this.aceitaSomenteNumeros = function(event){
        if(!isNaN(String.fromCharCode(event.keyCode))){
            return true;
        }else{
            return false;
        }
    }
}

var form  = document.querySelector('#formulario');

function obtemDadosDoFormulario(form){
var dadosDoFormulario={
    nome: form.nome.value,
    sobreNome: form.sobrenome.value,
    idade: form.idade.value,
    cpf: form.cpf.value,
    endereco: form.endereco.value,
    estado: form.estado.value,
    cep: form.cep.value,
} 
return dadosDoFormulario;
}

document.getElementById('salvar').addEventListener("click",function(event){
    event.preventDefault();
    // console.log('teste salvar');
    var dadosDoForm = obtemDadosDoFormulario(form);
    console.log(dadosDoForm);

    var divAlerta = document.querySelector('#div-Alerta');
    console.log('buscando do html', divAlerta);
    
    var alertaPrenchido = criaMensagemDoFormulario(dadosDoForm);
    console.log(alertaPrenchido);
    divAlerta.appendChild(alertaPrenchido);
    
    
    form.reset();
});

function criaMensagemDoFormulario(dadosDoForm){

    var divAlert = document.createElement('div');
    if(verificarMaioridade(dadosDoForm))
        divAlert.classList.add("alert-success");
    else
        divAlert.classList.add("alert-danger");
    
    
    var tituloH4 = document.createElement('h4');
    tituloH4.classList.add("alert-heading");
    var paragrafo = document.createElement('p');
    paragrafo.classList.add("mb-0");

    tituloH4.textContent = dadosDoForm.sobreNome+" "+dadosDoForm.nome;
    // tituloH4.textContent = dadosDoForm.sobreNome;

    paragrafo.textContent = dadosDoForm.cpf;

    divAlert.appendChild(tituloH4);
    divAlert.appendChild(paragrafo);
    
    return divAlert;
}

function verificarMaioridade(dadosDoForm){

    if(dadosDoForm.idade > 18){
        return true;
    }else{
        if(dadosDoForm.idade <= 18)
            return false;
    }
}

