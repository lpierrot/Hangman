document.addEventListener("DOMContentLoaded", function(event) {
    var currentWord = 'hello';
    var numberBox = currentWord.length;
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
        if (currentWord.indexOf(e.key) >= 0) {
            var lastPosition = 0;
            while (i <document.indexOf(e.key) ) {
                console.log(`This is loop iteration number ${i}`);
                i++;
            var position = currentWord.indexOf(e.key);
            var block = document.getElementById(position.toString());
            block.textContent = e.key;
        } else {}
    } 

}
)

