// 최상단 체크박스 클릭 시 모두 체크 or 미체크 이벤트
function selectAll(selectAll)  {
  const checkboxes 
     = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })
}


// '삭제X' 버튼 클릭 이벤트
function showConfirm(){
  if (confirm("해당 상품을 장바구니에서 삭제하시겠습니까?"))
  {
    alert("확인 버튼을 눌렀습니다.");
  } else 
  {
    alert("취소 버튼을 눌렀습니다.");
  }
}


// '선택상품삭제' 버튼 클릭 이벤트
function selectDelete(){
  if (confirm("선택 상품을 장바구니에서 삭제하시겠습니까?"))
  {
    alert("확인 버튼을 눌렀습니다.");
  } else 
  {
    alert("취소 버튼을 눌렀습니다.");
  }
}