const selectMenu = document.querySelectorAll("select");
selectMenu = document.querySelectorAll("select");

for (let i = 12; i > 0; i--) {
    i = i <  10 ? "0" + i : i;
    let option = '<option value="${i}">${i}</option>';
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = '<option value="${i}">${i}</option>';
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);    
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AMPM" : "PM";
    let option = '<option value="${ampm}">${ampm}</option>';
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
} 

setInterval(() => {
    // getting hour, mins, secs
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    // if hour value is 0, set this value to 12
    h = h == 0 ? h = 12 : h;
    // adding 0 before hr, min, sec if this value is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    console.log('${h}:${m}:${s} ${ampm}');
}, 1000);