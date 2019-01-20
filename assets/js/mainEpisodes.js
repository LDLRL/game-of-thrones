
const dataEpisodes = (EPISODES.episodes);

const containerEpisodes = document.getElementById('rootEpisodes');



//console.log(dataEpisodes);
    //console.log(data);

    document.getElementById("seasons").addEventListener("click",()=>{
     document.getElementById("rootEpisodes").style.display="block";
     
      //document.getElementById("offset").value ="";
        //document.getElementById("texto").value ="";
       // document.getElementById("copyBlock").value ="";
     
    })

      
const showEpisodes = (dataEpisodes) => {
    let result = '';

    //let arrEpisodes = [];

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

    window.onload = showEpisodes(dataEpisodes);