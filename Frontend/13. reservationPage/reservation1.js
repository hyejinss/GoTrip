// ********** 미체크 시 알림창 ***********
function Checkform() {
    if (frm.confirm.checked !=true){
        alert("유의사항 확인 후 체크해주세요.");
        frm.confirm.focus();
        return false;
      }
}