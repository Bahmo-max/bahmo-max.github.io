
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("ContactmeForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        const thankYouMessage = document.getElementById("thankYouMessage");

        thankYouMessage.textContent = `Thank you, ${name}! Your email (${email}) has been received.`;
        
        form.reset();
    });
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
