let currentLanguage;
const portfolioProjectList = {
    'ops': 'https://github.com/Marco-Skiavone/ProgettoC',
    'lft': 'https://github.com/Marco-Skiavone/LFT_22_23',
    'asd': ''/*https://github.com/Marco-Skiavone/Algoritmi_e_Strutture_Dati'*/,
    'ium': '#',
    'twb': '#',
    'pr3': '#',
    'dtb': '#'
}

function init() {
    if(!localStorage.getItem('stateLang'))
        localStorage.setItem('stateLang', "ita");
    currentLanguage = localStorage.getItem('stateLang')
    toLanguage(currentLanguage);
    // Set flag button method to change language.
    for(let listItem of document.getElementById("changeLanguageFlag").children){
        let source = listItem.firstElementChild.firstElementChild.src;
        listItem.firstElementChild.onclick = toLanguage.bind(listItem.firstElementChild, source.slice((source.length-12), (source.length-9)));
    }
    // Projects for the portfolio page!
    const pageName = String(location.pathname.split("/").slice(-1))
    if(pageName === 'portfolio.html'){
        let shortcutList = document.getElementById('shortcut-list')
            .getElementsByTagName("a")
        setCarouselLinks(shortcutList)
        let carousel = document.getElementById('carousel')
        carousel.addEventListener('slid.bs.carousel', changeDescription)
    }
    // set the quack Easter Egg display settings
    let quackText = document.getElementsByClassName('quack')
    for(let elem of quackText)
        elem.style.display = 'none'
    const firstEasterEgg = document.getElementById('easterRect')
    if(firstEasterEgg)
        firstEasterEgg.addEventListener('mousedown', duckPressed)
    else
        document.getElementById('easter2').addEventListener('mousedown', duckPressed)
    document.addEventListener('mouseup', duckReleased)  // This works for both Easter eggs!
}

/** This is the 'mousedown' function for the Easter-Egg elements.
 * @param ev {Event} It is the occurred event. */
function duckPressed(ev){
    for(let elem of document.getElementsByClassName('quack')){
        if(elem.id === 'secondQuackText')
            setTimeout(function() {
                elem.style.display = 'block'
            }, 100)
        else elem.style.display = 'block'
    }
    new Audio('audio/Duck.mp3').play().catch(err => {console.error(err)})
}

/** This is the 'mouseup' function for the Easter-Egg elements.
 * @param ev {Event} It is the occurred event. */
function duckReleased(ev){
    for(let elem of document.getElementsByClassName('quack'))
        elem.style.display = 'none'
}

/** It hides all the current language texts, but the chosen one.
 *  @param languageSet {string} This parameter is a 3-characters long string.
 *  It represents the language to set as visible. */
function setTexts(languageSet) {
    for(let elem of document.getElementsByClassName('languageText'))
        elem.style.display = elem.classList.contains(languageSet) ? 'block' : 'none';
    setDescriptionText(languageSet);
}

/** It hides all description texts that are not in the current language.
 * @param languageSet {string} This parameter is a 3-characters long string.
 * It represents the language to set as visible. */
function setDescriptionText(languageSet) {
    if(String(location.pathname.split("/").slice(-1)) === 'portfolio.html'){
        const id = document.querySelector('div.carousel-item.active').id
        for(let elem of document.getElementsByClassName('languageTextDescription'))
            elem.style.display = (elem.classList.contains(languageSet) &&
                elem.classList.contains(id)) ? 'block' : 'none';
    }
}

/** This function is called by 'toLanguage(string)' to set the texts of the document in the chosen language.
 * @param toWhichLanguage {string} This parameter is a 3-characters long string. It represents the language to set as visible.
 */
function changeTexts(toWhichLanguage) {
    try{
        setTexts(toWhichLanguage);      // it hides ALL the languages but currentLanguage!
        localStorage.setItem('stateLang', toWhichLanguage);
        currentLanguage = toWhichLanguage;
        document.body.parentElement.lang = toWhichLanguage.slice(0, 2);
    } catch(e) {console.log(e)}
}

/** This function is called every time we want to change language in my personal webpage.
 * @param string {string} This parameter is a 3-characters long string. It represents the language to set as visible.
 * */
function toLanguage(string) {
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

/** This function has to bind the elements of the sidebar menu with the same id string.
 * @param shortcutList {HTMLCollectionOf<HTMLAnchorElement>} Is the **list** of `<a>`
 * used to navigate faster the portfolio. */
function setCarouselLinks(shortcutList) {
    if (!shortcutList) {
        throw new TypeError('Invalid argument in setCarouselLinks! The element is: ' + shortcutList)
    }
    let index = 0
    for(let element of shortcutList) {
        element.setAttribute('data-bs-slide-to', String(index))
        element.onclick = closeSidebar.bind(element, element.classList.item(1).substring(0, 3), index++)
    }
}

/** This function closes the sidebar after a link has been clicked. */
function closeSidebar(){
    changeDescription()
    document.getElementById('closeOffcanvas').click()   // It closes the sidebar
}

/** Here we change the info about the project active on the carousel. */
function changeDescription(){
    const activeProj = document.querySelector('div.carousel-item.active')
    if(activeProj){
        // @Todo other things about the description!
        visualizeCurrentDescription()
        let repoBtn = document.getElementById('toRepositoryBtn')
        repoBtn.addEventListener('click', setRepoToGo.bind(repoBtn))
    }
}

/** It sets display attribute of the elements to 'inline' or 'none', to display the correct description overview.
 * @throws TypeError If 'id' of current active carousel element is 'null' or 'undefined'. */
function visualizeCurrentDescription() {
    const id = document.querySelector('div.carousel-item.active').id
    if(!id)
        throw new TypeError('Null "id" found at visualizeCurrentDescription() method!\n- id: ' + id)
    for(let elem of document.getElementById('projectSubtitles').children) {
        if(elem.classList.contains(id) && elem.classList.contains(currentLanguage))
            elem.style.display = 'block'
        else
            elem.style.display = 'none'
    }
    for(let elem of document.getElementById('projectDescription').children) {
        if(elem.classList.contains(id) && elem.classList.contains(currentLanguage))
            elem.style.display = 'block'
        else
            elem.style.display = 'none'
    }
}

/** This function changes the link of the repo button. */
function setRepoToGo(){
    let repoBtn = document.getElementById('toRepositoryBtn')
    const id = document.querySelector('div.carousel-item.active').id
    if(portfolioProjectList[id] !== '#' && portfolioProjectList[id] !== '') {
        this.target = '_blank'
        this.href = portfolioProjectList[id]
        console.log('#DEV: id passed is ' + portfolioProjectList[id])
    } else {
        this.href = '#'
        this.target = '_self'
        if(portfolioProjectList[id] === '#'){
            document.getElementById('call-implementation-modal').click()
        } else {
            document.getElementById('call-publish-modal').click()
        }
    }
}
