class Player{
    //Player's constructor
    constructor(_x,_y,_size,_color,_hp,_bX,_bY,_tX,_tY){
        this.x = _x;
        this.y = _y;
        this.size = _size;
        this.color = _color;
        this.hp = _hp;
        this.bX = _bX;
        this.bY = _bY;
        this.tX = _tX;
        this.tY = _tY;
        let dist = Math.sqrt((this.tx-this.x)*(this.tx-this.x) + (this.ty-this.y)*(this.ty-this.y));
        this.dx = (this.tx-this.x)/dist*3;
        this.dy = (this.ty-this.y)/dist*3;
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
        context.closePath();
    }
    //Player's shooting
    shoot(){
         this.x += this.dx;
         this.y += this.dy;
    }
}