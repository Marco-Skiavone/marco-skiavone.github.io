let italian = true;
let flag = document.getElementById("eng-info");
console.log("Start, italian=", italian);

let italianText = "Sono uno studente di Informatica all'Università degli Studi di Torino.<br>"
    + " Adoro programmare, specialmente in Java.<br>Conosco i concetti di linguaggio OOP, programmazione funzionale e imperativa.<br>"
    + "Possiedo conoscenze di base riguardanti le strutture dati più note, come HashMap,"
    + " liste, skiplist, alberi binari di ricerca, rappresentazione binaria di alberi k-ari e grafi."
    + " Conosco inoltre gli algoritmi più noti negli ambiti di sorting e ricerca e padroneggio i concetti di polimorfismo,"
    + " ereditarietà e incapsulamento, tipici dei linguaggi OOP.<br>Molti dei miei "
    + " progetti saranno presto disponibili sul mio profilo GitHub.<br>Alcuni di essi dovranno aspettare fino a luglio 2024, prima di poter essere resi pubblici, causa rischio plagio.";

let englishText = "I am an Italian IT student at Università degli Studi di Torino.<br>"
+ "I love programming, especially in Java.<br>I have knowledge of \"OOP language\" and \"functional programming\" concepts."
+ " Furthermore, I know the most known basilar structures as:"
+ " HashMap, lists, skiplists, binary search trees, of k-trees binarly representation and graphs."
+ " I have knowledge of the most known sorting and search algorithms as well as"
+ " polymorphism, inheritance and encapsulation concepts, which are fundamental to OOP languages<br>"
+ "Most of my projects will be avaiable soon on my GitHub profile.<br>"
+ "I have to suspend their publication until July 2024, due to the risk of being plagiarized.";

if(flag != null){
    flag.onclick = myFunc();
}

function myFunc(){
    console.log("Found.");
    
    if(italian){    // it gets in english
        document.getElementById("aboutMePar").innerHTML = englishText;
        italian = false;
        document.getElementById("actual_flag").src = "images/content/eng-flag.png";
        document.getElementById("actual_flag").alt = "ENG";
        document.getElementById("selectable_flag").src = "images/content/ita-flag.png";
        document.getElementById("selectable_flag").alt = "ITA";
        console.log("Text changed to English!");

    } else {     // it gets in italian
        document.getElementById("aboutMePar").innerHTML = italianText;
        console.log("Text changed to Italian!");
        italian = true;
        document.getElementById("actual_flag").src = "images/content/ita-flag.png";
        document.getElementById("actual_flag").alt = "ITA";
        document.getElementById("selectable_flag").src = "images/content/eng-flag.png";
        document.getElementById("selectable_flag").alt = "ENG";
    }
}
