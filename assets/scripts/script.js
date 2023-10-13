
const container = document.querySelector(".container")
const dispensar = document.querySelector(".menssagem-sucesso")
const input = document.querySelector(".email")

function invalidarImput() {

   input.classList.remove('bordas')
   input.classList.add('bordas-vermelas')
   alert("Preencher campos obrigatórios")
}

function trocaDiplay (){
   container.classList.add('display-delete')
   dispensar.classList.remove('display-delete')
   console.log(input.value)
   document.querySelector("#email-usuario").innerText = input.value
}
document.addEventListener('keypress', function (event) {
   if (event.key === 'Enter') {
      if (input.value == "") {
         invalidarImput()
         return
      }
      else {
       trocaDiplay()
      }
   }
});
document.querySelector(".btn").addEventListener("click", () => {
   console.log(input.value)
   if (input.value == "" ) {
      invalidarImput()
      return
   }
   else {
      trocaDiplay()
   }
})

document.querySelector(".btn-dispensar").addEventListener("click", () => {
   container.classList.remove('display-delete')
   dispensar.classList.add('display-delete')
   input.classList.remove('bordas-vermelhas')
   input.value = ""
})





