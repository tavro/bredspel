/*
Idé: Memory

Avslut: Vi gick just i konkurs

Idé knapptryck inom 1 minut

Händelser vid tärningskast:
Idéer: 
* Cookies godkänns
* Höjer priset på allt med 100 kr
* Kommer in på en random hemsida
* Ett till spel
* Random spel läggs i kundkorgen
* Alla kategorier förutom sämta spel försvinner
* Slå igen
* Du loggas ut
* Skickas meddelande till chat-personen
* Ta bort random div

Idé: Man kan alltid slå igen -> dubble or nothing


*/

const reviewsObj = {
  "battleshit": [
    {
      "namn": "Bert A.",
      "kommentar": "haha bajs",
      "betyg": 3
    },
    {
      "namn": "Jens Jon J.",
      "kommentar": "Superkladdigt, rent ut sagt vidrigt spel.",
      "betyg": 1
    }
  ],
  "sten-sax-pase": [
    {
      "namn": "Ing-marie U.",
      "kommentar": "Påsen gick sönder efter första matchen. 2/5",
      "betyg": 2
    },
    {
      "namn": "Britt B.",
      "kommentar": "Utöver ett roligt spel så kan stenen användas som prydnad :)",
      "betyg": 4
    },
    {
      "namn": "Emily",
      "kommentar": "Good but I was missing the well. Will have to buy that somewhere else.",
      "betyg": 2
    }
  ],
  "med-samma-ord": [
    {
      "namn": "Sven Q.",
      "kommentar": "Va jätte hypad och tog med det till en hemmafest men alla tröttnade ganska snabbt.",
      "betyg": 1
    },
    {
      "namn": "Lina 6 år",
      "kommentar": "Superbra lära sig svenska.",
      "betyg": 1
    }
  ],
  "cheese-board": [
    {
      "namn": "Sven Q.",
      "kommentar": "Gillar inte ädelost. Har ni en variant med brie?",
      "betyg": 1
    },
    {
      "namn": "Alex",
      "kommentar": "Superkul och gott, men tråkigt att man bara får spela en gång. Sen blir det väldigt orättvist liksom. Önskar det fanns marmelad till. Brädet skulle kunna vara av kex?",
      "betyg": 4
    }
  ],
  "gelerattfallan": [
    {
      "namn": "Bert A.",
      "kommentar": "haha kladd",
      "betyg": 3
    }
  ],
  "cheesers": [
    {
      "namn": "Namn",
      "kommentar": "Vet inte varför jag köpte denna, jag är laktosintolerant.",
      "betyg": 3
    }
  ],
  "drakar och dank memes": [
    {
      "namn": "Örjan T.",
      "kommentar": "Körde detta med mitt barn barn. Det va ett märkligt spel... Men kul!",
      "betyg": 5
    },
    {
      "namn": "MemeKingen",
      "kommentar": "Bjuder på massor lolz :P",
      "betyg": 5
    }
  ], 
  "den-funna-diamanten": [
    {
      "namn": "Triss T.",
      "kommentar": "Köpte det men kom inte med några instruktioner....",
      "betyg": 1
    },
    {
      "namn": "Henrik O.",
      "kommentar": "Helt perfekt. Kan ba plocka fram från fickan när vi spelar och lura polarna att jag vann.",
      "betyg": 5
    }
  ],
  "agnej": [
    {
      "namn": "Sven-Erik Q.",
      "kommentar": "Jag är ingenjör och det här va nog det enklaste spelet jag spelat.",
      "betyg": 2
    },
    {
      "namn": "Anette",
      "kommentar": "Superkul att bygga. Bra replayability. Man kan ställa den på hyllan sen, blir en supersnygg inredningsdetalj. MVH Maritta",
      "betyg": 5
    }
  ],
  "tva-i-rad": [
    {
      "namn": "Tobias S.",
      "kommentar": "Älskar detta spel. Väldigt enkelt att lära sig, brukar köra mot min 3 åring. Han blir oftast väldigt arg när jag alltid verkar vinna.",
      "betyg": 5
    },
    {
      "namn": "Isak H.",
      "kommentar": "Förlorar hela tiden, sugit spel ngl",
      "betyg": 1
    },
    {
      "namn": "Tobias S.",
      "kommentar": "Riktigt stämningshöjare. Har alltid framme på party.",
      "betyg": 5
    }
  ],
  "fia utan knuff": [
    {
      "namn": "Rasmus R.",
      "kommentar": "Det här är ju en kopia på fia MED knuff. Men jag gillar det här spelets regler mer.",
      "betyg": 5
    },
    {
      "namn": "Dålig förlorare",
      "kommentar": "Så skönt att slippa förlora.",
      "betyg": 5
    }
  ],
  "hangman": [
    {
      "namn": "Lill-Erik",
      "kommentar": "Riktigt sjukt spel om man tänker efter. Gillart' hehe",
      "betyg": 1
    },
    {
      "namn": "Lill-Erik",
      "kommentar": "Oj, råkade lämna bara 1 stjärna i min andra review. Menade att ge 5.",
      "betyg": 5
    },
    {
      "namn": "Ronny Svensson",
      "kommentar": "Letat så länge efter det här!!! Fattar inte varför ingen annan säljer det. Så glad att jag lyckades köpa det.",
      "betyg": 3
    }
  ]
}


const chatObj = {
    "Kan du slå tärningen åt mig?": [
        "Ånej, den åkte ner på golvet. Förlåt. Du får nog testa själv igen.",
        "<LEFTCHAT>"
    ],
    "Kan du tipsa mig om roliga twitterkonton att följa?": [
        "Du behöver bara ett. @Jenstheplaya. Det heter X förresten. Jag måste gå o livesända nu.",
        "<LEFTCHAT>"
    ],
    "Vart hittar jag de breda spelen?": [
        "Jag ska se om jag kan hitta dem på lagret.",
        "<LEFTCHAT>"
    ]
};

function displayUserMessage(message) {
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.innerHTML = `
        <span class="message-text">${message}</span>
        <span class="timestamp">${new Date().toLocaleTimeString()}</span>
    `;
    document.getElementById("chat-container").appendChild(userMessage);
}

function displayUserMessageAtIndex(message, index) {
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.innerHTML = `
        <span class="message-text">${message}</span>
        <span class="timestamp">${new Date().toLocaleTimeString()}</span>
    `;
    appendElementAtIndex(document.getElementById("chat-container"), userMessage, index)
}

function displayBotMessage(message) {
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    botMessage.innerHTML = `
        <span class="message-text">${message}</span>
        <span class="timestamp">${new Date().toLocaleTimeString()}</span>
    `;
    document.getElementById("chat-container").appendChild(botMessage);
}

function displayBotMessageAtIndex(message, index) {
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    botMessage.innerHTML = `
        <span class="message-text">${message}</span>
        <span class="timestamp">${new Date().toLocaleTimeString()}</span>
    `;
    appendElementAtIndex(document.getElementById("chat-container"), botMessage, index)
}

var basket = [];
var activeKey = "";

class UniqueNumberStack {
  constructor() {
    this.stack = [];
    this.usedNumbers = new Set();
  }

  pushUniqueNumber() {
    let randomNumber;
    do {
      randomNumber = getRandomDiceNumber();
    } while (this.usedNumbers.has(randomNumber));
    
    this.stack.push(randomNumber);
    this.usedNumbers.add(randomNumber);
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }
    const poppedNumber = this.stack.pop();
    this.usedNumbers.delete(poppedNumber);
    return poppedNumber;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

var uniqueStack = new UniqueNumberStack();
for(var i = 0; i < 6; i++) {
    uniqueStack.pushUniqueNumber();
}

function generateGameHTML(gameData) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("games-wrapper");

    Object.keys(gameData).forEach((key) => {
        const game = gameData[key];

        const gameWrapper = document.createElement("div");
        gameWrapper.classList.add("game-wrapper");

        const coverWrapper = document.createElement("div");
        coverWrapper.classList.add("cover-wrapper");

        const eventLink = document.createElement("a");
        eventLink.addEventListener('click', function () {
            if (rolling) return;
            activeKey = key;
    
            const diceOverlay = document.getElementById('overlay');
            diceOverlay.style.display = 'flex';
    
            rolling = true;
    
            const totalFrames = 20;
            const frameDuration = 100;
            let frameCount = 0;
    
            var finalNumber = uniqueStack.pop();
            console.log(finalNumber);
            function rollAnimation() {
                setDiceBackground(getRandomDiceNumber());
                frameCount++;
    
                if (frameCount < totalFrames) {
                    setTimeout(rollAnimation, frameDuration);
                } else {
                    setTimeout(function () {
                        setDiceBackground(finalNumber);

                        if(finalNumber == 1) {
                            var audio = new Audio('res/sound/music.mp3');
                            audio.play();
                            document.getElementById("event-text").textContent = "Luta dig tillbaka och njut! (du satte på musikspelaren)";
                        }
                        else if(finalNumber == 2) {
                            basket = []
                            document.getElementById("basket-amount").textContent = basket.length;
                            document.getElementById("event-text").textContent = "Det verkar som att det gick hål i varukorgen... (din varukorg är nu tom)";
                        }
                        else if(finalNumber == 3) {
                            document.getElementById("event-text").textContent = "Ny färg, nytt jag! (du ändrade färgtemat)";
                            var r = document.querySelector(':root');

                            const schemes = [
                                {
                                    main:"#D1D5DE",
                                    header:"#DE369D",
                                    price:"#F34213",
                                    button:"#E0CA3C",
                                    img:"#B7B6C2"
                                },
                                {
                                    main:"#D3F9B5",
                                    header:"#DB2763",
                                    price:"#1B4965",
                                    button:"#FDE12D",
                                    img:"#BCE7FD"
                                },
                                {
                                    main:"#CC8B8C",
                                    header:"#210B2C",
                                    price:"#A31621",
                                    button:"#55286F",
                                    img:"#CDE7B0"
                                },
                                {
                                    main:"#FBCAEF",
                                    header:"#C9CBA3",
                                    price:"#E37463",
                                    button:"#FFE1A8",
                                    img:"#E3B5CF"
                                },
                                {
                                    main:"#BC5F04",
                                    header:"#010001",
                                    price:"#2B0504",
                                    button:"#874000",
                                    img:"#D2BF55"
                                },
                                {
                                    main:"#FFA5AB",
                                    header:"#A53860",
                                    price:"#450920",
                                    button:"#F9DBBD",
                                    img:"#DA627D"
                                },
                                {
                                    main:"#FFF8F0",
                                    header:"#92140C",
                                    price:"#1E1E24",
                                    button:"#111D4A",
                                    img:"#FFCF99"
                                },
                                {
                                    main:"#F3FFC6",
                                    header:"#E5989B",
                                    price:"#306B34",
                                    button:"#FFB4A2",
                                    img:"#C3EB78"
                                }
                            ]
                        
                            const randomIndex = Math.floor(Math.random() * schemes.length);

                            const chosenScheme = schemes[randomIndex];
                            const main = chosenScheme.main;
                            const header = chosenScheme.header;
                            const price = chosenScheme.price;
                            const img = chosenScheme.img;
                            const btn = chosenScheme.button;

                            r.style.setProperty('--main-bg-color', main);
                            r.style.setProperty('--header-bg-color', header);
                            r.style.setProperty('--price-color', price);
                            r.style.setProperty('--img-bg-color', img);
                            r.style.setProperty('--button-bg-color', btn);
                        }
                        else if(finalNumber == 4) {
                            document.getElementById("event-text").textContent = "Comic Sans eller Impact? Det är frågan! (du ändrade typsnittet)";
                            var r = document.querySelector(':root');

                            const fontOptions = [
                            "'Comic Sans MS', cursive",
                            "Impact, Charcoal, sans-serif",
                            "'Times New Roman', Times, serif",
                            "'Brush Script MT', cursive",
                            "Consolas, 'Courier New', monospace"
                            ];
                            const randomIndex = Math.floor(Math.random() * fontOptions.length);

                            r.style.setProperty('--active-font', fontOptions[randomIndex]);
                        }
                        else if(finalNumber == 5) {
                            document.getElementById("event-text").textContent = "Större logga, större slagkraft! (du gjorde loggan mer kraftful)";
                            increaseScaleVariable();
                        }
                        else if(finalNumber == 6) {
                            document.getElementById("event-text").textContent = "Välkommen att inspektera produkten! (du kan nu läsa mer om produkten)";
                            var gameWrapper = document.querySelector(".categories-wrapper");
                            var gamePage = document.querySelector(".game-page");
                            gameWrapper.style.display = "none";
                            gamePage.style.display = "flex";

                            document.getElementById("basket-btn").disabled = true;
                            const element = document.getElementById("random-btn");
                            element.style.display = "block";
                            const element2 = document.getElementById("accept-btn");
                            element2.style.display = "block";
                            const element3 = document.getElementById("correct-amount");
                            element3.style.display = "block";

                            var div = document.getElementById("reviews-wrapper");
                            while (div.firstChild) {
                                div.removeChild(div.firstChild);
                            }
                            
                            const revObj = reviewsObj[activeKey];
                            for (const obj of revObj) {
                                createReviewDiv(obj.namn, obj.betyg, obj.kommentar);
                            }
                            
                            setPageContent(activeKey);
                        }
                        showPopup();

                        diceOverlay.style.display = 'none';
                        rolling = false;
                    }, 1000);
                }
            }
    
            rollAnimation();
        });

        coverWrapper.appendChild(eventLink);

        const coverImage = document.createElement("img");
        coverImage.src = "res/images/" + game.imgsrc;

        eventLink.appendChild(coverImage);

        const infoWrapper = document.createElement("div");
        infoWrapper.classList.add("info-wrapper");

        const title = document.createElement("h1");
        title.textContent = game.titel;

        const description = document.createElement("p");
        description.classList.add("desc");

        if (game.beskrivning.length > 30) {
            description.textContent = game.beskrivning.substring(0, 30) + "...";
        }
        else {
            description.textContent = game.beskrivning;
        }

        const buyWrapper = document.createElement("div");
        buyWrapper.classList.add("buy-wrapper");

        const price = document.createElement("p");
        price.classList.add("price");

        const reaPrice = document.createElement("b");
        reaPrice.classList.add("rea");
        reaPrice.textContent = `${game.pris.rea} kr.`;

        const ordinaryPrice = document.createElement("span");
        ordinaryPrice.classList.add("ordinary");
        ordinaryPrice.textContent = `${game.pris.orginal} kr.`;

        price.appendChild(reaPrice);
        price.appendChild(ordinaryPrice);

        const buyButton = document.createElement("button");
        buyButton.textContent = "Köp";

        buyWrapper.appendChild(price);
        buyWrapper.appendChild(buyButton);

        infoWrapper.appendChild(title);
        infoWrapper.appendChild(description);
        infoWrapper.appendChild(buyWrapper);

        gameWrapper.appendChild(coverWrapper);
        gameWrapper.appendChild(infoWrapper);
        
        wrapper.appendChild(gameWrapper);
    });

    return wrapper;
}

function handleEvent() {
    console.log("TEST")
}

function createFallingElement() {
    const newElement = document.createElement('div');
    newElement.className = 'falling-element';

    const k = activeKey;
    const obj = mockdb["kategorier"][gameToCategory(k)][k];

    newElement.style.backgroundImage = 'url("res/images/' + obj.imgsrc + '")';

    const randomX = Math.floor(Math.random() * (window.innerWidth - newElement.clientWidth));
    newElement.style.left = randomX + 'px';
    document.body.appendChild(newElement);
    animateElement(newElement);
}

var allSpawned = false;
function createElementsWithDelay(count) {
    if (count > 0) {
        allSpawned = false;
        createFallingElement();
        setTimeout(function () {
            createElementsWithDelay(count - 1);
        }, Math.random() * 2000);
    }
    else {
        allSpawned = true;
    }
}


// MINIGAME 1
var timer = 300;
var totalClicks = 100;
var timesClicked = 0;

function initMinigame1() {
    setVariables();
    // TODO
}

function setVariables() {
    timer = 300;
    totalClicks = 100;
    timesClicked = 0;
}

function increaseCounter() {
    timesClicked+=1;
}

function decreaseTimer() {
    timer--;
}

function bought() {
    return timesClicked >= totalClicks;
}

// DICE
const diceImages = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png'];
let rolling = false;

function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function setDiceBackground(number) {
    const diceElement = document.getElementById('dice');
    diceElement.style.backgroundImage = `url('res/images/${diceImages[number - 1]}')`;
}

// AMOUNT

function getRandomAmount(range) {
    return Math.floor(Math.random() * range) + 1;
}

function increaseScaleVariable() {
    var r = document.querySelector(':root');
    r.style.setProperty('--scale-modifier', 1+Number(r.style.getPropertyValue('--scale-modifier')));
}
increaseScaleVariable();

const jsonData = {
  "tva-i-rad": {
    "titel": "Två i rad",
    "beskrivning": "Blah blah",
    "url": "cover1.png",
    "pris": {
      "ordinarie": 123,
      "rea": 12
    }
  }
};

const mockdb = {
  "kategorier": {
    "for-de-yngre": {
      "battleshit": {
        "titel": "Battleshi*",
        "beskrivning": "Krig är inte kul, därför har Havebro skapat en vänligare variant av Battleship. (Obs. Bajs ej inkluderat)",
        "imgsrc": "battleshit.jpg",
        "betyg": 3,
        "pris": {
          "orginal": 599,
          "rea": 598
        },
        "lager": 41,
        "alder": "11+",
        "kommentarer": [
          {
            "namn": "Bert A.",
            "kommentar": "haha bajs",
            "betyg": 3
          }
        ]
      },
      "sten-sax-pase": {
        "titel": "Sten, Sax, Påse",
        "beskrivning": "En riktig klassiker som man bara måste ha hemma! (Obs. Stenen på bilden kan variera till den du får i påsen eftersom de är handplockade)",
        "imgsrc": "sten_sax_pase.jpg",
        "betyg": 4,
        "pris": {
          "orginal": 99,
          "rea": 68
        },
        "lager": 45,
        "alder": "11+",
        "kommentarer": [
          {
            "namn": "Ing-marie U.",
            "kommentar": "Påsen gick sönder efter första matchen. 2/5",
            "betyg": 2
          },
          {
            "namn": "Britt B.",
            "kommentar": "Utöver ett roligt spel så kan stenen användas som prydnad :)",
            "betyg": 4
          }
        ]
      },
      "med-samma-ord": {
        "titel": "Med Samma Ord",
        "beskrivning": "Beskriv ord med samma ord. Enklare än så blir det inte. Perfekt för att köra med bästa kompisen.",
        "imgsrc": "samma_ord.jpg",
        "betyg": 1,
        "pris": {
          "orginal": 199,
          "rea": 27
        },
        "lager": 48,
        "alder": "2+",
        "kommentarer": [
          {
            "namn": "Sven Q.",
            "kommentar": "Va jätte hypad och tog med det till en hemmafest men alla tröttnade ganska snabbt.",
            "betyg": 1
          }
        ]
      }
    },
    "atbara-pjaser": {
      "cheese-board": {
        "titel": "Cheese Board (ost schack)",
        "beskrivning": "Inget har varit mer avnjutningsbart än att äta upp sin motståndares bönder. Perfekt att spela till lunchen.",
        "imgsrc": "cheese_board.jpg",
        "betyg": 1,
        "pris": {
          "orginal": 399,
          "rea": 359
        },
        "lager": 67,
        "alder": "5+",
        "kommentarer": [
          {
            "namn": "Sven Q.",
            "kommentar": "Gillar inte ädelost. Har ni en variant med brie?",
            "betyg": 1
          }
        ]
      },
      "gelerattfallan": {
        "titel": "Geleråttfällan",
        "beskrivning": "Väldigt kladdigt och väldigt roligt! (Obs. Kan innehålla utgånget godis.)",
        "imgsrc": "gelerattfallan.jpg",
        "betyg": 5,
        "pris": {
          "orginal": 199,
          "rea": 59
        },
        "lager": 43,
        "alder": "6+",
        "kommentarer": [
          {
            "namn": "",
            "kommentar": "",
            "betyg": 1
          }
        ]
      },
      "cheesers": {
        "titel": "Cheesers (Babybel varianten)",
        "beskrivning": "Gott gott gott! När du tar över en motståndares pjäs får du käka upp den! (Obs. Se till att kolla utgångdatum på osten innan du spelar)",
        "imgsrc": "cheesers.jpg",
        "betyg": 5,
        "pris": {
          "orginal": 498,
          "rea": 469
        },
        "lager": 42,
        "alder": "6+",
        "kommentarer": [
          {
            "namn": "Karl-Johan I.",
            "kommentar": "Fick rännskita efter en match. Om jag kunde ge 0 stjärnor skulle jag gjort det. 1/5",
            "betyg": 1
          }
        ]
      }
    },
    "forra-arets-spel": {
      "agnej": {
        "titel": "Agnej (Bygg ditt egna torn!)",
        "beskrivning": "Bit förbit så bygger du ditt egna torn. Kan spelas själv eller med flera.",
        "imgsrc": "agnej.jpg",
        "betyg": 2,
        "pris": {
          "orginal": 399,
          "rea": 199
        },
        "lager": 100,
        "alder": "6+",
        "kommentarer": [
          {
            "namn": "Sven-Erik Q.",
            "kommentar": "Jag är ingenjör och det här va nog det enklaste spelet jag spelat.",
            "betyg": 2
          }
        ]
      },
      "drakar och dank memes": {
        "titel": "Drakar & Dank Memes (2010 edition)",
        "beskrivning": "Perfekt till barn barnet som gillar memes. Karaktärer så som Trollface och Trololo i denna värld.",
        "imgsrc": "drakar.jpg",
        "betyg": 5,
        "pris": {
          "orginal": 999,
          "rea": 995
        },
        "lager": 24,
        "alder": "8+",
        "kommentarer": [
          {
            "namn": "Örjan T.",
            "kommentar": "Körde detta med mitt barn barn. Det va ett märkligt spel... Men kul!",
            "betyg": 5
          }
        ]
      },
      "den-funna-diamanten": {
        "titel": "Den Funna Diamanten",
        "beskrivning": "ÄNTLIGEN HITTADE DU DEN!",
        "imgsrc": "den_funna_diamanten.jpg",
        "betyg": 1,
        "pris": {
          "orginal": 200,
          "rea": 199
        },
        "lager": 2,
        "alder": "8+",
        "kommentarer": [
          {
            "namn": "Triss T.",
            "kommentar": "Köpte det men kom inte med några instruktioner....",
            "betyg": 1
          }
        ]
      }
    },
    "mast-populara": {
      "tva-i-rad": {
        "titel": "Connect 2 (Två I Rad)",
        "beskrivning": "En rolig twist på Fyra i rad! Ett spel som alla kan köra eftersom den har en enkel inlärningskurva. En oskriven regel är att den som köper spelet får alltid börja först, men man kan också singla slant.",
        "imgsrc": "connect_2.jpg",
        "betyg": 3,
        "pris": {
          "orginal": 199,
          "rea": 22
        },
        "lager": 48,
        "alder": "1+",
        "kommentarer": [
          {
            "namn": "Tobias S.",
            "kommentar": "Älskar detta spel. Väldigt enkelt att lära sig, brukar köra mot min 3 åring. Han blir oftast väldigt arg när jag alltid verkar vinna.",
            "betyg": 5
          },
          {
            "namn": "Isak H.",
            "kommentar": "Förlorar hela tiden, sugit spel ngl",
            "betyg": 1
          }
        ]
      },
      "fia utan knuff": {
        "titel": "Fia Utan Knuff",
        "beskrivning": "Ett roligt spel för max 4 personer.",
        "imgsrc": "fia_utan_knuff.jpg",
        "betyg": 5,
        "pris": {
          "orginal": 199,
          "rea": 33
        },
        "lager": 49,
        "alder": "1+",
        "kommentarer": [
          {
            "namn": "Rasmus R.",
            "kommentar": "Det här är ju en kopia på fia MED knuff. Men jag gillar det här spelets regler mer.",
            "betyg": 5
          }
        ]
      },
      "hangman": {
        "titel": "Hänga gubbe",
        "beskrivning": "Ett klassiskt och ett väldigt morbid spel. OBS. 18+. Innehåller: '1x penna'",
        "imgsrc": "hangman.jpg",
        "betyg": 3,
        "pris": {
          "orginal": 89,
          "rea": 69
        },
        "lager": 39,
        "alder": "18+",
        "kommentarer": [
          {
            "namn": "Lill-Erik",
            "kommentar": "Riktigt sjukt spel om man tänker efter. Gillart' hehe",
            "betyg": 1
          },
          {
            "namn": "Lill-Erik",
            "kommentar": "Oj, råkade lämna bara 1 stjärna i min andra review. Menade att ge 5.",
            "betyg": 5
          }
        ]
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("amount").textContent = "0 st";
    document.getElementById("random-btn").addEventListener('click', function () {
        const obj = mockdb["kategorier"][gameToCategory(activeKey)][activeKey];
        document.getElementById("amount").textContent = getRandomAmount(Number(obj.lager)) + " st";
        document.getElementById("basket-btn").disabled = true;
    });
    document.getElementById("accept-btn").addEventListener('click', function () {
        document.getElementById("basket-btn").disabled = false;
        const element = document.getElementById("random-btn");
        element.style.display = "none";
        const element2 = document.getElementById("accept-btn");
        element2.style.display = "none";
        const element3 = document.getElementById("correct-amount");
        element3.style.display = "none";
    });

    document.getElementById("basket-btn").addEventListener('click', function () {
        document.getElementById("follower").style.display = "block";
        const gamePage = document.querySelector(".game-page");
        gamePage.style.display = "none";

        const substr = document.getElementById("amount").textContent.substring(0, document.getElementById("amount").textContent.length - 3);
        createElementsWithDelay(Number(substr));
    });

    document.getElementById("buy-all").addEventListener('click', function () {
        document.getElementById("header").style.display = "none";
        document.getElementById("basket-prev").style.display = "none";
        document.getElementById("end").style.display = "block";
    });

    document.getElementById("konto").addEventListener('click', function () {
        showChat();
    });

    document.getElementById("close-chat").addEventListener('click', function () {
        hideChat();
    });

    const follower = document.getElementById("follower");
    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        follower.style.transform = `translateX(${mouseX}px)`;
    });

    function createGamesWrapper(name, obj) {
        var child = generateGameHTML(obj);
    
        const gamesWrapper = document.querySelector(".categories-wrapper");
        
        var wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.flexDirection = "column";

        var title = document.createElement("h1");
        title.textContent = name;
        title.style.margin = "8px";
        title.style.fontSize = "20px";
        title.style.padding = 0;

        wrapper.appendChild(title);
        wrapper.appendChild(child);
        gamesWrapper.appendChild(wrapper);
        
        // create div
        // add h1 with name as child
    }
    
    function printMockDB() {
        for(var category in mockdb["kategorier"]) {
            if(category == "for-de-yngre") {
                createGamesWrapper("För de yngre", mockdb["kategorier"]["for-de-yngre"]);
            }
            else if(category == "atbara-pjaser") {
                createGamesWrapper("Ätbara pjäser", mockdb["kategorier"]["atbara-pjaser"]);
            }
            else if(category == "forra-arets-spel") {
                createGamesWrapper("Förra årets spel", mockdb["kategorier"]["forra-arets-spel"]);
            }
            else if(category == "mast-populara") {
                createGamesWrapper("Mest populära", mockdb["kategorier"]["mast-populara"]);
            }
            else {
                createGamesWrapper("Övrigt", {});
            }
        }
    }
    printMockDB();
    
    document.querySelector(".logo").addEventListener('click', function () {
        document.getElementById("basket-prev").style.display = "none";
        var gamePageWrapper = document.querySelector(".game-page");
        gamePageWrapper.style.display = "none";
        var gameWrapper = document.querySelector(".categories-wrapper");
        gameWrapper.style.display = "flex";
        uniqueStack = new UniqueNumberStack();
        for(var i = 0; i < 6; i++) {
            uniqueStack.pushUniqueNumber();
        }
    });

    const answers = document.getElementById("answers");
    answers.addEventListener("click", (e) => {
        if (e.target.classList.contains("message-answer")) {
            const userChoice = e.target.textContent;
            const botResponses = chatObj[userChoice];

            if (botResponses) {
                displayUserMessage(userChoice);
                botResponses.forEach((response) => {
                    if (response === "<LEFTCHAT>") {
                        var pElement = document.createElement("p");
                        pElement.id = "chat-action";
                        var iElement = document.createElement("i");
                        iElement.textContent = "Jens har avslutat chatten.";
                        pElement.appendChild(iElement);

                        var divElement = document.getElementById("chat-container");
                        divElement.appendChild(pElement);
                    } else {
                        displayBotMessage(response);
                    }
                });
            }
            answers.remove();
        }
    });

    displayUserMessageAtIndex("Hjälp mig!", 1);
    displayBotMessageAtIndex("Hej kära kund, du pratar med Jens! Vad kan jag hjälpa dig med?", 2);

}, false);

function appendElementAtIndex(parentElement, childElement, index) {
  if (index < 0 || index >= parentElement.children.length) {
    parentElement.appendChild(childElement);
  } else {
    parentElement.insertBefore(childElement, parentElement.children[index]);
  }
}

function showChat() {
    document.getElementById("chat-container").style.display = "block";
}

function hideChat() {
    document.getElementById("chat-container").style.display = "none";
}

function endChat() {
    document.getElementById("chat-action").style.display = "block";
    document.getElementById("answers").style.display = "none";
}

function restartChat() {
    // TODO
}

function showPopup() {
    document.getElementById("pop-up").style.display = "block";
}

function closePopup() {
    document.getElementById("pop-up").style.display = "none";
}


function gameToCategory(k) {
    if(k == "fia utan knuff" || k == "hangman" || k == "tva-i-rad") {
        return "mast-populara"
    }
    else if(k == "den-funna-diamanten" || k == "drakar och dank memes" || k == "agnej") {
        return "forra-arets-spel"
    }
    else if(k == "cheese-board" || k == "cheesers" || k == "gelerattfallan") {
        return "atbara-pjaser"
    }
    else if(k == "battleshit" || k == "sten-sax-pase" || k == "med-samma-ord") {
        return "for-de-yngre"
    }
}

function setPageContent(k) {
    const obj = mockdb["kategorier"][gameToCategory(k)][k];

    document.getElementById("game-title").textContent = obj.titel;
    document.getElementById("game-desc").textContent = obj.beskrivning;
    document.getElementById("game-img").src = "res/images/" + obj.imgsrc;
    document.getElementById("age").textContent = " " + obj.alder;
    document.getElementById("stock").textContent = " " + obj.lager + " st";
}



/*

Falling animation test

*/

var x = null;
    
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
  x = e.pageX;
}

function animateElement(animatedElement) {
    const startTime = performance.now();
    let topPosition = 0;

    function updatePosition(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < 3000) {
            topPosition = (elapsedTime / 3000) * (window.innerHeight * 0.75);
            animatedElement.style.top = topPosition + "px";
            requestAnimationFrame(updatePosition);
        } 
        else {
            const mouseX = x;

            const elementLeft = animatedElement.getBoundingClientRect().left;
            const elementWidth = animatedElement.offsetWidth;
            const elementMidpoint = elementLeft + elementWidth / 2;
            const isWithinHalfWidth = Math.abs(mouseX - elementMidpoint) <= elementWidth / 2;
            if (isWithinHalfWidth) {
                basket.push(activeKey);
                document.getElementById("basket-amount").textContent = basket.length; 
            }

            animatedElement.remove();
            var elements = document.getElementsByClassName("falling-element");
            var count = elements.length;
            if(allSpawned && count == 0) {
                document.getElementById("follower").style.display = "none";
                
                const resultObject = countOccurrences(basket);

                var divElement = document.getElementById("basket-prev");
                var children = divElement.children;
                if (children.length > 1) {
                    for (var i = 0; i < children.length - 1; i++) {
                        divElement.removeChild(children[i]);
                    }
                }

                Object.keys(resultObject).forEach((k) => {
                    const obj = mockdb["kategorier"][gameToCategory(k)][k];

                    generateElements(obj.titel, obj.beskrivning, obj.imgsrc, resultObject[k], obj.pris.rea);
                });
                
                var basketWrapper = document.querySelector(".basket-preview");
                basketWrapper.style.display = "block";
            }
        }
    }

    requestAnimationFrame(updatePosition);
}

function generateElements(oTitle, oDesc, oImg, oAmount, oPrice) {
    const previewItem = document.createElement('div');
    previewItem.classList.add('preview-item');

    const productImgWrapper = document.createElement('div');
    productImgWrapper.classList.add('product-img-wrapper');

    const img = document.createElement('img');
    img.setAttribute('src', 'res/images/' + oImg);

    productImgWrapper.appendChild(img);

    const productInfoWrapper = document.createElement('div');
    productInfoWrapper.classList.add('product-info-wrapper');

    const titleH1 = document.createElement('h1');
    titleH1.textContent = oTitle + ': ' + oAmount + ' st';

    const descriptionP1 = document.createElement('p');
    descriptionP1.textContent = oDesc;

    const priceP = document.createElement('p');
    priceP.textContent = 'Pris: ' + oPrice*oAmount + ' kr';

    productInfoWrapper.appendChild(titleH1);
    productInfoWrapper.appendChild(descriptionP1);
    productInfoWrapper.appendChild(priceP);

    previewItem.appendChild(productImgWrapper);
    previewItem.appendChild(productInfoWrapper);

    document.getElementById('basket-prev').prepend(previewItem);
}

function countOccurrences(arr) {
  const result = {};
  
  for (const item of arr) {
    if (result.hasOwnProperty(item)) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }
  
  return result;
}

function createReviewDiv(name, rating, comment) {
  var reviewDiv = document.createElement("div");
  reviewDiv.classList.add("review");

  var reviewerSpan = document.createElement("span");
  reviewerSpan.classList.add("reviewer");
  reviewerSpan.textContent = name;

  var ratingSpan = document.createElement("span");
  ratingSpan.classList.add("rating");
  ratingSpan.textContent = "";
  for(var i = 0; i < rating; i++) {
    ratingSpan.textContent += "★"
  }

  var commentP = document.createElement("p");
  commentP.classList.add("comment");
  commentP.textContent = comment;

  reviewDiv.appendChild(reviewerSpan);
  reviewDiv.appendChild(ratingSpan);
  reviewDiv.appendChild(commentP);

  document.getElementById("reviews-wrapper").appendChild(reviewDiv);
}