class Bullet{
    constructor(x_, y_, tx, ty,color_){
        this.mcolor=color_
        this.x = x_;
        this.y = y_;
        let dist = Math.sqrt((tx-x_)*(tx-x_) + (ty-y_)*(ty-y_));
        this.dx = (tx-x_)/dist*3;
        this.dy = (ty-y_)/dist*3;
    }
    update(){
        this.x += this.dx;
        this.y += this.dy;
    }
    draw(){  
        context.fillStyle = this.mcolor;
        context.beginPath()
        context.arc(this.x, this.y,10,0,Math.PI*2); 
        context.fill()
    }
};