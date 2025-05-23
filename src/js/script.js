var formConteiner = document.getElementById("form-cadastro");

    console.log("1. Form do conteiner", formConteiner)

function cadastrarAluno(event) {
    
    event.preventDefault()

    var nome = document.getElementById("nome").value

    var matricula = document.getElementById("matricula").value

    var idade = document.getElementById("idade").value

    var mae = document.getElementById("mae").value

    var telefone = document.getElementById("telefone").value


    console.log(nome)
    console.log(matricula)
    console.log(idade)
    console.log(mae)
    console.log(telefone)

    console.log("Funçaõ cadastrarAluno chamada")

}

formConteiner.addEventListener("submit", cadastrarAluno)