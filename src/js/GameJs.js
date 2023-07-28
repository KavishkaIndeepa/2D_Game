var dog = document.getElementById("dog");
var background=document.getElementById("GameImage");
var idleImageNumber=1;
var idleAnimationNumber=0;
var runImageNumber=1;
var runAnimationNumber=0;
var backgroundImagePositionX=0;
var moveBackgroundAnimationId=0;
var jumpAnimationNumber=0;
var jumpImageNumber=1;
var dogMarginTop=490;



/*---------------------------Idle Animation---------------------*/
function idleAnimation(){

    dog.src="assests/images/dog/Idle (" + idleImageNumber + ").png";

    idleImageNumber =idleImageNumber+1;

    if(idleImageNumber === 10){
        idleImageNumber=1;
    }
}

function idleAnimationStart(){
    idleAnimationNumber=setInterval(idleAnimation,100);
}


/*---------------------------Run Animation---------------------*/
function runAnimation(){
    dog.src="assests/images/dog/Run (" + runImageNumber + ").png";

    runImageNumber=runImageNumber+1;

    if(runImageNumber===8){
        runImageNumber=1;
    }
}

function runAnimationStart(){
    runAnimationNumber=setInterval(runAnimation,100);

    //while run stop idle
    clearInterval(idleAnimationNumber);
}

// buttons key catch
function keyCheck(event){

    let keyCode = event.which;

    if(keyCode === 13){
        if(runAnimationNumber === 0){
            runAnimationStart();
        }

        if(moveBackgroundAnimationId===0){
            moveBackgroundAnimationId=setInterval(moveBackground,100);
        }
    }

    if(keyCode ===32){
        if(jumpAnimationNumber===0){
            jumpAnimationStart();
        }

        if(moveBackgroundAnimationId===0){
            moveBackgroundAnimationId=setInterval(moveBackground,100);
        }
    }

}


/*---------------------------Background move Animation---------------------*/

function moveBackground(){

    /*document.getElementById("background").style.backgroundPositionX=backgroundImagePositionX+"px";*/
    background.style.backgroundPositionX=backgroundImagePositionX+"px";

    backgroundImagePositionX=backgroundImagePositionX-60;
}

/*---------------------------Jump Animation---------------------*/

function jumpAnimation(){


    dog.src="assests/images/dog/jump (" + jumpImageNumber + ").png";
    jumpImageNumber=jumpImageNumber+1;


    //Increase robot jumping height
    if(jumpImageNumber <=6){
        dogMarginTop=dogMarginTop-20;
        dog.style.marginTop=dogMarginTop+"px";
    }

    //Reduce robot jumping height
    if(jumpImageNumber >=7){
        dogMarginTop=dogMarginTop+20;
        dog.style.marginTop=dogMarginTop+"px";
    }

    if(jumpImageNumber===8){
        jumpImageNumber=1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber=0;
        runImageNumber=0;
        runAnimationStart();
    }
}

function jumpAnimationStart(){
    clearInterval(idleAnimationNumber);
    runImageNumber=0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber=setInterval(jumpAnimation,200);
}