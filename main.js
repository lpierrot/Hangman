document.addEventListener("DOMContentLoaded", function(event) {
    var possibleWords =[
        {"word": "Washington", "hint": "Place"},
        { "word": "Obama", "hint": "Person" },
        { "word": "Volvo", "hint": "Car Maker" },
        { "word": "Pizza", "hint": "Food" },
        {
            "word": "Seattle",
            "hint": "City"
        }
    ];
    var word = possibleWords[Math.floor(Math.random() * Math.floor(possibleWords.length))];
    var currentWord = word['word'];
    var hint = word['hint'];
    var hintContainer = document.getElementById('hint');
    hintContainer.textContent = hint;
    var numberBox = currentWord.length;
    var numberOfGuesses= 6;
    var previousGuesses = { }
    var wordContainer = document.getElementById('words');
    var div = document.createElement('div');
    wordContainer.append(div);
    for (var i=0; i<numberBox; i++) {
        var div = document.createElement('div');
        div.id = i; 
        wordContainer.append(div);
    }
    document.onkeypress = function(e) {
        console.log(e);
        if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode > 96 && e.keyCode <123)){
          
            if (!(e.key.toLowerCase() in previousGuesses)) {
                previousGuesses[e.key.toLowerCase()] = true;
                var guesses = document.getElementById('guesses');
                guesses.textContent += " " + e.key.toLowerCase();
                if (currentWord.toLowerCase().indexOf(e.key.toLowerCase()) >= 0) {
                    var lastPosition = -1;
                    while (currentWord.toLowerCase().indexOf(e.key.toLowerCase(), lastPosition + 1) >= 0) {
                        lastPosition = currentWord.toLowerCase().indexOf(e.key.toLowerCase(), lastPosition + 1);
                        var block = document.getElementById(lastPosition.toString());
                        numberBox -= 1;
                        block.textContent = currentWord[lastPosition];
                    }
                } else { 
                    numberOfGuesses -= 1;
                    if (numberOfGuesses === 0) {
                        var feedback = document.getElementById('feedback');
                        feedback.textContent = 'You lose';
                    }
                }

            }
            if (numberBox===0) {
                var feedback = document.getElementById('feedback');
                feedback.textContent = 'Good Job';
            }


        }

    } 

}
)

