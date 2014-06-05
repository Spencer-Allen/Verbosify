Verbosify
=========

Silly app for fun. The idea is to make sentences ridiculously verbose. 

Takes your input, makes it more verbose with the help of the Wordnik API

Very simple. . . Queries the Thesaurus for synonyms and replaces each word. Returns a new string. 
Unfortunately, English language is very tricky, and I'm trying to figure out ways to preserve grammar and sentence structure. EG: "I'll handle this" vs "door handle" 

My first pass is by trying to create a list of rules for the most common words out there with static rules. 
once that json dict gets too big, I'll push it out into a json file. 

My 2nd idea (pending) is to pull part of speech from wordnik for each word as I query the thesaurus API... If the response doesn't match part of speech, try again... if it doestn't return a match, keep the original word intact. 

