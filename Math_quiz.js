player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

/*number1 = document.getElementById("number1").innerHTML = number1
number2 = document.getElementById("number2").innerHTML = number2*/

player1_score = 0
player2_score = 0

 document.getElementById("player1_name").innerHTML = player1_name + ": ";
 document.getElementById("player2_name").innerHTML = player2_name + ": ";

 document.getElementById("player1_score").innerHTML = player1_score
 document.getElementById("player2_score").innerHTML = player2_score

 document.getElementById("player_question").innerHTML = "Question turn ="+player1_name 
 document.getElementById("player_answer").innerHTML = "Answer turn ="+player2_name

 function send() {
number1 = document.getElementById("number1").value
number2 = document.getElementById("number2").value
actual_answer = parseInt(number1) * parseInt(number2);

question_word = "<center> <h4>"+ number1+" × "+ number2 + "</h4>"
input_box = "<br>Answer : <input type='text' id='input_ckeck_box'>"
check_button = "<br> <br> <button class='btn btn-success' onclick='check()'>Check</button> </center>"
row =  question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;

document.getElementById("number1").value=""
document.getElementById("number2").value=""
}