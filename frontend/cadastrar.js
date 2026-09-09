async function cadastrarFilme() {
    const inputTitle = document.getElementById("title")
    const inputGender = document.getElementById("gender")
    const inputAgeLimit = document.getElementById("ageLimit")
    const inputDuration = document.getElementById("duration")

    if (inputTitle.value === "" || inputGender.value === "" || inputAgeLimit.value === "" || inputDuration.value === "") {
        alert("Preencha todas as informações!")
        return
    }

    const filme = {
        titulo_do_filme: inputTitle.value,
        genero: inputGender.value,
        classificação_etaria: inputAgeLimit.value,
        duracao: inputDuration.value
    }

    const informacoesAEnviar = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filme)
    }

    const resposta = await fetch("https://lilfilmes-miguel31a-goe4.vercel.app/add-movie", informacoesAEnviar)
    const mensagemDecifrada = await resposta.json()

    alert(mensagemDecifrada.message)

    window.location.href = "../index.html"
}