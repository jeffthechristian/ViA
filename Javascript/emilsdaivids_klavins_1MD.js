let arrayOne = [
    "Decembris",
    "Februāris",
    "Liela diena",
    "Pirmdiena",
    "Marts",
    "Otrdiena",
    "Lieldiena",
    "Svētdiena",
    "Septembris"
];

let arrayTwo = [
    "Trešdiena",
    "Decembris",
    "Piektdiena",
    "Aprīlis",
    "Pirmdiena",
    "Maijs",
    "Darba diena",
    "Jūlijs"
];

let arrayThree = [
    "Janvāris",
    "Jūnijs",
    "Sestdiena",
    "Februāris",
    "Oktobris",
    "Novembris",
    "Septembris",
    "Augusts",
    "Ceturtdiena",
    "Maza diena"
];

let arrayFour = [
    "Ziema",
    "Pavasaris",
    "Vasara",
    "Rudens"
];

let arrayCheckMonths = [
    "Janvāris",
    "Februāris",
    "Marts",
    "Aprīlis",
    "Maijs",
    "Jūnijs",
    "Jūlijs",
    "Augusts",
    "Septembris",
    "Oktobris",
    "Novembris",
    "Decembris"
];

let arrayCheckDays = [
    "Pirmdiena",
    "Otrdiena",
    "Trešdiena",
    "Ceturtdiena",
    "Piektdiena",
    "Sestdiena",
    "Svētdiena"
];

let arrayMonths = [];
let arrayDays = [];
let arrayJunk = [];

let object = {};
const combinedArrays = arrayOne.concat(arrayTwo, arrayThree);

// Lai sakārtotu mēnešus un dienas, sākumā sakombinēju visus masīvus vienā izmantojot concat
// Pēctam izveidoju vēl divus masīvus, kurus izmantoju, lai salīdzinātu mēneša un dienas nosaukumus
// Iterējot cauri sakombinētajam masīvam ar salīdzināšanas masīviem + veicot pārbaudi vai neatkārtojas nonācu pie sekmīga rezultāta

function sortMonths() {
    for (let i = 0; i < combinedArrays.length; i++) {
        for (let j = 0; j < arrayCheckMonths.length; j++) {
            if (combinedArrays[i] == arrayCheckMonths[j] && !(arrayMonths.includes(combinedArrays[i]))) {
                arrayMonths[arrayCheckMonths.indexOf(combinedArrays[i])] = combinedArrays[i];
            }
        }
    }
}

function sortDays() {
    for (let i = 0; i < combinedArrays.length; i++) {
        for (let j = 0; j < arrayCheckDays.length; j++) {
            if (combinedArrays[i] == arrayCheckDays[j] && !(arrayDays.includes(combinedArrays[i]))) {
                arrayDays[arrayCheckDays.indexOf(combinedArrays[i])] = combinedArrays[i];
            }
        }
    }
}

//Lai iegūtu atlikušās vērtības salīdzināju kombinēto masīvu ar jau iepriekšējā punkta uzdevumiem
//Principā apskatīju vai šādas vērtības nav masīvā ar mēnešiem un dienām
//Ja nav, tad pievienoju jaunajā masīvā

function sortJunk() {
    for (let i = 0; i < combinedArrays.length; i++) {
        if (!arrayMonths.includes(combinedArrays[i]) && !arrayDays.includes(combinedArrays[i])) {
            arrayJunk.push(combinedArrays[i]);
        }
    }
}

//Cietais rieksts šoreiz priekš manis bija pa cietu :(

sortMonths();
sortDays();
sortJunk();
object.months = arrayMonths;
object.days = arrayDays;
object.junk = arrayJunk;
console.log(object);
