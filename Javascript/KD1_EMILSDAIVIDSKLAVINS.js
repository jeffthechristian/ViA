const pokemons = [
    {
        id        : "000",
        name      : "Rexasaur",
        category  : "NOT EXISTING",
        gender    : "male",
        type      : [],
        weaknesses: [],
        stats     : {}
    },
    {
        id        : "001",
        name      : "Bulbasaur",
        category  : "SEED",
        gender    : "female",
        type      : ["grass", "poison"],
        weaknesses: ["fire", "psychic", "ice"],
        stats     : {
            hp    : 200,
            attack: 250,
            speed : 250
        }
    },
    {
        id        : "004",
        name      : "Charmander",
        category  : "LIZARD",
        gender    : "male",
        type      : ["fire"],
        weaknesses: ["water", "rock"],
        stats     : {
            hp    : 200,
            attack: 400,
            speed : 450
        }
    },
    {
        id        : "-010",
        name      : "",
        category  : "",
        gender    : "",
        type      : [],
        weaknesses: [],
        stats     : {}
    },
    {
        id        : "007",
        name      : "Squirtle",
        category  : "TINY TURTLE",
        gender    : "female",
        type      : ["water"],
        weaknesses: ["grass", "electric"],
        stats     : {
            hp    : 250,
            attack: 250,
            speed : 200
        }
    },
    {
        id        : "025",
        name      : "Pikachu",
        category  : "MOUSE",
        gender    : "male",
        type      : ["electric"],
        weaknesses: ["ground"],
        stats     : {
            hp    : 200,
            attack: 300,
            speed : 500
        }
    },
    {
        id        : "135",
        name      : "Jolteon",
        category  : "LIGHTNING",
        gender    : "female",
        type      : ["electric"],
        weaknesses: ["ground"],
        stats     : {
            hp    : 350,
            attack: 350,
            speed : 600
        }
    },
    {
        id        : "038",
        name      : "Ninetales",
        category  : "FOX",
        gender    : "female",
        type      : ["fire"],
        weaknesses: ["water", "rock"],
        stats     : {
            hp    : 500,
            attack: 500,
            speed : 650
        }
    },
    {
        id        : "095",
        name      : "Onix",
        category  : "ROCK SNAKE",
        gender    : "male",
        type      : ["rock"],
        weaknesses: ["steel", "fighting", "water", "grass"],
        stats     : {
            hp    : 250,
            attack: 300,
            speed : 400
        }
    },
    {
        id        : "068",
        name      : "Machamp",
        category  : "SUPERPOWER",
        gender    : "male",
        type      : ["fighting"],
        weaknesses: ["psychic", "fairy"],
        stats     : {
            hp    : 600,
            attack: 700,
            speed : 450
        }
    },
    {
        id        : "150",
        name      : "Mewtwo",
        category  : "GENETIC",
        gender    : "female",
        type      : ["psychic"],
        weaknesses: ["ghost", "dark"],
        stats     : {
            hp    : 700,
            attack: 750,
            speed : 800
        }
    },
    {
        id        : "111",
        name      : "Testing",
        category  : "NOT",
        gender    : "other",
        type      : [],
        weaknesses: [],
        stats     : {}
    }
];

// 1. No datu masīva "pokemons" izdzēst pirmo elementu.

pokemons.shift();

// 2. No datu masīva "pokemons" izdzēst pēdējo elementu.

pokemons.pop();

// 3. No datu masīva "pokemons" izdzēst elementu kur id ir -010 un noglabāt izdzēsto elementu kā konstanti ar nosaukumu empty.

pokemons.splice(-010, 1);


// 4. Izstrādāt objekta konstruktora funkciju kurš tiktu izmantonts, lai izveidotu jaunu pokemona objektu. Konstruktora veidotā objekta struktūrai (mainīgo nosaukumiem un sazarojumiem) jāatbilst datu masīva pokemons objekta struktūrai.

function Pokemon(id, name, category, gender, type, weaknesses, stats) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.gender = gender;
    this.type = type;
    this.weaknesses = weaknesses;
    this.stats = stats;
}

// 5. Jāpievieno jauns objekts (ja ir izpildīts 4. punkts, tad jaunais objekts jāizveido izmantojot objekta konstruktor funkciju) datu masīva "pokemons" sākumā ar sekojošām vērtībām:

let pokemonOne = new Pokemon(093, "Haunter", "GAS", "male", ["ghost", "poison"], ["dark"], {hp:500, attack: 350, speed: 400});
pokemons.unshift(pokemonOne);
   
    id         = "093",
    name       = "Haunter",
    category   = "GAS",
    gender     = "male",
    type       = ["ghost", "poison"],
    weaknesses = ["dark"],
    stats      = {
        hp     : 250,
        attack : 250,
        speed  : 450
    }


// 6. Jāpievieno jauns objekts (ja ir izpildīts 4. punkts, tad jaunais objekts jāizveido izmantojot objekta konstruktor funkciju) datu masīva "pokemons" beigās ar sekojošām vērtībām:

let pokemonTwo = new Pokemon(197, "Umbreon", "MOONLIGHT", "female", ["dark"], ["fighting"], {hp:500, attack: 350, speed: 400} ); 
pokemons.push(pokemonTwo);

    id         = "197",
    name       = "Umbreon",
    category   = "MOONLIGHT",
    gender     = "female",
    type       = ["dark"],
    weaknesses = ["fighting"],
    stats      = {
        hp     : 500,
        attack : 350,
        speed  : 400
    }


// 7. Katram objektam datu masīvā "pokemons" pārveidot "category" glabāto vērtību uz mazajiem burtiem, bet "name" vērtību uz lielajiem, bet "id" vērtību pārveidot par veselu ciparu.

pokemons.forEach((poki) => {
    poki.category = poki.category.toLowerCase();
    poki.name = poki.name.toUpperCase();
    poki.id = Number(poki.id);
});


// 8. Izstrādāt vienu kārtošanas funkciju kura apstrādās pokemons datu masīvu. Funkcija sagaida divus parametrus. Pirmais parametrs norādīs pēc kuras "stats" vērtības tiks kārtots saraksts, bet otrais parametrs, vai saraksts jākārto augošā, vai dilstošā secībā. Otrais parametrs var būt tikai teksts "asc" vai "desc"
// Parametriem ir arī default vērtības - pirmā parametra default vērtība - "attack", bet otrā parametra default vērtība - "asc".
// Piemērs - izsaucu jaunizveidoto funkciju kur kā pirmo argumentu padodu vērtību "speed", bet otro argumentu "desc", kā rezultātā pokemons datu masīvs tiktu sakārtots pēc "speed" vērtības dilstošā secībā (no ātrākā uz lēnāko).
// Gala rezultāts - izsaukt funkciju trīs reizes. Pirmajā reizē "pokemons" masīvs jāsakārto augošā secībā pēc "attack" atslēgas. Otrajā reizē saraksts jāsakārto dilstošā kārtībā izmantojot "speed" atslēgu. Trešajā reizē dilstošā secībā pēc "hp" atslēgas. Pēc katras reizes ir jāizkonsolē sakārtotais saraksts.
// Papildus punkts (nav obligāts) - atgriezt sakārtotu datu masīvu neizmainot orģinālo "pokemons" masīvu. Ar console.log(pokemons) pierādīt, ka orģinālais datu masīvs nav mainīts.

function sortByStats(stat = "attack", mode = "asc") {
    if (mode === "asc") {
        pokemons.sort((a, b) => {
            return a.stats[stat] - b.stats[stat];
        });
    } else if (mode === "desc") {
        pokemons.sort((a, b) => {
            return b.stats[stat] - a.stats[stat];
        });
    } else {
        console.log("ERROR!!!")
    }
}
//sortByStats("attack", "asc");
//sortByStats("speed", "desc");
//sortByStats("hp", "desc");
//console.log(pokemons);

// 9. Izveidot funkciju kura atgriezīs visus lietotāja norādīta tipa ("type") pokemonus no "pokemons" masīva. Vēlamais pokemona tips funkcijai ir jāpadod kā arguments bez default vērtības.
// Gala rezultāts - atlasīt un izkonsolēt viena tipa pokemonus. Pokemona tips pēc jūsu izvēles.

function returnTypePokemon(type) {
    if (typeof type !== "undefined") {
      pokemons.forEach((poki) => {
        if (poki.type.includes(type)) {
          console.log(poki);
        }
      });
    } else {
      console.log("ERROR!!!");
    }
  }
  returnTypePokemon("dark");

// 10. Atgriezt jaunu datu masīvu kas satur tikai pokemona nosaukumus kā vienkāršus teksta elementus. Jaunais datu masīvs jāsaglabā zem mainīgā ar nosaukumu "pokemon_names".

pokemon_names=[];
for (i=0;i<pokemons.length;i++) {
    pokemon_names[i] = pokemons[i]["name"];
}

// 11. Savienot pokemon_names datu masīva elementus vienā tekstā atdalot tos ar slīpsvītru " / ". pokemon_names mainīgā vērtība jāaizstāj ar jauno vērtību. Vērtība jāizraksta konsolē.

pokemon_names = pokemon_names.join("/");

// 12. Pārveidot pokemon_names teksta vērtību atpakaļ virknes masīvā. Datu masīva elementi nedrīkst saturēt slīpsvītras elementu ( / ). pokemon_names mainīgā vērtība jāaizstāj ar jauno datu masīvu. Vērtība jāizraksta konsolē.

pokemon_names = pokemon_names.split("/");

// 13. Cietāks rieksts. Katram datu masīva "pokemons" elementam pievienot jaunu atslēgu "enemies" kura glabās atlasītus pokemonus balstoties uz tekošā pokemona "weaknesses" vērtībām pret citu pokemonu "type" vērtībām.
// Risinājumam nevar izmantot forEach() vai for() cikliskās funkcijas. 
// Piemērs:
// [{
//     id        : 197,
//     name      : 'UMBREON',
//     category  : 'moonlight',
//     gender    : 'female',
//     type      : ['dark'],
//     weaknesses: ['fighting'],
//     stats     : { hp: 500, attack: 350, speed: 400 },
//     enemies:[
//         {
//             id        : 68,
//             name      : 'MACHAMP',
//             category  : 'superpower',
//             gender    : 'male',
//             type      : ['fighting'],
//             weaknesses: ['psychic', 'fairy'],
//             stats     : { hp: 600, attack: 700, speed: 450 },
//             enemies   : [[Object]]
//         }
//     ]
// }, {...}]
