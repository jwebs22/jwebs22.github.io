//play data array
let plays =
[
{
    playTitle: "Red Noses",
    author: "Peter Barnes",
    character: "First Attendant",
    characterDesc: "Not much in the way of a description.",
    notes: "In the video linked here this monologue was cut from the performance. I will continue to try to find one for this specific monologue, but it does give you a good idea of the play.",
    gender: "male",
    type: "comedic",
    timePeriod: "contemporary",
    year: "1985",
    monoText: `<strong>First Attendant:</strong> <br>Hoo-hooo-oooh. <br> (He pours the bowl of vinegar over his head and shrieks.) <br>I've got the boils, the black buboes! I'm stricken. <br>(The others shrink back.) <p>Mother of God, I'm not ready. I've only just been born and now I have to die. All the fault of writers - cock-pimping scribblers. They've prepared the way. Always writing stories where some characters are important and others just disposable stock - First Attendant, Second Peasant, Third Guard. Stories're easier when 'tisn't possible to care for everyone equal. That's how itty-bitty-bit people like me come to be butchered on battlefields, die in droves on a hoo-hooo-oooh. <p>But we First Attendants are important too. We've lives. I've lodged in the chaffinch, lived in the flower, seen the sun coming up. I've discovered unbelievable things. I'm an extraordinary person. I'll tell you a secret... <br>(He dies. Scarron and Druce enter quickly Upstage Centre and hook him off with them).`,
    links: "https://en.wikipedia.org/wiki/Red_Noses",
    video: "https://www.youtube.com/watch?v=cAC5EM13AWI",
    purchase: "https://amzn.to/3UB2ap8",
    img: "images/Red_Noses.jpg"
},
{
    playTitle: "Second Example Play 1: Male, Comedic, Contemporary",
    author: "Second Example Author 1",
    character: "Second Example Character 1",
    characterDesc: "description of char Second example play 1",
    notes: "none yet, second example play 1",
    gender: "male",
    type: "comedic",
    timePeriod: "contemporary",
    year: "year second example play 1",
    monoText: "Second blah blah blah 1",
    links: "http://www.google.com",
    video: "http://www.youtube.com",
    purchase: "http://www.amazon.com",
    img: "https://bit.ly/3hboEiJ"
},
{
    playTitle: "Example Play 2: Female, Comedic, Contemporary",
    author: "Example Author 2",
    character: "Example Character 2",
    characterDesc: "description of char example play 2",
    notes: "none yet, example play 2",
    gender: "female",
    type: "comedic",
    timePeriod: "contemporary",
    year: "year example play 2",
    monoText: "blah blah blah 2",
    links: "http://www.google.com",
    video: "http://www.youtube.com",
    purchase: "http://www.amazon.com",
    img: "https://bit.ly/3hboEiJ"
},
{
    playTitle: "Second Example Play 2: Female, Comedic, Contemporary",
    author: "Second Example Author 2",
    character: "Second Example Character 2",
    characterDesc: "description of char second example play 2",
    notes: "none yet, second example play 2",
    gender: "female",
    type: "comedic",
    timePeriod: "contemporary",
    year: "year second example play 2",
    monoText: "Second blah blah blah 2",
    links: "http://www.google.com",
    video: "http://www.youtube.com",
    purchase: "http://www.amazon.com",
    img: "https://bit.ly/3hboEiJ"
},
{
    playTitle: "Example Play 3: Male, Dramatic, Contemporary",
    author: "Example Author 3",
    character: "Example Character 3",
    characterDesc: "description of char example play 3",
    notes: "none yet, example play 3",
    gender: "male",
    type: "dramatic",
    timePeriod: "contemporary",
    year: "year ex play 3",
    monoText: "blah blah blah 3",
    links: "http://www.google.com",
    video: "http://www.youtube.com",
    purchase: "http://www.amazon.com",
    img: "https://bit.ly/3hboEiJ"
},
{
    playTitle: "Example Play 4: Female, Dramatic, Contemporary",
    author: "Example Author 4",
    character: "Example Character 4",
    characterDesc: "description of char example play 4",
    notes: "none yet, example play 4",
    gender: "female",
    type: "dramatic",
    timePeriod: "contemporary",
    year: "year example play 4",
    monoText: "blah blah blah 4",
    links: "http://www.google.com",
    video: "http://www.youtube.com",
    purchase: "http://www.amazon.com",
    img: "https://bit.ly/3hboEiJ"
},
{
    playTitle: "Example Play 5: Male, Comedic, Classical",
    author: "Example Author 5",
    character: "Example Character 5",
    characterDesc: "description of char example play 5",
    notes: "none yet, example play 5",
    gender: "male",
    type: "comedic",
    timePeriod: "classical",
    year: "year ex play 5",
    monoText: "blah blah blah 5",
    links: "http://www.google.com",
    video: "http://www.youtube.com",
    purchase: "http://www.amazon.com",
    img: "https://bit.ly/3hboEiJ"
},
{
    playTitle: "Example Play 6: Female, Comedic, Classical",
    author: "Example Author 6",
    character: "Example Character 6",
    characterDesc: "description of char example play 6",
    notes: "none yet, example play 6",
    gender: "female",
    type: "comedic",
    timePeriod: "classical",
    year: "year ex play 6",
    monoText: "blah blah blah 6",
    links: "http://www.google.com",
    video: "http://www.youtube.com",
    purchase: "http://www.amazon.com",
    img: "https://bit.ly/3hboEiJ"
},
{
    playTitle: "Example Play 7: Male, Dramatic, Classical",
    author: "Example Author 7",
    character: "Example Character 7",
    characterDesc: "description of char example play 7",
    notes: "none yet, example play 7",
    gender: "male",
    type: "dramatic",
    timePeriod: "classical",
    year: "year ex play 7",
    monoText: "blah blah blah 7",
    links: "http://www.google.com",
    video: "http://www.youtube.com",
    purchase: "http://www.amazon.com",
    img: "https://bit.ly/3hboEiJ"
},
{
    playTitle: "Example Play 8: Female, Dramatic, Classical",
    author: "Example Author 8",
    character: "Example Character 8",
    characterDesc: "description of char example play 8",
    notes: "none yet, example play 8",
    gender: "female",
    type: "dramatic",
    timePeriod: "classical",
    year: "year ex play 8",
    monoText: "blah blah blah 8",
    links: "http://www.google.com",
    video: "http://www.youtube.com",
    purchase: "http://www.amazon.com",
    img: "https://bit.ly/3hboEiJ"
}
];

//Selectors
//Options & Submit Button
let submit = document.querySelector("#submitButton");

let genderButton = document.querySelector("#gender");
let typeButton = document.querySelector("#type");
let timePeriodButton = document.querySelector("#timePeriod");

let male = document.querySelector("#male");
let female = document.querySelector("#female");
let comedic = document.querySelector("#comedic");
let dramatic = document.querySelector("#dramatic");
let contemporary = document.querySelector("#contemporary");
let classical = document.querySelector("#classical");

//List Selectors
let userChoice = document.querySelector("#userChoice");
let returnedMonologues = document.querySelector("#monologueList");

//Result Selectors
let playImage = document.querySelector("#playImage");
let monoTextPara = document.querySelector("#monoTextPara");
let monoCardTitle = document.querySelector("#monoCardTitle");
let characterDescription = document.querySelector("#characterDescription");
let fullTextLink = document.querySelector("#fullTextLink");
let printFullText = document.querySelector("#printFullText");

let notes = document.querySelector("#notes");
let link = document.querySelector("#moreInfo");
let video = document.querySelector("#video");
let purchase = document.querySelector("#purchase");

//variables
let gender = "";
let type = "";
let timePeriod = "";
let fullText = "";

//result arrays
let maleComedicContemporary = [];
let maleComedicClassical = [];
let maleDramaticContemporary = [];
let maleDramaticClassical = [];

let femaleComedicContemporary = [];
let femaleComedicClassical = [];
let femaleDramaticContemporary = [];
let femaleDramaticClassical = [];



//actions upon submit:
submit.addEventListener("click", function()
{
    //clears previous list
    clear();

    //putting monologues into array for choice display
    for (let i = 0; i < plays.length; i++)
    {
        if (plays[i].gender === "male" && plays[i].type === "comedic" && plays[i].timePeriod === "contemporary")
    {
        maleComedicContemporary.push(plays[i]); 
    } else if (plays[i].gender === "female" && plays[i].type === "comedic" && plays[i].timePeriod === "contemporary")
    {
        femaleComedicContemporary.push(plays[i]);
    } else if (plays[i].gender === "male" && plays[i].type === "dramatic" && plays[i].timePeriod === "contemporary")
    {
        maleDramaticContemporary.push(plays[i]);  
    } else if (plays[i].gender === "female" && plays[i].type === "dramatic" && plays[i].timePeriod === "contemporary")
    {
        femaleDramaticContemporary.push(plays[i]);
    } else if (plays[i].gender === "male" && plays[i].type === "comedic" && plays[i].timePeriod === "classical")
    {
        maleComedicClassical.push(plays[i]);
    } else if (plays[i].gender === "female" && plays[i].type === "comedic" && plays[i].timePeriod === "classical")
    {
        femaleComedicClassical.push(plays[i]);
    } else if (plays[i].gender === "male" && plays[i].type === "dramatic" && plays[i].timePeriod === "classical")
    {
        maleDramaticClassical.push(plays[i]);  
    } else if (plays[i].gender === "female" && plays[i].type === "dramatic" && plays[i].timePeriod === "classical")
    {
        femaleDramaticClassical.push(plays[i]);
    }
    }

    //Display options based on Selections
    //male, comedic, contemporary:
    if(male === true && comedic === true && contemporary === true)
    {
        userChoice.innerText = "\nMale, Comedic, Contemporary Choices:";

       //loads list of monologues that fit selections and generates load button
        let idCounter = -1;

        for (let choiceCounter = 0; choiceCounter < maleComedicContemporary.length; choiceCounter++)
        {
            let sortedChoices = document.createElement("li");
            returnedMonologues.appendChild(sortedChoices);
            sortedChoices.innerHTML = `${maleComedicContemporary[choiceCounter].playTitle}. Author: ${maleComedicContemporary[choiceCounter].author}. Year: ${maleComedicContemporary[choiceCounter].year}.  <button type="button" id="load${idCounter+= 1}" class="btn btn-link">Load</button>`;
        } 
        //after clicking load button on choice, sends data to cards
        for (let n = 0; n <= idCounter; n++)
        {
            let load = document.querySelector(`#load${n}`);
            load.addEventListener("click", function()
            {
                fullText = maleComedicContemporary[n].monoText;

                playImage.src = maleComedicContemporary[n].img;
                monoTextPara.innerHTML = maleComedicContemporary[n].monoText;
                monoCardTitle.innerHTML = `${maleComedicContemporary[n].playTitle}, by: ${maleComedicContemporary[n].author}`;
                characterDescription.innerHTML = "Character: " + maleComedicContemporary[n].character +"." + " " + maleComedicContemporary[n].characterDesc;

                notes.innerHTML = maleComedicContemporary[n].notes;
                link.innerHTML = `<a href="${maleComedicContemporary[n].links}" target="_blank">More Info Here</a>`;
                video.innerHTML = `<a href="${maleComedicContemporary[n].video}" target="_blank">Video</a>`;
                purchase.innerHTML = `<a href="${maleComedicContemporary[n].purchase}" target="_blank">Buy the Play</a>`;
            }) 
        }
        //open full text of monologue in new tab
        textTab();
        //open send to printer tab
        printTab();
      
    } 
    //female, comedic, contemporary:
    else if(female === true && comedic === true && contemporary === true)
    {
        userChoice.innerText = "\nFemale, Comedic, Contemporary Choices:";

        //loads list of monologues that fit selections and generates load button
        let idCounter = -1;
        for (let choiceCounter = 0; choiceCounter < femaleComedicContemporary.length; choiceCounter++)
        {
            let sortedChoices = document.createElement("li");
            returnedMonologues.appendChild(sortedChoices);
            sortedChoices.innerHTML = `${femaleComedicContemporary[choiceCounter].playTitle}. Author: ${femaleComedicContemporary[choiceCounter].author}. Year: ${femaleComedicContemporary[choiceCounter].year}.  <button type="button" id="load${idCounter+= 1}" class="btn btn-link">Load</button>`;
        } 
        //after clicking load button on choice, sends data to cards
        for (let n = 0; n <= idCounter; n++)
        {
            let load = document.querySelector(`#load${n}`);
            load.addEventListener("click", function()
            {
                fullText = femaleComedicContemporary[n].monoText;

                playImage.src = femaleComedicContemporary[n].img;
                monoTextPara.innerHTML = femaleComedicContemporary[n].monoText;
                monoCardTitle.innerHTML = `${femaleComedicContemporary[n].playTitle}, by: ${femaleComedicContemporary[n].author}`;
                characterDescription.innerHTML = "Character: " + femaleComedicContemporary[n].character +"." + " " + femaleComedicContemporary[n].characterDesc;

                notes.innerHTML = femaleComedicContemporary[n].notes;
                link.innerHTML = `<a href="${femaleComedicContemporary[n].links}" target="_blank">More Info Here</a>`;
                video.innerHTML = `<a href="${femaleComedicContemporary[n].video}" target="_blank">Video</a>`;
                purchase.innerHTML = `<a href="${femaleComedicContemporary[n].purchase}" target="_blank">Buy the Play</a>`;
            }) 
        }
        //open full text of monologue in new tab
        textTab();
        //open send to printer tab
        printTab();
    } 
    //male, dramatic, contempory:
    else if(male === true && dramatic === true && contemporary === true)
    {
        userChoice.innerText = "\nMale, Dramatic, Contemporary Choices:";

        //loads list of monologues that fit selections and generates load button
        let idCounter = -1;
        for (let choiceCounter = 0; choiceCounter < maleDramaticContemporary.length; choiceCounter++)
        {
            let sortedChoices = document.createElement("li");
            returnedMonologues.appendChild(sortedChoices);
            sortedChoices.innerHTML = `${maleDramaticContemporary[choiceCounter].playTitle}. Author: ${maleDramaticContemporary[choiceCounter].author}. Year: ${maleDramaticContemporary[choiceCounter].year}.  <button type="button" id="load${idCounter+= 1}" class="btn btn-link">Load</button>`; 
        } 
        //after clicking load button on choice, sends data to cards
        for (let n = 0; n <= idCounter; n++)
        {
            let load = document.querySelector(`#load${n}`);
            load.addEventListener("click", function()
            {
                fullText = maleDramaticContemporary[n].monoText;

                playImage.src = maleDramaticContemporary[n].img;
                monoTextPara.innerHTML = maleDramaticContemporary[n].monoText;
                monoCardTitle.innerHTML = `${maleDramaticContemporary[n].playTitle}, by: ${maleDramaticContemporary[n].author}`;
                characterDescription.innerHTML = "Character: " + maleDramaticContemporary[n].character +"." + " " + maleDramaticContemporary[n].characterDesc;

                notes.innerHTML = maleDramaticContemporary[n].notes;
                link.innerHTML = `<a href="${maleDramaticContemporary[n].links}" target="_blank">More Info Here</a>`;
                video.innerHTML = `<a href="${maleDramaticContemporary[n].video}" target="_blank">Video</a>`;
                purchase.innerHTML = `<a href="${maleDramaticContemporary[n].purchase}" target="_blank">Buy the Play</a>`;
            }) 
        }
        //open full text of monologue in new tab
        textTab();
        //open send to printer tab
        printTab();
    } 
    //female, dramatic, contempory:
    else if(female === true && dramatic === true && contemporary === true)
    {
        userChoice.innerText = "\nFemale, Dramatic, Contemporary Choices:";

        //loads list of monologues that fit selections and generates load button
        let idCounter = -1;
        for (let choiceCounter = 0; choiceCounter < femaleDramaticContemporary.length; choiceCounter++)
        {
            let sortedChoices = document.createElement("li");
            returnedMonologues.appendChild(sortedChoices);
            sortedChoices.innerHTML = `${femaleDramaticContemporary[choiceCounter].playTitle}. Author: ${femaleDramaticContemporary[choiceCounter].author}. Year: ${femaleDramaticContemporary[choiceCounter].year}.  <button type="button" id="load${idCounter+= 1}" class="btn btn-link">Load</button>`;
        } 
        //after clicking load button on choice, sends data to cards
        for (let n = 0; n <= idCounter; n++)
        {
            let load = document.querySelector(`#load${n}`);
            load.addEventListener("click", function()
            {
                fullText = femaleDramaticContemporary[n].monoText;

                playImage.src = femaleDramaticContemporary[n].img;
                monoTextPara.innerHTML = femaleDramaticContemporary[n].monoText;
                monoCardTitle.innerHTML = `${femaleDramaticContemporary[n].playTitle}, by: ${femaleDramaticContemporary[n].author}`;
                characterDescription.innerHTML = "Character: " + femaleDramaticContemporary[n].character +"." + " " + femaleDramaticContemporary[n].characterDesc;

                notes.innerHTML = femaleDramaticContemporary[n].notes;
                link.innerHTML = `<a href="${femaleDramaticContemporary[n].links}" target="_blank">More Info Here</a>`;
                video.innerHTML = `<a href="${femaleDramaticContemporary[n].video}" target="_blank">Video</a>`;
                purchase.innerHTML = `<a href="${femaleDramaticContemporary[n].purchase}" target="_blank">Buy the Play</a>`;
            }) 
        }
        //open full text of monologue in new tab
        textTab();
        //open send to printer tab
        printTab();
    } 
    //male, comedic, classical:
    else if(male === true && comedic === true && classical === true)
    {
        userChoice.innerText = "\nMale, Comedic, Classical Choices:";

        //loads list of monologues that fit selections and generates load button
        let idCounter = -1;

        for (let choiceCounter = 0; choiceCounter < maleComedicClassical.length; choiceCounter++)
        {
            let sortedChoices = document.createElement("li");
            returnedMonologues.appendChild(sortedChoices);
            sortedChoices.innerHTML = `${maleComedicClassical[choiceCounter].playTitle}. Author: ${maleComedicClassical[choiceCounter].author}. Year: ${maleComedicClassical[choiceCounter].year}.  <button type="button" id="load${idCounter+= 1}" class="btn btn-link">Load</button>`;
        } 
        //after clicking load button on choice, sends data to cards
        for (let n = 0; n <= idCounter; n++)
        {
            let load = document.querySelector(`#load${n}`);
            load.addEventListener("click", function()
            {
                fullText = maleComedicClassical[n].monoText;

                playImage.src = maleComedicClassical[n].img;
                monoTextPara.innerHTML = maleComedicClassical[n].monoText;
                monoCardTitle.innerHTML = `${maleComedicClassical[n].playTitle}, by: ${maleComedicClassical[n].author}`;
                characterDescription.innerHTML = "Character: " + maleComedicClassical[n].character +"." + " " + maleComedicClassical[n].characterDesc;

                notes.innerHTML = maleComedicClassical[n].notes;
                link.innerHTML = `<a href="${maleComedicClassical[n].links}" target="_blank">More Info Here</a>`;
                video.innerHTML = `<a href="${maleComedicClassical[n].video}" target="_blank">Video</a>`;
                purchase.innerHTML = `<a href="${maleComedicClassical[n].purchase}" target="_blank">Buy the Play</a>`;
            }) 
        }
        //open full text of monologue in new tab
        textTab();
        //open send to printer tab
        printTab();
    } 
    //female, comedic, classical:
    else if(female === true && comedic === true && classical === true)
    {
        userChoice.innerText = "\nFemale, Comedic, Classical Choices:";

        //loads list of monologues that fit selections and generates load button
        let idCounter = -1;

        for (let choiceCounter = 0; choiceCounter < femaleComedicClassical.length; choiceCounter++)
        {
            let sortedChoices = document.createElement("li");
            returnedMonologues.appendChild(sortedChoices);
            sortedChoices.innerHTML = `${femaleComedicClassical[choiceCounter].playTitle}. Author: ${femaleComedicClassical[choiceCounter].author}. Year: ${femaleComedicClassical[choiceCounter].year}. <button type="button" id="load${idCounter+= 1}" class="btn btn-link">Load</button>`;
        } 
        //after clicking load button on choice, sends data to cards
        for (let n = 0; n <= idCounter; n++)
        {
            let load = document.querySelector(`#load${n}`);
            load.addEventListener("click", function()
            {
                fullText = femaleComedicClassical[n].monoText;

                playImage.src = femaleComedicClassical[n].img;
                monoTextPara.innerHTML = femaleComedicClassical[n].monoText;
                monoCardTitle.innerHTML = `${femaleComedicClassical[n].playTitle}, by: ${femaleComedicClassical[n].author}`;
                characterDescription.innerHTML = "Character: " + femaleComedicClassical[n].character +"." + " " + femaleComedicClassical[n].characterDesc;

                notes.innerHTML = femaleComedicClassical[n].notes;
                link.innerHTML = `<a href="${femaleComedicClassical[n].links}" target="_blank">More Info Here</a>`;
                video.innerHTML = `<a href="${femaleComedicClassical[n].video}" target="_blank">Video</a>`;
                purchase.innerHTML = `<a href="${femaleComedicClassical[n].purchase}" target="_blank">Buy the Play</a>`;
            }) 
        }
        //open full text of monologue in new tab
        textTab();
        //open send to printer tab
        printTab();
    } 
    //male, dramatic, classical:
    else if(male === true && dramatic === true && classical === true)
    {
        userChoice.innerText = "\nMale, Dramatic, Classical Choices:";

        //loads list of monologues that fit selections and generates load button
        let idCounter = -1;

        for (let choiceCounter = 0; choiceCounter < maleDramaticClassical.length; choiceCounter++)
        {
            let sortedChoices = document.createElement("li");
            returnedMonologues.appendChild(sortedChoices);
            sortedChoices.innerHTML = `${maleDramaticClassical[choiceCounter].playTitle}. Author: ${maleDramaticClassical[choiceCounter].author}. Year: ${maleDramaticClassical[choiceCounter].year}. <button type="button" id="load${idCounter+= 1}" class="btn btn-link">Load</button>`;
        } 
        //after clicking load button on choice, sends data to cards
        for (let n = 0; n <= idCounter; n++)
        {
            let load = document.querySelector(`#load${n}`);
            load.addEventListener("click", function()
            {
                fullText = maleDramaticClassical[n].monoText;

                playImage.src = maleDramaticClassical[n].img;
                monoTextPara.innerHTML = maleDramaticClassical[n].monoText;
                monoCardTitle.innerHTML = `${maleDramaticClassical[n].playTitle}, by: ${maleDramaticClassical[n].author}`;
                characterDescription.innerHTML = "Character: " + maleDramaticClassical[n].character +"." + " " + maleDramaticClassical[n].characterDesc;

                notes.innerHTML = maleDramaticClassical[n].notes;
                link.innerHTML = `<a href="${maleDramaticClassical[n].links}" target="_blank">More Info Here</a>`;
                video.innerHTML = `<a href="${maleDramaticClassical[n].video}" target="_blank">Video</a>`;
                purchase.innerHTML = `<a href="${maleDramaticClassical[n].purchase}" target="_blank">Buy the Play</a>`;
            }) 
        }
        //open full text of monologue in new tab
        textTab();
        //open send to printer tab
        printTab();
    } 
    //female, dramatic, classical:
    else if(female === true && dramatic === true && classical === true)
    {
        userChoice.innerText = "\nFemale, Dramatic, Classical Choices:";

        //loads list of monologues that fit selections and generates load button
        let idCounter = -1;

        for (let choiceCounter = 0; choiceCounter < femaleDramaticClassical.length; choiceCounter++)
        {
            let sortedChoices = document.createElement("li");
            returnedMonologues.appendChild(sortedChoices);
            sortedChoices.innerHTML = `${femaleDramaticClassical[choiceCounter].playTitle}. Author: ${femaleDramaticClassical[choiceCounter].author}. Year: ${femaleDramaticClassical[choiceCounter].year}. <button type="button" id="load${idCounter+= 1}" class="btn btn-link">Load</button>`;
        } 
        //after clicking load button on choice, sends data to cards
        for (let n = 0; n <= idCounter; n++)
        {
            let load = document.querySelector(`#load${n}`);
            load.addEventListener("click", function()
            {
                fullText = femaleDramaticClassical[n].monoText;

                playImage.src = femaleDramaticClassical[n].img;
                monoTextPara.innerHTML = femaleDramaticClassical[n].monoText;
                monoCardTitle.innerHTML = `${femaleDramaticClassical[n].playTitle}, by: ${femaleDramaticClassical[n].author}`;
                characterDescription.innerHTML = "Character: " + femaleDramaticClassical[n].character +"." + " " + femaleDramaticClassical[n].characterDesc;

                notes.innerHTML = femaleDramaticClassical[n].notes;
                link.innerHTML = `<a href="${femaleDramaticClassical[n].links}" target="_blank">More Info Here</a>`;
                video.innerHTML = `<a href="${femaleDramaticClassical[n].video}" target="_blank">Video</a>`;
                purchase.innerHTML = `<a href="${femaleDramaticClassical[n].purchase}" target="_blank">Buy the Play</a>`;
            }) 
       }
        //open full text of monologue in new tab
        textTab();
        //open send to printer tab
        printTab();
    }
})

//setting true/false & variables for each possible catagory. Plus updates innerText on button to show their selection:
male.addEventListener("click", function()
{
    male = true;
    female = false;
    gender = "male";
    genderButton.innerText = "Male";
})

female.addEventListener("click", function()
{
    female = true;
    male = false;
    gender = "female";
    genderButton.innerText = "Female";
})

comedic.addEventListener("click", function()
{
    comedic = true;
    dramatic = false;
    type = "comedic";
    typeButton.innerText = "Comedic";
})

dramatic.addEventListener("click", function()
{
    dramatic = true;
    comedic = false;
    type = "dramatic";
    typeButton.innerText = "Dramatic";
})

contemporary.addEventListener("click", function()
{
    contemporary = true;
    classical = false;
    timePeriod = "contemporary";
    timePeriodButton.innerText = "Contemporary";
})

classical.addEventListener("click", function()
{
    classical = true;
    contemporary = false;
    timePeriod = "classical";
    timePeriodButton.innerText = "Classical";
})



//Functions

//opens new tab with full text of monologue:
function textTab()
{
    fullTextLink.addEventListener("click", function()
                {
                    let tab = window.open('about:blank', '_blank');

                    tab.document.write('<html><head><title>Full Monologue Text</title><link rel="stylesheet" type="text/css" href="style.css"></head><body id="newTab">');
                    tab.document.write('<div id="textbox">')
                    tab.document.write(fullText);
                    tab.document.write('</div>')
                    tab.document.write('</body></html>');
                    tab.document.close();

                })
}

//opens a tab to print text of the monologue, then loads tab with styled text
function printTab()
{
    printFullText.addEventListener("click", function()
                {
                    let tab = window.open('about:blank', '_blank');

                    tab.document.write('<html><head><title>Full Monologue Text</title><link rel="stylesheet" type="text/css" href="style.css"></head><body id="newTab">');
                    tab.document.write('<div id="textbox">')
                    tab.document.write(fullText);
                    tab.document.write('</div>')
                    tab.document.write('</body></html>');
                    tab.print();
                    tab.document.close();

                })
}

//clears all previous data when submit button is hit again:
function clear()
{
    returnedMonologues.innerHTML = "";
    maleComedicContemporary = [];
    maleComedicClassical = [];
    maleDramaticContemporary = [];
    maleDramaticClassical = [];

    femaleComedicContemporary = [];
    femaleComedicClassical = [];
    femaleDramaticContemporary = [];
    femaleDramaticClassical = [];

    fullText = "";

    playImage.src = "https://bit.ly/3hboEiJ";
    monoTextPara.innerHTML= "Monologue preview will display here.";
    monoCardTitle.innerHTML = "Monologue";
    characterDescription.innerHTML = "Character Name";

    notes.innerHTML = "";
    link.innerHTML = "More Info Here";
    video.innerHTML = "Video";
    purchase.innerHTML = "Buy the Play";

    userChoice.innerText = "";

    genderButton.innerText = "Gender";
    typeButton.innerText = "Type";
    timePeriodButton.innerText = "Time Period";

}


