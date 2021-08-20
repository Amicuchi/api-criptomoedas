
var apikey = {
    // IMPORTANTE: 
    // Cada key é pessoal e intransferível.
    // Para fazer o seu site funcionar, por favor, utilize sua própria key.
    key: 'e5990f62-8a99-4b3b-88e6-a29c58b74d06'
};

// GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then( (response) => {
        // console.log(response);
        if(!response.ok) throw new Error ('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then( (api) => {
        var text = "";
        console.log(api);

        // Get "i" coins and symbols
            for (let i = 0; i < 5; i++){
                // Showing API information
                text += `
                    <div class="card">
                        <img src="./coin.png" alt="${api.data[i].name}">
                        <div class="media-body">
                            <h5>${api.data[i].name}</h5>
                            <p>${api.data[i].symbol}</p>
                            <p>${api.data[i].first_historical_data}</p>
                            <p>${api.data[i].last_historical_data}</p>
                        </div>
                    </div>
                `;
                document.getElementById("coins").innerHTML = text;
            };
    })
    .catch( (error) => {
        console.error(error.message);
    });