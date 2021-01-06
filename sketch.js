  let coin,coinImg;
    function preload() {
        coin = loadImage('coin.png');
    }

    function setup() {
        createCanvas(600, 600);
     
    }

    function draw() {
        background(0);
        var imgx = 300;
        var imgy = 300;
        var angle = atan2(mouseY - imgy, mouseX - imgx);
        push();
        translate(imgx, imgy);
        rotate(angle);
        imageMode(CENTER);
        image(coin, 0, 0, 80, 50)
        pop();
    }