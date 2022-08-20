//---------- 한/영만 입력 -----------
$("#cust_name").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^(ㄱ-힣a-zA-Z)]/gi, ''));
  }
});

//---------- 숫자만 입력 -----------
$("#cust_phone_a").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});
$("#cust_phone_b").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});
$("#cust_phone_c").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});

$("#number").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});

//---------- radio event -----------
function div_OnOff(v, id){
  if (v == "email"){
    document.getElementById(id).style.display=""; //보여줌
  }else{
    document.getElementById(id).style.display="none"; //숨김
  }
}