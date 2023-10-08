const solarSystemInfoContainer = document.getElementById("solar-system-info-container");
const solarSystemInfoElement = document.getElementById("solar-system-info");

    function fetchSolarSystemData() {
      fetch('https://api.le-systeme-solaire.net/rest/bodies/mars')
        .then((response) => response.json())
        .then((data) => {
          const solarSystemData = data;
          solarSystemInfoElement.innerHTML = `
            <div>
              <p>${solarSystemData.englishName} </p>
            </div>
          `;
        })
        .catch((error) => {
          console.error('Erro ao buscar dados da API:', error);
          solarSystemInfoElement.textContent = 'Erro ao buscar dados da API';
        });
    }

    fetchSolarSystemData();

    const marscontainer = document.getElementById("marscontainer");
    const mars = document.getElementById("mars");

    function FetchMars() {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/mars')
        .then((response) => response.json())
        .then((data) => {
        const marsData = data;
        mars.innerHTML = `
            <div>
                <p> Volume value: ${marsData.vol.volValue} </p>
                <p> Volume Exponent: ${marsData.vol.volExponent} </p>
                <p> Density: ${marsData.density} </p>
                <p> Gravity: ${marsData.gravity} </p>
            </div>
        `;
        })
        .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
        mars.textContent = 'Erro ao buscar dados da API';
        });
    }

    FetchMars();
