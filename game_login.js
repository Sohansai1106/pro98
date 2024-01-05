// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;
  // Store these values locally
  localStorage.setItem("player1_name",player1_name)
  localStorage.setItem("player2_name",player2_name)
  //Assign "game_page.html" to window.location
  window.location = "game_page.html";
}

function send()   {
  number1 = document.getElementsById("number1").value;
  number2 = document.getElementsById("number2").value;
  actual_answer = parseInt(number1) * arseInt(number2);
}

question_number = "<h4>" + number1 + "X" + number2 +"</h4>";
input_box = "<br><br><button class='tn btn-info' onclick='check()'>Check</button>"
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row

document.getElementById("number1").innerHTML = "";
document.getElementById("number2").innerHTML = "";