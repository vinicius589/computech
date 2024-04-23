function validaBusca() {
  if (document.querySelector('#keyword').value == '') {
    alert('Nao podia ter deixado em branco a busca!');
    return false;
  }
}
document.querySelector('#form-busca').onsubmit = validaBusca;
function validaBusca() {
  if (document.querySelector('#keyword').value == '') {
    document.querySelector('#keyword').style.background = '#ffaaaa';
    return false;
  }
}
function dentro() {
  document.querySelector("#keyword").style.background = "white";
}
document.querySelector("#keyword").onfocus = dentro;
document.querySelector("#keyword").onkeypress = dentro;

var banners = ["img/destaque-home.jpg","img/destaque-home-2.jpg"];
var bannerAtual = 0;
function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector('.destaque   img').src =
    banners[bannerAtual];
}
//setInterval(trocaBanner,4000);
var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');
controle.onclick = function () {
  if (controle.className == 'pause') {
    clearInterval(timer);
    controle.className = 'play';
  } else {
    timer = setInterval(trocaBanner, 4000);
    controle.className = 'pause';
  }
  return false;
}
