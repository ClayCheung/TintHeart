var fruitObj = function(){
	this.alive=[];   	//boolean
	this.orange = new Image();
	this.blue = new Image();
	this.x = [];
	this.y = [];
	this.size = [];
	this.spd = [];
	this.fruitType = [];
	this.aneID = [];
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		
		this.size[i] = 0;
		this.spd[i] = Math.random()*0.015 + 0.001; 			//[0.001,0.016)
		this.fruitType[i] = "";
		
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";


}

fruitObj.prototype.draw = function(){
	//find one point , grow up ,fly up
	for (var i = 0; i < this.num; i++) {
		if(this.alive){
				var pic;
				if(this.fruitType[i] == "blue"){
					 pic = this.blue;
				}
				else{
					 pic = this.orange;
				}

				if(this.size[i] < 14){						//grow
					var aneID = this.aneID[i];
					this.x[i] = ane.headx[aneID];
					this.y[i] = ane.heady[aneID];
					this.size[i] += this.spd[i]*deltaTime;

				}
				else{
					this.y[i] -= 7*this.spd[i]*deltaTime;				
				}
					ctx2.drawImage(pic,this.x[i] - this.size[i]*0.5,this.y[i] - this.size[i]*0.5,this.size[i],this.size[i]);
								
				if(this.y[i] < 10){
					this.alive[i] = false;
				}
		}
	}

}

fruitObj.prototype.born = function(i){
	this.alive[i] = true;
	
	if(Math.random() > 0.3){
		this.fruitType[i] = "orange";
	}
	else{
		this.fruitType[i] = "blue";
	}
	
	this.aneID[i] = Math.floor(Math.random()*ane.num);

	this.size[i] = 0;
}

fruitObj.prototype.die = function(i){
	this.alive[i] = false;
}

function fruitMonitor(){
	var  cnt =  0;
	for (var i = 0; i < fruit.num; i++) {
		if(fruit.alive[i]){
			cnt++;
		}
	}
	if(cnt < 15){
		//出生一个死掉的果实
		sendFruit();
		return;
	}
}

function sendFruit(){
	for (var i = 0; i < fruit.num; i++) {
		if(!fruit.alive[i]){
			fruit.born(i);
			break;							//或用return;只复活一颗果实
		}
	}
}