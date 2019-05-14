function TratadorDeFormulario(){
    var idade;
    self = this;
    
    this.exibeValorIdade = function(){
        this.idade = document.getElementById('idade').value;
        console.log(this.idade);        
    }

    this.salvar = function(){
        this.exibeValorIdade();

    }

    this.mutiplicaIdadePeloValorPassado = function( valor){
        var minhaIdade = document.getElementById('idade').value;
        var idadeTotal = valor * minhaIdade;
        console.log('Retorno da Funcao MultiplicaIdade ', idadeTotal);
        console.log('Teste 1 ' + self);
        console.log('teste 2', self);
    }

    document.getElementById('salvar').addEventListener("click",function(){
        console.log('teste salvar');
        self.salvar();
        self.mutiplicaIdadePeloValorPassado(10);
    })

    this.aceitaSomenteNumeros = function(event){
        if(!isNaN(String.fromCharCode(event.keyCode))){
            return true;
        }else{
            return false;
        }
    }
}

var tratadorDeFormulario = new TratadorDeFormulario();
