class CadController {
  mostrarMsg() {
    document.getElementById("div-msg").style.display = "flex";
  }

  fecharMsg() {
    document.getElementById("div-msg").style.display = "none";
    document.getElementById("lista").innerHTML = "";
  }

  fecharMenu() {
    document.querySelector("#nav-container").style.width = "0%";
    document.querySelector("nav").style.width = "0%";
    document.querySelector("main").style.width = "100%";
    document.querySelector("ul").style.display = "none";
    document.querySelector("nav h2").style.display = "none";
    document.querySelector("#botao").style.display = "flex";
    document.querySelector("#x").style.display = "none";
  }

  abrirMenu() {
    document.querySelector("#nav-container").style.width = "30%";
    document.querySelector("nav").style.width = "30%";
    document.querySelector("main").style.width = "70%";
    document.querySelector("ul").style.display = "block";
    document.querySelector("nav h2").style.display = "block";
    document.querySelector("#x").style.display = "flex";
    document.querySelector("#botao").style.display = "none";
  }

  validar() {
    if (document.getElementById("nome").value == "") {
      var node = document.createElement("li"); // Cria a <li>
      var textNode = document.createTextNode("Preencha o nome."); // Cria o texto
      node.appendChild(textNode); // colocar o texto na <li> (nó)
      document.getElementById("lista").appendChild(node); //passando o li pra dentro da ul
      this.mostrarMsg();
    }
    if (document.getElementById("email").value == "") {
      var li = document.createElement("li");
      var texto = document.createTextNode("Preencha o email.");
      li.appendChild(texto);
      document.getElementById("lista").appendChild(li);
      this.mostrarMsg();
    }
    if (
      !document.getElementById("masc").checked &&
      !document.getElementById("fem").checked
    ) {
      var li = document.createElement("li");
      var texto = document.createTextNode("Escolha um sexo.");
      li.appendChild(texto);
      document.getElementById("lista").appendChild(li);
      this.mostrarMsg();
    }
    if (document.querySelectorAll("[type=checkbox]:checked").length == 0) {
      var li = document.createElement("li");
      var texto = document.createTextNode("Escolha ao menos um curso.");
      li.appendChild(texto);
      document.getElementById("lista").appendChild(li);
      this.mostrarMsg();
    }
    if (document.getElementById("estado").value == "") {
      var li = document.createElement("li");
      var texto = document.createTextNode("Escolha um estado.");
      li.appendChild(texto);
      document.getElementById("lista").appendChild(li);
      this.mostrarMsg();
    }
    if (document.getElementById("foto").value == "") {
      var li = document.createElement("li");
      var texto = document.createTextNode("Escolha uma imagem.");
      li.appendChild(texto);
      document.getElementById("lista").appendChild(li);
      this.mostrarMsg();
    }
    if (document.getElementById("datanasc").value == "") {
      var li = document.createElement("li");
      var texto = document.createTextNode("Escolha uma data de nascimento.");
      li.appendChild(texto);
      document.getElementById("lista").appendChild(li);
      this.mostrarMsg();
    }
    if (document.getElementById("lista").children.length == 0) {
      texto = document.createTextNode("Salvo com sucesso!");
      document.getElementById("lista").appendChild(texto);
      this.mostrarMsg();
    }
  }
}

var cadastro = new CadController();
