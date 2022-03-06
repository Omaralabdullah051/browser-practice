//just display the artists on UI

const searchBtn = () => {
    const inputField = document.getElementById('search-field');
    const searchText = inputField.value;
    fetch(`https://theaudiodb.com/api/v1/json/2/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayArtists(data.artists))
}

const displayArtists = (artists) => {
    const container = document.getElementById('artists-container');
    artists.forEach(artist => {
        console.log(artist);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card mb-3 mx-auto" style="max-width: 1040px;">
        <div class="row g-0">
                <div class="col-md-4">
                    <img src="${artist.strArtistThumb ? artist.strArtistThumb : `https://th.bing.com/th/id/R.c3e2f71cfffb4186a5617c3b6a94f6b4?rik=ZBDLfeWhDO3ZLg&pid=ImgRaw&r=0`}" class="img-fluid rounded-start" alt="...">
                </div >
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${artist.strArtist} </h5>
            <p class="card-text">${artist.strBiographyEN.slice(0, 800)}</p>
            <div class="d-grid gap-2 align-items-center">
                <button onclick="loadAlbums('${artist.idArtist}')" class="btn btn-success" type="button">Button</button>
             </div>
        </div>
        
    </div>
            </div >
            </div >
    `;
        container.appendChild(div);
    })
}

