var can1,can2;
var ctx1,ctx2;

var canWidth,canHeight;

var mx;
var my;

var lastTime = new Date();
var deltaTime = 0;

var bgPic = new Image();
var ane;
var fruit;
var mom;
var baby;
var data;
var wave;
var halo;
var dust;

var dustPic = [];

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlue = [];

document.body.onload = game;
function game(){
	init();
	gameloop();
}
function init(){
	can1=document.getElementById("canvas1");		//front:fish,dust,UI,circle
	ctx1=can1.getContext("2d");

	can2=document.getElementById("canvas2");		//back:background,ane,fruits
	ctx2=can2.getContext("2d");
	
	can1.addEventListener('mousemove',onMouseMove,false);
	
	canWidth=can1.width;
	canHeight=can1.height;

	bgPic.src="./src/background.jpg";			//在初始化中加载背景图片

	ane = new aneObj();							//创建aneObj这个类的一个对象ane
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth*0.5;
	my = canHeight*0.5;

	for (var i = 0; i < 8; i++) {				//加载小鱼尾巴序列帧
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail" + i + ".png";
	}
	for (var i = 0; i < 2; i++) {				//加载小鱼眼睛序列帧
		babyEye[i] = new Image();
		babyEye[i].src = "./src/babyEye" + i + ".png";
	}
	for (var i = 0; i < 20; i++) {				//加载小鱼身体变白序列帧
		babyBody[i] = new Image();
		babyBody[i].src = "./src/babyFade" + i + ".png";
	}
	for (var i = 0; i < 8; i++) {				//加载大鱼尾巴序列帧
		momTail[i] = new Image();
		momTail[i].src = "./src/bigTail" + i + ".png";
	}
	for (var i = 0; i < 2; i++) {				//加载大鱼眼睛序列帧
		momEye[i] = new Image();
		momEye[i].src = "./src/bigEye" + i + ".png";
	}

	data = new dataObj();

	for (var i = 0; i < 8 ; i++) {
		momBodyOra[i] = new Image();
		momBodyOra[i].src = "./src/bigSwim" + i + ".png";
		momBodyBlue[i] = new Image();
		momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
	}

	wave = new waveObj();
	wave.init();

	halo = new haloObj();
	halo.init();

	dust = new dustObj();
	dust.init();

	for (var i = 0; i < 7; i++) {
		dustPic[i] = new Image();
		dustPic[i].src = "./src/dust"+ i +".png";
	}
}
function gameloop(){
	window.requestAnimFrame(gameloop);
	var now = new Date();
	deltaTime = now - lastTime;
	lastTime=now;
	if(deltaTime > 40)deltaTime = 40;

	// console.log(deltaTime);

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	momFruitsCollision();
	momBabyCollision();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}

function onMouseMove(e){
	if(!data.gameover){
			if(e.offSetX || e.layerX){					//各个浏览器的兼容性
					mx = e.offSetX == undefined ? e.layerX : e.offSetX ;
					my = e.offSetY == undefined ? e.layerY : e.offSetY ;
			}
			// console.log(mx+","+my);
	}
	
}


