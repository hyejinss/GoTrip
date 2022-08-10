//회원가입 생년월일 
$(document).ready(function(){            
  var now = new Date();
  var year = now.getFullYear();
  var mon = (now.getMonth() + 1) > 9 ? ''+(now.getMonth() + 1) : '0'+(now.getMonth() + 1); 
  var day = (now.getDate()) > 9 ? ''+(now.getDate()) : '0'+(now.getDate());    
  //년도 selectbox만들기               
  for(var i = 1900 ; i <= year ; i++) {
      $('#year').append('<option value="' + i + '">' + i + '년</option>');    
  }

  // 월별 selectbox 만들기            
  for(var i=1; i <= 12; i++) {
      var mm = i > 9 ? i : "0"+i ;            
      $('#month').append('<option value="' + mm + '">' + mm + '월</option>');    
  }

  // 일별 selectbox 만들기
  for(var i=1; i <= 31; i++) {
      var dd = i > 9 ? i : "0"+i ;            
      $('#day').append('<option value="' + dd + '">' + dd+ '일</option>');    
  }

  //현재 일자 표시
  // $("#year  > option[value="+year+"]").attr("selected", "true");        
  // $("#month  > option[value="+mon+"]").attr("selected", "true");    
  // $("#day  > option[value="+day+"]").attr("selected", "true");       
});


//휴대폰 자동 하이픈 생성
const hypenTel = (target) => {
  target.value = target.value
  .replace(/[^0-9]/g, '')
  .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/,`$1-$2-$3`);
}


//이메일 입력방식 선택
$('#domain_list').change(function(){
  $("#domain_list option:selected").each(function () {
   
   if($(this).val()== '1'){ //직접입력일 경우
      $("#email_domain").val('');                        //값 초기화
      $("#email_domain").attr("disabled",false); //활성화
   }else{ //직접입력이 아닐경우
      $("#email_domain").val($(this).text());      //선택값 입력
      $("#email_domain").attr("disabled",true); //비활성화
   }
  });
});