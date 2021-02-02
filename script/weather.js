import {create} from './newElements.js'

const weather = () =>{

  const btn = document.querySelector('button');

  const input = document.querySelectorAll('input');

  const apiKey = 'de8c453d6cf57df8b3237dd6453f85fb';

  var state = {

    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',

  };

  btn.onclick = async () => {

    let city = input[0].value;

    if(city.length > 3){

      const rep = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)

      const data = await rep.json();

        state = {

          tempreature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
      
        };

      city = '';

    let content = `
    <div>
    <div>City:</div> <div>${state.city}, ${state.country} <img src=https://www.countryflags.io/${state.country}/shiny/64.png></div>
    <div>Tempreature:</div> <div>${state.tempreature}</div>
    <div>Humidity:</div> <div>${state.humidity}</div>
    <div>Description:</div> <div>${state.description}</div>
    <div>Time: </div><div class=time></div>
    </div>
    `;

    const apidisplay = document.querySelector('#api');

    if(apidisplay != null){

      apidisplay.remove();

    }
    create('div',1,[content],'',[['id']],[['api']],'#contenaire')

  }

}

}

export {weather};
