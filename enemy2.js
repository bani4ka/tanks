// Creating variables
class Enemy{
    constructor(x_,y_,size_,px_,py_,colors_,tx_,ty_){
        this.px=px_;
        this.py=py_;
        this.x=x_;
        this.y=y_;
        this.size=size_
        this.colors=colors_;
        this.tx=tx_
        this.ty=ty_
    }
    draw(){
        context.beginPath()
        context.arc(this.x,this.y,this.size,0,Math.PI*2)
        context.strokeStyle=this.colors
        context.stroke()
        
    }
    move(){
   let dist = Math.sqrt((this.tx - this.x)*(this.tx - this.x) + (this.ty - this.y)*(this.ty - this.y));
        this.x += (this.tx - this.x)/dist*2.5;
        this.y +=(this.ty - this.y)/dist*2.5;
    }
    shoot(){

    }
}   