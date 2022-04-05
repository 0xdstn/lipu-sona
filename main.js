if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
};

var cur = document.getElementById('cur');
var max = document.getElementById('max');
var card = document.getElementById('card');
var sitelen = document.getElementById('sitelen');
var toki = document.getElementById('toki');
var inli = document.getElementById('inli');
var frontSitelen = document.getElementById('front-sitelen');
var frontToki = document.getElementById('front-toki');
var frontInli = document.getElementById('front-inli');
var backSitelen = document.getElementById('back-sitelen');
var backToki = document.getElementById('back-toki');
var backInli = document.getElementById('back-inli');
var hiddenSitelen = document.getElementById('hidden-sitelen');
var hiddenToki = document.getElementById('hidden-toki');
var hiddenInli = document.getElementById('hidden-inli');
var customWords = document.getElementById('words');
var settings = document.getElementById('settings');
var openSettings = document.getElementById('open-settings');
var closeSettings = document.getElementById('close-settings');
var about = document.getElementById('about');
var openAbout = document.getElementById('open-about');
var closeAbout = document.getElementById('close-about');

var tokiWords = {
    "a" : "interj ah, ha, uh, oh, ooh, aw, well (emotion word)",
    "akesi" : "n non-cute animal, reptile, amphibian",
    "ala" : "mod no, not, none, un-\nn nothing, negation, zero\ninterj no!",
    "alasa" : "vt gather, hunt",
    "ali" : "n everything, anything, life, the universe\nmod all, every, complete, whole",
    "anpa" : "n bottom, lower part, under, below, floor, beneath\nmod low, lower, bottom, down",
    "ante" : "n difference\nmod different\nconj otherwise, or else\nvt change, alter, modify",
    "anu" : "conj or",
    "awen" : "vi stay, wait, remain\nvt keep\nmod remaining, stationary, permanent, sedentary",
    "e" : "sep (introduces a direct object)",
    "epiku" : "epic, awesome",
    "en" : "conj and (used to coordinate head nouns)",
    "esun" : "n market, shop",
    "ijo" : "n thing, something, stuff, anything, object\nmod of something\nvt objectify",
    "ike" : "mod bad, negative, wrong, evil, overly complex, (figuratively) unhealthy\ninterj oh dear! woe! alas!\nn negativity, badness, evil\nvt to make bad, to worsen, to have a negative effect upon\nvi to be bad, to suck\n[sounds like icky]",
    "ilo" : "n tool, device, machine, thing used for a specific purpose",
    "insa" : "n inside, inner world, centre, stomach\nmod inner, internal\n[inside]",
    "jaki" : "mod dirty, gross, filthy\nn dirt, pollution, garbage, filth\nvt pollute, dirty\ninterj ew! yuck!\n[yucky]",
    "jan" : "n person, people, human, being, somebody, anybody\nmod human, somebody's, personal, of people\nvt personify, humanize, personalize",
    "jasima" : "mirror, reflect, reverse, opposite",
    "jelo" : "mod yellow, light green\n[yellow]",
    "jo" : "vt have, contain\nn having\nkama receive, get, take, obtain",
    "kala" : "n fish, sea creature",
    "kalama" : "n sound, noise, voice\nvi make noise\nvt sound, ring, play (an instrument)",
    "kama" : "vi come, become, arrive, happen, pursue actions to arrive to (a certain state), manage to, start to\nn event, happening, chance, arrival, beginning\nmod coming, future\nvt bring about, summon\n[come up]",
    "kasi" : "n plant, leaf, herb, tree, wood",
    "ken" : "vi can, is able to, is allowed to, may, is possible\nn possibility, ability, power to do things, permission\nvt make possible, enable, allow, permit\ncont it is possible that",
    "kepeken" : "vt use\nprep with",
    "kijetesantakalu" : "raccoon or other musteloid",
    "kili" : "n fruit, pulpy vegetable, mushroom",
    "kin" : "mod also, too, even, indeed (emphasizes the word(s) before it)",
    "kipisi" : "to cut, to divide",
    "kiwen" : "mod hard, solid, stone-like, made of stone or metal\nn hard thing, rock, stone, metal, mineral, clay",
    "ko" : "n semi-solid or squishy substance, e.g. paste, powder, gum",
    "kokosila" : "to speak not in toki pona while in a toki pona group",
    "kon" : "n air, wind, smell, soul\nmod air-like, ethereal, gaseous",
    "ku" : "interacting with the Toki Pona Dictionary",
    "pu" : "interacting with the official Toki Pona book",
    "kule" : "n colour, paint\nmod colourful\nvt colour, paint",
    "kulupu" : "n group, community, society, company, people\nmod communal, shared, public, of the society",
    "kute" : "vt listen, hear\nmod auditory, hearing",
    "la" : "sep (between adverb or phrase of context and sentence)",
    "lanpan" : "seize, steal, get",
    "lape" : "n, vi sleep, rest\nmod sleeping, of sleep",
    "laso" : "mod blue, blue-green",
    "lawa" : "n head, mind\nmod main, leading, in charge\nvt lead, control, rule, steer",
    "leko" : "square, block, stairs",
    "len" : "n clothing, cloth, fabric",
    "lete" : "n cold\nmod cold, uncooked\nvt cool down, chill",
    "li" : "sep (between any subject except mi and sina and its verb; also used to introduce a new verb for the same subject)",
    "lili" : "mod small, little, young, a bit, short, few, less\nvt reduce, shorten, shrink, lessen",
    "linja" : "n long, very thin, floppy thing, e.g. string, rope, hair, thread, cord, chain",
    "lipu" : "n flat and bendable thing, e.g. paper, card, ticket",
    "loje" : "mod red",
    "lon" : "prep be (located) in/at/on\nvi be there, be present, be real/true, exist, be awake",
    "luka" : "n hand, arm",
    "lukin" : "vt see, look at, watch, read\nvi look, watch out, pay attention\nmod visual(ly)\n[looking]",
    "lupa" : "n hole, orifice, window, door\n[sounds like loop]",
    "ma" : "n land, earth, country, (outdoor) area",
    "mama" : "n parent, mother, father\nmod of the parent, parental, maternal, fatherly\n[sounds like momma]",
    "mani" : "n money, material wealth, currency, dollar, capital\n[money]",
    "meli" : "n woman, female, girl, wife, girlfriend\nmod female, feminine, womanly\n[Mary]",
    "meso" : "average, medium",
    "mi" : "n I, we\nmod my, our\n[me]",
    "mije" : "n man, male, boy, husband, boyfriend\nmod male, masculine, manly",
    "misikeke" : "medicine, cure",
    "moku" : "n food, meal\nvt eat, drink, swallow, ingest, consume",
    "moli" : "n death\nvi die, be dead\nvt kill\nmod dead, deadly, fatal",
    "monsi" : "n back, rear end, butt, behind\nmod back, rear",
    "monsuta" : "fear, monster, scary",
    "mu" : "interj woof! meow! moo! etc. (cute animal noise)\n[moo]",
    "mun" : "n moon\nmod lunar\n[moon]",
    "musi" : "n fun, playing, game, recreation, art, entertainment\nmod artful, fun, recreational\nvi play, have fun\nvt amuse, entertain",
    "mute" : "mod many, very, much, several, a lot, abundant, numerous, more\nn amount, quantity\nvt make many or much\n[multi]",
    "n" : "um, hm",
    "namako" : "n food additive, accessory, something extra\nvt season, embellish, stimulate",
    "nanpa" : "n number\noth -th (ordinal numbers)\n[number]",
    "nasa" : "mod silly, crazy, foolish, drunk, strange, stupid, weird\nvt drive crazy, make weird",
    "nasin" : "n way, manner, custom, road, path, doctrine, system, method",
    "nena" : "n bump, nose, hill, mountain, button",
    "ni" : "mod this, that",
    "nimi" : "n word, name",
    "noka" : "n leg, foot",
    "o" : "sep O (vocative or imperative)\ninterj hey! (calling somebody's attention)",
    "oko" : "n eye\n[similar to oculist]",
    "olin" : "n love\nmod love\nvt to love (a person)",
    "ona" : "n she, he, it, they\nmod her, his, its, their",
    "open" : "vt open, turn on",
    "pakala" : "n blunder, accident, mistake, destruction, damage, breaking\nvt screw up, fuck up, botch, ruin, break, hurt, injure, damage, spoil, ruin\nvi screw up, fall apart, break\ninterj damn! fuck!",
    "pali" : "n activity, work, deed, project\nmod active, work-related, operating, working\nvt do, make, build, create\nvi act, work, function",
    "palisa" : "n long, mostly hard object, e.g. rod, stick, branch",
    "pan" : "n grain, cereal",
    "pana" : "vt give, put, send, place, release, emit, cause\nn giving, transfer, exchange",
    "pi" : "sep of, belonging to",
    "pilin" : "n feelings, emotion, heart\nvi feel\nvt feel, think, sense, touch\n[feeling]",
    "pimeja" : "mod black, dark\nn darkness, shadows\nvt darken",
    "pini" : "n end, tip\nmod completed, finished, past, done, ago\nvt finish, close, end, turn off",
    "pipi" : "n bug, insect, spider",
    "poka" : "n side, hip, next to\nprep in the accompaniment of, with\nmod neighbouring",
    "poki" : "n container, box, bowl, cup, glass\n[box]",
    "pona" : "n good, simplicity, positivity\nmod good, simple, positive, nice, correct, right\ninterj great! good! thanks! OK! cool! yay!\nvt improve, fix, repair, make good\n[bonam]",
    "pu" : "interacting with the official Toki Pona book",
    "sama" : "mod same, similar, equal, of equal status or position\nprep like, as, seem",
    "seli" : "n fire, warmth, heat\nmod hot, warm, cooked\nvt heat, warm up, cook",
    "selo" : "n outside, surface, skin, shell, bark, shape, peel",
    "seme" : "oth what, which, wh- (question word)",
    "sewi" : "n high, up, above, top, over, on\nmod superior, elevated, religious, formal",
    "sijelo" : "n body, physical state",
    "sike" : "n circle, wheel, sphere, ball, cycle\nmod round, cyclical",
    "sin" : "mod new, fresh, another, more\nvt renew, renovate, freshen",
    "sina" : "n you\nmod your",
    "sinpin" : "n front, chest, torso, face, wall",
    "sitelen" : "n picture, image\nvt draw, write",
    "soko" : "mushroom, fungus",
    "sona" : "n knowledge, wisdom, intelligence, understanding\nvt know, understand, know how to\nvi know, understand\nkama learn, study",
    "soweli" : "n animal, especially land mammal, lovable animal",
    "suli" : "mod big, tall, long, adult, important\nvt enlarge, lengthen\nn size",
    "suno" : "n sun, light",
    "supa" : "n horizontal surface, e.g furniture, table, chair, pillow, floor",
    "suwi" : "n candy, sweet food\nmod sweet, cute \nvt sweeten\n[sweet]",
    "tan" : "prep from, by, because of, since\nn origin, cause",
    "taso" : "mod only, sole\nconj but\n[that's all]",
    "tawa" : "prep to, in order to, towards, for, until\nvi go to, walk, travel, move, leave\nn movement, transportation\nmod moving, mobile\nvt move, displace\n[towards]",
    "telo" : "n water, liquid, juice, sauce\nvt water, wash with water",
    "tenpo" : "n time, period of time, moment, duration, situation",
    "toki" : "n language, talking, speech, communication\nmod talking, verbal\nvt say\nvi talk, chat, communicate\ninterj hello! hi!",
    "tomo" : "n indoor constructed space, e.g. house, home, room, building\nmod urban, domestic, household",
    "tonsi" : "non-binary, gender-nonconforming",
    "tu" : "mod two\nn duo, pair\nvt double, separate/cut/divide in two\n[two]",
    "unpa" : "n sex, sexuality\nmod erotic, sexual\nvt have sex with, sleep with, fuck\nvi have sex",
    "uta" : "n mouth\nmod oral",
    "utala" : "n conflict, disharmony, competition, fight, war, battle, attack, blow, argument, physical or verbal violence\nvt hit, strike, attack, compete against",
    "walo" : "mod white, light (colour)\nn white thing or part, whiteness, lightness\n[sounds like wall, which is often white]",
    "wan" : "mod one, a\nn unit, element, particle, part, piece\nvt unite, make one\n[one]",
    "waso" : "n bird, winged animal",
    "wawa" : "n energy, strength, power\nmod energetic, strong, fierce, intense, sure, confident\nvt strengthen, energize, empower",
    "weka" : "mod away, absent, missing\nn absence\nvt throw away, remove, get rid of",
    "wile" : "vt to want, need, wish, have to, must, will, should\nn desire, need, will\nmod necessary"
};

const originalWords = {...tokiWords};

var w = localStorage.getItem('lipu-sona-words');
if(w !== null) {
    customWords.value = w;
    setCustomWords();
}

max.innerHTML = Object.keys(tokiWords).length.toString();

var curCard = 0;
var avail = [];
var flipped = false;
var front = [1,1,0];
var back = [0,0,1];
var hidden = [0,0,0];

var f = localStorage.getItem('lipu-sona-front');
if(f !== null) {
    var sp = f.split(',');
    front = [
        parseInt(sp[0]),
        parseInt(sp[1]),
        parseInt(sp[2])
    ];

    if(front[0]) { frontSitelen.checked = true }
    if(front[1]) { frontToki.checked = true }
    if(front[2]) { frontInli.checked = true }
}

var b = localStorage.getItem('lipu-sona-back');
if(b !== null) {
    var sp = b.split(',');
    back = [
        parseInt(sp[0]),
        parseInt(sp[1]),
        parseInt(sp[2])
    ];

    if(back[0]) { backSitelen.checked = true }
    if(back[1]) { backToki.checked = true }
    if(back[2]) { backInli.checked = true }
}

var h = localStorage.getItem('lipu-sona-hidden');
if(h !== null) {
    var sp = h.split(',');
    hidden = [
        parseInt(sp[0]),
        parseInt(sp[1]),
        parseInt(sp[2])
    ];

    if(hidden[0]) { hiddenSitelen.checked = true }
    if(hidden[1]) { hiddenToki.checked = true }
    if(hidden[2]) { hiddenInli.checked = true }
}

updateCardClasses();

if(b === null && f === null && h === null) {
    localStorage.setItem('lipu-sona-front','1,1,0');
    localStorage.setItem('lipu-sona-back','0,0,1');
    localStorage.setItem('lipu-sona-hidden','0,0,0');
}

card.addEventListener('click', function(){
    if(curCard === Object.keys(tokiWords).length && flipped) {
        reset();
    } else if(flipped) {
        newCard();
    } else {
        flipCard();
    }
});

frontSitelen.addEventListener('change',updateSettings);
frontToki.addEventListener('change',updateSettings);
frontInli.addEventListener('change',updateSettings);
backSitelen.addEventListener('change',updateSettings);
backToki.addEventListener('change',updateSettings);
backInli.addEventListener('change',updateSettings);
hiddenSitelen.addEventListener('change',updateSettings);
hiddenToki.addEventListener('change',updateSettings);
hiddenInli.addEventListener('change',updateSettings);
customWords.addEventListener('change',updateWords);

openSettings.addEventListener('click',function(e) {
    e.preventDefault();
    settings.classList.add('open');
});

closeSettings.addEventListener('click',function(e) {
    e.preventDefault();
    settings.classList.remove('open');
});

openAbout.addEventListener('click',function(e) {
    e.preventDefault();
    about.classList.add('open');
});

closeAbout.addEventListener('click',function(e) {
    e.preventDefault();
    about.classList.remove('open');
});

function updateSettings() {
    front = [
        frontSitelen.checked ? 1 : 0,
        frontToki.checked ? 1 : 0,
        frontInli.checked ? 1 : 0,
    ];

    back = [
        backSitelen.checked ? 1 : 0,
        backToki.checked ? 1 : 0,
        backInli.checked ? 1 : 0,
    ];

    hidden = [
        hiddenSitelen.checked ? 1 : 0,
        hiddenToki.checked ? 1 : 0,
        hiddenInli.checked ? 1 : 0,
    ];

    localStorage.setItem('lipu-sona-front',front.join(','));
    localStorage.setItem('lipu-sona-back',back.join(','));
    localStorage.setItem('lipu-sona-hidden',hidden.join(','));

    updateCardClasses();
}

function updateWords() {
    if(customWords.value.length) {
        localStorage.setItem('lipu-sona-words',customWords.value);
    } else {
        localStorage.removeItem('lipu-sona-words');
        tokiWords = {...originalWords};
    }
    setCustomWords();
}

function setCustomWords() {
    var w = localStorage.getItem('lipu-sona-words');
    if(w !== null) {
        var sp = w.split(',');
        tokiWords = {...originalWords};
        Object.keys(tokiWords).forEach(x => {
            if(!sp.includes(x)) {
                delete tokiWords[x];
            }
        });
    }
    reset();
    max.innerHTML = Object.keys(tokiWords).length.toString();
}

function updateCardClasses() {
    card.className = '';

    if(flipped) { card.classList.add('flipped'); }
    if(front[0]) { card.classList.add('front-sitelen'); }
    if(front[1]) { card.classList.add('front-toki'); }
    if(front[2]) { card.classList.add('front-inli'); }
    if(back[0]) { card.classList.add('back-sitelen'); }
    if(back[1]) { card.classList.add('back-toki'); }
    if(back[2]) { card.classList.add('back-inli'); }
}

function reset() {
    avail = [];
    curCard = 0;
    flipped = false;

    Object.keys(tokiWords).forEach(x => {
        avail.push(x);
    });

    newCard();
}

function flipCard() {
    flipped = true;
    card.classList.add('flipped')
}

function newCard() {
    flipped = false;
    card.classList.remove('flipped')

    var i = Math.floor(Math.random()*avail.length);
    var c = avail[i];
    avail.splice(i,1);
    
    sitelen.innerHTML = c;
    toki.innerHTML = c;
    inli.innerHTML = tokiWords[c].replaceAll('\n','<br>');

    curCard++;

    cur.innerHTML = curCard.toString();
}

reset();
