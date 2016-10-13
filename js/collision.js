//大鱼和果实的碰撞检测，效果：大鱼吃果实
function momFruitsCollision(){
	if(!data.gameover){
			for (var i = 0; i < fruit.num; i++) {
				if((fruit.alive[i])&&(fruit.size[i] > 13)){			//果实或者且size > 13,已经成熟长大的
						var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
						if(l < 900){		//吃到一个果实
							fruit.die(i);

							mom.bodyCount++;
							if(mom.bodyCount > 7){
								mom.bodyCount = 7;
							}
							data.fruitNum++;
							if(fruit.fruitType[i] == "blue"){			//如果吃到一个蓝色果实,double => 2
									data.double = 2;
							}
							wave.born(fruit.x[i],fruit.y[i]);

						}
				}
			}	
	}

	
}

//大鱼和小鱼的碰撞检测，效果：大鱼喂小鱼，小鱼恢复体力
function momBabyCollision(){
	var l = calLength2(baby.x, baby.y, mom.x, mom.y);
	if((l < 900)&&(data.fruitNum > 0)&&(!data.gameover)){
			baby.bodyCount = 0;				//小鱼恢复初始满血状态

			mom.bodyCount = 0;				//大鱼碰到小鱼身体变为初始虚弱状态

			data.addScore();				//加分值，并且清零FruitNum,double置1
			halo.born(baby.x,baby.y);
	}
}
