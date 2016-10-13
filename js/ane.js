var aneObj=function(){		//定义一个类  aneObj()，定义它的属性
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.alpha = 0;
	this.amp = [];

}

					//定义类的成员函数,成员变量
// class_name.prototype.method_name = function(first_argument) {
 	// body...
// };

aneObj.prototype.num = 50;
aneObj.prototype.init = function(){							//初始化的工作：对所有属性赋初值
	for (var i = 0; i < this.num; i++) {
		this.rootx[i] = i*16 + Math.random()*20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - (200 + Math.random()*50);
		this.amp[i] = 50 + 30*Math.random();				//初始化振幅
	}
	// console.log("海葵初始化成功");
}
aneObj.prototype.draw = function(){
	this.alpha += deltaTime*0.0006;

	var l = Math.sin(this.alpha);	//[-1,1]的一个数,且变化符合运动学规律
	ctx2.save();												//save()和restore()之间的样式，只在这之间有效
		ctx2.globalAlpha = 0.6;
		ctx2.strokeStyle = "#3b154e";
		ctx2.lineWidth = 20;
		ctx2.lineCap = "round";
	for (var i = 0; i < this.num; i++) {
		ctx2.beginPath();
			ctx2.moveTo(this.rootx[i],canHeight);
			this.headx[i] = this.rootx[i] + l*this.amp[i];
			ctx2.quadraticCurveTo(this.rootx[i],canHeight-150,this.headx[i],this.heady[i]);

			ctx2.stroke();
		ctx2.closePath();
	}
	ctx2.restore();
}