let messages = new Map();
messages.set("guidance_sentimentale", "la Guidance Sentimentale");
messages.set("guidance_pro", "la Guidance Professionnelle");
messages.set("guidance_spirituelle", "la Guidance Spirituelle");
messages.set("guidance_emotionnelle", "la Guidance Emotionnelle");
messages.set("guidance_2_themes", "la Guidance 2 thèmes");
messages.set("guidance_3_themes", "la Guidance 3 thèmes");
messages.set("guidance_parentale", "la Guidance Parentale");
messages.set("guidance_flash_qr", "la Guidance Question réponse");
messages.set("question_flash", "la Guidance Flash Message des Guides");
messages.set("guidance_flash_automne", "la Guidance Flash Automne 🍂");
messages.set("guidance_trimestrielle", "la Guidance trimestrielle");
messages.set("guidance_animale", "la Guidance Communication animale");
messages.set("guidance_vies_anterieures", "la Guidance Vies antérieures/mémoires bloquantes");
messages.set("guidance_flash_etat", "la Guidance Etat d'esprit");
messages.set("soin", "le Soin énergétique");
messages.set("hypnose_regressive", "l'Hypnose Régressive Spirituelle");
messages.set("hypnose_revelatrice", "l'Hypnose Spirituelle Révélatrice");

function selectFields(val) {
    clearSelection();
    switch (val) {
        case "guidance_sentimentale":
            addField("naissance");
            addField("photo_photo_personne");
            addField("situation_amoureuse");
            addField("numero");
            break;
        case "guidance_pro":
            addField("naissance");
            addField("photo");
            addField("situation_pro");
            addField("numero");
            break;
        case "guidance_spirituelle":
            addField("naissance");
            addField("photo");
            addField("questions");
            addField("numero");
            break;
        case "guidance_2_themes":
            addField("naissance");
            addField("photo");
            addField("deux_themes");
            addField("numero");
            break;
        case "guidance_3_themes":
            addField("naissance");
            addField("photo");
            addField("trois_themes");
            addField("numero");
            break;
        case "guidance_parentale":
            addField("naissance_naissance_enfant");
            addField("photo_photo_enfant");
            addField("statut");
            addField("questions");
            addField("numero");
            break;
        case "guidance_flash_qr":
            addField("naissance");
            addField("photo");
            addField("question_precise");
            break;
        case "guidance_emotionnelle":
            addField("naissance");
            addField("photo");
            addField("numero");
            addField("emotion");
            break;
        case "question_flash":
            addField("naissance");
            addField("photo");
            break;
        case "guidance_animale":
            addField("naissance");
            addField("photo_photo_animal");
            addField("questions");
            addField("numero");
            break;
        case "guidance_vies_anterieures":
            addField("naissance");
            addField("photo");
            break;
        case "guidance_flash_etat":
            addField("naissance_naissance_autre");
            addField("photo_photo_autre");
            addField("nature_relation");
            break;
        case "soin":
            addField("naissance");
            addField("photo");
            addField("problematique");
            addField("numero");
            break;
        case "hypnose_regressive":
            addField("naissance");
            addField("photo");
            addField("hypnose_premiere");
            addField("questions_hypnose");
            addField("hypnose_formule");
            break;
        case "hypnose_revelatrice":
            addField("naissance");
            addField("photo");
            addField("hypnose_premiere");
            addField("hypnose_formule");
            break;
        case "guidance_flash_automne":
            addField("naissance");
            addField("photo");
            addField("numero");
        case "guidance_trimestrielle":
            addField("naissance");
            addField("photo");
            addField("numero");
    }
}

function addField(val) {
    document.getElementById(val).checked = true;
}

function clearSelection() {
    var toUncheck = document.getElementsByTagName('input');
    for (var i = 0; i < toUncheck.length; i++) {
        if (toUncheck[i].type == 'checkbox') {
            toUncheck[i].checked = false;
        }
    }
}

function generateMessage() {
    var message = 'Hello 🩷, Merci beaucoup pour ta réservation concernant '
        + messages.get(document.getElementById("prestation").value)
        + ' et ta confiance, je te laisse me donner à la suite :\n'
        + checkSelectedFields()
        + '\n'
        + 'Merci à toi 🧚☀️';
    console.log(message);
    navigator.clipboard.writeText(message);
    const toast = document.getElementById('liveToast')
    document.getElementById('toastMessage').innerText = message;
    bootstrap.Toast.getOrCreateInstance(toast).show();
}

function checkSelectedFields() {
    var inputs = document.getElementsByTagName('input');
    var selectedQuestions = '';
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'checkbox' && inputs[i].checked) {
            selectedQuestions = selectedQuestions + inputs[i].value + "\n";
        }
    }
    return selectedQuestions;
}