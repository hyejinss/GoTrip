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