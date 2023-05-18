const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

const timeUpdate=()=>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    h < 10 ? h = '0' + h : h;
    m < 10 ? m = '0' + m : m;
    s < 10 ? s = '0' + s : s;

    if(h>12){
        h = h -12;
        ampm = 'PM'
    }
    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm.innerText = 'AM'
    setTimeout(()=>{timeUpdate()}, 1000)
}

timeUpdate()