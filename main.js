function calcul (operation) {
    const champ1 = parseFloat(document.getElementById("element1").value;
    const champ2 = parseFloat(document.getElementById("element2").value;
    let resultat; 

    if (isNaN(champ1) || isNaN(champ2)) {
        resultat = "Veuillez entrer des nombres valides.";

    } else {
        switch (operation) {
            case "+":
              resultat = champ1 + champ2;
                break;
                case "-":
              resultat = champ1 - champ2;
                break;
                case "*":
                    resultat = champ1 * champ2;
                break;
                case "/":
                    if (champ2 === 0) {
                        resultat = "Zero n'est pas valable.";
                    } else {resultat = champ1 / champ2;
                    break;

                         default:
                            resultat
                        
                    }
         document.getElementById("resultat").textContent = ""resultat" :;
        }
    }
