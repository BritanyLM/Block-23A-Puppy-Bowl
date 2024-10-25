const getAllPlayers = async () => {
    
    try {
        const response = await fetch(
          'https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players'
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (err) {
        console.error(err);
      }
        };

    getAllPlayers().then(response => {
    if (response && response.success) {
      console.log('All players:', response.data.players);
      const players = response.data.players;
      if (Array.isArray(players)) {
        const playerLis = players.map(singlePlayer => {
            return `<li>${singlePlayer.name}</li>`;
        
        
    

});
      
const ol = document.createElement(`ol`);
ol.innerHTML = playerLis.join(``);
document.body.appendChild(ol);
      }
    }

    })
