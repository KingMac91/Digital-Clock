const clock = document.querySelector('.clock');

const digitalClock =() =>{

    //create a variable to hold on the time
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html =`
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>`;

    clock.innerHTML = html;


};

setInterval(digitalClock, 1000);