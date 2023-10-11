function init() {
    console.log("Before = " + localStorage.getItem('stateLang'))
    if(localStorage.getItem('stateLang') === null ||localStorage.getItem('stateLang').toString() === "null"){
        console.log("entered")
        localStorage.setItem('stateLang', "ita");
    }
    console.log(localStorage.getItem('stateLang'))
    toLanguage(localStorage.getItem('stateLang'));
    for(let listItem of document.getElementById("changeLanguageFlag").children){
        let source = listItem.firstElementChild.firstElementChild.src;
        listItem.firstElementChild.onclick = toLanguage.bind(listItem.firstElementChild, source.slice((source.length-12), (source.length-9)));
    }
}

function changeTexts(toWhichLanguage) {
    console.log("change text in " + toWhichLanguage);

}

function toLanguage(string) {
    string = String(string);
    if((this.id !== undefined) && string !== this.id)
        string = String(this.id);
    console.log(document.body.parentElement.lang + ", " + localStorage.getItem('stateLang').slice(0, 2))
    // if(document.body.parentElement.lang !== localStorage.getItem('stateLang').slice(0, 2))
    //      console.log("FATAL ERROR! 'stateLang' not refreshed after change! lang=" + document.body.parentElement.lang + ", state=" + localStorage.getItem('stateLang'));
    document.body.parentElement.lang = String(string).substring(0, string.length-1);
    localStorage.setItem('stateLang', String(string));  // 3 letters
    // Now change the flags (elements are img parents)
    let flagRemove = document.getElementById("primaryImage").firstElementChild;
    let flagSet = document.getElementById(String(string));
    flagSet.appendChild(flagRemove.firstElementChild)
    flagRemove.appendChild(flagSet.firstElementChild)
    let tmp = flagSet.id;
    flagSet.id = flagRemove.id;
    flagRemove.id = tmp;
    changeTexts(string)
}
