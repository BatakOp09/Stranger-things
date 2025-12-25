let characters = [
  {
    id: 1,
    name: "Eleven",
    specialPower: "She can close interdimensional gates with her mind, provided she has a steady supply of frozen waffles and a tissue for her nose.",
    imageUrl: "./ElevenImage-removebg-preview.png"
  },
  {
    id: 2,
    name: "Steve Harrington",
    specialPower: "He possesses the mystical ability to babysit five chaotic teenagers while keeping his hair volume perfectly intact during physical combat.",
    imageUrl: "./steve-removebg-preview.png"
  },
  {
    id: 3,
    name: "Will Byers",
    specialPower: "He has the unfortunate gift of touching the back of his neck to announce that something bad is happening, usually five minutes after everyone else already noticed.",
    imageUrl: "./will-removebg-preview.png"
  },
  {
    id: 4,
    name: "Dustin Henderson",
    specialPower: "He wields the genius-level intellect required to befriend a terrifying baby monster and the charisma to pause an apocalypse for a musical number.",
    imageUrl: "./dustin-removebg-preview.png"
  },
  {
    id: 5,
    name: "Lucas Sinclair",
    specialPower: "He has the incredible optimism to bring a wrist-rocket slingshot to a fight against unkillable, multidimensional shadow demons.",
    imageUrl: "./lucas-removebg-preview.png"
  },
  {
    id: 6,
    name: "Jim Hopper",
    specialPower: "He survives explosions, Russian prisons, and parenthood purely through the force of grumpiness and an aggressive dad bod.",
    imageUrl: "./jim-removebg-preview.png"
  },
  {
    id: 7,
    name: "Max Mayfield",
    specialPower: "She has the power to escape the ultimate evil simply by running up that hill and blasting Kate Bush at ear-shattering volumes.",
    imageUrl: "./max-removebg-preview.png"
  },
  {
    id: 8,
    name: "Mike Wheeler",
    specialPower: "His main power is summoning his friends to his basement and having intense mood swings about his relationship status while the world ends.",
    imageUrl: "./mike-removebg-preview.png"
  },
  {
    id: 9,
    name: "Joyce Byers",
    specialPower: "She possesses the chaotic energy to solve complex multidimensional conspiracies using only Christmas lights, magnets, and the sheer volume of her voice.",
    imageUrl: "./joyce-removebg-preview.png"
  },
  {
    id: 10,
    name: "Nancy Wheeler",
    specialPower: "She is a budding investigative journalist who asks tough questions but is strangely much more effective at solving problems with a sawed-off shotgun.",
    imageUrl: "./nancy-removebg-preview.png"
  },
  {
    id: 11,
    name: "Jonathan Byers",
    specialPower: "He has the uncanny ability to look perpetually worried and slightly greasy while solving mysteries primarily by staring intensely from the corner of the room.",
    imageUrl: "./jonathan-removebg-preview.png"
  },
  {
    id: 12,
    name: "Robin Buckley",
    specialPower: "She is a linguistic genius who can crack top-secret Soviet codes in a mall food court but somehow struggles to walk in heels.",
    imageUrl: "./robin-removebg-preview.png"
  },
  {
    id: 13,
    name: "Eddie Munson",
    specialPower: "He is a metal god who can summon bats with a guitar solo and lead a D&D campaign so intense the entire town mistakes it for actual satanism.",
    imageUrl: "./eddie-removebg-preview.png"
  },
  {
    id: 14,
    name: "Murray Bauman",
    specialPower: "He solves global crises using nothing but watered-down vodka, paranoia, and an uncomfortable desire to psychoanalyze everyone's love life.",
    imageUrl: "./murray-removebg-preview.png"
  },
  {
    id: 15,
    name: "Erica Sinclair",
    specialPower: "She brings the tactical brilliance of a four-star general wrapped in the body of a child who relentlessly bullies high schoolers for free ice cream.",
    imageUrl: "./erica-removebg-preview.png"
  }
];

let sum = "";

var cardcontainer = document.querySelector(".cards");

characters.forEach((character) => {
    sum+=`<div class="card" id="${character.id}">
                <img src="${character.imageUrl}" alt="${character.name}">
                <div class="text"> 
                <h3>${character.name}</h3>
                <p>${character.specialPower}</p>
            </div>
               </div>`
})

cardcontainer.innerHTML = sum;
