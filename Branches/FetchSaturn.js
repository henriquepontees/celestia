const saturncontainer = document.getElementById("saturncontainer");
const saturn = document.getElementById("saturn");

    function FetchSaturn() {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/saturne')
        .then((response) => response.json())
        .then((data) => {
        const saturnData = data;
        saturn.innerHTML = `
            <div>
                <p>${saturnData.englishName} </p>
            </div>
        `;
        })
        .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
        saturn.textContent = 'Erro ao buscar dados da API';
        });
    }

    FetchSaturn();

    const saturnmodalcontainer = document.getElementById("saturnmodalcontainer");
    const saturnmodal = document.getElementById("saturnmodal");

    function FetchSaturnModal() {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/mars')
        .then((response) => response.json())
        .then((data) => {
        const saturnmodalData = data;
        saturnmodal.innerHTML = `
            <div>
                <p> Volume value: ${saturnmodalData.vol.volValue} </p>
                <p> Volume Exponent: ${saturnmodalData.vol.volExponent} </p>
                <p> Density: ${saturnmodalData.density} </p>
                <p> Gravity: ${saturnmodalData.gravity} </p>
            </div>
        `;
        })
        .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
        saturnmodal.textContent = 'Erro ao buscar dados da API';
        });
    }

    FetchSaturnModal();
