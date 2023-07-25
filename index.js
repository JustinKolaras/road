// Variables

var chicken = createSprite(200, 250);
chicken.setAnimation('chicken');
chicken.scale = 0.2;

var car1 = createSprite();
car1.setAnimation('car1');
car1.y = randomNumber(250, 280);
car1.x = 0;
car1.rotation = 90;
car1.velocityX = randomNumber(4.7, 5);
car1.scale = 0.4;

var car2 = createSprite();
car2.setAnimation('car2');
car2.y = randomNumber(250, 280);
car2.x = 0;
car2.rotation = 90;
car2.scale = 0.4;
car2.visible = false;

var car3 = createSprite();
car3.setAnimation('car3');
car3.y = randomNumber(250, 280);
car3.x = 0;
car3.rotation = 90;
car3.scale = 0.4;
car3.visible = false;

var endPoint = createSprite();
endPoint.setAnimation('endPoint');
endPoint.y = 250;
endPoint.x = 350;
endPoint.debug = false;

var score = 0;
var Scale = 0.2;
var CarScale = 0.4;
var WBSScaling = 0.4;
var chickenstatus = 'Chicken 1/8';
var brokengame = false;

var plant = createSprite();
plant.setAnimation('plant');
plant.y = 145;
plant.x = 280;

var grass = createSprite();
grass.setAnimation('grass');
grass.y = 90;
grass.x = 100;
grass.scale = 0.8;

var cactus = createSprite();
cactus.setAnimation('cactus');
cactus.y = 320;
cactus.x = 320;
cactus.scale = 0.6;

function draw() {
  if (car1.isTouching(chicken)) {
      car1IsTouching();
  }
  if (car2.isTouching(chicken)) {
      car2IsTouching();
  }
  if (car3.isTouching(chicken)) {
      car3IsTouching();
  }
  if (car1.isTouching(endPoint)) {
    resetCar1();
    upPoint();
  }
  if (car2.isTouching(endPoint)) {
    resetCar2();
    upPoint();
  }
  if (car3.isTouching(endPoint)) {
    resetCar3();
    upPoint();
  }
  if (chicken.y < 120) {
    chicken.velocitY = chicken.velocityY = 8;
  }
  if (chicken.y >= 250) {
    chicken.velocityY = chicken.velocityY = 0;
  }
  if (keyWentDown('up')) {
    chicken.velocityY = chicken.velcocityY =  -9;
  }
  if (keyWentDown('space')) {
    chicken.velocityY = chicken.velocityY = -9;
  }
  if (keyWentDown('b')) {
    score = -30459834058;
    brokengame = true;
  }
  if (keyWentDown('r')) {
    score = 0;
    ResetFunction();
    if (brokengame) {
      brokengame = false;
    }       
  }
  if (keyWentDown('tab')) {
    score = 0;
    ResetFunction();
    if (brokengame) {
      console.log('nevermind you cheater');
      brokengame = false;
    }
  }
  if (score < 25) {
    resetAnimatedCars();
    OSFAC();
    resChiAnim();
    chicken.scale = Scale;
  }
    if (score < 40) {
    resetAnimatedCars();
    OSFAC();
    chicken.scale = Scale;
  }
    if (score < 65) {
    resetAnimatedCars();
    OSFAC();
    chicken.scale = Scale;
  }
    if (score < 90) {
    resetAnimatedCars();
    OSFAC();
    chicken.scale = Scale;
  }  
    if (score < 115) {
    resetAnimatedCars();
    OSFAC();
  }
    if (score < 140) {
    resetAnimatedCars();
    OSFAC();
  }
    if (score < 175) {
    resetAnimatedCars();
    OSFAC();
  }
  
  if (score <= -3) {
    chicken.setAnimation('Monkey');
    chickenstatus = 'Monkey -1/-2';
  }
  if (score <= -10) {
    chicken.setAnimation('Elephant');
    chickenstatus = 'Elephant -2/-2';
  }
  if (score >= -4) {
    chicken.setAnimation('chicken');
    chickenstatus = 'Chicken 1/8';
  }
  if (score >= -9) {
    chicken.setAnimation('Monkey');
    chickenstatus = 'Monkey -1/-2';
  }
  if (score >= 0) {
    chicken.setAnimation('chicken');
    chickenstatus = 'Chicken 1/8';
  }
  if (score >= 25) {
    chicken.setAnimation('RedChicken');
    chickenstatus = 'Red Chicken 2/8';
  }
  if (score >= 40) {
    chicken.setAnimation('BlueChicken');
    chickenstatus = 'Blue Chicken 3/8';
  }
  if (score >= 65) {
    chicken.setAnimation('NeonChicken');
    chickenstatus = 'Neon Chicken 4/8';
  }
  if (score >= 90) {
    chicken.setAnimation('LiterallyAKid');
    chicken.scale = 0.150;
    chickenstatus = 'Jeff 5/8';
  }
  if (score >= 115) {
    chicken.setAnimation('Scobby');
    chickenstatus = 'Scobby 6/8';
  }
  if (score >= 140) {
    chicken.setAnimation('WingBot');
    chicken.scale = Scale;
    car1.setAnimation('WingBotCar1');
    car2.setAnimation('WingBotCar2');
    car3.setAnimation('WingBotCar3');
    car1.scale = WBSScaling;
    car2.scale = WBSScaling;
    car3.scale = WBSScaling;
    chickenstatus = 'WingBot 7/8';
  }
  if (score >= 175) {
    chicken.setAnimation('Yolo');
    car1.setAnimation('YoloCar1');
    car2.setAnimation('YoloCar2');
    car3.setAnimation('YoloCar3');
    chickenstatus = 'Yolo 8/8';
  }
  gameBackground();
  showScore();
  drawSprites();
  showStatus();
  showMobileControls(true, false, true, false);
}

function gameBackground() {
  noStroke();
  background('lightBlue');
  rect(0,200,400,100);
  fill('white');
  rect(25,250,25,15);
  fill('white');
  rect(100,250,25,15);
  fill('white');
  rect(175,250,25,15);
  fill('white');
  rect(250,250,25,15);
  fill('white');
  rect(325,250,25,15);
  fill('white');
  rect(400,250,25,15);
  fill('white');
  rect(475,250,25,15);
  fill('white');
  rect(550,250,25,15);
  fill('white');
}
function car1IsTouching() { 
  car1.y = randomNumber(250, 280);
  car1.x = 0;
  score = score - 1;
  car1.visible = false;
  car1.velocityX = car1.velocityX = 0;
  car2.visible = true;
  car2.y = randomNumber(250, 280);
  car2.x = 0;
  car2.velocityX = car2.velocityX = randomNumber(7, 8);
}
function car2IsTouching() { 
  car2.y = randomNumber(250, 280);
  car2.x = 0;
  score = score - 1;
  car2.visible = false;
  car2.velocityX = car2.velocityX = 0;
  car3.visible = true;
  car3.y = randomNumber(250, 280);
  car3.x = 0;
  car3.velocityX = car3.velocityX = 6;
}
function car3IsTouching() { 
  car3.y = randomNumber(250, 280);
  car3.x = 0;
  score = score - 1;
  car3.visible = false;
  car3.velocityX = car3.velocityX = 0;
  car1.visible = true;
  car1.y = randomNumber(250, 280);
  car1.x = 0;
  car1.velocityX = car1.velocityX = randomNumber(8, 8.5);
}
function showScore() {
  fill('brown');
  textSize(20);
  textFont('Times New Roman');
  text('Points',20,20,200,100);
  text(score,20,40,200,100);
}
function showStatus() {
  fill('black');
  textSize(14);
  textFont('Times New Roman');
  text(chickenstatus,20,320,200,100);
}
function upPoint() {
  score = score + 1;
}
function resetCar1() {
  car1.y = randomNumber(250, 280);
  car1.x = 0;
  car1.velocityX = car1.velocityX = 0;
  car1.visible = false;
  car2.visible = true;
  car2.velocityX = randomNumber(7, 8);
}
function resetCar2() {
  car2.y = randomNumber(250, 280);
  car2.x = 0;
  car2.velocityX = car2.velocityX = 0;
  car2.visible = false;
  car3.visible = true;
  car3.velocityX = 6;
}
function resetCar3() {
  car3.y = randomNumber(250, 280);
  car3.x = 0;
  car3.velocityX = car3.velocityX = 0;
  car3.visible = false;
  car1.visible = true;
  car1.velocityX = car1.velocityX = randomNumber(8, 8.5);
}
function resetAnimatedCars() {
  car1.setAnimation('car1');
  car2.setAnimation('car2');
  car3.setAnimation('car3');
}
function ResetFunction() {
  resetCar1();
  resetCar2();
  resetCar3();
  resetAnimatedCars();
  chicken.setAnimation('chicken');
}
function OSFAC() {
  car1.scale = CarScale;
  car2.scale = CarScale;
  car3.scale = CarScale;
}
function resChiAnim() {
  chicken.setAnimation('chicken');
}
