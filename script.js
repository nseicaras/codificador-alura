var textArea = document.querySelector('.texto__crip');
var mensagem = document.querySelector('.texto__descrip');
var conteudoAreaCopia = document.querySelector('.caixa__terciaria');
var conteudoMensagens = document.querySelector('.caixa__secundaria');
var campoCopia = document.getElementById('areaCopia');


function btnCriptografar() {
    var textoCriptografado = criptografa(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = '';
};

function criptografa(stringCriptada) {
    let matrizCodigo = [['e', 'enter'] , ['i', 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringCriptada = stringCriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptada.includes(matrizCodigo[i][0])) {
            stringCriptada = stringCriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

            conteudoAreaCopia.style.display = 'block';
            conteudoMensagens.style.display = 'none';
        };
    };
    
    return stringCriptada;
};

function btnDescriptografar() {
    var textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea = '';
};

function descriptografar(stringDescriptada) {
    
    let matrizCodigo = [['e', 'enter'] , ['i', 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

            conteudoAreaCopia.style.display = 'block';
            conteudoMensagens.style.display = 'none';
        };
    };

    return stringDescriptada;
};

function btnCopiar() {
    navigator.clipboard.writeText(campoCopia.value).then(() => {
        alert('Texto Copiado!');
        location.reload();
    });
};