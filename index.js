let engPresentation = "I am a Computer Science student at the University of Turin, currently pursuing a specialization in Information and Knowledge.<br>" +
    "<br>I love programming, especially in Java and C, and I adore rubber ducks.<br><br>" +
    "I'm interested in the latest technological developments and enjoy exploring new programming languages, algorithms, and innovative and clever solutions to common problems.<br>" +
    "<br>" +
    "I've had the opportunity to work on various projects during my studies, both individually and in collaboration with other students. On my website, there's a section dedicated to describing the challenges I've encountered in topics that interest me the most.<br>" +
    "<br>For any questions or curiosity, you can check my contact information.<br>Quack!"


let itaPresentation = "Sono uno studente di Informatica presso l'Università degli Studi di Torino e attualmente sto conseguendo la specializzazione in Informazione e Conoscenza .<br>" +
    "<br>Adoro programmare, specialmente in Java e C, e amo le rubber duck.<br><br>" +
    "Sono interessato ai nuovi sviluppi tecnologici e mi piace esplorare nuovi linguaggi di programmazione, algoritmi e soluzioni innovative ed ingegnose ai problemi più comuni.<br>" +
    "<br>" +
    "Ho avuto l'opportunità di lavorare su diversi progetti durante il corso di studi, sia individualmente che in collaborazione con altri studenti. Nel mio sito è presente una sezione dedicata, in cui descrivo le sfide affrontate nei temi per me più interessanti.<br>" +
    "<br>Per eventuali domande o curiosità, potete consultare i miei contatti.<br>Quack!"

function init() {
    showHome()
    for(let elem of document.getElementsByClassName('about-me-href')) {
        elem.onclick = showHome;
    }
    for(let elem of document.getElementsByClassName('portfolio-href')) {
        elem.onclick = showPortfolio;
    }
    if(localStorage.getItem('stateLang') === null || localStorage.getItem('stateLang').toString() === "null")
        localStorage.setItem('stateLang', "ita");
    toLanguage(localStorage.getItem('stateLang'));
    for(let listItem of document.getElementById("changeLanguageFlag").children){
        let source = listItem.firstElementChild.firstElementChild.src;
        listItem.firstElementChild.onclick = toLanguage.bind(listItem.firstElementChild, source.slice((source.length-12), (source.length-9)));
    }
}

function changeTexts(toWhichLanguage) {
    let x = "asdasda";
    let engPres = localStorage.getItem('engPresentation')
    let itaPres = localStorage.getItem('itaPresentation')
    if(engPres === null || engPres.toString() === "null"){
        localStorage.setItem('engPresentation', "I am a Computer Science student at the <span class=\"text-primary fw-bolder\">University of Turin</span>, currently pursuing a specialization in <a class=\"text-dark text-decoration-underline\" href=\"https://laurea.informatica.unito.it/do/documenti.pl/ShowFile?_id=ouji;field=file;key=LVePZZJUqRsr0IffmJhd36h7HgZRueZnM1smlbVxwcH6w38qrmMg6yYrGXuyrtcD;t=9457\" target=\"_blank\">Information and Knowledge <span class=\"align-text-top bi bi-box-arrow-up-right\" style=\"font-size:0.55rem\"></span></a>.<br><br>I love programming, especially in <span class=\"text-primary fw-bolder\">Java</span> e <span class=\"text-primary fw-bolder\">C</span> languages, and I love rubber ducks too.<br><br>I'm interested in the latest technological developments and enjoy exploring new programming languages, algorithms, and innovative and clever solutions to common problems.<br><br>I've had the opportunity to work on <span class=\"text-primary fw-bolder\">various projects</span> during my studies, both individually and in collaboration with other students. On my website, there's a <a class=\"text-dark text-decoration-underline portfolio-href\" href=\"\">dedicated section</a> which describes the challenges I've encountered in the topics that interest me the most.<br><br>For any question, you can check my <a class=\"text-dark text-decoration-underline\" href=\"#contacts\">contact</a> section.<br>Quack!")
        engPres = localStorage.getItem('engPresentation')
    }
    if(itaPres === null || itaPres.toString() === "null"){
        localStorage.setItem('itaPresentation', "Sono uno studente di Informatica presso l'<span class=\"text-primary fw-bolder\">Università degli Studi di Torino</span> e attualmente sto conseguendo la specializzazione in <a class=\"text-dark text-decoration-underline\" href=\"https://laurea.informatica.unito.it/do/documenti.pl/ShowFile?_id=ouji;field=file;key=LVePZZJUqRsr0IffmJhd36h7HgZRueZnM1smlbVxwcH6w38qrmMg6yYrGXuyrtcD;t=9457\" target=\"_blank\">Informazione e Conoscenza <span class=\"align-text-top bi bi-box-arrow-up-right\" style=\"font-size:0.55rem\"></span></a>.<br><br>Adoro programmare, specialmente in <span class=\"text-primary fw-bolder\">Java</span> e <span class=\"text-primary fw-bolder\">C</span>, e amo le rubber duck.<br><br>Sono interessato ai nuovi sviluppi tecnologici e mi piace esplorare nuovi linguaggi di programmazione, algoritmi e soluzioni innovative ed ingegnose ai problemi più comuni.<br><br>Ho avuto l'opportunità di lavorare su <span class=\"text-primary fw-bolder\">diversi progetti</span> durante il corso di studi, sia individualmente che in collaborazione con altri studenti. Nel mio sito è presente una <a class=\"text-dark text-decoration-underline portfolio-href\" href=\"\">sezione dedicata</a>, in cui descrivo le sfide affrontate nei temi per me più interessanti.<br><br>Per eventuali domande o curiosità, potete consultare i miei <a class=\"text-dark text-decoration-underline\" href=\"#contacts\">contatti</a>.<br>Quack!")
        itaPres = localStorage.getItem('itaPresentation')
    }
    // setting the innerHTML:
    document.getElementById('selfPresentation').innerHTML = localStorage.getItem((toWhichLanguage + 'Presentation'))
    console.log("Changed text in " + toWhichLanguage);
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

function showHome() {
    document.getElementById('about-me').style.display = 'block'
    document.getElementById('portfolio').style.display = 'none'
}

function showPortfolio() {
    document.getElementById('about-me').style.display = 'none'
    document.getElementById('portfolio').style.display = 'block'
}
