const loadData = () => {
    spinnerToggle(true)
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
                <li class="nav">1 ${universe.features[0] ?  universe.features[0] : 'No Features Data found'}</li>
                <li class="nav">2 ${universe.features[1] ?  universe.features[1] : 'No Features Data found'}</li>
                <li class="nav">3 ${universe.features[2] ?  universe.features[2] : 'No Features Data found'}</li>
            </div>
            <div class="card-footer p-3">
                <h5 class="card-title">${universe.name}</h5>
                 <small class="text-muted"><i class="fa-regular fa-calendar-days"></i> ${universe.published_in}</small>
                 <button onclick="loadModalData('${universe.id}')" style=" background:#f2d1d1; border-radius:50%; float: right; margin-top:-20px;" type="button" class="btn text-danger" data-bs-toggle="modal" data-bs-target="#aiUnuModal">&#8594;</button>

            </div>
      </div>
        
        `;

        aiUniverseContainer.appendChild(universeDiv);
    });
    // stop loader 
    spinnerToggle(false)
}





const showAllAi = () => {
        const URL = ('https://openapi.programming-hero.com/api/ai/tools')
        fetch(URL)
        .then(res => res.json())
        .then(data => showCountris(data.data.tools));

        // showAllAi(data.data.tools);
        // const showbutton = document.getElementById('showAllAi')
        // showbutton.style.display ='none';
}



const loadModalData = async id => {
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    showModalAiCountris(data.data); 

}

const showModalAiCountris = aiModalUniverse =>{

const accuracyN = (aiModalUniverse.accuracy.score * 100) + '%' + 'accuracy';

    console.log(aiModalUniverse);
    const aiUniverseContainer = document.getElementById('under-section-modal')
    aiUniverseContainer.innerHTML = `
    
    <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card" style="background: #FEF7F7;">
      <div class="card-body">
        <h5 class="card-title">${aiModalUniverse.description}</h5>
        <div class="d-flex">
            <div class="p-3 rounded text-danger fw-bold" style="background: #FFFFFF;">
                <div style="width:55px;">
                    ${aiModalUniverse.pricing[0].price}
                </div>
            </div>
            <div class="p-3 rounded ms-2 text-warning fw-bold" style="background: #FFFFFF;">
                <div style="width:55px;">
                    ${aiModalUniverse.pricing[1].price}
                </div>
            </div>
            <div class="p-3 rounded ms-2 text-success fw-bold" style="background: #FFFFFF;">
                <div style="width:55px;">
                    ${aiModalUniverse.pricing[2].price}
                </div>
            </div>
        </div>

        <div class="row mt-2">
           <div class="col-6">
           <h5>Features</h5>
           <ul><li>${aiModalUniverse.features[1].feature_name ? aiModalUniverse.features[1].feature_name : 'No Data found'}</li></ul>
           <ul><li>${aiModalUniverse.features[2].feature_name ? aiModalUniverse.features[2].feature_name : 'No Data found'}</li></ul>
           <ul><li>${aiModalUniverse.features[3].feature_name ? aiModalUniverse.features[3].feature_name : 'No Data found'}</li></ul>
           </div>
           <div class="col-6">
           <h5>Integrations</h5>
            <div>
                <p>${aiModalUniverse.integrations[0] ? aiModalUniverse.integrations[0] : 'No Data Found' }</p>
                <p>${aiModalUniverse.integrations[1] ? aiModalUniverse.integrations[1] : 'No Data Found' }</p>
                <p>${aiModalUniverse.integrations[2] ? aiModalUniverse.integrations[2] : 'No Data Found' }</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  </div>


  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img src="${aiModalUniverse.image_link , aiModalUniverse.image_link[0]}" class="img-fluid rounded" alt="">

        <div id="accuracy" class="bg-danger w-50  text-light text-center rounded" style="position:absolute; margin-left:120px; margin-top:-155px">${aiModalUniverse.accuracy.score ? accuracyN : ''}</div>

        <h5 class="card-text text-center mt-2 p-2">${aiModalUniverse.input_output_examples[0].input}</h5>
        <p class="card-text text-center mt-2 p-2">${aiModalUniverse.input_output_examples[1].output ? aiModalUniverse.input_output_examples[1].output : 'No! Not Yet! Take a break!!!'} </p>
      </div>
    </div>
  </div>
    `;
    
}




const spinnerToggle =(isLoading) =>{
    const spinnerSection = document.getElementById('spinner');
    if(isLoading){
        spinnerSection.classList.remove('d-none')
    }
    else{
        spinnerSection.classList.add('d-none')
    }
}


loadData(); 

     
    
