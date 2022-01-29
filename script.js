let value = [1,1,1,1,1,1,1,1];
let isClick = [false, false, false, false, false, false, false, false];

$("#form").submit(function (e) {
  e.preventDefault();
});

$(document).ready(function () {
  $("button").click(function () {
    let val = "";
    let hex;
    let pointer = $(this).text();
    if (!isClick[pointer]) {
      value[pointer] = 0;
      $(this).css("background-color", "red");
      isClick[pointer] = true;
    } else {
      value[pointer] = 1;
        $(this).css("background-color", "white");
        isClick[pointer] = false;
    }
    for(const i of value){
      val += i;
    }
    hex = parseInt(val, 2).toString(16).toUpperCase();
    $(".display").text("[BINARY:"+val+"]  [HEX:"+hex+"]");
  });
}); 