const userInput = document.querySelector(".inp");
const resetKey = document.querySelector(".reset");
const answerKey = document.querySelector(".equals");
const deleteKey = document.querySelector(".del");
const keys = document.querySelectorAll(".key");

const keysArray = Array.from(keys);


let lastKeyIsOperator = false;
let decimal = false;

const keyClickHandler = (event) => {
    console.log("keyClicked:",event.target.innerText);
    const value = event.target.innerText;

    if(value ==="."&& decimal){
        return;
    }


    if("+-*/".includes(value)){
        if(lastKeyIsOperator){
            initialvalue = userInput.value;
            updatedvalue=initialvalue.substring(0,initialvalue.length-1)+value;
            console.log(updatedvalue);
            userInput.value = updatedvalue;
            return;
        }
        lastKeyIsOperator = true;
        decimal = false;

} else{
    lastKeyIsOperator = false;
    if (value==="."){
        decimal=true;
    }
}

userInput.value += value;

userInput.scrollLeft = userInput.scrollWidth;
};

const resetHandler=()=>{
    console.log("reset clicked");
    userInput.value="";
};

const deleteHandler=()=>{
    console.log("delete clicked");
    initialvalue=userInput.value;
    updatedvalue=initialvalue.substring(0,initialvalue.length-1);
    userInput.value=updatedvalue;
};

const expressionHandler=(expression)=>{
    console.log("expression:",expression);
    const formattedExpression = expression.replace(/x/g,"*");
    const result = eval(formattedExpression);
    return result;
}

const answerHandler=()=>{
    console.log("answer clicked");
    const expression = userInput.value;
    const result = expressionHandler(expression);
    userInput.value = result;
}

keysArray.forEach((key)=>key.addEventListener("click",keyClickHandler));
resetKey.addEventListener("click",resetHandler);
deleteKey.addEventListener("click",deleteHandler);
answerKey.addEventListener("click",answerHandler);
