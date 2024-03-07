const button = document.getElementById('login');

async function  validarLogin(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;


    if(nome === '' || email === '' || senha === '' ){
        alert('É necessário prencher todos os campos!')
    } else {
        const users = await fetch('http://localhost:8080/usuario')
        const listUsers = await users.json()

        listUsers.forEach((user) => {
            if(nome === user.nome && email === user.email && senha === user.senha ){
                alert('Usuário Logado com Sucesso !!!')
                window.location.href='../pageshtml/inicial.html'
              
            }
        })

    }

}

window.onload = () => {
    button.addEventListener('click', validarLogin)
}

