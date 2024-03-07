var pos = 0, qus, choices = [], A, B, C, correct = 0;
var quizz = [
    ["JavaScript Original Name", "TypeScript", "LiveScript", "JavaScript", "B"],
    ["let a;<br>document.write(a);", "0", "error", "Undefined", "C"],
    ["First release of a browser supporting JavaScript is", "1997", "1996", "1995", "C"],
    ["SunSoft HotJava1.0 browser support JavaScript", "True", "False", "Maybe", "B"],
    ["undefined+1", "Not a Number", "Undefined1", "1", "A"],
];
function diplayQues() {
    if (pos >= quizz.length) {
        document.getElementById("total").innerHTML = "You Complete the Quizz...";
        document.getElementById("ques").innerHTML = "You win " + correct + " out of " + quizz.length;

        pos = 0;
        correct = 0;
        let nextButton = document.getElementById('but1');
        nextButton.style.display = 'none'
        let previousButton = document.getElementById('but2');
        previousButton.style.display = 'none'
        let choice1=document.getElementById("ch1");
        choice1.style.display='none';
        let choice2=document.getElementById("ch2");
        choice2.style.display='none';
        let choice3=document.getElementById("ch3");
        choice3.style.display='none';
        return false;
    }
    else {
        document.getElementById("total").innerHTML = (pos + 1) + " of " + quizz.length;
        qus = quizz[pos][0];
        A = quizz[pos][1];
        B = quizz[pos][2];
        C = quizz[pos][3];
        document.getElementById("ques").innerHTML = qus;
        document.getElementById("ch1").innerHTML = "<br><input type='radio' name='choices' value='A'>" + A;
        document.getElementById("ch2").innerHTML = "<br><input type='radio' name='choices' value='B'>" + B;
        document.getElementById("ch3").innerHTML = "<br><input type='radio' name='choices' value='C'>" + C;
        document.getElementById("but1").innerHTML = "<br><button type='submit' name='sub' onclick='checkAns()'>Next</button>"; 
    }
}
document.getElementById("but2").innerHTML += "<br><button type='submit' name='sub' onclick='preAns()'>Previous</button>";
function checkAns() {
    let choice;
    choices = document.getElementsByName("choices");
    for (let i = 0; i < choices.length; i++) {
        //console.log(choices);
        if (choices[i].checked) {
            choice = choices[i].value;
            if (choice == quizz[pos][4]) {
              
                correct++;
            }
            pos++;
            diplayQues();
            nextAns();

        }
    }
}
function preAns() {
    if (pos > 0) {
        pos--;
    }
    diplayQues();

}
