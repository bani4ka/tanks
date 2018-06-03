class Player{
    //Player's constructor
    constructor(_x,_y,_size,_color,_hp/*,_broiP,_bulletX,_bulletY,_isShot,_dX,_dY,_isMouseDown,_cooldown*/){
        this.x = _x;
        this.y = _y;
        this.size = _size;
        this.color = _color;
        this.hp = _hp;
        /*this.broiP = _broiP;
        this bulletX = _bulletX;
        this.buleltY = _bulletY;
        this.isShot = _isShot;
        this.dX = _dX;
        this.dY = _dY;
        this.isMouseDown = _isMouseDown;
        this.cooldown = _cooldown;*/
    }
    //Player's movement
    move(){
        if(isKeyPressed[87]){
            this.y = this.y + 3.5;
        }
        if(isKeyPressed[83]){
            this.y = this.y - 3.5;            
        }
        if(isKeyPressed[65]){
            this.x = this.x - 3.5;
        }
        if(isKeyPressed[68]){
            this.x = this.x + 3.5;
        }
    }
    //Player's draw
    draw(){
        context.beginPath();
        context.arc(this.x,this.y,this.size,0,Math.PI*2);
        context.fill();
        context.clo
    }
    //Player's shooting
    /*shoot(){
        for(var i=0;i<broiP;++i){
            if(isShot[i]){
                bulletX[i]=bulletX[i]+dX[i];
                bulletY[i]=bulletY[i]+dY[i];
            }
        }
    }*/
}