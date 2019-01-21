
const dataEpisodes = (EPISODES.episodes);
const name = document.getElementById('names');
const containerEpisodes = document.getElementById('rootEpisodes');
const selectSeason = document.getElementById('season');





//console.log(dataEpisodes);
    //console.log(data);

    document.getElementById("seasons").addEventListener("click",()=>{
     document.getElementById("rootEpisodes").style.display="block";
     document.getElementById("characters").style.display="flex";
     document.getElementById("container").style.display="block";
      document.getElementById("season").value ="";
  
        //document.getElementById("texto").value ="";
       // document.getElementById("copyBlock").value ="";
     
    })

    document.getElementById("names").addEventListener("click",()=>{
        document.getElementById("root").style.display="flex";
        document.getElementById("rootEpisodes").style.display="none";
        document.getElementById("characters").style.display="none";
        document.getElementById("container").style.display="none";
 
     
           //document.getElementById("texto").value ="";
          // document.getElementById("copyBlock").value ="";
        
       })

    

    const showEpisodes = (dataEpisodes) => {
        let result = ''; 
          
         dataEpisodes.forEach(element => {
            result = containerEpisodes.innerHTML += `
           <div class = "cardEpisodes" >
               <div class = "card-body">
              <span>Título: <h5> "${element.episodeTitle}" </h5></span><br>
               <p class = "card-number">N° Capítulo: ${element.episodeNum}   
               -  N° Temporada:  ${element.seasonNum} </p><br>
               <p class = "card-text"><b> Descripción: </b> ${element.episodeDescription} </p>  
               </div>    
           </div>
           `
        });
        return result;
        }
    



        selectSeason.addEventListener('change', () => {
            //let condition = selectSeasons.value
            let condition = selectSeason.value 
            let filtered = filterSeasons(dataEpisodes, condition);
            //console.log(filtered)
                    

            // limpio div
            
            containerEpisodes.innerHTML = '';
      
           
            filtered.forEach(element => {
                containerEpisodes.innerHTML += `
                <div class = "cardEpisodes" >
                    <div class = "card-body">
                   <span>Título: <h5> "${element.episodeTitle}" </h5></span><br>
                    <p class = "card-number">N° Capítulo: ${element.episodeNum}   
                    -  N° Temporada:  ${element.seasonNum} </p><br>
                    <p class = "card-text"><b> Descripción: </b> ${element.episodeDescription} </p>  
                    </div>    
                </div>
                `
            })
            
        })




    window.onload = showEpisodes(dataEpisodes);


   /* 

   //const pageItem = document.querySelectorAll(".btn")
 

//let page = '1';

        
const showEpisodes = (dataEpisodes, page, flag) => {
    let result = '';
    let filtered = dataEpisodes.filter(element =>{
        return element.seasonNum === page
    });
  containerEpisodes.innerHTML = '';
  if(flag === 0)
  filtered.sort((a, b) => (a.name > b.name) ? 1 : -1)
  filtered.forEach(element => {
      result = containerEpisodes.innerHTML += `
       <div class = "cardEpisodes" >
           <div class = "card-body">
          <span>Título: <h5> "${element.episodeTitle}" </h5></span><br>
           <p class = "card-number">N° Capítulo: ${element.episodeNum}   
           -  N° Temporada:  ${element.seasonNum} </p><br>
           <p class = "card-text"><b> Descripción: </b> ${element.episodeDescription} </p>  
           </div>    
       </div>
       `  }
    );
    return result;
    };

 pageItem.forEach(item => {	
	item.addEventListener('click', () => {
	  let selectPage = item.attributes['data-value'].value;
	  //change active
	  let active = document.querySelector("button.btn-primary")
	  active.classList.remove('btn-primary');
	  // clear filter
		  item.classList.add('btn-primary');
	  page = selectPage;
	  showData(dataEpisodes,page,0);
	})
})  
        */