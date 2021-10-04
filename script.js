const pin7status = document.getElementById('pin7status');
const refreshBtn = document.getElementById('refreshBtn');
const pin7onbtn = document.getElementById('pin7onbtn')
const pin7offbtn = document.getElementById('pin7offbtn')

getStatus();

setInterval(() => {
  getStatus();
}, 1000);

// refreshBtn.addEventListener('click', getStatus);

pin7onbtn.addEventListener('click', pin7on);

pin7offbtn.addEventListener('click', pin7off);

async function getStatus() {
  try {

  const res = await fetch('http://172.16.0.23:3000/status/7')

  const data = await res.json();

  if(data.status === '0'){
    pin7status.innerText = 'The light is OFF.'
    pin7offbtn.disabled = true;
    pin7onbtn.disabled =false;
  }else if(data.status === '1'){
    pin7status.innerText = 'The light is ON.'
    pin7offbtn.disabled = false;
    pin7onbtn.disabled = true;
  }

  document.getElementById('pin7onbtn').classList.remove('hide');
  document.getElementById('pin7offbtn').classList.remove('hide');
  document.getElementById('button-title').classList.remove('hide')

  } catch (err) {
    console.log(err)
    console.log('oh no')
    pin7status.innerText = 'API unresponsive.'
    document.getElementById('pin7onbtn').classList.add('hide');
    document.getElementById('pin7offbtn').classList.add('hide');
    document.getElementById('button-title').classList.add('hide')
    return;

  }
}



async function pin7on() {
  const res = await fetch('http://172.16.0.23:3000/on/7');
}




async function pin7off() {
  const res = await fetch('http://172.16.0.23:3000/off/7');
}


//css tampering info https://www.w3schools.com/jsref/prop_element_classlist.asp