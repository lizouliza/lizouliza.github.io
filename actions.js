let messages = new Map();
messages.set("guidance_ete", "la Guidance de l'Ete");
messages.set("guidance_sentimentale", "la Guidance Sentimentale");
messages.set("guidance_pro", "la Guidance Professionnelle");
messages.set("guidance_spirituelle", "la Guidance Spirituelle");
messages.set("guidance_emotionnelle", "la Guidance Emotionnelle");
messages.set("guidance_2_themes", "la Guidance 2 thèmes");
messages.set("guidance_3_themes", "la Guidance 3 thèmes");
messages.set("guidance_parentale", "la Guidance Parentale");
messages.set("guidance_flash_qr", "la Guidance Question réponse");
messages.set("question_flash", "la Guidance Flash Message des Guides");
messages.set("guidance_animale", "la Guidance Communication animale");
messages.set("guidance_vies_anterieures", "la Guidance Vies antérieures/mémoires bloquantes");
messages.set("guidance_flash_etat", "la Guidance Etat d'esprit");
messages.set("soin", "le Soin énergétique");
messages.set("hypnose_regressive", "l'Hypnose Régressive Spirituelle");
messages.set("hypnose_revelatrice", "l'Hypnose Spirituelle Révélatrice");

function selectFields(val) {
    clearSelection();
    switch (val) {
        case "guidance_ete":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo").checked = true;
            document.getElementById("contexte").checked = true;
            document.getElementById("numero").checked = true;
            break;
        case "guidance_sentimentale":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo_photo_personne").checked = true;
            document.getElementById("situation_amoureuse").checked = true;
            document.getElementById("numero").checked = true;
            break;
        case "guidance_pro":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo").checked = true;
            document.getElementById("situation_pro").checked = true;
            document.getElementById("numero").checked = true;
            break;
        case "guidance_spirituelle":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo").checked = true;
            document.getElementById("questions").checked = true;
            document.getElementById("numero").checked = true;
            break;
        case "guidance_2_themes":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo").checked = true;
            document.getElementById("deux_themes").checked = true;
            document.getElementById("numero").checked = true;
            break;
        case "guidance_3_themes":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo").checked = true;
            document.getElementById("trois_themes").checked = true;
            document.getElementById("numero").checked = true;
            break;
        case "guidance_parentale":
            document.getElementById("naissance_naissance_enfant").checked = true;
            document.getElementById("photo_photo_enfant").checked = true;
            document.getElementById("statut").checked = true;
            document.getElementById("questions").checked = true;
            document.getElementById("numero").checked = true;
            break;
        case "guidance_flash_qr":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo").checked = true;
            document.getElementById("question_precise").checked = true;
            break;
        case "guidance_emotionnelle":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo").checked = true;
            document.getElementById("numero").checked = true;
            document.getElementById("emotion").checked = true;
            break;
        case "question_flash":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo").checked = true;
            break;
        case "guidance_animale":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo_photo_animal").checked = true;
            document.getElementById("questions").checked = true;
            document.getElementById("numero").checked = true;
            break;
        case "guidance_vies_anterieures":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo").checked = true;
            break;
        case "guidance_flash_etat":
            document.getElementById("naissance_naissance_autre").checked = true;
            document.getElementById("photo_photo_autre").checked = true;
            document.getElementById("nature_relation").checked = true;
            break;
        case "soin":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo").checked = true;
            document.getElementById("problematique").checked = true;
            document.getElementById("numero").checked = true;
            break;
        case "hypnose_regressive":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo").checked = true;
            document.getElementById("hypnose_premiere").checked = true;
            document.getElementById("questions_hypnose").checked = true;
            document.getElementById("hypnose_formule").checked = true;
            break;
        case "hypnose_revelatrice":
            document.getElementById("naissance").checked = true;
            document.getElementById("photo").checked = true;
            document.getElementById("hypnose_premiere").checked = true;
            document.getElementById("hypnose_formule").checked = true;
            break;
    }
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