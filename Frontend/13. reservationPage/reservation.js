//---------- 한글만 입력 -----------
$("#text_ko1").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/gi, ''));
  }
});

$("#text_ko2").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/gi, ''));
  }
});


//---------- 영문만 입력 -----------
$("#text_eng1").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^[a-zA-Z]*$/gi, ''));
  }
});

$("#text_eng2").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^[a-zA-Z]*$/gi, ''));
  }
});


//---------- 숫자만 입력 -----------
$("#text_num1").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});

$("#text_num2").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});

$("#text_num3").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});

$("#text_num4").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});


//---------- 이메일 입력 -----------
$("#text_email1").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/gi, ''));
  }
});

$("#text_email2").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/gi, ''));
  }
});


//********** 운임 정보 ***********
function onpenCloseTog() {
  if(document.getElementById('toggle_content').style.display === 'block') {
    document.getElementById('toggle_content').style.display = 'none';
    document.getElementById('toggle').textContent = '';
  } else {
    document.getElementById('toggle_content').style.display = 'block';
    document.getElementById('toggle').textContent = '';
  }
}


//********** 자동 입력 ***********
function check1(f){
  if (f.checked) {
    $('#text_ko2').val($('#text_ko1').val());

    $('#text_num3').val($('#text_num1').val());

    $('#text_email2').val($('#text_email1').val());

    $('#text_num4').val($('#text_num2').val());
  } else{
      $('#text_ko2').val('');

      $('#text_num3').val('');

      $('#text_email2').val('');

      $('#text_num4').val('');
    }
}