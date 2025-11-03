
const container = document.getElementById('personagens-container')


fetch('https://dragonball-api.com/api/characters?page=1&limit=58')
.then((res) => res.json())
.then((data) => {
    console.log(data.items)

    data.items.forEach(personagem => {
      const card = document.createElement('div')
      card.className = 'card'
      card.innerHTML = `
        <img src=${personagem.image} alt=${personagem.name}>
        <h2>${personagem.name}</h2>
        <p>${personagem.race}</p>
        <p>${personagem.gender}</p>
        `

        container.appendChild(card)
    })
})


// const container = document.getElementById('personagens-container')

// fetch('https://dragonball-api.com/api/characters?page=1&limit=58')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.items)

//         data.items.forEach(Personagem => {
//             const card = document.createElement('div')
//             card.className = 'card'
//             card.innerHTML = `
//           <img imagem: src=${Personagem.image} alt=${Personagem.name}>
//           <h2> Nome: ${Personagem.name}</h2>
//           <P> Raça: ${Personagem.race}</P>
//           <P>Gênero: ${Personagem.gender}</P>
//           <P>Ki: ${Personagem.ki}</P>
//           <p> MaxKi ${Personagem.maxKi}</p>
          
//         `
//         container.appendChild(card)

//         });
//     })