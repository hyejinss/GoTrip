//Events by selected option
function categoryChange(e) {
  var inquiry_overseas = ['항공권', '상품'];
  var inquiry_domestic = ['항공권', '상품'];
  var inquiry_member = ['결제', '적립금', '기타'];
  var target = document.getElementById('inquiry');

  if (e.value == 'overseas') var d = inquiry_overseas;
  else if (e.value == 'domestic') var d = inquiry_domestic;
  else if (e.value == 'member') var d = inquiry_member;

  target.options.length = 0;

  for (x in d) {
    var opt = document.createElement('option');
    opt.value = d[x];
    opt.innerHTML = d[x];
    target.appendChild(opt);
  }
}