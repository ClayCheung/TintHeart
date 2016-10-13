var dataObj = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameover = false;
	this.alpha = 0;
}


dataObj.prototype.draw = function(){
	var w = can1.width;
	var h = can1.height;

	
	// ctx1.fillText("Num " + this.fruitNum,w*0.5,h-50);
	// ctx1.fillText("double " + this.double,w*0.5,h-80);
	ctx1.save();

	ctx1.fillStyle = "white";
	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center";
	ctx1.shadowColor = "white";
	ctx1.shadowBlur = 20;
	ctx1.fillText("score " + this.score, w*0.5 , h-100);

	if(data.gameover){
		this.alpha = this.alpha + 0.0005*deltaTime;
		if(this.alpha > 1)this.alpha = 1;
		ctx1.fillStyle = "rgba(255,255,255,"+ this.alpha +")";
		ctx1.fillText("GAMEOVER", w*0.5 , h-350);
	}

	ctx1.restore();


}
dataObj.prototype.addScore = function(){
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1; 
}