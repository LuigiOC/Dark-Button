
function changeColor (){

    let body = document.body;

        body.classList.toggle("body_dark")


    let botao = document.   querySelector(".btn_light");

        botao.classList.toggle("btn_dark");



    let texto = document.querySelector(".white");

        if (body.classList == "body_dark"){
            texto.innerHTML = "Dark"
        } else {
            texto.innerHTML = "White"
        }
}


// pegar variavel h1
// quando clicar no botao variavel h1 vai sofrer innerhtml
//quando clicar novamente ela volta ao padrao original





