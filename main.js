const seletor = document.querySelector(".seletor");
const basicPreco = document.getElementById("preco1");
const proPreco = document.getElementById("preco2");
const masterPreco = document.getElementById("preco3");

seletor.addEventListener("change", ()=>{
    if(seletor.checked){
        basicPreco.innerHTML = '<span>$</span>199.99';
        proPreco.innerHTML = '<span>$</span>249.99';
        masterPreco.innerHTML = '<span>$</span>399.99';
    }else{
        basicPreco.innerHTML = '<span>$</span>19.99';
        proPreco.innerHTML = '<span>$</span>24.99';
        masterPreco.innerHTML = '<span>$</span>39.99';
    }
})
