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
  items : 4, //한번에 보여줄 아이템 수
  loop : true, //반복여부
  margin : 35,
  nav : true,
  responsive : {
      0 : {
          items : 1
      },
      600 : {
          items : 3
      },
      1000 : {
          items : 4
      }
  }
})

// Go to the next item
$('.customNextBtn').click(function() {
  owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel', [300]);
})

