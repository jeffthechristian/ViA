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

// 1. No datu mas??va "pokemons" izdz??st pirmo elementu.

pokemons.shift();

// 2. No datu mas??va "pokemons" izdz??st p??d??jo elementu.

pokemons.pop();

// 3. No datu mas??va "pokemons" izdz??st elementu kur id ir -010 un noglab??t izdz??sto elementu k?? konstanti ar nosaukumu empty.

pokemons.splice(-010, 1);


// 4. Izstr??d??t objekta konstruktora funkciju kur?? tiktu izmantonts, lai izveidotu jaunu pokemona objektu. Konstruktora veidot?? objekta strukt??rai (main??go nosaukumiem un sazarojumiem) j??atbilst datu mas??va pokemons objekta strukt??rai.

function Pokemon(id, name, category, gender, type, weaknesses, stats) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.gender = gender;
    this.type = type;
    this.weaknesses = weaknesses;
    this.stats = stats;
}

// 5. J??pievieno jauns objekts (ja ir izpild??ts 4. punkts, tad jaunais objekts j??izveido izmantojot objekta konstruktor funkciju) datu mas??va "pokemons" s??kum?? ar sekojo????m v??rt??b??m:

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


// 6. J??pievieno jauns objekts (ja ir izpild??ts 4. punkts, tad jaunais objekts j??izveido izmantojot objekta konstruktor funkciju) datu mas??va "pokemons" beig??s ar sekojo????m v??rt??b??m:

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


// 7. Katram objektam datu mas??v?? "pokemons" p??rveidot "category" glab??to v??rt??bu uz mazajiem burtiem, bet "name" v??rt??bu uz lielajiem, bet "id" v??rt??bu p??rveidot par veselu ciparu.

pokemons.forEach((poki) => {
    poki.category = poki.category.toLowerCase();
    poki.name = poki.name.toUpperCase();
    poki.id = Number(poki.id);
});


// 8. Izstr??d??t vienu k??rto??anas funkciju kura apstr??d??s pokemons datu mas??vu. Funkcija sagaida divus parametrus. Pirmais parametrs nor??d??s p??c kuras "stats" v??rt??bas tiks k??rtots saraksts, bet otrais parametrs, vai saraksts j??k??rto augo????, vai dilsto???? sec??b??. Otrais parametrs var b??t tikai teksts "asc" vai "desc"
// Parametriem ir ar?? default v??rt??bas - pirm?? parametra default v??rt??ba - "attack", bet otr?? parametra default v??rt??ba - "asc".
// Piem??rs - izsaucu jaunizveidoto funkciju kur k?? pirmo argumentu padodu v??rt??bu "speed", bet otro argumentu "desc", k?? rezult??t?? pokemons datu mas??vs tiktu sak??rtots p??c "speed" v??rt??bas dilsto???? sec??b?? (no ??tr??k?? uz l??n??ko).
// Gala rezult??ts - izsaukt funkciju tr??s reizes. Pirmaj?? reiz?? "pokemons" mas??vs j??sak??rto augo???? sec??b?? p??c "attack" atsl??gas. Otraj?? reiz?? saraksts j??sak??rto dilsto???? k??rt??b?? izmantojot "speed" atsl??gu. Tre??aj?? reiz?? dilsto???? sec??b?? p??c "hp" atsl??gas. P??c katras reizes ir j??izkonsol?? sak??rtotais saraksts.
// Papildus punkts (nav oblig??ts) - atgriezt sak??rtotu datu mas??vu neizmainot or??in??lo "pokemons" mas??vu. Ar console.log(pokemons) pier??d??t, ka or??in??lais datu mas??vs nav main??ts.

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

// 9. Izveidot funkciju kura atgriez??s visus lietot??ja nor??d??ta tipa ("type") pokemonus no "pokemons" mas??va. V??lamais pokemona tips funkcijai ir j??padod k?? arguments bez default v??rt??bas.
// Gala rezult??ts - atlas??t un izkonsol??t viena tipa pokemonus. Pokemona tips p??c j??su izv??les.

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

// 10. Atgriezt jaunu datu mas??vu kas satur tikai pokemona nosaukumus k?? vienk??r??us teksta elementus. Jaunais datu mas??vs j??saglab?? zem main??g?? ar nosaukumu "pokemon_names".

pokemon_names=[];
for (i=0;i<pokemons.length;i++) {
    pokemon_names[i] = pokemons[i]["name"];
}

// 11. Savienot pokemon_names datu mas??va elementus vien?? tekst?? atdalot tos ar sl??psv??tru " / ". pokemon_names main??g?? v??rt??ba j??aizst??j ar jauno v??rt??bu. V??rt??ba j??izraksta konsol??.

pokemon_names = pokemon_names.join("/");

// 12. P??rveidot pokemon_names teksta v??rt??bu atpaka?? virknes mas??v??. Datu mas??va elementi nedr??kst satur??t sl??psv??tras elementu ( / ). pokemon_names main??g?? v??rt??ba j??aizst??j ar jauno datu mas??vu. V??rt??ba j??izraksta konsol??.

pokemon_names = pokemon_names.split("/");

// 13. Ciet??ks rieksts. Katram datu mas??va "pokemons" elementam pievienot jaunu atsl??gu "enemies" kura glab??s atlas??tus pokemonus balstoties uz teko???? pokemona "weaknesses" v??rt??b??m pret citu pokemonu "type" v??rt??b??m.
// Risin??jumam nevar izmantot forEach() vai for() ciklisk??s funkcijas. 
// Piem??rs:
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
