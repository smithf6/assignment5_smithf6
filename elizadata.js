// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Welcome to a new year at Hogwarts! Before we begin our banquet, I would like to say a few words. And here they are: Nitwit! Blubber! Oddment! Tweak!",
// additions (not original)
];

var elizaFinals = [
"Help will always be given at Hogwarts to those who ask for it, Goodbye"
// additions (not original)

];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
  "The best of us sometimes eat our words.",
  "One can never have enough socks.",
  "Perhaps those who are best suited to power are those who have never sought it.",
  "Where your treasure is, there your heart will be also."
  ]]
]],
["sorry", 5, [
 ["*", [
  "People find it far easier to forgive others for being wrong than being right."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "It is good to rexamine our memories, but not to dwell on them."
  ]],
 ["* do you remember *", [
     "At this moment I dont, but if you wish we could take a look in the pensive."
  ]],
 ["* you remember *", [
     "I tend be somewhat forgetful in my old age, but im sure i could remember (2) given some time to think.",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
  "I sometimes find, and I am sure you know the feeling, that I simply have too many thoughts and memories crammed into my mind."
  ]],
 ["* did you forget *", [
     "I do not reacll (2) , maybe you could refresh my memory."
  ]]
]],
["if", 3, [
 ["* if *", [
     "There are seemingly infitite possibilities in this world, ive not the answer if (2) always."
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
  "It does not do to dwell on dreams and forget to live."
  ]]
]],
["dream", 3, [
 ["*", [
  "For in dreams we enter a world that is entirely our own. Let them swim in the deepest ocean or glide over the highest cloud."
  ]]
]],
["perhaps", 0, [
 ["*", [
  "Curiosity is not a sin, but we should exercise caution with our curiosity."
  ]]
]],
["name", 15, [
 ["*", [
     "Names are not terribly important here, many wizarding students from different familes, all here to learn magic."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "English is the preffered language, here at Hogwartz."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "English is the preffered language, here at Hogwartz."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "English is the preffered language, here at Hogwartz."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "English is the preffered language, here at Hogwartz."
  ]]
]],
["xforeign", 0, [
 ["*", [
  "English is the preffered language, here at Hogwartz."
  ]]
]],
["hello", 0, [
 ["*", [
     "Hello to you as well, im Albus Dumbledore.",
     "Greetings, as headmaster of the Hogwartz Academy, is there anything I can help with?"
  ]]
]],
["computer", 50, [
 ["*", [
  "I'm sorry in all my time in the wizarding world i've not heard of a computer."
  ]]
]],
["am", 0, [
 ["* am i *", [
     "It shouldnt matter if you are (2) or not here at Hogwartz we grow be become our best selves."
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "'Am' what my dear student",
     "Im afraid I did not understand you, this old castle makes a bit of noise."
  ]]
]],
["are", 1, [
 ["* are you *", [
    "It shouldnt matter if i am (2) or not, I am Albus Dumbledore",
    "Headmaster Albus Dumbledore you can call me, I don't know of (2)"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Here are Hogwartz im sure we could help you find out are (2) or not."
  ]]
]],
["your", 0, [
 ["* your *", [
     "What do you want to know about my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
  "It matters not what someone is born, but what they grow to be."
  ]],
 ["* i was *", [
  "It matters not what someone is born, but what they grow to be."
  ]],
 ["* was you *", [
    "It may or may not have been that i was (2) ,now I'm but an old wizard."
  ]]
]],
["i", 0, [
 ["* i @desire *", [
  "As much money and life as you could want! The two things most human beings would choose above all, the trouble is, humans do have a knack of choosing precisely those things that are worst for them."
  ]],
 ["* i am* @sad *", [
  "This pain is part of being human. The fact that you can feel pain like this is your greatest strength."
  ]],
 ["* i am* @happy *", [
  "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light."
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
  "The truth: It is a beautiful and terrible thing, and should therefore be treated with caution.",
     "Be weary of your thoughts, that you (3) could be true or it could not."
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "I could make some time and we could talk about (2) in my office."
  ]],
 ["* i @cannot *", [
  "It is important to fight and fight again, and keep fighting, for only then can evil be kept at bay though never quite eradicated."
  ]],
 ["* i don't *", [
     "I wouldnt be so quick to say you dont (2) , many years are ahead of you."
  ]],
 ["* i feel *", [
     "Your ability to feel (2) is one your greatest strengths."
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else ?"
  ]],
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "I'm not here to discuss that, As a busy headmaster I need to spend my time helping the students"
  ]],
 ["* you* me *", [
     "Do you believe its a headmasters job to (2)"
  ]],
 ["* you *", [
    " After saying (2) I'm sure there are other things you would like to discuss."
  ]]
]],
["yes", 0, [
 ["*", [
  "It is my belief that the truth is generally preferable to lies.",
  "The truth: It is a beautiful and terrible thing, and should therefore be treated with caution."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "In all the wizarding, beastly and muggle world, I doubt no one (2) ."
  ]],
 ["*", [
     "'No' what my student."
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "We could dicuss your (2) when I more time, for now enjoy the feast."
  ]],
 ["* my* @family *", [
     "What else about your family, I'm always eager to hear where our students are coming from"
  ]],
 ["* my *", [
     "Your (2) ?",
     "For what reason do you say your (2) ?",
  ]]
]],
["can", 0, [
 ["* can you *", [
     "I can do a great number of things as the head wizard of Hogwartz, maybe I can (2) maybe I cannot."
  ]],
 ["* can i *", [
     "You will have to figure out for youself if you can (2) ."
  ]]
]],
["what", 0, [
 ["*", [
     "Your question is?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Are you certain?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Whats telling that I havent (2) already, I'm a very old man.",
     "goto what"
  ]],
 ["* why can't i *", [
     "Here at Hogwarts is the perfect place to discover if you can (2) or not.",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "I think you will find; with more wisdom, that hardly anything is an absloute, or applies to everyone."
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
    "Always? are you sure? hardly anything is"
  ]]
]],
["alike", 10, [
 ["*", [
  "Differences of habit and language are nothing at all if our aims are identical and our hearts are open."
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 10, [
 ["*", [
  "While we may come from different places and speak in different tongues, our hearts beat as one."
  ]]
]],
["word", 11, [
  ["*", [
    "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it."
   ]]
 ]],
 ["words", 11, [
  ["*", [
    "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it."
   ]]
 ]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof