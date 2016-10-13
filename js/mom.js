var momObj = function(){
	this.x;
	this.y;
	this.angle;

	this.eyeTimer = 0;
	this.eyeCount = 0;
	this.interval = 2000;

	this.bodyCount = 0;



}
momObj.prototype.init = function(){
	this.x = canWidth*0.5;
	this.y = canHeight*0.5;

	this.angle = 0;



}

momObj.prototype.draw = function(){
	this.eyeTimer += deltaTime;
	if(this.eyeTimer > this.interval){
		this.eyeCount = (this.eyeCount + 1) % 2;
		this.eyeTimer = this.eyeTimer % this.interval;
	}
	if(this.eyeCount == 0){
		this.interval = Math.random()*1500 + 2000;
	}
	else{
		this.interval = 200;
	}
	//lerp x,y
	this.x = lerpDistance(mx, this.x, 0.95); //最后的百分比，越大跟随的越慢
	this.y = lerpDistance(my, this.y, 0.95);

	//目标角度beta 使用arctan
	var deltaX = mx - this.x;
	var deltaY = my - this.y;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;

	//lerp角度
	this.angle = lerpAngle(this.angle, beta, 0.6);

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle); //绘制图片的角度（方向）
	ctx1.drawImage(momTail[baby.tailCount],-momTail[baby.tailCount].width*0.5+30,-momTail[baby.tailCount].height*0.5);
	
	if(data.double == 1){	//orange
			ctx1.drawImage(momBodyOra[this.bodyCount],-momBodyOra[this.bodyCount].width*0.5,-momBodyOra[this.bodyCount].height*0.5);

	}
	else{					//blue
			ctx1.drawImage(momBodyBlue[this.bodyCount],-momBodyBlue[this.bodyCount].width*0.5,-momBodyBlue[this.bodyCount].height*0.5);

	}

	
	ctx1.drawImage(momEye[this.eyeCount],-momEye[this.eyeCount].width*0.5,-momEye[this.eyeCount].height*0.5);
	ctx1.restore();
}