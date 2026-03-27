let aluno = {
    nome: "Jonathan",
    nota: [7,8,9],

    calcularMedia(){
        let soma = this.nota.reduce((total,nota) => total + nota, 0)
        return soma / 3

    }
}

const { nome } = aluno
console.log("Nome do aluno ->", nome)

const novaNota = [...aluno.nota,10]
console.log("Nova nota ->", novaNota)