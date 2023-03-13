

function validacaoDeEmail(){
    usuario = field.value.substring(0, find.vallue.indexOf("@"));
    email = field.value.substring(field.value.indexOf("@") + 1 , field.value.length)


    alert(usuario.length());

}

function enviarEmail(){
    validacaoDeEmail();
}


