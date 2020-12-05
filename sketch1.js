var tempr, tempc;
var winCount=0;
var items = ["spr0","spr1","spr2"];
var temp= [];
var attempt=0, hit=0;
var lose, win;
var t = [123,233];
var points = [50,130,210,290];
function setup(){

  lose = new Group();
  win = new Group();

  var winrow00=[[0,0],[0,1],[0,2]];
  var winrow01=[[0,1],[0,2],[0,3]];
  var winrow10=[[1,0],[1,1],[1,2]];
  var winrow11=[[1,1],[1,2],[1,3]];
  var winrow20=[[2,0],[2,1],[2,2]];
  var winrow21=[[2,1],[2,2],[2,3]];
  var winrow30=[[3,0],[3,1],[3,2]];
  var winrow31=[[3,1],[3,2],[3,3]];
  var wincol00=[[0,0],[1,0],[2,0]];
  var wincol10=[[1,0],[2,0],[3,0]];
  var wincol01=[[0,1],[1,1],[2,1]];
  var wincol11=[[1,1],[2,1],[3,1]];
  var wincol02=[[0,2],[1,2],[2,2]];
  var wincol12=[[1,2],[2,2],[3,2]];
  var wincol03=[[0,3],[1,3],[2,3]];
  var wincol13=[[1,3],[2,3],[3,3]];
  var windia00=[[0,0],[1,1],[2,2]];
  var windia11=[[1,1],[2,2],[3,3]];
  var windia03=[[0,3],[1,2],[2,1]];
  var windia12=[[1,2],[2,1],[3,0]];
  var windia10=[[1,0],[2,1],[3,2]];
  var windia01=[[0,1],[1,2],[2,3]];
  var windia02=[[0,2],[1,1],[2,0]];
  var windia13=[[1,3],[2,2],[3,1]];
  
  var winchoice=[winrow00, winrow01, winrow10, winrow11, winrow20, winrow21, winrow30, winrow31, 
  wincol00, wincol10, wincol01, wincol11, wincol02, wincol12, wincol03, wincol13, windia00, windia11,
  windia03, windia12, windia10, windia01, windia02, windia13];
  
  
  var rand= Math.round(random(0,23));
  temp=winchoice[rand];
  
  lose.clear();
  win.clear();
  
  for (var c = 0; c < 4; c++) {
    for (var r = 0; r < 4; r++) {
      var sprt = createSprite(c*80+50, r*80+50, 50, 50);
      t.push(c*80+50, r*80+50);
      sprt.shapeColor = "black";
      lose.add(sprt);
    }
  }
  
  if (winCount<3 ) {
    for(var w=0; w<3; w++){
    winCount=winCount+1;
    console.log(temp[w]);
    tempr = temp[w][0];
    tempc = temp[w][1];
    console.log(tempr);
    console.log(tempc);
    items[w] = createSprite(tempc*80+50, tempr*80+50, 50, 50);
    items[w].shapeColor = "black";
    win.add(items[w]);
    }
  }



}


function draw() {
  background("white");
  drawSprites();
  if (attempt<8 && hit < winCount) {
    for (var i = 0; i < winCount; i++) {
      if (mouseIsOver(win.get(i)) && mouseWentDown("leftButton")) {
        attempt=attempt+1;
        hit=hit+1;
        console.log(win.get(i).x);
        console.log(win.get(i).y);
        win.get(i).shapeColor="red";
      }
    }
    for (var j = 0; j < 16; j++) {
      if (mouseIsOver(lose.get(j)) && mouseWentDown("leftButton")) {
        attempt=attempt+1;
        console.log(lose.get(j).x);
        console.log(lose.get(j).y);
        lose.get(j).shapeColor="white";
      }
    }
  }
  else {
    textSize(50);
    text("HITS = "+hit, 100, 375);
  }
}


function spriteSelected(){
  var temp = [];
points.map(item=>{
  temp.push(item-t[0]);
})


}