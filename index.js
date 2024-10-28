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

        const rendersinglePlayer = async (playerId) => {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players/${playerId}`);
                const playerDetails = await response.json();
                console.log('Player Details:', playerDetails);
            } catch (error) {
                console.error('error:', error);
            }
        };
           
                  

    getAllPlayers().then(response => {
    if (response && response.success) {
      console.log('All players:', response.data.players);
      const players = response.data.players;
      
      if (Array.isArray(players)) {
        const playerLis = players.map(singlePlayer => {
            return `<li data-id="${singlePlayer.id}">${singlePlayer.name}</li>`;
            
        });



    const ol = document.createElement(`ol`);
    ol.innerHTML = playerLis.join(``);
    document.body.appendChild(ol);
      
    const Lis = ol.querySelectorAll('li');

    Lis.forEach(singlePlayerLi => {
    singlePlayerLi.addEventListener('click', async (event) => {
        const playerID = event.currentTarget.getAttribute('data-id');
        console.log('Player ID:', playerID); 
        if (playerID) { 
            await rendersinglePlayer(playerID);
        } else {
            console.error('Player ID is null');
        }
        
        });
    });
}
}
    });