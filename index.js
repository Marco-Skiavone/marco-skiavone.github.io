let currentLanguage;
function init() {
    let quackText = document.getElementById('quack')
    if(!localStorage.getItem('stateLang'))
        localStorage.setItem('stateLang', "ita");
    currentLanguage = localStorage.getItem('stateLang')
    toLanguage(currentLanguage);
    // Set flag button method to change language.
    for(let listItem of document.getElementById("changeLanguageFlag").children){
        let source = listItem.firstElementChild.firstElementChild.src;
        listItem.firstElementChild.onclick = toLanguage.bind(listItem.firstElementChild, source.slice((source.length-12), (source.length-9)));
    }
    // set the quack Easter Egg display settings
    quackText.style.display = 'none'
    document.getElementById('avatar_img').addEventListener('mouseover', isOverTheDuck)
    document.getElementById('avatar_img').addEventListener('mousemove', isOverTheDuck)
    document.getElementById('avatar_img').addEventListener('mouseout', () =>{quackText.style.display = 'none'; console.log("asdafa")})
}

function isOverTheDuck(ev){
    let quackText = document.getElementById('quack')
    let rect = ev.target.getBoundingClientRect();
    let x = ev.clientX - rect.left; //x position within the element.
    let y = ev.clientY - rect.top;  //y position within the element.
    if(x >= rect.right/2 && x < rect.right-(rect.right/12) && y >= 3*(rect.height/5) && y < rect.bottom){
        quackText.style.display = 'block'
    } else {
        quackText.style.display = 'none'
    }
}

/** It hides all the current language texts, but the chosen one.
 *  @param languageSet : string This parameter is a 3-characters long string. It represents the language to set as visible.
 * */
function setTexts(languageSet) {
    for(let elem of document.getElementsByClassName('languageText'))
        elem.style.display = elem.classList.contains(languageSet) ? 'block' : 'none';
}


/** This function is called by 'toLanguage(string)' to set the texts of the document in the chosen language.
 * @param toWhichLanguage : string This parameter is a 3-characters long string. It represents the language to set as visible.
 */
function changeTexts(toWhichLanguage) {
    try{
        setTexts(toWhichLanguage);      // it hides ALL the languages but currentLanguage!
        localStorage.setItem('stateLang', toWhichLanguage);
        currentLanguage = toWhichLanguage;
        document.body.parentElement.lang = toWhichLanguage.slice(0, 2);
    } catch(e) {console.log(e)}
    console.log("DEV: Text changed in " + toWhichLanguage);
}

/** This function is called every time we want to change language in my personal webpage.
 * @param string : string This parameter is a 3-characters long string. It represents the language to set as visible.
 * */
function toLanguage(string) {
    string = String(string);
    if(this.id && string !== this.id)
        string = String(this.id);
    // Now change the flags (elements are img parents)
    let flagRemove = document.getElementById("primaryImage").firstElementChild;
    let flagSet = document.getElementById(string);
    flagSet.appendChild(flagRemove.firstElementChild)
    flagRemove.appendChild(flagSet.firstElementChild)
    let tmp = flagSet.id;
    flagSet.id = flagRemove.id;
    flagRemove.id = tmp;
    changeTexts(string)
}