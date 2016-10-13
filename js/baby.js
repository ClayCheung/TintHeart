

var babyObj = function(){
	this.x;
	this.y;
	this.angle;

	this.tailTimer = 0;
	this.tailCount = 0;

	this.eyeTimer = 0;
	this.eyeCount = 0;
	this.interval = 2000;

	this.bodyTimer = 0;
	this.bodyCount = 0;

}

babyObj.prototype.init = function(){
	this.x = canWidth*0.5 - 50;
	this.y = canHeight*0.5 + 50;
	this.angle = 0;

}

babyObj.prototype.draw = function(){
	this.tailTimer += deltaTime;
	if(this.tailTimer > 50){
		this.tailCount = (this.tailCount + 1) % 8;
		this.tailTimer = this.tailTimer % 50;
	}

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

	this.bodyTimer += deltaTime;
	if(this.bodyTimer > 300){
		this.bodyCount++;
		if(this.bodyCount > 19){
			this.bodyCount = 19;
			//game over
			data.gameover = true;
		}
		this.bodyTimer = this.bodyTimer % 300;
	}

	//lerp x,y
	this.x = lerpDistance(mom.x, this.x, 0.99); //最后的百分比，越大跟随的越慢
	this.y = lerpDistance(mom.y, this.y, 0.99);

	//目标角度beta 使用arctan
	var deltaX = mom.x - this.x;
	var deltaY = mom.y - this.y;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;

	//lerp角度
	this.angle = lerpAngle(this.angle, beta, 0.9);


	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle); 
	ctx1.drawImage(babyTail[this.tailCount],-babyTail[this.tailCount].width*0.5+23,-babyTail[this.tailCount].height*0.5);
	ctx1.drawImage(babyBody[this.bodyCount],-babyBody[this.bodyCount].width*0.5,-babyBody[this.bodyCount].height*0.5);
	ctx1.drawImage(babyEye[this.eyeCount],-babyEye[this.eyeCount].width*0.5,-babyEye[this.eyeCount].height*0.5);

	ctx1.restore();
}