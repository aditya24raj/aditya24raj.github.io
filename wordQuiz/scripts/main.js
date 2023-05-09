class Dictionary {
    lexis = {};

    buildLexisWhole() {
        return new Promise((resolve, reject) => {
            fetch(`lexis/lexis`)
                .then((response) => {
                    return response.text();
                })
                .then((result) => {
                    // Do things with result
                    this.lexis = JSON.parse(result);
                    resolve();
                });
        });
    }

    buildLexis(letter) {
        return new Promise((resolve, reject) => {
            fetch(`lexis/${letter}`)
                .then((response) => {
                    return response.text();
                })
                .then((result) => {
                    // Do things with result
                    this.lexis[letter] = {};
                    this.lexis[letter].unusedWords = result.split("\n");
                    this.lexis[letter].usedWords = [];
                    resolve();
                });
        });
    }

    getWord(letter) {
        return new Promise((resolve, reject) => {
            if (this.lexis[letter]) {
                resolve(
                    this.lexis[letter].unusedWords[
                    Math.floor(Math.random() * this.lexis[letter].unusedWords.length)
                    ]
                );
            }
            else {
                this.buildLexis(letter).then(() => {
                    resolve(
                        this.lexis[letter].unusedWords[
                        Math.floor(Math.random() * this.lexis[letter].unusedWords.length)
                        ]
                    );
                });
            }
        });
    }

    isUsedWord(word) {
        let letter = word.toLowerCase().charAt(0);
        return new Promise((resolve, reject) => {
            if (this.lexis[letter]) {
                resolve(
                    this.lexis[letter].usedWords.includes(word.toLowerCase())
                );
            }
            else {
                this.buildLexis(letter).then(() => {
                    resolve(
                        this.lexis[letter].usedWords.includes(word.toLowerCase())
                    );
                });
            }
        });
    }


    isValidWord(word) {
        let letter = word.toLowerCase().charAt(0);
        return new Promise((resolve, reject) => {
            if (this.lexis[letter]) {
                resolve(
                    this.lexis[letter].unusedWords.includes(word.toLowerCase())
                );
            }
            else {
                this.buildLexis(letter).then(() => {
                    resolve(
                        this.lexis[letter].unusedWords.includes(word.toLowerCase())
                    );
                });
            }
        });
    }

    markWordAsUsed(word) {
        let letter = word.charAt(0);

        let wordIndex = this.lexis[letter].unusedWords.indexOf(word);
        if (wordIndex > -1) {
            this.lexis[letter].unusedWords.splice(wordIndex, 1);
        }

        this.lexis[letter].usedWords.push(word);
    }
}

class Player {
    #response = "-";
    #score = 0;
    #respondWithLetter = "-";

    dictionary;

    constructor(name, selfResponseHtmlId, scoreHtmlId, respondWithLetterHtmlId, selfSignal, rivalResponseHtmlId, rivalSignal, gamelogHtmlId, dictionary) {
        this.name = name;
        this.selfResponseElement = document.getElementById(selfResponseHtmlId);
        this.scoreElement = document.getElementById(scoreHtmlId);
        this.respondWithLetterElement = document.getElementById(respondWithLetterHtmlId);
        this.gameLogElement = document.getElementById(gamelogHtmlId);

        // listen for self signal and respond
        this.selfResponseElement.addEventListener(selfSignal, (event) => { this.respond(event.letter) });

        this.rivalElement = document.getElementById(rivalResponseHtmlId);
        this.rivalEvent = new Event(rivalSignal, { letter: '' });

        this.dictionary = dictionary;
    }

    set response(word) {
        this.#response = word;
        this.selfResponseElement.innerHTML = this.#response;
    }

    set score(num) {
        this.#score = num;
        this.scoreElement.innerHTML = this.#score;
    }

    get score() {
        return this.#score;
    }

    set respondWithLetter(i) {
        this.#respondWithLetter = i;
        this.respondWithLetterElement.innerHTML = this.#respondWithLetter;
    }

    get respondWithLetter() {
        return this.#respondWithLetter;
    }

    respond(letter) { }

    sendSignalToRivalForResponse() {
        this.updateGamelog();
        this.rivalEvent.letter = this.#response.slice(-1);
        this.rivalElement.dispatchEvent(this.rivalEvent);
    }

    updateGamelog() {
        this.gameLogElement.innerHTML = `<div class="capitalize target:bg-red-200 target:text-black" id="${this.#response.toLowerCase()}">${this.name} [${this.#score}] [${this.#respondWithLetter}]: ${this.#response}</div>` + this.gameLogElement.innerHTML;
    }
}


class Bot extends Player {
    constructor(dictionary) {
        super(
            'Bot',
            'bot-response',
            'bot-score',
            'bot-respond-with-letter',
            'bot-respond-event',
            'user-response',
            'user-respond-event',
            'game-log',
            dictionary
        );
    }

    respond(letter) {
        this.respondWithLetter = letter;

        // this.response = 'Apple';//prompt('bot: ');
        this.dictionary.getWord(letter).then((result) => {
            this.response = result;
            this.score += 1;
            this.dictionary.markWordAsUsed(result);
            this.sendSignalToRivalForResponse();
        });
    }
}

class User extends Player {
    constructor(dictionary) {
        super(
            'You',
            'user-response',
            'user-score',
            'user-respond-with-letter',
            'user-respond-event',
            'bot-response',
            'bot-respond-event',
            'game-log',
            dictionary,
        );

        document.getElementById("user-response").addEventListener("keydown", (event) => {
            // alert(event.key);
            document.getElementById('game-log').scroll({ top: -1000 });
            window.location.hash = '';

            if (event.key == "Enter") {
                this.onResponse(event);
                document.getElementById('message-board').innerHTML = '';
            }
        });

        document.getElementById("user-response").addEventListener("pointerdown", (event) => {
            document.getElementById('game-log').scroll({ top: -1000 });

        });
    }

    respond(letter) {
        this.respondWithLetter = letter;
        this.selfResponseElement.focus();
    }

    onResponse(event) {
        let currentResposne = event.target.value;
        this.responseValidityCheck(currentResposne)
            .then(() => {
                this.response = currentResposne;
                this.score += 1;

                this.selfResponseElement.blur();
                this.selfResponseElement.value = "";

                this.dictionary.markWordAsUsed(currentResposne.toLowerCase());

                this.sendSignalToRivalForResponse();
            })
            .catch((error) => {
                if (error) {
                    console.error(error);
                    document.getElementById('message-board').innerHTML = `<div>${error}</div>`;
                    this.selfResponseElement.value = '';
                }
                //this.messageBoardElement.innerHTML = error;
                //alert(error);
            });
    }

    responseValidityCheck(response) {
        return new Promise((resolve, reject) => {
            if (!response) {
                // empty response
                reject();
            }
            else if (response.toLowerCase().charAt(0) != this.respondWithLetter) {
                reject(`'${response}' does not start with letter '${this.respondWithLetter}'`);
            }

            this.dictionary.isUsedWord(response)
                .then((isUsed) => {
                    if (isUsed) {
                        reject(`'${response}' has already been used`);
                        window.location.hash = response.toLowerCase();
                    }

                    this.dictionary.isValidWord(response)
                        .then((isValid) => {
                            if (!isValid) {
                                reject(`${response} is not a word`);
                            }

                            resolve();
                        });
                });
        })
    }
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/wordQuiz/scripts/sw.js");
}

const gameDictionary = new Dictionary();
gameDictionary.buildLexisWhole()
    .then(() => {
        const bot = new Bot(gameDictionary);
        const user = new User(gameDictionary);

        bot.respond('a');
    });

