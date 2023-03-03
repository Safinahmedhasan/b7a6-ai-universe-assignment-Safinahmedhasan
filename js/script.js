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
                <h5 class="card-title">Features</h5>
                <li class="nav">1 ${universe.features[0]}</li>
                <li class="nav">2 ${universe.features[1]}</li>
                <li class="nav">3 ${universe.features[2]}</li>
            </div>
            <div class="card-footer p-3">
                <h5 class="card-title">${universe.name}</h5>
                 <small class="text-muted"><i class="fa-regular fa-calendar-days"></i> ${universe.published_in}</small>

                 <button onclick="loadModalData('${universe.id}')" style=" background:#f2d1d1; border-radius:50%; float: right; margin-top:-20px;" type="button" class="btn text-danger" data-bs-toggle="modal" data-bs-target="#aiUnuModal">&#8594;</button>

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


const loadModalData = async id => {
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data); 

}

const showModalAiCountris = aiModalUniverse =>{
    const aiUniverseContainer = document.getElementById('aiUnuModal')
    aiModalUniverse.forEach(universeModal => {
        const universeModalDiv = document.createElement('div')
        universeModalDiv.innerHTML =``

    })
}











loadData(); 



