// FUNÇÃO MAQUINA DE ESCREVER
var content = 'Developer,Freelancer, Designer,Creative!';
var text = document.getElementById('type-span');

var speed = 190;
var cont = 0;

function typeWriter () {
  if(cont < content.length){
    text.textContent += content.charAt(cont);
    cont++;
    setTimeout(typeWriter, speed);
  }else{
    text.textContent = '';
    cont = 0;
    setTimeout(typeWriter, speed = 300);
  }
}

typeWriter();





// FUNÇÃO VOLTAR AO TOPO
$(document).ready(function(){

  $(function(){
     
        $(document).on( 'scroll', function(){
     
          if ($(window).scrollTop() > 300) {
          $('.scroll-top-wrapper').addClass('show');
        } else {
          $('.scroll-top-wrapper').removeClass('show');
        }
      });
     
      $('.scroll-top-wrapper').on('click', scrollToTop);
  });
     
  function scrollToTop() {
      verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
      element = $('body');
      offset = element.offset();
      offsetTop = offset.top;
      $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
  }
    
});

// FUNÇÃO SCROLL HEADER
function rolagem() {

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("header").style.background ='#111';
  } else {
    document.querySelector("header").style.background = "none";
  }
}

}

rolagem();




// FUNÇÃO MENU MOBILE
function menuMobile() {

  const menu = document.getElementById('menu-hamburger');
  const menuOpc = document.querySelector('.menu-mobile ul');
  const menuClose = document.getElementById('menu-close-hamburger');
  const menuContainer = document.querySelector('.menu-mobile');

  menu.addEventListener('click',()=>{
    menuOpc.style.right = '0';
    menuClose.style.display = 'flex';
    menu.style.display = 'none';
    menuContainer.style.visibility = 'visible';
  })
  
  menuClose.addEventListener('click',()=>{
    menuOpc.style.right = '-100%';
    menu.style.display = 'flex';
    menuClose.style.display = 'none';
    menuContainer.style.visibility = 'hidden';
  })

}




// FUNÇÃO VOLTAR AO TOPO


// FUNÇÃO DE MÁQUINA DE ESCREVER
/*
function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    const apagarLetra = elemento.innerHTML('');
   
    console.log(textoArray);

    elemento.innerHTML ='';
    
    textoArray.forEach((letra, i) => {
        
        setTimeout(() =>  elemento.innerHTML +=letra, 80*i )
        
      
        
    });
   
    apagarLetra.forEach((letra, i) => {
        
        setTimeout(() =>  elemento.innerHTML -=letra, 10*i )
        
      
        
    });
}

const titulo = document.querySelector('#type-span');
typeWrite(titulo);*/


// FINAL FUNÇÃO DE MÁQUINA DE ESCREVER


/*
const  Typewriter = requires('./t-writer.js');

const target = document.getElementById('type-span');

const writer = new Typewriter(target, {
    loop: true, 
    typeColor: 'red' 
})

writer
    .strings(
        400,
        " Developer,",
        "Freelancer,", 
        "Designer,",
        "Creative!"
    )
.start()
  */  