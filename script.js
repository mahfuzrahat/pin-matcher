// Use common function..

// 1. Empty Value..
function emptyValue(id){
    document.getElementById(id).value = '';
}

// 2. Empty Text..
function emptyText(id){
    document.getElementById(id).innerText = '';
}

// 3. Display None..
function displayNone(id){
    document.getElementById(id).style.display = 'none';
}

// 4. Display Block..
function displayBlock(id){
    document.getElementById(id).style.display = 'block';
}



// Generate Random Number....

// let generatorBtn = document.getElementById("generator-btn");
// generatorBtn.addEventListener("click", function (){
//     let pin = "";
//     for(var i = 0; i<4; i++){
//         let random = Math.random() *9;
//         let round = Math.round(random);
//         pin += String(round);
//     } 

//     document.getElementById("show-pin").value = pin;
// })



// Another way to generate Random number... both are working
function randomNumFun(){
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("show-pin").value = randomNumber;

    emptyValue("inputPin");
    displayNone("tryContent");
    
}

// Input Number Value...

function btnKey(id){
    let prevValue = document.getElementById("inputPin").value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById("inputPin").value = prevValue + key;
    
    displayNone("matched");
    displayNone("unmatched");
    
}

// Clean / Clear Input Value..
function clean(){
    document.getElementById("inputPin").value = '';
}

// Clean Last Value...
function cleanLast(){
    let inputResult = document.getElementById("inputPin").value;
    let removeValue = inputResult.toString().slice(0, -1);
    document.getElementById("inputPin").value = removeValue;
}

// Submit Button (Pin matching or not matching condition)..
function submitBtn(){
    let randomNumber = document.getElementById("show-pin").value;
    let typeNum = document.getElementById("inputPin").value;

    // pin matching condition....
    if(randomNumber == typeNum){
        displayBlock("matched");  
        displayNone("tryContent");      
    }
    else{
        displayBlock("unmatched"); 
        displayNone("matched");
        tryLeft("tryLeft"); 
        displayBlock("tryContent");
    }
}

// Pin match Error... 3 try Left...
function tryLeft(id){
    let tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if(tryAgain == '1'){
        disableBtn("submit");
    }
}

// Submit Button disabled...
function disableBtn(id){
    let button = document.getElementById(id);
    button.style.cursor = "not-allowed";
    button.setAttribute("disabled", "true");
    button.title = "Please reload page";
}