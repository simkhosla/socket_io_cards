var blackCards = [ 
  "Dumbledore's official cause of death was __`", 
  "Only a true Hufflepuff can pull__ out of the Sorting Hat`", 
  "Who would have thought the Portkey would be __?", 
  "HARRY, DID YOU PUT __ IN __???", 
  "I would consider __ in exchange for a chocolate frog`",  
  "The Quibblerrejected my story about __`", 
  "As Aunt Marge said, if there's something wrong with __ ,then there's something wrong with __`", 
  "Hufflepuff: loyal, hardworking, and __`", 
  "Rita Skeeter is back with a scandalous article about __`", 
  "Why did my last spell go wrong? __`", 
  "Red hair and a hand-me-down robe? You must be __`", 
  "Unable to handle the loss of his twin, George turned to __ for consolation`", 
  "It does not do to dwell on dreams and forget __`", "Hogwarts School of Witchcraft and __`", 
  "__ now sponsoring the Daily Prophet`", 
  "__ can be found in the darkest of places`", 
  "How did the Bloody Baron get so bloody? __`", 
  "One of the rejected tasks for the Triwizard Tournament was __`",
  "One of the least known uses of dragon's blood is __`",
  "Before McGonagall could stop him, Peeves shoved __ into __`",
  "If I, the czar, made a horcrux, I would use __`",
  "The lesser known Fourth Brother brazenly asked Death for __`",
  " __ , life's next great adventure`",
  " Would you like __, Dolores?",
  " Hogwart's newest detention: cleaning __ by hand`",
  " Dumbledore should have never hidden __ from Harry for so long`",
  " Voldemort lost his nose because of __`",
  " What was the worst thing a Ravenclaw ever got accused of doing? __`",
  " My polyjuice potion would taste like __. Next year's Yule Ball will feature __. ",
  "In today's Charms lesson, we will be learning the spell for __`",
  " As a new rule, this year students are forbidden to enter __`",
  " No unicorn hair here. My wand has a core made of __`",
  "The newest Unforgivable Curse causes the inflicted to experience __`",
  " I don't know how I got it, but this __ on my forehead is pretty wicked`",
  " You're going to get us __. Or worse, expelled`",
  " Snape uses __ to style his hair`",
  " Eat __, Malfoy! Professor Trelawney just predicted something about __ again`",
  " Next from JK Rowling: Harry Potter and the Order of __`",
  " Why did you get expelled from Hogwarts? __`",
  " As far as they are concerned, Ravenclaws are much too good for __`",
  " Look! Up in the sky! It's a hippogriff! It's a Firebolt! It's __!",
  " __ cannot be penetrated by hand, Vanished, parted, scooped up, or siphoned away, or otherwise made to change its nature`",
  " After the Sorting Hat was placed on his head, Harry did not expect the voice in his ear to whisper about __`",
  " I keep __ in my moleskin pouch`",
  " Mr. Filch would like me to remind you that __ is strictly off-limits`",
  " I solemnly swear that I am __`",
  "When Ginny thinks about Harry's penis, she can't help but think about __`",
  " I never expected to find __ under Proffesor McGonagall's robes`",
  " I was surprised to find __ in the Room of Requirement`",
  " In his latest world domination strategy, Voldemort will use __ to infiltrate the Ministry`",
  " Hagrid removes the sole item inside vault 713; __`",
  " Bill Weasley really struggles with __`",
  " My attempt at a Philosopher's Stone changes ordinary metal into __`",
  " I managed to lose our house 100 points by __`",
  " What does Mrs. Weasley like Mr. Weasley to call her when they are alone together? __`",
  " After overdosing on Felix Felicis, I couldn't stop __`",
  " There was a mass break-out in Azkaban. I heard they used __ to escape`",
  " __ will lie in the Chamber forever`",
  " Today's Potter angst is brought to you by __`",
  " Because Ginny had six brothers, she learned a lot about __`",
  " Ron Weasley enjoys __ when Harry isn't around`",
  " The worst thing that Umbridge's cat plates saw was __`",
  "The whole party was shocked to find __ in the Lestrange's vault.",

  "Dumbledore was secretly in love with __ all along.",

  "Ron's broken wand accidentally Accio'd __.",

  "I never expected to take the form of __ when I became an Animagus.",

  "While Harry was struggling with Occlumency, Snape got a glimpse of __.",

  "Moony, Wormtail, Padfoot and __.",

  "This year, the Hogwarts Express mysteriously stopped for __.",

  "Due to casualities, there can be no more __ in the Prefect's bathroom.",

  "I just created a new potion that's made from __.",

  "The Death Eaters now interrogate enemies by repeatedly subjecting them to __.",

  "After killing Crookshanks, Ron disposed of his body using __.",

  "It was a happy day for Harry Potter when he learned how to summon __.",

  "Professor Trelawney actually correctly predicted __.",

  "Did you hear? There was an accident in Potions that resulted in __.",

  "Everyone laughed when they found out Draco Malfoy's patronus was __.",

  "After all this __? Always.",

  "What is Quirrell hiding under his turban? __.",

  "Hagrid was really expelled from Hogwarts because of __.",

  "Your new Defense Against the Dark Arts professor is __.",

  "Voldemort considered __ for his seventh horcrux.",

  "As his first act as Minister of Magic, Kingsley Shacklebolt created the Department of __.",

  "My father will hear about __.",

  "This year's conflict is caused by __ and __.",

  "Luna and Hagrid found they have a common interest in __.",

  "Nobody expected Neville to pull __ out of __.",

  "The Ministry of Magic announced today that they have put a new tax on __.",

  "__: bad enough to give Mad-Eye Moody nightmares.",

  "Slytherin will help you on the way to __.",

  "In the latest Hogwarts scandal, students have been found using __ to get themselves off.",

  "Fenrir Greyback prefers __ for breakfast.",

  "Gryffindors are well known for __.",

  "Hagrid's new pet: __.",

  "When Dumbledore was planning the protection surrounding the Philosopher's Stone, he had to reject the more eccentric ideas, such as __.",

  "This year, Voldemort's secret Santa got him __.",

  "I'd like to introduce the new Defence Against the Dark Arts teacher: __.",

  "Mrs. Cole was helpless after Dumbledore gave her __.",

  "There is no good and evil, only __ and those too weak to seek it.",

  "When I look in the Mirror of Erised, I see __.",

  "What was Dumbledore thinking about as he was dying? __.",

  "Professor Dumbledore, I'm having some trouble with __ and would like your advice.",

  "In secret, Hermione Granger goes to the library to think about __.",

  "__ : not just for enemies anymore! The real reason Nick is only Nearly Headless is because he was __.",

  "It was a real surprise when my Boggart turned into __.",

  "The rememberall kept telling Neville that he forgot about __.",

  ""And third, to Mr. Harry Potter, for __.",

  "I award Gryffindor house 60 points.",

  ""Professor Trelawney found __ in my teacup.",

  "Umbridge has been forcing people to write lines that carved __ into their flesh.",

  "Next time you'll have to put __ in the Goblet of Fire to compete.",

  "Harry even tried swallowing __ to win his next Quidditch match.",

  "__ is now banned in the corridors of Hogwarts.",

  "Pity the living, Harry.",

  "And above all, pity those without __.",

  "I like beautiful evenings, long walks in the Forbidden Forest and __ with a centaur.",

  "Slytherins are best known for their cunning, resourcefulness, and __.",

  "__ is at the core of my wand.",

  "If it weren't for __ , I wouldn't have spent that time in Azkaban.",

  ""After all this time?"__.",

  "The Professional Quidditch League has banned __ for giving player an unfair advantage.",

  "Weasley's Wizard Wheezes has gotten into a fair bit of trouble regarding their sale of __.",

  ""Here,"Professor Lupin said to Harry, handing him __.",

  ""Eat it It'll help.",

  ""__ , the active ingredient in "I can't believe it's not Butterbeer!"Fluffy goes right to sleep at the sound of __.",

  "Wizard blood purity is actually a metaphor for __.",

  ""No __ on Sundays!"I saw you __ on the Marauders Map last night with __.",

  ""We must all face the choice between __ and __.",

  ""__ , 10 points to Gryffindor! The Polyjuice Potion was ruined when Hermione put __ in it.",

  "Death Eaters smell like __.",

  "Honeydukes now carries a candy that turns you into __.",

  "Dolores Umbridge made it her mission at Hogwarts to crack down on __.",

  "Neville Longbottom was surprised when he reached into the Sorting Hat and found __.",

  "Accio __! (It came.)",

  " I can't go to Hogsmeade, I have 12 scrolls about __ due tomorrow!",

  " For 200 Chocolate Frogs, the Slytherins can arrange for __ to be smuggled into the castle.",

  "What most wizards fail to realize is that __ is beyond the veil.",

  "After __ , Hermione knew she had to choose Ron.",

  "__ : kid-tested, Hagrid-approved.",

  "The best thing about the Harry Potter universe is __.",

  "Do not pity the dead, Harry. Pity __.",

  "The school trip to Hogsmeade was completely ruined by __.",

  "I'm going to bed before either of you come up with another clever idea for __ , or worse - __.",

  "Death Eater activity has been blamed for __.",

  "What else did Quirrell sneak into the dungeons? __.",

  "When Draco masturbates, he likes to think about __.",

  "I shouldn't have said that. I shouldn't have said that.", I shouldn't have said anything about __.",

  "Unsatisfied with his earlier obstacles, Dumbledore chose __ , __ , and __ to guard the Philosopher's Stone next year.",

  "There's a whole chapter in Fantastic Beasts and Where to Find Them about __.",

  "During Divination, Harry was surprised to find __ at the bottom of his teacup.",

  "What is Professor Sprout growing in Greenhouse 5? __.",

  "Master has given Dobby __! Dobby is free! Next up on the Wizarding Wireless: __.",

  "All I got for the /r/harrypotter gift exchange was __.",

  "The only way to kill Voldemort is __.",

  "Check out this new erotic fanfic that pairs Bellatrix with __.",

  "I was sent to Azkaban for __.",

  "The Misuse of Muggle Artifacts office recently punished some muggle-baiters for __.",

  "Ravenclaw: intelligent, creative, and __.",

  "__ IN THE DUNGEON! Thought you'd like to know.",

  "You know you are a true Slytherin when you are __.",

  "Where do house-elves draw the line? __.",

  "Need proof that Albus Dumbledore is a little out of touch? First years are required to bring __ to Hogwarts now.",

  "__: my happy memory.",

  "The prefects go crazy with __ when everyone else is in bed.",

  "Which came first, __ or __? Remus Lupin's guilty pleasure is __.",

  "I'm sorry Professor, but I couldn't complete my homework because I was __.",

  "I would use a pensieve to constantly relive __.",

  "The worst Bertie Bott's Everyflavor Bean I ever ate tasted like __.",

  "And __ is not even the weirdest thing you will see at Hogwarts.",

  "Education Decree Number Twenty-Four: __.",

  "__ is not very pureblood of you.",

  "To save a wizard from poison, just shove __ down his throat.",

  "Did you hear? I was banned from playing Quidditch because of __.",

  "Due to a potions mishap, Hermione has turned into __.",

  "I see __ when I look into the Mirror of Erised.",

  "Bob Ogden knew there would be trouble when he saw __ nailed to the Gaunts' door.",

  "The Fat Lady, drunk with power, decided to change the password to __.",

  "Lucius Malfoy didn't realize he had actually given Dobby __.",

  "When Slughorn took Felix Felicis, he was __ and __.",

  ""Harry, please. You're talking to the man who raised __.",

  ""Voldemort split __ into 7 pieces.",

  "The lost tale of Beedle the Bard: Babbity Rabbity and __.",

  "The Harry Potter Fandom was shocked when they found out about  __.",

  "Mrs. Weasley's Christmas present from Mr. Weasley was __.",

  "Even Borgin refuses to sell __.",

  "You have your mother's __.",

  "I accidentally transfigured __ into __.",

  "__ is the reason boys aren't allowed in the girls' dormitories.",

  ""Bless my soul, it's __ !"",

  "__ really makes Myrtle moan.",

  ""Look at what my father got me! __!" Draco bragged.",

  "50 points for getting __ through Myrtle's head!",

  " There was a conspiracy to lock the Ravenclaw mods in a room full of __ after their riddle challenge came out.",

  "I drink firewhisky to forget __.",

  "Snape finds __ disturbing, yet oddly charming.",

  "Tom Marvolo Riddle; I am __.",

  "To me, Amortentia smells like __ , __ , and __.",

  "Professor Slughorn, sir, I wondered what you could tell me about __?",

  " Tom Riddle was shocked when Ginny began to write about __ in his diary.",

  "Any wizard in his right mind would be ashamed of __.",

  "Feels like firewhisky, tastes like __.",

  "Don't miss Gilderoy Lockhart's newest book: __ with __.",

  "Grawp finally learned a useful skill: __.",

  "Yer __ , Harry.",

  "__ beyond measure is man's greatest treasure.",

  "I lost my wand inside __.",

  "It is rumoured amongst Death Eaters that Voldemort secretly enjoys __.",

  "Due to the Dementors deserting, Azkaban will now be guarded by __." 
];

 


var whiteCards =[ 
  "Using Mr. Weasley's plugs inappropriately.",
  "Beauxbatons' nipple hats.",
  "Putting my basilisk in your chamber of secrets.",
  "The actual love triangle between Daniel Radcliffe, Rupert Grint, and Emma Watson.",
  "The entire Gryffindor Quidditch team.",
  "Hermione's bush(y hair).",
  "Holding onto your wand for dear life.",
  "Naming kids after dead people.",
  "Luna's Spectrespecs.",
  "Kreacher's stained loincloth.",
  "Hufflepuff getting Hufflefucked out of the house cup.",
  "I shouldn't have said that.",
  "Ron's hithero unsuspected sexual skills.",
  "The Weirdest Sister.",
  "A capable Defense Against the Dark Arts professor.",
  "Popularizing #Voldemort Did Nothing Wrong.",
  "Three koalas standing on each other's shoulders under an Invisibility Cloak.",
  "Fetus Deletus.",
  "A particularly nasty case of Spattergroit.",
  "Harry's dead parents.",
  "Cedric Diggory drowning in pussy.",
  "Strip wizard's chess.",
  "Filch's fanfiction about taking cat naps with Mrs. Norris.",
  "Using a pensieve to relive some raunchy moments.",
  "Draco Malfoy's apple fetish.",
  "McGonagall's tartan-patterned bustier.",
  "Betraying your friend to the Dark Lord.",
  "Fleur's steamy farts.",
  "The stuff Hagrid finds in his beard.",
  "Professor Trelawney's drinking habit.",
  "Becoming immortal at the price of your nose.",
  "A Quidditch match that lasts three years.",
  "Lavender Brown spanking Ron Weasley.",
  "Percy's flat, freckled ass.",
  "A Blast-ended Skank.",
  "Rampant PED use among Quidditch players.",
  "A penis Patronus.",
  "The sex tape of Hogwarts and the Giant Squid.",
  "The Warlock’s Hairy Heart.",
  "Waking up with a lightning bolt shaped scar on your cock.",
  "A sloth animagus that became too lazy to revert back.",
  "A winged key going places it should never go.",
  "Being an insufferable know-it-all.",
  "Harry Potter's limp wand.",
  "Gilderoy Lockhart shipping himself with himself.",
  "Dobby spanking Winky with a sock.",
  "Quirrellmort.",
  "Sending love notes to your crush via Howler.",
  "Snorting Floo Powder to go on a mental journey.",
  "Firing red sparks into the air while balls deep in the Triwizard Cup.",
  "A young Albus Dumbledore.",
  "Pissing in Moaning Myrtle's stall.",
  "Neville stroking his Mimbulus Mimbletonia.",
  "Snape teaching Sex Ed.",
  "Polyjuice prostitutes.",
  "The Noble and Most Ancient House of Black.",
  "The Dawn of the Inferi.",
  "Harry's "Wheezy".",
  "Tailgating for Quiddtich matches.",
  "Actually attending class.",
  "A bigger, blacker Sirius Black.",
  "Dumbledore's blackened hand.",
  "Harry Potter not minding his own goddamn business.",
  "A clandestine meeting with the Giant Squid.",
  "Pumpkin juice and vodka.",
  "HARRY POTTER DID YOU PUT YOUR NAME IN THE GOBLET OF FIYAH?! Hem hem! James Potter's stag dick.",
  "Off-label use of Skele-Gro.",
  "An egg that screams or sings depending on its surroundings.",
  "Using the invisibility cloak to sneak into the girls' lavatory.",

  "Not realizing your toilet is the entrance to the Ministry of Magic.",

  "The Elderwang.",

  "Hufflepuffs.",

  "A Boggart that looks like a herpes-riddled vagina.",

  "Cho Chang's yeast infection.",

  "Attempting to overthrow the headmaster.",

  "Finding out the Giant Squid is a pedophile.",

  "Ron's sweaty hands.",

  "A limp wand.",

  "Unforgivable Curses used in a totally forgivable way.",

  "Putting actual butter in Butterbeer.",
  "Professor Slughorn having explosive diarrhea.",
  "The lady selling fingernails in Knockturn Alley. Prof. McGonagall coughing up a hairball.",

  "The Hufflepuff common room.",

  "Ravenclaws gathering intell.",

  "Smuggling booze into the common room.",

  "Minerva McGonagall's death stare.",

  "Ron's broken wand.",

  "Merpeople farts.",

  "Actually paying attention in History of Magic.",

  "Cormac McLaggen's busy hands.",

  "Arnold the Pygmy Puff.",

  "Hagrid wearing a thong.",

  "Literal mountains of blow appearing in the Room of Requirement.",

  "Albus Dumbledore's big black dick.",

  "Hagrid's newest pet.",

  "Remus Lupin's chest hair.",

  "Moaning like Myrtle.",

  "Thestrals eating a first year's corpse.",

  "Regularly mindwiping the muggle Prime Minister.",

  "Slughorn's club for young boys.",

  "Oliver's wood.",

  "Luna's goblin testicle earrings.",

  "Actually learning something because Harry Potter has graduated.",

  "Using Errol as a French tickler.",

  "Voldemort's hairless ballsack.",

  "Being a particularly good finder.",

  "Sexting via owl.",

  "The lovechild of Donald Trump and Dolores Umbridge.",

  "Umbridge using incarcerous on the centaurs.",

  "A house-elf sized coffin.",

  "Lucius Malfoy's luscious locks.",

  "A Hogwarts toilet seat.",

  "Drinking butterbeer and playing with fire.",

  "Drunk Seamus.",

  "Catching the snitch when your team is down by 160 points.",

  "A huge turban.",

  "A pinata full of Blast-Ended Skrewts.",

  "Upgrading from owl post to electronic mail.",

  "Harry Potter and the Salem Witch Trials.",

  "A broomstick and some lube.",

  "The Minister of Magic, Cornelius Fudge himself.",

  "Nymphomaniac Tonks.",

  "Forgetting to use Reparo on your condom.",

  "Taking a bubble bath with Cedric Diggory.",

  "A dramatic reading of My Immortal.",

  "Mollywobbles.",

  "Salazar Slytherin's trouser snake.",

  "Minerva McGonagall shopping for underwear.",

  "Hagrid getting it on with Madame Olympe Maxime.",

  "Literal Dragon Dildos.",

  "Reaching into your robe for your wand and pulling out Slim Jims instead.",

  "Snapes on a Plane.",

  "That fucking Harry Potter epilogue.",

  "A tiny unicorn.",

  "Draco Malfoy: The Amazing Bouncing Ferret.",

  "Turning a Nokia into your final Horcrux.",

  "Accidentally blowing up a relative that insulted your mom.",

  "The fourth book: Harry Potter and the Goblet of Plotholes.",

  "Sex games between Dumbledore and Grindelwald.",

  "What happens in the staff room stays in the staff room.",

  "Breaking an Unbreakable Vow.",

  "Slytherins.",

  "Snape in a fancy hat and scarf.",

  "Dolores Umbridge's saggy tits.",

  "The systematic elimination of Muggle Borns.",

  "Unintelligent Ravenclaws.",

  "Whispering "Well done, Draco".",

  "Cumbridge.",

  "Whomping my willow.",

  "A flask of Felix Felicis.",

  "A lime green bowler hat.",

  "Posters of motorcycles and muggle women in bikinis.",

  "Luna Lovegood losing her clothes.",

  "The Hogwarts House-Elf Hunger Games.",

  "Realizing that fog is Dementor jizz.",

  "Dancing naked in Dobby's tea cozy.",

  "Flesh-eating slug repellant.",

  "Violating rule 1 (Don't be a jerk).",

  "Expecto Patronum.",

  "A vibrating broomstick and a lot of time to kill.",

  "Replacing the word "wand"with "wang"while reading Harry Potter.",

  "Vanquishing puberty like Neville Longbottom.",

  "Riding Uncle Vernon's mustache.",

  "Ron Weasley's freckled penis.",

  "Voldy's tap dancing troupe.",

  "Dean and Seamus, at the same time.",

  "Wand envy.",

  "Yelling "AM I BEING DETAINED?" at Aurors.",

  "Mrs. Weasley's fruitcake.",

  "Amortentia-induce d blow jobs.",

  "Finding your mother's Amortentia stash.",

  "Dumbledore secretly using "Just For Men"on his beard.",

  "Eyes as green as a fresh pickled toad.",

  "Kingsley Shacklebolt looking classy as fuck.",

  "Flooding the second floor bathroom.",

  "Inappropriate Ravenclaws.",

  "Dumbledore and Fudge together at last.",

  "Fred Weasley's mangled corpse.",

  "Hagrid's flowery pink umbrella.",

  "The pockets on Hagid's moleskin coat.",

  "The Sorcerer's kidney stone.",

  "Gryffindor's Annual Wet T-Shirt Contest.",

  "Ruff Tuff Hufflepuff!",

  " Double potions with Slytherin.",

  "The systematic enslavement of house-elves.",

  "Cockroach Clusters.",

  "The Sorting Hat drunk on its own power.",

  "A shitload of Dungbombs.",

  "Wizard dementia.",

  "The Umbridge Seal of Approval.",

  "A Weasley Christmas sweater made from Mrs. Norris' fur.",

  "Fucking Text Only Week.",

  "Expecto Patronads.",

  "Using a magical eye to look through student's clothing.",

  "The Whomping Willow's burly branches.",

  "Lavender Brown's period stained panties.",

  "Shagging your best friend's sister because he got the girl.",

  "Swishing and flicking.",

  "A Hungarian Horntail tattoo.",

  ""There's no need to call me 'Sir,' Professor.",

  "A flying car.",

  "Alice Longbottom's crumpled chewing gum wrappers.",

  "Xenophilius Lovegood's crackpipe.",

  "Sleeping with Wormtail every night.",

  "Gryffindors.",

  "Assuming all squibs are retarded.",

  "Hermione's ball gown on the floor.",

  "Merpeople fetish.",

  "Running into the wrong wall at King's Cross.",

  "A creative new use for Petrificus Totalus.",

  "Death Eaters.",

  "Wizard swears.",

  "Dudley Dursley washed up on a beach.",

  "A more imaginative use for the Room fo Requirement.",

  "A Sirius and Buckbeak porno.",

  "Obliviated memories of McGonagall's tartan underpants.",

  "Victor Krum's man meat.",

  "A trophy that is also a portkey.",

  "That Smeltings smell.",

  "Roonil Wazlib.",

  "The bassist from the Weird Sisters.",

  "Using transfiguration for punishment.",

  "TEN POINTS TO DUMBLEDORE.",

  "Pissing in somone's Butterbeer.",

  "Summoning the underwear from the girls' dorm.",

  "A vibrating battery-operated Nimbus 2000.",

  "Ravishing Roger Davies.",

  "Dolores Umbridge: Queen of the Centaurs.",

  "The potion inside the cave.",

  "Trying to shut your brother inside a cursed pyramid.",

  "Using Unforgivables on children.",

  "Professor Umbridge's unspeakable experience in the Forbidden Forest.",

  "The entire Slytherin Quidditch team.",

  "Stealing Seamus Finnigan's lucky charms.",

  "Freeing your house-elf by giving them a used condom.",

  "Accidentally apparating into Azkaban.",

  "Fred and George comparing wand lengths.",

  "Wearing nothing under your robes.",

  "Being a love potion baby.",

  "Poisoned Pumpkin Pasties.",

  "Petunia Dursley's queef.",

  "Hagrid's tongue.",

  "Thick, woolen socks.",

  "Mudblood battles.",

  "Buckbeak and Crookshanks in Greenhouse 5.",

  "Cedric Diggory's last boner.",

  "Using the Elder Wand as anal beads.",

  "Having your mind erased by Gilderoy Lockhart.",

  "A very convincing fake wand.",

  "A dick shaped scar.",

  "A horde of angry centaurs.",

  "Peeves up to his usual antics.",

  "The centuries old germs living in the folds of the Sorting Hat.",

  "Snape and Sprout getting it on underneath the Whomping Willow.",

  "Pulling Godric Gryffindor's sword out of my pants.",

  "Divination class.",

  "WITH BEES!",

  " Firing a spell into the air while balls deep in a squealing Hippogriff.",

  "Emma Watson's 18th birthday.",

  "Licking her Bertie Botts Every Flavored Bean.",

  "Pretending to be Jack Sparrow on the Durmstrang ship.",

  "Hagrid's buttcrack.",

  "Using gun powder instead of Floo powder.",

  "Colin Creevey's selfies.",

  "Gilderoy Lockhart's book signing.",

  "Students from the inner city being suspiciously good at dueling.",

  "A slender, 13 inch wand.",

  "Using a Resurrection Stone on Sir Cadogan.",

  "Reaching the top shelf for Professor Flitwick.",

  "Death Eaters.",

  "Becoming an animagus to fulfill your furry fantasies.",

  "Three house-elves, a vibrating charm, and a time turner.",

  "Devil's Snare tentacle porn.",

  "Seeing the Grim and shitting your pants.",

  "Pigfarts.",

  "An evening out with Mrs. Norris.",

  "What Aberforth did with that goat.",

  "Slytherin getting Dumblefucked by Dumbledore.",

  "Hermioninny.",

  "The ghetto that is the Weasley house.",

  "Remus Lupin's menstrual love of chocolate.",

  "Hedwig's corpse.",

  "Hammione Granger.",

  "Broomstick drag racing.",

  "Casting Expelliarmus on my pants.",

  "The old lady who sells sweets on the Hogwarts Express.",

  "A cauldron full of hot, strong love.",

  "Gryffindor's reckless bravery.",

  "Wet dreams starring your best friend's sister.",

  "Drawing Severus Snape like one of your French girls.",

  "Hagrid, masturbating to pictures of Norbert(a).",

  "JK Rowling being sassy on Twitter.",

  "A vulgar and quite cantankerous Sorting Hat.",

  "A Dementor's dong.",

  "Madame Maxime's jumbo tampons.",

  "The emotional range of a teaspoon.",

  "Accidentally saying Abracadabra instead of Avada Kedavra.",

  "Pureblood inbreeding.",

  "Fanged Frisbees.",

  "Merlin's saggy left nut.",

  "Wormtail watching Ron polish his wand.",

  "An Alan Rickman body pillow.",

  "Alecto Carrow's pudgy fingers.",

  "Using a time turner to have sex with yourself.",

  "Severus Snape confronted with shampoo.",

  "Ginny's Chamber of Secrets.",

  "Locking 1000 horny teenagers in one castle without any sex education classes.",

  "Moaning Myrtle looking at your genitals while you're taking a bath.",

  "Stan Shunpike's ass zits.",

  "Motherfuckin' Aragog.",

  "Hagrid's ballsack.",

  "Fire-filled Phoenix poop.",

  "Having sex with a Metamorphmagus .",

  "A Dark Mark in a place you wouldn't expect.",

  "A 20 foot long basilisk.",

  "Hogwarts rejection letter.",

  "Rowena Ravenclaw's anal beads.",

  "Crookshanks and Mrs.",

  "Norris in the broom closet.",

  "A Dumbledore puppet.",

  "Using ominoculars to watch porn.",

  "KILL THE SPARE.",

  "Passionately rubbing wands together.",

  "Sirius Black, literally doggy-style.",

  "Voldemort's pretty princess tiara.",

  "Cedric Diggory's hair gel.",

  "Shooting silvery stuff out of your wand.",

  "Making the Unbreakable Vow.",

  "The mad knight Sir Cadogan.",

  "A broomstick servicing kit.",

  "Never coming back from holiday in Albania.",

  "Using magic to enslave your classmates.",

  "Acid Pops.",

  "Tom's toothless grin.",

  "Sharing a bed with Scabbers.",

  "Doxies? Slughorn taking candy from children.",

  "Having Lily's eyes.",

  "A Time Turner, Golden Snitch and lots of lube.",

  "A garden gnome orgy in full swing.",

  "Sending the innocent to Azkaban for fun.",

  "Grow your own (genital) warts kit.",

  "Peter Pettigrew's severed finger.",

  "Mr. Weasley's collection of butt plugs.",

  "Ethnic cleansing.",

  "Cedric Diggory: the ultimate cock block.",

  "Hagrid's hairy asshole.",

  "Ginny's naming skills.",

  "Professor Sprout's dirt covered panties.",

  "Moody's mad eye.",

  "Harry's Oedipus complex.",

  "Voldemort's daddy issues.",

  "Mandrakes moving into each others pots.",

  "A useless red Remembrall.",

  "A very special edition of The Quibbler.",

  "Snape's greasy curtain of pubes.",

  "Talking dirty in Parseltongue.",

  "Getting hit by a Bludger right in the crotch.",

  "A three-way duel that murders your sister.",

  "Finding out your pet was really a middle-aged criminal.",

  "Casting Scourgify instead of actually showering.",

  "Magical STDs.",

  "The Mysterious Ticking Noise.",

  "Hufflepuff guilt.",

  "Dementor mating habits.",

  "A sexually aggressive Thestral.",

  "Butterbeer keg stands.",

  "Sleeping with all the Weird Sisters.",

  "The ghost of Fred Weasley.",

  "Cornish Pixies wielding tiny dildos.",

  "Ludo Bagman being a lying prick.",

  "Page 394.",

  "Slashing a unicorn's neck and drinking its blood.",

  "Sex with a mermaid being more complicated than originally thought.",

  "Using Petrificus Totalus on your dick.",

  "Wingardium leviosa not working in outer space.",

  "Hufflepuss.",

  "Shipping Dobby with Harry.",

  "Draco's cumbox.",

  "Voldegrawp.",

  "Oliver Wood, the walking innuendo.",

  "Having sex with the Giant Squid.",

  "Harry's "wand".",

  "Oliver Wood wrestling his balls to the ground.",

  "Collecting the pus from Marietta Edgecomb's disfigured face.",

  "Viktor Krum doing lunges on a hot day.",

  "Questioning if sex with a centaur is technically beastiality.",

  "Immortal Wizard Hitler.",

  "Harry's birthday surprises.",

  "Daniel Radcliffe's abused wand.",

  "The Great Slytherin and Gryffindor Orgy.",

  "Seeing things from Voldemort's perspective.",

  "Playing wizards chess with your penis as the king.",

  "My favorite Harry Potter fanfiction.",

  "All the muggles, mudbloods and black students.",

  "Seven mysteriously dead husbands.",

  "Charms club.",

  "Finding out your Patronus is a sea cucumber.",

  "Classical Harry Potter erotica.",

  "Taking note of Cormac McLaggen's girth.",

  "Magically replacing your brother's stuffed animal with a spider.",

  "The unspoken uses of Engorgio.",

  "Ron Weasley's super buff keeper bod.",

  "Fenrir Greyback's inner thighs.",

  "The real reason Cho Chang left China.",

  "Gnomes? Dumbledore shitting all over a house-elf.",

  "Classist undertones.",

  "The real reason James was called "Prongs".",

  "Colin Creevey sneaking to the hospital wing to bring Harry a BJ.",

  "One hundred duck-sized hippogriffs.",

  "A really ballsy Hufflepuff.",

  "The function of a rubber duck.",

  "Giving Ton-Tongue Toffee to your boyfriend before sex.",

  "Voldemort's noseless face.",

  "A beaded bag that contains everything you need.",

  "Cruciatus insanity.",

  "Getting drunk so often that your remembrall is permanently red.",

  "Getting caught by your roommate doing inappropriate wand things and trying to pass it off like you were just doing your transfiguration homework.",

  "St. Mungo's cure for penis warts.",

  "A romantic date night in the Chamber of Secrets.",

  "Black Hermione.",

  "Trusting the Dark Lord not to off you the second you become useless.",

  "An incestual Weasley orgy.",

  "I CAN TOUCH YOU NOW.",

  "Naked Dumbledore riding bareback on Firenze with Bane shoving one horn up Dumbledore's ass and another up Firenze's.",

  "Masturbating to a pensieve memory of banging your ex.",

  "Doing nudes with Colin Creevey.",

  "Wormtail keeping James' dick as a souvenir.",

  "Bertha Jorkin's meat curtains.",

  "LeviOsa not LeviosA.",

  "Assigning all the bad seeds to one house.",

  "Waking up next to Fenrir Greyback.",

  "A leaky wand.",

  "Snape in drag.",

  "A bunch of Gryffinwhores and Hufflesluts.",

  "Flying under the influence.",

  "Gilderoy Lockhart masturbating to pictures of himself.",

  "Realizing your pet rat is a demented killer.",

  "Having a worse love life than Aragog.",

  "A scar shaped like the London Underground.",

  "Dumbledore's cock ring.",

  "Buying the wrong edition of "The Monster Book of Monsters".",

  "Getting to first base with a Dementor.",

  "S. P. E. W.",

  "A well endowed badger.",

  "Hedwig eating Scabbers.",

  "9 and 3/4 inches.",

  "Shitting out a Horcrux.",

  "The two different guys playing Dumbledore.",

  "Ron and Hermione in the back of the Ford Anglia.",

  "The Ravenclaw common room.",

  "Some Muggle device that vibrates.",

  "That goddamn mysterious ticking noise.",

  "Paula Deen in the back room of The Hog's Head with copious amounts of butterbeer and heroin.",

  "Taking Hermione into the bathroom to play "hide the basilisk".",

  "Undesirable No 2.",

  "A private ticket to the Weasley's Wizard Wheezes back room.",

  "A Hitachi 2000.",

  "Placing an undetectable extension charm on Cho Chang's vagina.",

  "Hagrid's questionable teaching practices.",

  "Giving Dobby used underwear.",

  "Getting drunk on butterbeer.",

  "Using Bombarda Exumai and enjoying the splatter.",

  "An inappropriate goal celebration in Quidditch.",

  "1000 years of goblin oppression.",

  "My useless friend Ron Weasley.",

  "Snape, Snape, Severus Snape.",

  "Dumbledore's questionable hiring practices.",

  "A troll in the sex dungeon.",

  "Swish and fuck.",

  "Polishing your wand.",

  "Harry's moral fiber.",

  "Hugging the Dark Lord.",

  "Trying to speak parseltongue with a lisp.",

  "Draco Malfoy's questionable sexuality.",

  "Filius Flitwick: Sex Bomb.",

  "Voldemort's snake.",

  "Voldemort's garters.",

  "Firenze and a bit of Incarcerous rope play.",

  "Harry's lesbian haircut in movie 5.",

  "Crumple-horned Snorkacks.",

  "Shipping Hagrid with the Sorting Hat.",

  "Riding Ron's broomstick.",

  "Hagrid's problem with beastiality.",

  "Using the invisibility cloak to sneak into the girls' dormitory.",

  "Voldemort's awkward hugs.",

  "Dumbledore's unhealthy, even sinister, relationship with Harry.",

  "Comparing wand sizes.",

  "Being a dick to children.",

  "Forcing children to live in cupboards.",

  "Harry Potter, our newest celebrity.",

  "Something that can burn, sting, bite, and suck all at once.",

  "Nitwit, Blubber, Oddment, and Tweak.",

  "Cedric's cold corpse.",

  "Christmas baubles festooned with Harry Potter's face.",

  "Arthur Weasley, fascinated by Muggle technology.",

  "A parade of Veela.",

  "A steaming bag of hippogriff poo.",

  "Being violated by a hippogriff.",

  "Dumbledore's Gay Army.",

  "Bending over for the soap in Azkaban.",

  "Performing coitus on The Knight Bus.",

  "A 16 foot tall Pygmy Puff that breathes fire.",

  "Man-eating textbooks.",

  "Wingardium Mimosa.",

  "A man troll accidentally using the lady trolls' bathroom.",

  "Charlie Weasley in assless chaps.",

  "Neville's grandmother.",

  "Sirius' sex partners.",

  "A firewhisky enema.",

  "Getting sloshed with Slughorn.",

  "Blaming the Nargles.",

  "Putting smegma in your polyjuice potion.",

  "Joining a prison gang while in Azkaban.",

  "Voldemort hiding underneath my turban.",

  "Cooking goblins into pies.",

  "The DADA Professor curse.",

  "Neville Longcock.",

  "The deadly power of love.",

  "Pornographic daydream charms.",

  "Lupin and Tonks' frigid corpses.",

  "Punching Malfoy in his skinny, white face.",

  "Charging $100 for Moaning Myrtle's tears.",

  "Rufus Scrimgeour, shagging rather like an old lion.",

  "A wizarding school in the middle of fucking nowhere.",

  "Lucius Malfoy cosplaying as Bellatrix Lestrange.",

  "Using a jellylegs jinx on your cock.",

  "Bathilda Bagshot's rotten, smelly house.",

  "Accidentally killing your sister.",

  "Having to take your grandmother to St.",

  "Mungo's for a sex related injury.",

  "Hagrid's pubic hair.",

  "A dead Dobby.",

  "Being "too prejudiced"to be a Death Eater.",

  "The Golden Snatch.",

  "Squibs.",

  "McGonagall's severe bun.",

  "Passing the watering can.",

  "Headbang Potter and the Chamber of Metal.",

  "The Durmstrang students getting into some weird stuff in the dungeons.",

  "Dudley's curly pink pig tail.",

  "Weasley fire crotch.",

  "Knockturn Alley.",

  "Dolores Umbridge bathing in virgin's blood.",

  "Being a house-elf.",

  "Harry's constant crying.",

  "The house-elf fighting pits.",

  "House-elf cum.",

  "Ravenclaws.",

  "Sirius Black, the world's biggest drama queen.",

  "Filch's correspondence magic classes.",

  "Lucius Malfoy's silvery pubes.",

  "Dumbledore's plum suit.",

  "Drinking Mrs. Cole under the table.",

  "A report on cauldron bottom thickness.",

  "Enchanted sex toys.",

  "Rita Skeeter stuffed in a broom closet with a minor.",

  "Crucio: for pain AND pleasure.",

  "A cauldron full of Fang's slobber.",

  "Butterbeer pong.",

  "The uncomfortable fact of Hagrid's conception.",

  "A whole lot of Slytherbitches and Ravencunts.",

  "An exploding Erumpent horn.",

  "Certain spells being mildly rapey.",

  "Draco Malfoy in leather pants.",

  "Peeves' rude rendition of "Jingle Bell Rock".",

  "Harry Porker.",

  "Alan Rickman's killer smile.",

  "A secret room full of dead students.",

  "Yelling "EXPECTO PATRONUM"when you orgasm.",

  "Polyjuice porn.",

  "Gilderoy Lockhart's ambiguous sexuality.",

  "Ginny's "virginity".",

  "Queefing Quirrell.",

  "Snape's greasy curtain of hair.",

  "Waiting until my father hears about this.",

  "That time everyone thought you were the Heir of Slytherin.",

  "A CLIToris, not clitOris.",

  "Getting drunk on firewhisky and setting the castle on fire.",

  "Naming your child after your mother's stalker.",

  "Sucking dick for chocolate frog trading cards.",

  "Breaking an Unbreakable Vow.",

  "J.K. Rowling's Twitter representative.",

  "Hufflehugs with sexual implications.",

  "Protection against Genital Hogwarts.",

  "Alone time in the Room of Requirement.",

  "Studying abroad at Beauxbatons.",

  "A bunch of filthy muggles.",

  "The Durmstrang's ship mast.",

  "Mrs. Black's dusty curtains, if you know what I mean.",

  "Hufflehumping.",

  "Wizarding drugs.",

  "Punching Draco Malfoy in the face.",

  "Hiding your porn stash in a Gringotts vault.",

  "Probity Probes.",

  "What the HELL is a Hufflepuff? Sybil Trelawney's farts.",

  ""gilly"weed.",

  "Erotic howlers.",

  "Anthony Goldstein's certified circumcized dick.",

  "Harry's broomstick.",

  "A tramp stamp of your Patronus.",

  "CONSTANT VIGILANCE.",

  "McGonagall's Snuffbox.",

  "JK Rowling's bank account.",

  "Being gangbanged by the Marauders in their animal forms.",

  "Using Alohomora on a chastity belt.",

  "Eating floating cupcakes.",

  "Ernie's girth.",

  "The Hand of Glory.",

  "The Knight Bus: for all the nights that you can't stay on a broom.",

  "Dumbledore, coming out of the closet.",

  "Nearly Headless Dick.",

  "Martin Miggs the Mad Muggle.",

  "Keeping the blood pure by marrying your cousin.",

  "Spilling my potion.",

  "Vomiting slugs for hours.",

  "Luna's Quidditch commentary.",

  "Romilda Vane's roofied chocolate cauldrons.",

  "Undiluted Bubotuber pus.",

  "Professor McGonagall feeding you biscuits.",

  "JK Rowling, crying at the things she's discovered on Tumblr.",

  "Paintings that watch you undress.",

  "A bigger blacker basilisk.",

  "Shit flavored jellybeans.",

  "Bellatrix Lestrange's lovely lady lumps.",

  "The sweet satisfaction of using Avada Kedavra for the first time.",

  "A bigger blacker wand.",

  "Snape having sex with Lily's fresh corpse.",

  "Dragon AIDS.",

  "Wand-waving and silly incantations.",

  "Bob Ogden.",

  "Albus Dumbledore's arbitrary scoring system.",

  "Being gang-banged by centaurs.",

  "Mistaking Dumbledore for Gandalf.",

  "Trever the toad, squirming in Neville's hands.",

  "The Chamber of Secrets." 
];