const requestURL = 'https://jntarivuhavuha.github.io/json/json//fresh.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const prophets = jsonObject['bountiful'];
    
    for (let i = 0; i < bountiful.length; i++ ) {
        console.log(prophets[i]);
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birth = document.createElement('p');
        let place = document.createElement('p');
        let img = document.createElement('img');
        
        h2.textContent = `${bountiful[i].name} ${prophets[i].lastname}`;
        birth.textContent = `Date of Birth: ${bountiful[i].birthdate}`;
        place.textContent = `Place of Birth: ${bountiful[i].birthplace}`;
        img.src = bountiful[i].imageurl;
        img.alt = `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`;

        card.appendChild(h2).appendChild(birth).appendChild(place).appendChild(img);
        document.querySelector('div.cards').appendChild(card);
    }
});
