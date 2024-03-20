document.addEventListener('DOMContentLoaded', function() {
            
    var contactButton = document.querySelector('.contact');

    var contactSection = document.getElementById('contact-info');

    contactButton.addEventListener('click', function() {
        
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});