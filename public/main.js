function showProtocol(){ 
    document.querySelector(".portal-rastreabilidade").style.background = 'none'; 
    document.querySelector(".background-corte").style.background = "none";  
    document.querySelector(".footer").style.display = "none"; ; 

    document.getElementById('protocol-form-container').style.display = "flex";
    document.getElementById('home').style.display = "none";
     
}


function showHome(){ 

    let portalRastreabilidade = document.querySelector(".portal-rastreabilidade");   
    portalRastreabilidade.style.backgroundImage = "url('https://i.imgur.com/oKDnE5W.jpg')";
    portalRastreabilidade.style.backgroundRepeat = "no-repeat";
    portalRastreabilidade.style.backgroundSize = "cover";
    portalRastreabilidade.style.backgroundPosition = "center";
    

    let backgroundCorte = document.querySelector(".background-corte");
    backgroundCorte.style.background = "url('https://i.imgur.com/2ImRW7D.png')"; 
    backgroundCorte.style.backgroundRepeat = "no-repeat";
    backgroundCorte.style.backgroundSize = "cover";
    backgroundCorte.style.backgroundPosition = "center"; 

    document.querySelector(".footer").style.display = "flex";        
       
}

