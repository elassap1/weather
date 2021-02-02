import form from './form.js'
import {weather} from './weather.js'
import {create} from './newElements.js'


form();
weather();


setInterval(() => {

  const settime = document.querySelector('.time');

  if(settime != null){

    let d = new Date();

    let time = d.getHours()+': '+d.getMinutes()+': '+d.getSeconds();

    settime.innerHTML = `${time}`;

  }

}, 1000);

