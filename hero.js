const heroMove = document.getElementById('hero');

document.addEventListener('keydown', function(event){
    let heroPosition =  parseInt(heroMove.style.left);

    if(heroPosition > 0 && heroPosition < 760){
        if(event.keyCode === 37){
             heroPosition = heroPosition - 10;
             heroMove.style.left = heroPosition + 'px';
             heroMove.style.backgroundPosition = "-70px 0";
         } else if (event.keyCode === 39){
             heroPosition = heroPosition + 10;
             heroMove.style.left = heroPosition + 'px';
             heroMove.style.backgroundPosition = "-105px 0";
         }
    } else if (heroPosition === 0){
        if(event.keyCode === 37){
            heroMove.style.backgroundPosition = "-70px 0";
        } else if (event.keyCode === 39){
            heroPosition = heroPosition + 10;
            heroMove.style.left = heroPosition + 'px';
            heroMove.style.backgroundPosition = "-105px 0";
        }
    } else if(heroPosition === 760){
        if(event.keyCode === 37){
            heroPosition = heroPosition - 10;
            heroMove.style.left = heroPosition + 'px';
            heroMove.style.backgroundPosition = "-70px 0";
        } else if (event.keyCode === 39){
            heroMove.style.backgroundPosition = "-105px 0";
        }
    }   
})

document.addEventListener('keyup',function(event){
     if(event.keyCode === 37 || event.keyCode === 39){
        heroMove.style.backgroundPosition = "0 0";
    } 
 })

