class Enemy {
    constructor(){
        this.top = 0;
        this.random = (parseInt(Math.random() * 75)) * 10;
        this.createEnemy();
        this.move();
    }
    
    createEnemy(){
        const bgId = document.getElementById('bg');
        this.enemyStyle = document.createElement('div');
        this.enemyStyle.className = 'enemy';
        this.enemyStyle.style.left = this.random + 'px';
        bgId.appendChild(this.enemyStyle);
    }

    move(){
        const clear = setInterval(() => {
        if((this.enemyStyle.style.left === heroMove.style.left)&&
            ((parseInt(this.enemyStyle.style.top) >= 500) && 
            (parseInt(this.enemyStyle.style.top) <= 550) )
            ){
            this.kill();
            clearInterval(clear);
            } else {
        this.top = this.top + 5;
        this.enemyStyle.style.top = this.top + 'px';
        if(parseInt(this.enemyStyle.style.top) === 650){
            this.fade();
            }
        }
        }, 100)
    }

    kill(){
        this.enemyStyle.style.backgroundPosition = '-45px 0';
        this.enemyStyle.style.top = '545px';
        setTimeout(() => {
            this.fade();
        }, 1000)
    }

    fade(){
        this.enemyStyle.remove(); 
    }
    
    movement(){
        setInterval(() => {
        if((this.enemyStyle.style.left === heroMove.style.left)&&
            ((parseInt(this.enemyStyle.style.top) >= 500) && 
            (parseInt(this.enemyStyle.style.top) <= 550) )
            ){
                this.kill();
            } else {
                this.move();
            }
        }, 100)
    }
}