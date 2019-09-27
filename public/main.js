function showProtocol(){ 
    document.querySelector(".portal-rastreabilidade").style.background = "#ffffff"; 
    document.querySelector(".background-corte").style.background = "none";  
    document.querySelector(".footerbar").style.display = "none";
    // document.querySelector(".titulo-header").style.display = "block"
    // document.querySelector(".navbar-container").style.marginRight = "17vw"
    document.getElementById('content').innerHTML = 
  '<p> PROTOCOLO java script</p>';   
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

    document.querySelector(".footerbar").style.display = "flex";
    // document.querySelector(".titulo-header").style.display = "none"
    // document.querySelector(".navbar-container").style.marginRight = "0"     
    document.getElementById('content').innerHTML = 
    '<div class="home-header">'+
        '<div class="home-header-content">'+
        '<h1 class="portal">Portal</h1>'+
        '<h2 class="rastreabilidade">Rastreabilidade</h2>'+
        '</div>'+
    '</div>;'   
}

