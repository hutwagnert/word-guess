
            var disney = {
                words: ["goofey", "mickey", "cinderella", "belle", "donald"]
            }
            
            var answers = [];
            var triedCharacters = [];
            var pasttries = [];
            var bob = true;
            var alphabet = [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z"
            ];
            var chosenword = "";
            var lettersleft = chosenword.length;
            var gamestate = true;
            var pastguess = [];
            var startnum = (8);
            var totalwins = 0;
            var neagtive = (-1);
            var totallosses = 0;
            var boo = false;
            var call = false;

            // Grabbing Random Word
            function getRandomWord() {
                var randomWord = disney.words[Math.floor(Math.random() * disney.words.length)];
                return randomWord;
            }
           
           
                          
                          var chosenword = getRandomWord();
                          
                          console.log(chosenword);
                          var lettersleft = chosenword.length;
                          var leftovers = chosenword.length;
                          var arr = [];
                          for (var i = 0; i < lettersleft; i++) {
                              arr[i] = "_";}
                              
                            
            function gamreset() {
                
                          startnum =8;
                          chosenword = getRandomWord();
                          console.log(chosenword);
                          lettersleft = chosenword.length;
                          leftovers = chosenword.length;
                          checkCharacter = "";
                          arr = [];
                          i =0;
                          j=0;
                          k=0;
                          l=0;
                        triedCharacters = [];
                        pasttries = [];
                        pastguess = [];
                          for (var i = 0; i < lettersleft; i++) {
                              arr[i] = "_";}
                              
                              userInput = "";
                              document
                                  .getElementById("character")
                                  .innerHTML = arr;
                                  document
                    .getElementById("num-guess")
                    .innerHTML = [];
                    document.getElementById("num-left")
                    .innerHTML = startnum;
            
                                

                    
            }
            function main() {
                document
                    .getElementById("num-wins")
                    .innerHTML = totalwins;
                document
                    .getElementById("num-left")
                    .innerHTML = startnum;
                document
                    .getElementById("num-losses")
                    .innerHTML = totallosses;
                    console.log(arr);

                    
            }
            function remove(array, element) {
    return array.filter(e => e !== element);
}


            function removeDuplicates(remb) {
                let unique_array = []
                for (let p = 0; p < remb.length; p++) {
                    if (unique_array.indexOf(remb[p]) == -1) {
                        unique_array.push(remb[p])
                    }
                }
                return unique_array
            }
            function updatenumguess() {
                gamestate = false;
                console.log(gamestate);
                var userInput = document
                    .getElementById("userInput")
                    .value;
                bob = true;
                boo = false;
                call = false;
                var lettersleft = chosenword.length;
                var leftovers = chosenword.length;
                
                if (userInput.length !== 1) {
                    alert('One letter at a time please!');
                } else if ((startnum === 0) ) {
                    if (startnum === 0) {
                        alert(
                            'sorrry, you do not your disney characters. Spend some time with your children.'
                        );
                        totallosses++;
                        document
                            .getElementById("num-losses")
                            .innerHTML = totallosses;
                    } 
                            }else {
                    var checkCharacter = (userInput);
                    triedCharacters.splice((triedCharacters.length + 1), 0, checkCharacter);
                    var currentguess = removeDuplicates(triedCharacters);
                    for (var l = 0; l < (pastguess.length); l++) {
                        if ((pastguess[l] === userInput) &&(userInput.length ===1)) {
                            alert('oops looks like you already tried that')
                            bob = false;}}
                    document
                        .getElementById("num-guess")
                        .innerHTML = currentguess;
                        
                    for (var k = 0; k < (lettersleft); k++) {
                        if (chosenword[k] === userInput) {
                            arr[k] = userInput;
                            document
                                .getElementById("character")
                                .innerHTML = " " + (
                                arr.join(' ')
                            );
                            console.log(arr);
                            
                            call = true;
                            console.log(call);
                        } else if (chosenword[k] !== userInput) {
                            boo = true;}}}
                if ((!call) && (bob) &&(userInput.length ===1)) {
                    startnum = startnum + neagtive;
                    document
                        .getElementById("num-left")
                        .innerHTML = startnum;
                    if (userInput.length ===1){
                    pasttries.splice((pasttries.length + 1), 0, userInput);
                    pastguess = removeDuplicates(pasttries);
                    console.log(pastguess);
                    console.log(pasttries);} }                 
                     else if (call){
                    if (arr.includes("_")){
                const arrx = remove(arr, "_");
                leftovers = arr.length - arrx.length;
                console.log(leftovers);
                        if (leftovers === 0){
                            alert('nice');
                        totalwins++;
                        document
                            .getElementById("num-wins")
                            .innerHTML = totalwins;
                            gamestate =true;
                            console.log(gamestate);
                            gamreset();}
                            }else {
                        leftoevers = 0;
                        alert('nice');
                        totalwins++;
                        document
                            .getElementById("num-wins")
                            .innerHTML = totalwins;
                            gamestate = true;
                            console.log(gamestate);
                            gamreset();
                            ;}}}