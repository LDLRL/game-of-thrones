/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */



const data = (DATA.characters);
const dataEpisodes = (EPISODES.episodes);

const containerRoot = document.getElementById('root');
const selectHouse = document.getElementById('house');


//console.log(dataEpisodes);


const showData = (data) => {
    let result = '';
    //console.log(DATA)
   data.forEach(element => {
     // element --> DATA[i]
     //console.log(element.house);
     
  
       result = containerRoot.innerHTML += `
       <div>
         <div class="card">
           <div class="box">
             <div class="img">
                 <img src="${element.characterImageFull}">
             </div>
             <h2>${element.characterName}<br><span>CASA: ${element.houseName}</span></h2>
             
           </div>
         </div>
       </div>`
     } 
   );
   return result;
}
window.onload = showData(data);







/*

//FILTRADO CON EGG
 selectEgg.addEventListener('change', () => {
  let condition = selectEgg.value
  let filtered = filterEgg(data, condition);
  
  // limpio div
  containerRoot.innerHTML = '';

  filtered.forEach(element => {
    containerRoot.innerHTML += `
    <div>
      <div class="card">
        <div class="box">
          <div class="img">
              <img src="${element.img}">
          </div>
          <h2>${element.name}<br><span>${element.egg}</span></h2>
          <p>${element.type}</p>
        </div>
      </div>
    </div>` 
  })
})


//FILTRADO CON TYPE
selectType.addEventListener('change', () => {
  let condition = selectType.value
  let filtered = filterType(data, condition);
  
  // limpio div
  containerRoot.innerHTML = '';

  filtered.forEach(element => {
    containerRoot.innerHTML += `
    <div>
      <div class="card">
        <div class="box">
          <div class="img">
              <img src="${element.img}">
          </div>
          <h2>${element.name}<br><span>${element.egg}</span></h2>
          <p>${element.type}</p>
        </div>
      </div>
    </div>` 
  })
})

 window.onload = showData(data);

 */