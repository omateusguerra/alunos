class Aluno {

    nome;
  
    matricula;
  
    nota1;
  
    nota2;
  
    nota3;
  
     constructor(nome, matricula, n1, n2, n3) {
  
       this.nome = nome;
  
       this.matricula = matricula;
  
       this.nota1 = n1;
  
       this.nota2 = n2;
  
       this.nota3 = n3;

    }
  
     exibeInfo() {
  
       return `Aluno: ${this.nome} - Matrícula: ${this.matricula}
  
      Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3}
  
      Média:${this.calculaMedia()} 
  
      `;
  
    }
  
     calculaMedia() {
  
       return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
  
    }
}

function cadAluno(nome, matricula, n1, n2, n3){
    var a1 = new Aluno();

    a1.nome = nome
    a1.nota1 = n1
    a1.nota2 = n2
    a1.nota3 = n3
    a1.matricula = matricula
    document.getElementById('test').innerText = a1.exibeInfo()


    var tb = document.getElementById("tbAlunos");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);
  
    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellMatricula = linha.insertCell(2);
    var cellNota1 = linha.insertCell(3);
    var cellNota2 = linha.insertCell(4);
    var cellNota3 = linha.insertCell(5);
    var cellMedia = linha.insertCell(6);

    var media = (n1+n2+n3)/3

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellMatricula.innerHTML = matricula;
    cellNota1.innerHTML = n1;
    cellNota2.innerHTML = n2;
    cellNota3.innerHTML = n3;
    cellMedia.innerHTML = media;
}
