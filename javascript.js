function imgChange(self) {
  var target = document.querySelector('body');
  var home = document.getElementById('homeImg');
  var imgSrc = document.getElementById('nightDayButton');
  //var spanColor = document.getElementsByClassName('year'); 실패한 코드들
  //var listColor = document.getElementsById('#listColorChange');
  //var color = document.getElementsById('color');

  if (self.value === 'dark') {
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    //spanColor.style.color = 'white';
    //listColor.style.color = 'white';
    //color.color = 'white';
    imgSrc.src = 'sun.png';
    home.src = 'home(white).png';
    self.value = 'bright';
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    //spanColor.style.color = 'slategrey';
    //listColor.style.color = 'black';
    //color.color = 'black';
    imgSrc.src = 'moon.png';
    home.src = 'home.png';
    self.value = 'dark';
  }
}

function mouseOver(self) {
  if (document.querySelector('input').value === 'dark') {
    self.style.backgroundColor = 'powderblue';
    self.style.borderRadius = '10px';
  } else {
    self.style.backgroundColor = 'teal';
    self.style.borderRadius = '10px';
  }
}
function mouseOut(self) {
  self.style.backgroundColor = 'inherit';
}
