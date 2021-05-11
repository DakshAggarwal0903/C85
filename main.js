canvas = new fabric.Canvas('myCanvas');
px = 10;
py = 10;
bw = 30;
bh = 30;
PlOb = "";
BlOb = "";
function Playerload(){
    fabric.Image.fromURL("player.png",function(Img){
        PlOb = Img;
        PlOb.scaleToWidth(150);
        PlOb.scaleToHeight(150);
        PlOb.set({
            top:py,
            left:px
        });
        canvas.add(PlOb);
    });
}
function Objectload(newImg){
    fabric.Image.fromURL(newImg,function(Img){
        BlOb = Img;
        BlOb.scaleToWidth(bw);
        BlOb.scaleToHeight(bh);
        BlOb.set({
            top:py,
            left:px
        });
        canvas.add(BlOb);
    });
}
window.addEventListener("keydown",kdn);
function kdn(k){
      keypressed = k.keyCode;
      console.log(keypressed);
      if(k.shiftKey == true && keypressed == '80'){
          console.log("Shift and P are pressed together");
          bw = bw + 10;
          bh = bh + 10;
          document.getElementById("spanwidth").innerHTML = bw;
          document.getElementById("spanheight").innerHTML = bh;
      }
      if(k.shiftKey == true && keypressed == '77'){
        console.log("Shift and M are pressed together");
        bw = bw - 10;
        bh = bh - 10;
        document.getElementById("spanwidth").innerHTML = bw;
        document.getElementById("spanheight").innerHTML = bh;
    }
    if(keypressed == '38'){
        up();
        console.log("UP");
    }
    if(keypressed == '40'){
        down();
        console.log("DOWN");
    }
    if(keypressed == '37'){
        left();
        console.log("LEFT");
    }
    if(keypressed == '39'){
        right();
        console.log("RIGHT");
    }
    if(keypressed == '87'){
        Objectload('wall.jpg');
        console.log("W");
    }
    if(keypressed == '71'){
        Objectload('ground.png');
        console.log("G");
    }
    if(keypressed == '76'){
        Objectload('light_green.jpg');
        console.log("L");
    }
    if(keypressed == '84'){
        Objectload('trunk.jpg');
        console.log("T");
    }
    if(keypressed == '82'){
        Objectload('roof.jpg');
        console.log("R");
    }
    if(keypressed == '89'){
        Objectload('yellow_wall.png');
        console.log("Y");
    }
    if(keypressed == '68'){
        Objectload('dark_green.png');
        console.log("D");
    }
    if(keypressed == '85'){
        Objectload('unique.png');
        console.log("U");
    }
    if(keypressed == '67'){
        Objectload('cloud.jpg');
        console.log("C");
    }
}
function up(){
    if(py>=0){
        py=py-bh;
        console.log("Block Image height is: "+bh);
        console.log("When up arrow is pressed X is: "+px+"Y is:" + py);
        canvas.remove(PlOb);
        Playerload();
    }
}
function left(){
    if(px>=0){
        px=px-bw;
        console.log("Block Image Width is: "+bw);
        console.log("When left arrow is pressed X is: "+px+"Y is:" + py);
        canvas.remove(PlOb);
        Playerload();
    }
}
function right(){
    if(px<=850){
        px=px+bw;
        console.log("Block Image width is: "+bw);
        console.log("When right arrow is pressed X is: "+px+"Y is:" + py);
        canvas.remove(PlOb);
        Playerload();
    }
}
function down(){
    if(py<=450){
        py=py+bh;
        console.log("Block Image height is: "+bh);
        console.log("When down arrow is pressed X is: "+px+"Y is:" + py);
        canvas.remove(PlOb);
        Playerload();
    }
}