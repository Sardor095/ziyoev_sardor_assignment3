
let mub, sar, san, result;
let looping = true;


function calculate(oper, oper1, oper2) {
    while(looping){
        
    mub = window.prompt("Enter a number");
    sar = window.prompt("Enter another number");
    san = window.prompt("To Divide /" + 
                        "To Multiply *" +
                        "To Add +" +
                        "To Substract -" +
                        "To STOP Enter 'stop' "
                        );

        switch(san){
            case "+":
                result = Number(mub) + Number(sar);
                window.document.write("you answer is " + result + "<br>");
                break;
            case "-":
                result = Number(mub) - Number(sar);
                window.document.write("you answer is " + result + "<br>");
                break;
            case "*":
                 result = Number(mub) * Number(sar);
                 window.document.write("you answer is " + result + "<br>");
                 break;
            case "/":
                result = Number(mub) / Number(sar);
                window.document.write("you answer is " + result + "<br>");
                break;
            case "stop":
                looping = false;
                break;

            default:
                alert("it's not happining!");
                continue;
        }
    }
}

  

calculate(mub, sar, san);
window.document.write("you answer is " + result);