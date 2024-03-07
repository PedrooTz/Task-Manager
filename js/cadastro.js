'use strict'

const cadastrar = document.getElementById('cadastrar')

const cadastrarUsuario = async () => {
    const nome = getElementById('name').value
    const email = getElementById('email').value
    const senha = getElementById('password').value

    let validacaoEmail, validacaoSenha, usuarioJSON = {}

    if(nome != '' && email != '' && email != ''){
        if(email.toUpperCase() == usuario.email.toUpperCase()){

            alert('Email já cadastrado')
                            
        }else{
            
            validacaoEmail = usuario.email
            validacaoSenha = usuario.senha
                            
            usuarioJSON.nome = nome
            usuarioJSON.email = email
            usuarioJSON.senha = senha
                            
        }
    }
}

cadastrar.addEventListener('click', cadastrar)









