var rot = 0,
    con = document.querySelector('#caro_con'),
    btns = document.querySelectorAll('button'),
    tran_time = 1000

btns.forEach(function(btn) {
  btn.addEventListener('click', function(){
    if(btn.className == 'btn_left') {
      rot = rot - 72
      con.style.transform = 'rotate('+rot+'deg)'
    }
    if(btn.className == 'btn_right') {
      rot = rot + 72
      con.style.transform = 'rotate('+rot+'deg)'
    }
  })
})

window.addEventListener('keyup', function(e){
  if(e.keyCode === 37) {
    rot = rot - 72
    con.style.transform = 'rotate('+rot+'deg)'
  }
  if(e.keyCode === 39) {
    rot = rot + 72
    con.style.transform = 'rotate('+rot+'deg)'
  }
})

function mouseWheel(e) {
  // console.log(e)
  window.removeEventListener('wheel', mouseWheel)
  setTimeout(function(){
    window.addEventListener('wheel', mouseWheel)
  }, tran_time)

  if(e.deltaY < 0) {    
    rot = rot - 72
    con.style.transform = 'rotate('+rot+'deg)'
  } else {
    rot = rot + 72
    con.style.transform = 'rotate('+rot+'deg)'
  }
}
window.addEventListener('wheel', mouseWheel)