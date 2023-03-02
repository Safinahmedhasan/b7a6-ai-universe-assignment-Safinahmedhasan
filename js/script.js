const loadData = () => {
    const URL = ('https://openapi.programming-hero.com/api/ai/tools')
    fetch(URL)
    .then(res => res.json())
    .then(data => showCountris(data.data.tools.slice(0, 6)))
    
}

const showCountris = aiUniverse =>{
    const aiUniverseContainer = document.getElementById('dataContainer')
    aiUniverseContainer.innerHTML = "";
    aiUniverse.forEach(universe => {
        const universeDiv = document.createElement('div')
        universeDiv.classList.add('col');
        universeDiv.innerHTML = `
        <div class="card h-100">
                <img src="${universe.image}" class="card-img-top p-3 rounded" alt="...">
            <div class="card-body p-3">
                <h5 class="card-title">${universe.name}</h5>
                <p class="card-text">${universe.description}</p>
            </div>
            <div class="card-footer p-3">
                <h5 class="card-title">${universe.name}</h5>
                 <small class="text-muted"><i class="fa-regular fa-calendar-days"></i> ${universe.published_in}</small>

            </div>
      </div>
        
        `;

        aiUniverseContainer.appendChild(universeDiv);
    })
}

const showAllAi = () => {
        const URL = ('https://openapi.programming-hero.com/api/ai/tools')
        fetch(URL)
        .then(res => res.json())
        .then(data => showCountris(data.data.tools ))
}

loadData(); 