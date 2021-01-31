let origotext = document.getElementById('text');
const origospeed = document.getElementById('speed');
const vyptext = 'Mirek je gey';
let letterid = 1;

let speed = 500

function printtext(){

  speed = 500 / origospeed.value;

  origotext.innerText = vyptext.slice(0, letterid);
  letterid++

  if (letterid > vyptext.length) {
    letterid = 1
  }

  //spozdeni speed v milisekundach pote zpusti funkci printtext
  setTimeout(printtext, speed)
}

printtext();
