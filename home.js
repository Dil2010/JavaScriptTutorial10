function ageInDays(){
var birthyear=prompt("What year you were born in?");
var ageInDayss=(2018-birthyear)*365;

// var para = document.createElement("p");
// para.innerText = "This is a paragraph";
// document.body.appendChild(para);

// var para = document.createElement("p");
// para.innerText = "This is a paragraph";
// document.body.appendChild(para);

// var pata=document.createElement("h1");
// pata.innerText="This is my name";
// document.body.appendChild(pata);

var para=document.createElement('h1');
var textAnswer=document.createTextNode('You are '+ageInDayss+' days');
para.setAttribute('id','ageInDays');
para.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(para);
}



function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="cat.jfif";
    div.appendChild(image);

}

function rpsGame(yourChoice){
    console.log("your "+yourChoice.id);
    // console.log(yourchoise.id);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberToChoice(rpsInteger());
    console.log("bot "+botChoice);
    results=decideWinner(humanChoice,botChoice);
    console.log(results);
    message=finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}

// console.log(Math.floor(Math.random()*3));
function rpsInteger(){
    return (Math.floor(Math.random()*3));

}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];

}

// function decideWinner(yourChoice,computerChoice){
//     var rpsDatabase={
//         'rock':{'rock':0.5,'paper':0,'scissors':1},
//         'paper':{'rock':1,'paper':0.5,'scissors':0},
//         'scissors':{'rock':0,'paper':1,'scissors':0.5}
//     };

//     var yourScore=rpsDatabase[yourChoice][computerChoice];
//     var computerScore=rpsDatabase[computerChoice][yourChoice];
//     console.log(yourScore);
//     console.log(computerScore);
//     return [yourScore,computerScore];
//     // return yourScore;
// }

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase={
        'rock':{'rock':0.5,'paper':0,'scissors':1},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'rock':0,'paper':1,'scissors':0.5}
    };

    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];
    console.log(yourScore);
    console.log(computerScore);
    return [yourScore];
    // return yourScore;
}

function finalMessage(yourScore){
    if(yourScore==0){
        return {'message':'You Lost','color':'red'}
    }else if(yourScore==0.5){
        return {'message':'You Tied','color':'yellow'}
    }else {
        return {'message':'You Win','color':'green'}
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    var divhuman=document.getElementById('flex-box-rps');
    console.log(divhuman);

    humanDiv.innerHTML="<img src='"+imagesDatabase[humanImageChoice]+"'height=150 width=150>";
    divhuman.appendChild(humanDiv);

    var divmessage=document.getElementById('flex-box-rps');
    console.log(divmessage);

    messageDiv.innerHTML="<h1 style='color:'"+ finalMessage['color']+";font-size:60px;padding:30px;'>"+finalMessage['message']+"</h1>"
    divmessage.appendChild(messageDiv);

    var divbot=document.getElementById('flex-box-rps');
    console.log(divbot);

    botDiv.innerHTML="<img src='"+imagesDatabase[botImageChoice]+"'height=150 width=150>";
    divbot.appendChild(botDiv);
}

var all_buttons=document.getElementsByTagName('button');
console.log(all_buttons);

var copyallbuttons=[];

for(let i=0;i<all_buttons.length;i++){
    copyallbuttons.push(all_buttons[i].classList[1]);

}

console.log("this is a copy",copyallbuttons);

function buttonColorChange(buttonthingy){

    console.log("buttonthingyvalue",buttonthingy.value);
    if(buttonthingy.value==='red'){
        buttonsRed();
    }else if(buttonthingy.value==='green'){
        buttonsGreen();
    }else if(buttonthingy.value==='random'){
        buttonsRandom();
    }else if(buttonthingy.value==='reset'){
        buttonsreset();
    }

}

function buttonsRed(){
    for (let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsreset(){
    for (let i=0;i<7;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyallbuttons[i]);
    }
}

var randombuttons=[];

function buttonsRandom(){
    var choices=['btn-primary','btn-danger','btn-warning','btn-success'];
    for (let i=0;i<all_buttons.length;i++){
        var t=(Math.floor(Math.random()*4));
        randombuttons.push(choices[t]);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(randombuttons[i]);
    }
}
