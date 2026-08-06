// =========================
// MENU SUAVE
// =========================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        destino.scrollIntoView({
            behavior:"smooth"
        });

    });

});


// =========================
// ANIMAÇÃO AO APARECER
// =========================

const elementos = document.querySelectorAll(
    ".card, .evento, .imagem, .texto"
);


const aparecer = () => {

    elementos.forEach(elemento => {

        const altura = elemento.getBoundingClientRect().top;

        const tela = window.innerHeight - 100;


        if(altura < tela){

            elemento.classList.add("mostrar");

        }

    });

};


window.addEventListener(
    "scroll",
    aparecer
);


aparecer();


// =========================
// CONTADOR DE ESTATÍSTICAS
// =========================


const numeros = document.querySelectorAll(
    ".numeros h1"
);


let iniciou = false;


function contador(){

    const secao = document.querySelector(
        ".estatisticas"
    );

    const posicao = secao.getBoundingClientRect().top;


    if(
        posicao < window.innerHeight &&
        iniciou == false
    ){

        numeros.forEach(numero => {


            let valorFinal = 
            Number(
                numero.innerText.replace("+","")
            );


            let atual = 0;


            let intervalo = setInterval(()=>{


                atual += Math.ceil(
                    valorFinal / 50
                );


                if(atual >= valorFinal){

                    atual = valorFinal;

                    clearInterval(intervalo);

                }


                numero.innerText =
                atual + "+";


            },40);


        });


        iniciou = true;

    }

}


window.addEventListener(
    "scroll",
    contador
);



// =========================
// EFEITO HEADER
// =========================


window.addEventListener(
"scroll",
()=>{


    const header =
    document.querySelector("header");


    if(window.scrollY > 100){

        header.style.background =
        "rgba(0,0,0,0.95)";

    }

    else{

        header.style.background =
        "rgba(0,0,0,0.85)";

    }


});



// =========================
// BOTÃO VOLTAR AO TOPO
// =========================


const topo = document.createElement(
"button"
);


topo.innerHTML="↑";


topo.className="topo";


document.body.appendChild(topo);



window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 500){

        topo.style.display="block";

    }

    else{

        topo.style.display="none";

    }


});


topo.addEventListener(
"click",
()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



// =========================
// CURSOR DE VELOCIDADE
// =========================


document.addEventListener(
"mousemove",
(e)=>{


    const brilho =
    document.createElement("div");


    brilho.className="brilho";


    brilho.style.left =
    e.pageX+"px";


    brilho.style.top =
    e.pageY+"px";


    document.body.appendChild(brilho);



    setTimeout(()=>{

        brilho.remove();

    },500);


});