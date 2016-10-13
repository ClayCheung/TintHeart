var dustObj = function(){
	this.x = [];
	this.y = [];
	this.amp = [];
	this.NO = [];

}

dustObj.prototype.num = 30;
dustObj.prototype.init = function(){
	for (var i = 0; i < this.num ; i++) {
		this.x[i] = Math.random()*canWidth;
		this.y[i] = Math.random()*canHeight;

		this.NO[i] = Math.floor(Math.random()*7);

		this.amp[i] = 20 + 15*Math.random();
	}

}

dustObj.prototype.draw = function(){
	var l =Math.sin(ane.alpha);		//[-1,1]
	for (var i = 0; i < this.num ; i++) {
		
		var no = this.NO[i];
		ctx1.drawImage(dustPic[no],this.x[i]+l*this.amp[i],this.y[i]);

	}

}