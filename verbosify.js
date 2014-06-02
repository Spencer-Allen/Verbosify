function textProcess(form) {
        var apiCalls = [];
        var textInput = form.inputbox.value;
        var inputArray = textInput.split(" ");
        for (i = 0; i < inputArray.length; i++) {
            var t_url = "http://api.wordnik.com/v4/word.json/" + inputArray[i] + "/relatedWords?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=20&api_key=13ee2e8b568303c9950050dad6205899a9cf91816cad42252";
            apiCalls.push(t_url);

        }
        console.log("apiCalls", apiCalls);

        for (j = 0; j < apiCalls.length; j++) {
            switch (inputArray[j]){
            case "you":
                document.write("thou", " ");
                j++;
                break;
            case "my":
                document.write("mine", " ");
                j++;
                break;
            case "pants":
                document.write("panteloons", " ");
                j++;
                break;
            case "man":
                document.write("gentlefellow", " ");
                j++;
                break;
            case "in":
                document.write("therewithin", " ");
                j++;
                break;
            case "have":
                document.write("possess", " ");
                j++;
                break;
            case "I":
                document.write("mine own person", " ");
                j++;
                break;
            }
            var xmlHttp = null;
            xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", apiCalls[j], false);
            xmlHttp.send(null);

            var wordnikResponse = xmlHttp.responseText;
                console.log(wordnikResponse);
                
            if (wordnikResponse == "[]") {
                document.write(inputArray[j], " ");
            } else {
                         
            var parsedResponse = JSON.parse(wordnikResponse);
            var responseArray = parsedResponse[0].words;
                console.log(responseArray);
            var longest = responseArray.sort(function(a, b) {return b.length - a.length;})[0];
            var rand = responseArray[Math.floor(Math.random() * responseArray.length)];
               document.write(rand, " ");
            }   
            
        }
    }
