var waveObj = function(){
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];

}

waveObj.prototype.num = 10;

waveObj.prototype.init = function(){
	for (var i = 0; i < this.num ; i++) {
			this.alive[i] = false;
			this.r[i] = 0;
	}
}

waveObj.prototype.draw = function(){
	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowColor = "white";
	ctx1.shadowBlur = 20;
	for (var i = 0; i < this.num ; i++){
			if(this.alive[i]){
					//draw
					this.r[i] += 0.02*deltaTime;
					if(this.r[i] > 55)
					{
						this.alive[i] = false;
						break;
					} 
					var alpha = (55 - this.r[i])/55 ;					//圆圈最大半径100，为100时，刚好完全透明
					ctx1.strokeStyle = "rgba(255,255,255,"+ alpha +")";
					ctx1.beginPath();
						ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI,false);
						ctx1.stroke();
					ctx1.closePath();
					
			}
	}
	ctx1.restore();
}

waveObj.prototype.born = function(x,y){
	for (var i = 0; i < this.num ; i++){
			if(!this.alive[i]){
					//born
					this.alive[i] = true;
					this.r[i] = 10; 
					this.x[i] = x;
					this.y[i] = y;
					return;
			}
	}	
}