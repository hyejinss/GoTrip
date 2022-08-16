var functionName = "";
  $(function() {
      var oldpageindex = sessionStorage.eventplanpageindex;
      function bindpaging(){
        //페이징 바인딩 [Get 방식]
        $("#board__common").paging({
            item: "a",
            itemClass: "page number",
            itemcurrent: "active",
            length: 10,
            current: 1,
            max: 5149,
        }
        )}
  })



// owl slide API
$('.owl-carousel').owlCarousel({
  items : 3, //한번에 보여줄 아이템 수
  loop : true, //반복여부
  margin : 35,
  nav : true,
  navText : [
    '<i class="fa-solid fa-angle-left fa-2x"></i>',
    '<i class="fa-solid fa-angle-right fa-2x"></i>'
  ],
  responsive : {
      0 : {
          items : 1
      },
      600 : {
          items : 3
      },
      1000 : {
          items : 3
      }
  }
});