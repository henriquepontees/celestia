const jupitercontainer = document.getElementById("jupitercontainer");
const jupiter = document.getElementById("jupiter");

    function FetchJupiter() {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/jupiter')
        .then((response) => response.json())
        .then((data) => {
        const JupiterData = data;
        jupiter.innerHTML = `
            <div>
                <p>${JupiterData.englishName} </p>
            </div>
        `;
        })
        .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
        jupiter.textContent = 'Erro ao buscar dados da API';
        });
    }

    FetchJupiter();

    const jupitermodalcontainer = document.getElementById("jupitermodalcontainer");
    const jupitermodal = document.getElementById("jupitermodal");

    function FetchJupiterModal() {
        fetch('https://api.le-systeme-solaire.net/rest/bodies/mars')
            .then((response) => response.json())
            .then((data) => {
            const jupitermodalData = data;
            jupitermodal.innerHTML = `
                <div>
                    <p> Volume value: ${jupitermodalData.vol.volValue} </p>
                    <p> Volume Exponent: ${jupitermodalData.vol.volExponent} </p>
                    <p> Density: ${jupitermodalData.density} </p>
                    <p> Gravity: ${jupitermodalData.gravity} </p>
                </div>
            `;
            })
            .catch((error) => {
            console.error('Erro ao buscar dados da API:', error);
            jupitermodal.textContent = 'Erro ao buscar dados da API';
            });
        }
    
        FetchJupiterModal();
    