// Creating variables

class enemy{
    constructor(x_, y_, size, color_, tx_, ty_, bx_, by_){
        this.x = x_;
        this.y = y_;
        this.size = size_;
        this.color = color_;
        this.tx = tx_;
        this.ty = ty_;
        this.bx = bx_;
        this.by = by_
    }
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI*2);
        context.fillStyle = this.color;
        context.fill();
    }
    move(){
        let dist = Math.sqrt((this.tx - this.x)*(this.tx - this.x) + (this.ty - this.y)*(this.ty - this.y));
        this.x += (this.tx - this.x)/dist*1.5;
        this.y +=(this.ty - this.y)/dist*1.5;
    }
    
}
