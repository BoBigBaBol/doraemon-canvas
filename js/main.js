//取得元素
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.lineWidth=2;
//均匀压缩法绘制椭圆函数
//其方法是用arc方法绘制圆，结合scale进行
//横轴或纵轴方向缩放（均匀压缩）
//这种方法绘制的椭圆的边离长轴端越近越粗，长轴端点的线宽是正常值
//边离短轴越近、椭圆越扁越细，甚至产生间断，这是scale导致的结果
//这种缺点某些时候是优点，比如在表现环的立体效果（行星光环）时
//对于参数a或b为0的情况，这种方法不适用
function EvenCompEllipse(context, x, y, a, b)
{
   context.save();
   //选择a、b中的较大者作为arc方法的半径参数
   var r = (a > b) ? a : b; 
   var ratioX = a / r; //横轴缩放比率
   var ratioY = b / r; //纵轴缩放比率
   context.scale(ratioX, ratioY); //进行缩放（均匀压缩）
   context.beginPath();
   //从椭圆的左端点开始逆时针绘制
   context.moveTo((x + a) / ratioX, y / ratioY);
   context.arc(x / ratioX, y / ratioY, r, 0, 2 * Math.PI);
   context.closePath();
   context.fill();
   context.restore();
};
//画头部外圆
context.save();
context.rotate(-Math.PI/15);
context.fillStyle='#1ca0e1';
EvenCompEllipse(context,220,270,145,140);
context.stroke();
context.restore();

//画头部内圆
context.save();
context.rotate(Math.PI/16);
context.fillStyle='#fff';
EvenCompEllipse(context,293,182,125,115);
context.stroke();
context.restore();

//开始画眼睛，先画左眼
context.save();
context.rotate(Math.PI/14);
context.fillStyle='#fff';
EvenCompEllipse(context,225, 90, 26, 32);
context.stroke();

//左眼珠
context.fillStyle='#000';
EvenCompEllipse(context, 236, 86, 8, 11);
context.fillStyle='#fff';
EvenCompEllipse(context, 237, 85, 3, 4);
context.restore();

//画右眼
context.save();
context.rotate(Math.PI/14);
context.fillStyle='#fff';
EvenCompEllipse(context,276, 69, 28, 34);
context.stroke();
//右眼珠
context.fillStyle='#000';
EvenCompEllipse(context, 277, 70, 9, 12);
context.fillStyle='#fff';
EvenCompEllipse(context, 278, 70, 4,5);
context.restore();

//画鼻子
context.save();
context.beginPath();
context.arc(220,170,15,0,2*Math.PI);
context.fillStyle = "#e80112";
context.fill();
context.stroke();
context.closePath();
//鼻子白
context.beginPath();
context.arc(217,165,5,0,2*Math.PI);
context.fillStyle = "#fff";
context.fill();
context.closePath();
//鼻子线
context.beginPath();
context.moveTo(217, 183);
context.quadraticCurveTo(213, 200, 215, 225);
context.stroke();
context.closePath();
context.restore();

//画嘴巴
context.save();
context.beginPath();
context.moveTo(215,225);
context.bezierCurveTo(205,210,173,218,198,255);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(198,255);
context.bezierCurveTo(180,260,190,285,208,282);
context.stroke();
context.closePath();
context.restore();

//画胡须
context.save();
context.beginPath();
context.moveTo(180,180);
context.lineTo(130,155);
context.moveTo(176,198);
context.lineTo(122,190);
context.moveTo(174,220);
context.lineTo(125,225);
context.moveTo(270,195);
context.lineTo(345,180);
context.moveTo(275,215);
context.lineTo(355,220);
context.moveTo(275,238);
context.lineTo(355,268);
context.stroke();
context.closePath();
context.restore();
//脖子
context.save();
context.rotate(-Math.PI/26);
context.beginPath();
context.moveTo(160, 360);
context.quadraticCurveTo(229, 350, 320, 365);
context.lineTo(320,380);
context.quadraticCurveTo(239, 365, 164, 375);
context.lineTo(160,370);
context.fillStyle = "#e80112";
context.fill();
context.stroke();
context.closePath();
context.restore();


//左胳膊
context.save();
context.fillStyle='#009fe7';
context.rotate(Math.PI/4);
context.fillRect(395,105,40,60);
context.strokeRect(395,105,40,60);
context.beginPath();
context.arc(416 ,165,25,0,Math.PI*2);
context.closePath();
context.fillStyle = "#fff";
context.fill();
context.stroke();
context.restore();
//铃铛
context.save();
context.rotate(Math.PI/4); 
context.beginPath();
context.arc(390,115,20,0,2*Math.PI);
context.fillStyle = "#fad301";
context.moveTo(371, 120);
context.quadraticCurveTo(380,100, 400, 98);
context.moveTo(375, 126);
context.quadraticCurveTo(385, 108, 404, 102);
context.fill();
context.stroke();
context.closePath();
context.beginPath();
context.arc(387,128,5,0,2*Math.PI);
context.strokeStyle = "black";
context.fillStyle = "gray";
context.fill();
context.stroke();
context.closePath();
context.restore();

//画身子
context.save();
context.beginPath();
context.moveTo(238, 345);
context.quadraticCurveTo(280, 370, 280, 430);
context.quadraticCurveTo(266, 432, 255, 445);
context.quadraticCurveTo(240, 465, 238, 480);
context.quadraticCurveTo(280, 490, 325, 480);
context.quadraticCurveTo(370, 488, 405, 475);
context.bezierCurveTo(410,400,405,400,363,338);
context.quadraticCurveTo(310, 332, 238, 345);
context.fillStyle='#009fe7';
context.fill();
context.stroke();
context.closePath();
context.restore();
context.save();
context.moveTo(325, 480);
context.lineTo(345, 455);
context.lineTo(365, 445);
context.stroke();
context.restore();


//画肚子
context.save();
context.beginPath();
context.moveTo(215, 350);
context.quadraticCurveTo(215, 400, 255, 445);
context.quadraticCurveTo(266, 432, 280, 430);
context.quadraticCurveTo(280, 370, 238, 345);
context.fillStyle = "#fff";
context.fill();
context.stroke();
context.closePath();
context.restore();
//肚兜
context.save();
context.moveTo(229,410);
context.lineTo(255,395);
context.quadraticCurveTo(266, 420, 245, 435);
context.stroke();
context.restore();

//右手和右胳膊
context.save();
context.beginPath();
context.moveTo(285,339);
context.quadraticCurveTo(330, 350, 350, 370);
context.moveTo(280,375);
context.quadraticCurveTo(330, 395, 340, 395);
context.stroke();
context.closePath();
context.restore();
context.save();
context.beginPath();
context.arc(352,385,25,0,Math.PI*2);
context.closePath();
context.fillStyle='#fff';
context.fill();
context.stroke();
context.restore();

//画尾巴
context.save();
context.moveTo(380,410);
context.lineTo(410,410);
context.stroke();
context.restore();

context.save();
context.beginPath();
context.arc(408,408,15,0,Math.PI*2);
context.closePath();
context.fillStyle='#e70013';
context.fill();
context.stroke();
context.restore();

//画左脚
context.save();
context.beginPath();
context.moveTo(238,480);
context.bezierCurveTo(225,480,225,503,238,505);
context.quadraticCurveTo(277, 515, 325, 505);
context.quadraticCurveTo(337, 492, 325,480);
//画右脚
context.moveTo(328,503);
context.quadraticCurveTo(370, 508, 405,498);
context.quadraticCurveTo(420, 485, 405,475);
context.stroke();
context.restore();

//终于over~







