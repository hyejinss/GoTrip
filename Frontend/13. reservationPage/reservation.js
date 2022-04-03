// ********** 미체크 시 알림창 ***********
function Checkform() {
    if (frm.confirm.checked !=true){
        alert("유의사항 확인 후 체크해주세요.");
        frm.confirm.focus();
        return false;
      }
}


// ********** 운임 정보 ***********
function onpeCloseTog() {
  if(document.getElementById('toggle__content').style.display === 'block') {
    document.getElementById('toggle__content').style.display = 'none';
    document.getElementById('toggle').textContent = '';
  } else {
    document.getElementById('toggle__content').style.display = 'block';
    document.getElementById('toggle').textContent = '';
  }
}