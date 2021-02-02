
const create = (tagName='div', length=1, content='', setClass='', setId='', value='', setParrent='') =>{

    const parrentNode = document.querySelector(setParrent);

    for (let index = 0; index < length; index++) {

      const contenaire = document.createElement('div');
      const element = document.createElement(tagName);

      if(content != '')
      element.innerHTML = `${content[index]}`;

      if(setClass != '')
      element.classList.add(`${setClass[index]}`);

      if(setId != ''){

        for (let ind = 0; ind < setId[index].length; ind++) {

          element.setAttribute(`${setId[index][ind]}`, `${value[index][ind]}`);

        }

      }

      contenaire.appendChild(element);
      parrentNode.appendChild(contenaire);

    }

  }

const multiCreate = (tagName='div', content='', setClass='', setId='', value='', setParrent='') =>{

  const parrentNode = document.querySelector(setParrent);

  for (let index = 0; index < tagName.length; index++) {

    const contenaire = document.createElement('div');
    const element = document.createElement(tagName[index]);

    if(content != '')
    element.innerHTML = `${content[index]}`;

    if(setClass != '')
    element.classList.add(`${setClass[index]}`);

    if(setId != ''){

      for (let ind = 0; ind < setId[index].length; ind++) {

        element.setAttribute(`${setId[index][ind]}`, `${value[index][ind]}`);

      }

    }

    contenaire.appendChild(element);
    parrentNode.appendChild(contenaire);

  }

}

export {create, multiCreate};

