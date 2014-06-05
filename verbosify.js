function textProcess(form) {
        var apiCalls = [];
        var textInput = form.inputbox.value;
        var inputArray = textInput.split(" ");

        for (i = 0; i < inputArray.length; i++) {
            var t_url = "http://api.wordnik.com/v4/word.json/" + inputArray[i] + "/relatedWords?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=20&api_key=13ee2e8b568303c9950050dad6205899a9cf91816cad42252";
            apiCalls.push(t_url);

        }

        console.log("apiCalls", apiCalls);

        var words = {
            'you': 'thou',
            'my':'mine',
            'pants': 'panteloons',   
            'man':'gentlefellow',   
            'you':'you, yourself',   
            'have':'possess',   
            'I':'mine own person',
            'be':'exist as',
            'and':'in addition to',
            'of':'concerning',
            'an instance of':'a',
            'it':'the entity which I shall refer to as it',
            'he':'the particular male in question',
            'do':'accomplish',
            'on':'upon',
            'say':'verbalize ones own mouth',
            'this':'the particular object in question',
            'they':'all of those',
            'at':'in the vicinity of',
             
        };

        for (j = 0; j < apiCalls.length; j++) {
            var replacement = words[inputArray[j]];
            
            if (typeof replacement !== 'undefined') {
            	document.write(replacement, ' ');
            	continue;
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
                var longest = responseArray.sort(function(a, b) {
                    return b.length - a.length;
                })[0];
                var rand = responseArray[Math.floor(Math.random() * responseArray.length)];
            document.write(longest, " ");
	}
    }
}
