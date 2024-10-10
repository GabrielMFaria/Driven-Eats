let comidas = "";
let refrigerantes = "";
let doces = "";
let EscolhasComidas = "";
let EscolhasRefrigerantes = "";
let EscolhasDoces = "";
let preçoPrato = 0
let preçoRefri = 0
let preçoDoce = 0

function pedidoscomida(clique){
  EscolhasComidas = clique.innerHTML;
  let nomeComida = clique.querySelector("h1").innerHTML;
  let valorComida = clique.querySelector("p2").innerHTML;
  let cliqueantes = document.querySelector(".comidas .escolhido")
  if(cliqueantes !== null){
    cliqueantes.classList.remove("escolhido")
  }
  clique.classList.add("escolhido")
  comidas = nomeComida
  preçoPrato = Number (valorComida)
  if(comidas !== "" && refrigerantes !== "" && doces !== ""){
    let mudança = document.querySelector(".selecionar")
    mudança.innerHTML = "Fechar pedido"
    mudança.classList.remove("selecionar") 
    mudança.classList.add("botao-verde") 
  } 
}
function pedidosbebidas(clique){
  EscolhasRefrigerantes = clique.innerHTML;
  let nomeRefri = clique.querySelector("h1").innerHTML;
  let valorRefri = clique.querySelector("p2").innerHTML;
  let cliqueantes = document.querySelector(".bebidas .escolhido")
  if(cliqueantes !== null){
    cliqueantes.classList.remove("escolhido")
  }
  clique.classList.add("escolhido")
  refrigerantes = nomeRefri
  preçoRefri = Number (valorRefri)
  if(refrigerantes !== "" && comidas !== "" && doces !== ""){
    let mudança = document.querySelector(".selecionar")
    mudança.innerHTML = "Fechar pedido" 
    mudança.classList.remove("selecionar") 
    mudança.classList.add("botao-verde")
  }
  
}
function pedidossobremesa(clique){
  EscolhasDoces = clique.innerHTML;
  let nomeDoce = clique.querySelector("h1").innerHTML;
  let valorDoce = clique.querySelector("p2").innerHTML;
  let cliqueantes = document.querySelector(".sobremesa .escolhido")
  if(cliqueantes !== null){
    cliqueantes.classList.remove("escolhido")
  }
  clique.classList.add("escolhido")
  doces = nomeDoce
  preçoDoce = Number (valorDoce)
  if(doces !== "" && comidas !=="" && refrigerantes !== ""){
    let mudança = document.querySelector(".selecionar")
    mudança.innerHTML = "Fechar pedido"
    mudança.classList.remove("selecionar") 
    mudança.classList.add("botao-verde")
  }
}
function Finalizar(){
  if(EscolhasComidas !== ""){
    if(EscolhasRefrigerantes !== ""){
      if(EscolhasDoces !== ""){
        document.querySelector(".tela").classList.remove("escondido");
        const totalPedido = (preçoPrato + preçoRefri + preçoDoce).toFixed(2);
        const EscolhasPrato = `-${comidas} : ${preçoPrato.toFixed(2)}`;
        document.querySelector(".status p1").innerHTML = EscolhasPrato;
        const EscolhasRefri = `-${refrigerantes} : ${preçoRefri.toFixed(2)}`;
        document.querySelector(".status p2").innerHTML = EscolhasRefri;
        const EscolhasSobremesa =`-${doces} : ${preçoDoce.toFixed(2)}`;
        document.querySelector(".status p3").innerHTML = EscolhasSobremesa;
        const Total = `Total: ${totalPedido}`;
        document.querySelector(".status p4").innerHTML = Total
        const mensagemWhatsApp = `Olá, gostaria de fazer o pedido:\n -${comidas} : ${preçoPrato.toFixed(2)}\n -${refrigerantes} : ${preçoRefri.toFixed(2)}\n -${doces} : ${preçoDoce.toFixed(2)}\n Total:  ${totalPedido}`;
        const urlWhatsApp = `https://wa.me/5512981454290?text=${encodeURIComponent(mensagemWhatsApp)}`;
        document.querySelector(".status a").setAttribute("href", urlWhatsApp);
      }
    }
  }
}
function cancelar(){
  document.querySelector(".tela").classList.add("escondido")
}

