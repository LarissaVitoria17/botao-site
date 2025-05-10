let botao = document.querySelector("#botao");
botao.style.background="blue";
let estaQuebado=false
let ContaCliques=0;

botao.addEventListener("mouseover",e =>{
    if(!estaQuebado){
    botao.style.background="green";
    botao.style.color="white";
    }
});

botao.addEventListener("mouseout",e =>{
    if(!estaQuebado){
    botao.style.background="blue";
    }
});

botao.addEventListener("click",e =>{
    ContaCliques++;//ContaCliques=ContaCliques+1;
    if(ContaCliques>=10){
    botao.style.background="red";
    botao.innerHTML="quebrei";
    estaQuebado=true;
    }
});