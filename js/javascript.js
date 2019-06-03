var tratadorDeFormulario = new TratadorDeFormulario();

function TratadorDeFormulario(event) {
    this.aceitaSomenteNumeros = function (event) {
        if (!isNaN(String.fromCharCode(event.keyCode))) {
            return true;
        } else {
            return false;
        }
    }
}

var form = document.querySelector('#formulario');

function obtemDadosDoFormulario(form) {
    var dadosDoFormulario = {
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

document.getElementById('salvar').addEventListener("click", function (event) {



    if (form.checkValidity() === false) {
        console.log('dentro do if');

        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
    } else {
        console.log('dentro do else');

        var dadosDoForm = obtemDadosDoFormulario(form);
        var divAlerta = document.querySelector('#div-Alerta');
        console.log('buscando do html', divAlerta);

        var alertaPrenchido = criaMensagemDoFormulario(dadosDoForm);
        divAlerta.appendChild(alertaPrenchido);
        event.preventDefault();
        event.stopPropagation();
    }

});

function criaMensagemDoFormulario(dadosDoForm) {

    var divAlert = document.createElement('div');
    if (verificarMaioridade(dadosDoForm))
        divAlert.classList.add("alert-success");
    else
        divAlert.classList.add("alert-danger");


    var tituloH4 = document.createElement('h4');
    tituloH4.classList.add("alert-heading");
    var paragrafo = document.createElement('p');
    paragrafo.classList.add("mb-0");

    tituloH4.textContent = dadosDoForm.sobreNome + " " + dadosDoForm.nome;
    // tituloH4.textContent = dadosDoForm.sobreNome;

    paragrafo.textContent = dadosDoForm.cpf;

    divAlert.appendChild(tituloH4);
    divAlert.appendChild(paragrafo);

    return divAlert;
}

function verificarMaioridade(dadosDoForm) {

    if (dadosDoForm.idade > 18) {
        return true;
    } else {
        if (dadosDoForm.idade <= 18)
            return false;
    }
}

