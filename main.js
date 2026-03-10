class Elements{
    constructor(){
        this.navbar = document.querySelector('.navbar');
        this.buttons = this.navbar.querySelectorAll('button');
        this.addEventListeners();
    }

    addEventListeners(){
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const targetId = e.target.id.replace('jump-', '');
                this.scrollToSection(targetId);
            });
        });
    }

    scrollToSection(sectionId){
        let targetElement;

        if(sectionId === 'home'){
            targetElement = document.querySelector('.MainContent');
        } else if(sectionId === 'services'){
            targetElement = document.querySelector('.section-1');
        } else if(sectionId === 'gallery'){
            targetElement = document.querySelector('.gallery');
        } else if(sectionId === 'contact'){
            targetElement = document.querySelector('.contact-us');
        }

        if(targetElement){
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new Elements();
});