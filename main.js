function clickNumber(input){
    var screen = document.getElementById("display__result");
    screen.innerHTML += input;
}
function Clear(){
    var screen = document.getElementById("display__result");
    screen.innerHTML = "";
}
function Mod()
{
    var screen = document.getElementById("display__result");
    var str = screen.innerHTML;
    str = str + "%";
    screen.innerHTML = str;
    console.log("test")
}

function Div()
{
    var screen = document.getElementById("display__result");
    var str = screen.innerHTML;
    str = str + "/";
    screen.innerHTML = str;
}

function Calculate()
{
    var screen = document.getElementById("display__result");
    var str = screen.innerHTML;
    var result = eval(str);
    screen.innerHTML = result;
}

function Add()
{
    var screen = document.getElementById("display__result");
    var str = screen.innerHTML;
    str = str + "+";
    screen.innerHTML = str;
}

function Sub()
{
    var screen = document.getElementById("display__result");
    var str = screen.innerHTML;
    str = str + "-";
    screen.innerHTML = str;
}
function Mul()
{
    var screen = document.getElementById("display__result");
    var str = screen.innerHTML;
    str = str + "*";
    screen.innerHTML = str;
}
function Dot(){
    var screen = document.getElementById("display__result");
    var str = screen.innerHTML;
    str = str + ".";
    screen.innerHTML = str;
}