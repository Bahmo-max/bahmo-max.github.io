
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("ContactmeForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById('message').value;


        const thankYouMessage = document.getElementById("thankYouMessage");

        thankYouMessage.textContent = `Thank you, ${name}! Your email (${email}) has been received.`;
        console.log("Name entered:", name);
        console.log("Email entered:", email);
        console.log("Message entered :",message);

        form.reset();
    });
});



document.getElementById('showContactInfo').addEventListener('click', function () {
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.style.display = contactInfo.style.display === "none" ? "block" : "none";
});


function toggleContactInfo() {
    const contactSection = document.getElementById('showContact');
    const toggleButton = document.getElementById('toggleButton');
    if (contactSection.style.display === 'none' || contactSection.style.display === '') {
        contactSection.style.display = 'block';
        toggleButton.innerText = 'Hide Contact Info';
    } else {
        contactSection.style.display = 'none';
        toggleButton.innerText = 'Show Contact Info';
    }
}
