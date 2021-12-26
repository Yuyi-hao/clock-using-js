setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

const digiHour = document.getElementById('digiHour');
const digiMinute = document.getElementById('digiMinute');
const digiSecond = document.getElementById('digiSecond');

const year = document.getElementById('year');
const day = document.getElementById('day');
const date = document.getElementById('datenum');

function setClock(){
    
    const currentDate = new Date();
    console.log(currentDate);
    const second = currentDate.getSeconds()/60;
    const minute = (second + currentDate.getMinutes())/60;
    const minuteRatio = (second + currentDate.getMinutes()*6);
    const hour =  minute + currentDate.getHours();
    const hourRatio = (hour-12)*30;
    
    setRotation(hourHand,hourRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(secondHand,second*360);
    
    let textSecond = currentDate.getSeconds();
    let textMinute = currentDate.getMinutes();
    let textHour = currentDate.getHours();
    
    if(currentDate.getSeconds() < 10) { textSecond = ` 0${currentDate.getSeconds()} `; }
    else{ textSecond = ` ${currentDate.getSeconds()}`}
    
    if(currentDate.getMinutes() < 10) { textMinute = ` 0${currentDate.getMinutes()} : `; }
    else{ textMinute = ` ${currentDate.getMinutes()} : `; }

    if(currentDate.getHours() < 10){ textHour = ` 0${currentDate.getHours()} : `; }
    else{ textHour = ` ${currentDate.getHours()} : `}
    
    digiHour.innerHTML= textHour;
    digiMinute.innerHTML= textMinute;
    digiSecond.innerHTML= textSecond;
    
    // date 
    const textdate = currentDate.getDate();
    let textday = currentDate.getDay();
    const textyear = currentDate.getFullYear();
    switch(textday){
        case 0:
            textday = 'SUN';
            break;
        case 1:
            textday = 'MOn';
            break;
        case 2:
            textday = 'TUE';
            break;
        case 3:
            textday = 'WED';
            break;
        case 4:
            textday = 'THU';
            break;
        case 5:
            textday = 'FRI';
            break;
        case 6:
            textday = 'SAT'; 
    }
    
    day.innerHTML = textday+"/";
    date.innerHTML = textdate+"/";
    year.innerHTML = textyear; 
} 




function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio);
}

setClock();
