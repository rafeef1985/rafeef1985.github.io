const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.getElementById("showFormButton").addEventListener("click", function() {
    var contactFormContainer = document.getElementById("contactFormContainer");
    if (contactFormContainer.style.display === "none") {
        contactFormContainer.style.display = "block";
    } else {
        contactFormContainer.style.display = "none";
    }
});
