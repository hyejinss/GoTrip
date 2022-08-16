// Owl Carousel slide
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


//Events by selected option
function categoryChange(e) {
  var region_overseas = ['유럽', '미주', '아프리카', '아시아'];
  var region_domestic = ['서울', '부산', '여수', '제주'];
  var target = document.getElementById('region'); 

  if (e.value == 'overseas') var d = region_overseas;
  else if (e.value == 'domestic') var d = region_domestic;

  target.options.length = 0;

  for (x in d) {
    var opt = document.createElement('option');
    opt.value = d[x];
    opt.innerHTML = d[x];
    target.appendChild(opt);
  }
}

// $(document).ready(function() {
//   $('#category').change(function() {
//     var result = $('#category option:selected').val();
//     if (result == 'overseas') {
//       $('#region').show();
//     } else {
//       $('#region').hide();
//     }
//   });
// });