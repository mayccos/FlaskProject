    const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),

    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),

    pwShowHide = document.querySelectorAll(".pw_hide");

    formOpenBtn.addEventListener("click", () => home.classList.add("show"));
    formCloseBtn.addEventListener("click", () => {
    home.classList.remove("show");
    window.location.reload();
    });


    function submitForm() {
    // Récupérer les valeurs du formulaire
        let email = document.getElementById("email").value;
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let age = document.getElementById("age").value;
        let life = document.getElementById("life").value;


        // Afficher le message de soumission dans le formulaire sans le cacher
        let formSection = document.querySelector(".message_form");
        formSection.innerHTML = `
        <h2>Merci pour votre soumission !</h2>
        <div id="submittedData">
        <h3>Informations soumises :</h3>
        
        <p>Nom: ${firstName}</p>
        <p>Nom: ${lastName}</p>
        <p>Age: ${age}</p>
        <p>Email: ${email}</p>
        <p>Status: ${life}</p>
        </div>
    `;
    }