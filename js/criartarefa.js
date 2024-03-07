async function newTask() {
    const descricao = document.getElementById('titulo').value
    const dataConclusao = document.getElementById('data').value

    const id = ''


    const newTask = {
        titulo,
        prazo,
        prioridade,
        descricao
    }

    const url = 'http://localhost:8080/tarefas'

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newTask)
    }

    await fetch(url, options)
}