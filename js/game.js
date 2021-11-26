let $$ = sel => document.querySelector(sel);
let context;
let player = -1;
let canvas = {
    width: 900,
    height: 200
};
let animationID;
let ashley = {
    jumping: true,
    forward: true,
    moving: true,
    x: 100,
    y: 100,
    xVelocity: 0,
    yVelocity: 0,
    bit: 8,
    height: 60,
    width: 30,
    color: {
        skin: '#FCE4D6',
        hijab: '#FB9DBA',
        shirt: '#8EA9DB',
        eyes: 'black',
        shoes: 'black'
    },
    draw: function() {
        context.clearRect(0,0, canvas.width, canvas.height);
        context.translate(0, 0);
        context.save();
        drawHijab(this);
        drawSkin(this);
        drawEyes(this);
        drawShirtWoman(this);
        drawShoes(this);
        context.restore();
    }
};
let osman = {
    jumping: true,
    forward: true,
    moving: true,
    x: 100,
    y: 100,
    xVelocity: 0,
    yVelocity: 0,
    bit: 8,
    height: 60,
    width: 30,
    color: {
        skin: '#FCE4D6',
        hair: '#3A3838',
        shirt: '#990000',
        eyes: 'black',
        shoes: 'black'
    },
    draw: function(){
        context.clearRect(0,0, canvas.width, canvas.height);
        context.translate(0, 0);
        context.save();
        drawShirtMen(this);
        drawSkin(this);
        drawHairMan(this);
        drawEyes(this);
        drawShoes(this);
        context.restore();
    }
};
let ahmet = {
        jumping: true,
        forward: true,
        moving: true,
        x: 100,
        y: 100,
        xVelocity: 0,
        yVelocity: 0,
        bit: 8,
        height: 60,
        width: 30,
        color: {
            skin: '#FCE4D6',
            hair: '#584122',
            shirt: '#0070C0',
            eyes: 'black',
            shoes: 'black'
        },
        draw: function(){
            context.clearRect(0,0, canvas.width, canvas.height);
            context.translate(0, 0);
            context.save();
            drawShirtMen(this);
            drawSkin(this);
            drawHairMan(this);
            drawEyes(this);
            drawShoes(this);
            context.restore();
        }
    };
let camille = {
    jumping: true,
    forward: true,
    moving: true,
    x: 100,
    y: 100,
    xVelocity: 0,
    yVelocity: 0,
    bit: 8,
    height: 60,
    width: 30,
    color: {
        skin: '#FCE4D6',
        hair: '#FFD966',
        shirt: '#A9D08E',
        eyes: 'black',
        shoes: 'black'
    },
    draw: function() {
        context.clearRect(0,0, canvas.width, canvas.height);
        context.translate(0, 0);
        context.save();
        drawHairWomanShort(this);
        drawSkinShort(this);
        drawEyesShort(this);
        drawShirtWoman(this);
        drawShoes(this);
        context.restore();
    }
};
let allPlayers = [ahmet, ashley, camille, osman];
let cloud = {
    color: 'white',
    x: canvas.width + 20,
    y: (Math.random()*20) + 20,
    width: 15,
    length: 25,
    xVelocity: 0,
    yVelocity: 0
};

function InitiateParameters(){
    $$("canvas").width = canvas.width;
    $$("canvas").height = canvas.height;
    context = $$('canvas').getContext('2d');
    player = $$("#ddlPlayer").value;
}
function drawHijab(dude){
    context.beginPath();
    context.save();
    if (dude.forward){
        for(let i = 0; i < 5; i++) {
            context.rect(dude.x + (dude.bit * i), dude.y, dude.bit, dude.bit);
            context.rect(dude.x + (dude.bit * i), dude.y + (dude.bit * 4) , dude.bit, dude.bit);
        }
        for(let i = 0; i < 4; i++) {
            context.rect(dude.x , dude.y + (dude.bit * i+1), dude.bit, dude.bit);
            context.rect(dude.x + (dude.bit * 5), dude.y + (dude.bit * i) + dude.bit, dude.bit, dude.bit);
        }
        context.rect(dude.x +dude.bit, dude.y + (dude.bit * 5), dude.bit, dude.bit);
    }else{
        for(let i = 2; i < 7; i++) {
            context.rect(dude.x + (dude.bit * i), dude.y, dude.bit, dude.bit);
            context.rect(dude.x + (dude.bit * i), dude.y + (dude.bit * 4) , dude.bit, dude.bit);
        }
        for(let i = 1; i < 5; i++) {
            context.rect(dude.x + dude.bit, dude.y + (dude.bit * i), dude.bit, dude.bit);
            context.rect(dude.x + (dude.bit * 6), dude.y + (dude.bit * (i-1) -dude.bit) + dude.bit, dude.bit, dude.bit);
        }
        context.rect(dude.x +(dude.bit*5), dude.y + (dude.bit * 5), dude.bit, dude.bit);
    }
    context.fillStyle = dude.color.hijab;
    context.strokeStyle = dude.color.hijab;
    context.fill();
    context.stroke();
    context.restore();
    context.closePath();
}
function drawHairMan(dude){
    context.beginPath();
    context.save();
    if (dude.forward){
        // back >
        context.rect(dude.x, dude.y, dude.bit,dude.bit);
        context.rect(dude.x, dude.y + dude.bit, dude.bit, dude.bit);
        // top >
        for(let i = 1; i < 6; i++){
            context.rect(dude.x + (dude.bit * i), dude.y - dude.bit, dude.bit, dude.bit);
            context.rect(dude.x + (dude.bit * (i-1)), dude.y, dude.bit, dude.bit)
        }
        // beard >
        context.rect(dude.x + (dude.bit * 3.1), dude.y + (dude.bit * 3) + 4, dude.bit/1.2, dude.bit/1.2);
    }else{
        context.rect(dude.x + (dude.bit * 6), dude.y, dude.bit,dude.bit);
        context.rect(dude.x + (dude.bit * 6), dude.y + dude.bit, dude.bit, dude.bit);
        // top >
        for(let i = 1; i < 6; i++){
            context.rect(dude.x + (dude.bit * i), dude.y - dude.bit, dude.bit, dude.bit);
            context.rect(dude.x + (dude.bit * (i+1)), dude.y, dude.bit, dude.bit)
        }
        // beard >
        context.rect(dude.x + (dude.bit * 3.1), dude.y + (dude.bit * 3) + 4, dude.bit/1.2, dude.bit/1.2);

    }

    context.fillStyle = dude.color.hair;
    context.strokeStyle = dude.color.hair;
    context.fill();
    context.stroke();
    context.restore();
    context.closePath();
}
function drawHairWomanShort(dude){
    if (dude.forward){
        for(let i = 0; i < 5; i++) {
            context.rect(dude.x + (dude.bit * (i+1)), dude.y + dude.bit , dude.bit, dude.bit);
        }
        for(let i = 1; i < 5; i++) {
            context.rect(dude.x , dude.y + (dude.bit * (i+1)), dude.bit, dude.bit);
            context.rect(dude.x + (dude.bit * 5), dude.y + (dude.bit * i-1) + dude.bit, dude.bit, dude.bit);
        }
        context.rect(dude.x +dude.bit, dude.y + (dude.bit * 5), dude.bit, dude.bit);
        context.rect(dude.x +(dude.bit*4), dude.y + (dude.bit * 5), dude.bit, dude.bit);
    }else{
        for(let i = 0; i < 5; i++) {
            context.rect(dude.x + (dude.bit * (i+1)), dude.y + dude.bit , dude.bit, dude.bit);
        }
        for(let i = 1; i < 5; i++) {
            context.rect(dude.x +dude.bit, dude.y + (dude.bit * (i+1)), dude.bit, dude.bit);
            context.rect(dude.x + (dude.bit * 6), dude.y + (dude.bit * i-1) + dude.bit, dude.bit, dude.bit);
        }
        context.rect(dude.x +(dude.bit*2), dude.y + (dude.bit * 5), dude.bit, dude.bit);
        context.rect(dude.x +(dude.bit*5), dude.y + (dude.bit * 5), dude.bit, dude.bit);

    }
    context.fillStyle = dude.color.hair;
    context.strokeStyle = dude.color.hair;
    context.fill();
    context.stroke();
    context.restore();
    context.closePath();
}
function drawSkin(dude){
    context.beginPath();
    context.save();
    if(dude.forward) {
        // forehead and mouth >
        for (let i = 1; i < 5; i++) {
            context.rect(dude.x + (dude.bit * i), dude.y + dude.bit, dude.bit, dude.bit);
            context.rect(dude.x + (dude.bit * i), dude.y + (dude.bit * 3), dude.bit, dude.bit);
        }
        // eye level >
        context.rect(dude.x + dude.bit, dude.y + (dude.bit * 2), dude.bit, dude.bit);
        context.rect(dude.x + (dude.bit * 3), dude.y + (dude.bit * 2), dude.bit, dude.bit);
        // arm >
        context.rect(dude.x + (dude.bit * 2), dude.y + (dude.bit * 5), dude.bit, dude.bit);
    }else{
        // forehead and mouth >
        for (let i = 1; i < 5; i++) {
            context.rect(dude.x + (dude.bit * i) + dude.bit, dude.y + dude.bit, dude.bit, dude.bit);
            context.rect(dude.x + (dude.bit * i) + dude.bit, dude.y + (dude.bit * 3), dude.bit, dude.bit);
        }
        // eye level >
        context.rect(dude.x + (dude.bit * 3), dude.y + (dude.bit * 2), dude.bit, dude.bit);
        context.rect(dude.x + (dude.bit * 5), dude.y + (dude.bit * 2), dude.bit, dude.bit);
        // arm >
        context.rect(dude.x + (dude.bit * 4), dude.y + (dude.bit * 5), dude.bit, dude.bit);
    }
    context.fillStyle = dude.color.skin;
    context.strokeStyle = dude.color.skin;
    context.fill();
    context.stroke();
    context.restore();
    context.closePath();
}
function drawSkinShort(dude){
    context.beginPath();
    context.save();
    if(dude.forward) {
        // forehead and mouth >
        for (let i = 1; i < 5; i++) {
            context.rect(dude.x + (dude.bit * i), dude.y + (dude.bit*2), dude.bit, dude.bit);
            context.rect(dude.x + (dude.bit * i), dude.y + (dude.bit * 4), dude.bit, dude.bit);
        }
        // eye level >
        context.rect(dude.x + dude.bit, dude.y + (dude.bit * 3), dude.bit, dude.bit);
        context.rect(dude.x + (dude.bit * 3), dude.y + (dude.bit * 3), dude.bit, dude.bit);
        // arm >
        context.rect(dude.x + (dude.bit * 2), dude.y + (dude.bit * 6), dude.bit, dude.bit);
    }else{
        // forehead and mouth >
        for (let i = 1; i < 5; i++) {
            context.rect(dude.x + (dude.bit * (i+1)), dude.y + (dude.bit*2), dude.bit, dude.bit);
            context.rect(dude.x + (dude.bit * (i+1)), dude.y + (dude.bit * 4), dude.bit, dude.bit);
        }
        // eye level >
        context.rect(dude.x + (dude.bit *3), dude.y + (dude.bit * 3), dude.bit, dude.bit);
        context.rect(dude.x + (dude.bit * 5), dude.y + (dude.bit * 3), dude.bit, dude.bit);
        // arm >
        context.rect(dude.x + (dude.bit * 3), dude.y + (dude.bit * 6), dude.bit, dude.bit);
    }
    context.fillStyle = dude.color.skin;
    context.strokeStyle = dude.color.skin;
    context.fill();
    context.stroke();
    context.restore();
    context.closePath();
}
function drawEyes(dude){
    context.beginPath();
    context.save();
    context.rect(dude.x + (dude.bit*2), dude.y + (dude.bit*2), dude.bit, dude.bit);
    context.rect(dude.x + (dude.bit*4), dude.y + (dude.bit*2), dude.bit, dude.bit);
    context.fillStyle = dude.color.eyes;
    context.strokeStyle = dude.color.eyes;
    context.fill();
    context.stroke();
    context.restore();
    context.closePath();
}
function drawEyesShort(dude){
    context.beginPath();
    context.save();
    context.rect(dude.x + (dude.bit*2), dude.y + (dude.bit*3), dude.bit, dude.bit);
    context.rect(dude.x + (dude.bit*4), dude.y + (dude.bit*3), dude.bit, dude.bit);
    context.fillStyle = dude.color.eyes;
    context.strokeStyle = dude.color.eyes;
    context.fill();
    context.stroke();
    context.restore();
    context.closePath();
}
function drawShirtMen(dude){
    context.beginPath();
    context.save();
    if (dude.forward) {
        context.rect(dude.x + (dude.bit * 2), dude.y + (dude.bit * 4), dude.bit, dude.bit);
        context.rect(dude.x + (dude.bit * 3), dude.y + (dude.bit * 4), dude.bit, dude.bit);
        context.rect(dude.x + (dude.bit * 3), dude.y + (dude.bit * 5), dude.bit, dude.bit);
    }else{
        context.rect(dude.x + (dude.bit * 3), dude.y + (dude.bit * 4), dude.bit, dude.bit);
        context.rect(dude.x + (dude.bit * 4), dude.y + (dude.bit * 4), dude.bit, dude.bit);
        context.rect(dude.x + (dude.bit * 3), dude.y + (dude.bit * 5), dude.bit, dude.bit);
    }
    context.fillStyle = dude.color.shirt;
    context.strokeStyle = dude.color.shirt;
    context.fill();
    context.stroke();
    context.restore();
    context.closePath();
}
function drawShirtWoman(dude){
    context.beginPath();
    context.save();
    if (dude.forward){
        context.rect(dude.x + (dude.bit*2), dude.y + (dude.bit * 5), dude.bit, dude.bit);
        context.rect(dude.x + (dude.bit*3), dude.y + (dude.bit * 5), dude.bit, dude.bit);
    }else{
        context.rect(dude.x + (dude.bit*3), dude.y + (dude.bit * 5), dude.bit, dude.bit);
        context.rect(dude.x + (dude.bit*4), dude.y + (dude.bit * 5), dude.bit, dude.bit);
    }
    context.fillStyle = dude.color.shirt;
    context.strokeStyle = dude.color.shirt;
    context.fill();
    context.stroke();
    context.restore();
    context.closePath();
}
function drawShoes(dude){
    context.beginPath();
    context.save();
    if (dude.forward) {
        context.rect(dude.x + (dude.bit * 2), dude.y + (dude.bit * 6), dude.bit, dude.bit);
        context.rect(dude.x + (dude.bit * 3), dude.y + (dude.bit * 6), dude.bit, dude.bit);
    }else{
        context.rect(dude.x + (dude.bit * 3), dude.y + (dude.bit * 6), dude.bit, dude.bit);
        context.rect(dude.x + (dude.bit * 4), dude.y + (dude.bit * 6), dude.bit, dude.bit);
    }
    context.fillStyle = dude.color.shoes;
    context.strokeStyle = dude.color.shoes;
    context.fill();
    context.stroke();
    context.restore();
    context.closePath();
}
function drawGrass(){
    context.beginPath();
    context.rect(0, canvas.height - 10, canvas.width, canvas.height);
    context.fillStyle = 'greenyellow';
    context.strokeStyle = 'greenyellow';
    context.fill();
    context.stroke();
    context.closePath();
}
function drawCloud(){
    context.beginPath();
    context.save();
    context.strokeStyle = cloud.color;
    context.lineTo(cloud.x, cloud.y);
    context.lineTo(cloud.x +cloud.length, cloud.y);
    context.lineWidth = cloud.width;
    context.lineCap = 'round';
    context.stroke();
    context.restore();
    context.closePath();
}

let controller = {
    up: false,
    left: false,
    right: false,
    moveDude: function(e){
        switch(e.key){
            case "ArrowLeft":
                controller.left = (e.type === "keydown");
                break;
            case "ArrowRight":
                controller.right = (e.type === "keydown");
                break;
            case "ArrowUp":
                controller.up = (e.type === "keydown");
                break;
        }
    }
};
let physics = function(){
    let currentPlayer = allPlayers[player];
    currentPlayer.moving = false;
    if (controller.up && !currentPlayer.jumping){
        currentPlayer.yVelocity -= 20;
        currentPlayer.jumping = true;
    }
    if(controller.left){
        currentPlayer.xVelocity -=0.5;
        currentPlayer.forward = false;
        currentPlayer.moving = false;
    }
    if(controller.right){
        currentPlayer.xVelocity +=0.5;
        currentPlayer.forward = true;
    }
    currentPlayer.yVelocity += 1.5; // gravity
    currentPlayer.x += currentPlayer.xVelocity;
    currentPlayer.y += currentPlayer.yVelocity;
    currentPlayer.xVelocity *= 0.9; // friction
    currentPlayer.yVelocity *= 0.9; // friction

    // touches the floor >
    if (currentPlayer.y > canvas.height - currentPlayer.height) {
        currentPlayer.jumping = false;
        currentPlayer.y = canvas.height - currentPlayer.height;
        currentPlayer.yVelocity = 0;
    }

    if (currentPlayer.x < -currentPlayer.width) {
        currentPlayer.x = canvas.width;
    }else if (currentPlayer.x > canvas.width + currentPlayer.width) {
        currentPlayer.x = - currentPlayer.width;
        currentPlayer.moving = true;
    }
    cloud.xVelocity *= 0.7;
    if (currentPlayer.moving){
        cloud.xVelocity -= 0.5;
    }
    cloud.x += cloud.xVelocity;

    currentPlayer.draw();
    drawCloud();
    window.requestAnimationFrame(physics)
};
$("#btnPlay").on("click", playGame);
$("#btnBack").on("click", back);
function playGame(){
    if($$('#ddlPlayer').value != -1) {
        InitiateParameters();
        $(window).on('keydown', controller.moveDude);
        $(window).on('keyup', controller.moveDude);
        $$('#form').style.display = 'none';
        $$('canvas').style.display = 'block';
        $$('#btnBack').style.display='block';
        animationID = window.requestAnimationFrame(physics);
    }else{
        console.log($$('#ddlPlayer').value + "ok") ;
        $$('#errorMsg').innerText = "Please select a player."
    }
}
function back(){
    player = -1;
    $$('#form').style.display = 'block';
    $$('canvas').style.display = 'none';
    $$('#btnBack').style.display='none';
    $$('#ddlPlayer').value = -1;
    cancelAnimationFrame(animationID);
    window.removeEventListener('keydown', controller.moveDude);
    window.removeEventListener('keyup', controller.moveDude);
}
