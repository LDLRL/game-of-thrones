/**
 * 
 * Acá va solo la lógica
 * 
 */
const filterSeasons = (dataEpisodes, condition) => {
    const filteredSeasons = dataEpisodes.filter(element2 => {
      return element2.seasonNum == condition
    })
    return filteredSeasons;
  };

  

     