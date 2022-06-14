
const elementoResposta = document.querySelector("#resposta")
const input1 = document.querySelector("#input1")
const button1 = document.querySelector("#button1")
const respostas = [
  "Login realizado com sucesso!",
  "Login/Senha incorreto(a)",
]


//console.log(numeroAleatorio)

function fazerLogin() {

  if(input1.value == "") {
    alert("Digite seu login e senha.")
    return
  }

  button1.setAttribute("disabled", true)

  const entrar = "<div>" + input1.value + "</div>"

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * 2)

  elementoResposta.innerHTML = entrar + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;
setTimeout(function() {
  elementoResposta.style.opacity = 0;
  button1.removeAttribute("disabled")
}, 3000)
}










