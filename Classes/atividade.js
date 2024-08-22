function salvar(){
    const graus = document.querySelectorAll('input[name="a"]');
    let valorselecionado;
    for(const grau of graus){
        if(grau.checked){
            valorselecionado = grau.value;
            return valorselecionado;
        }
    }
}

function salvar1() {
    const checkboxes = document.querySelectorAll('input[name="Transporte"]:checked');
    let selecionados = [];

    checkboxes.forEach((checkbox) => {
        selecionados.push(checkbox.value);
    });

    return selecionados;
}

function botao(){
    const cadastro = new Object();
        cadastro.nome= document.getElementById("Nome").value,
        cadastro.idade=document.getElementById("Idade").value,
        cadastro.escolaridade= salvar();
        cadastro.transporte = salvar1();
        



        document.getElementById("demo").innerHTML = `${cadastro.nome} ${cadastro.idade} ${cadastro.escolaridade} ${cadastro.transporte}`
}

