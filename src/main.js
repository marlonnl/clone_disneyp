document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('.header');

        header.classList.toggle('header--is-hidden', scrollPosition > heroHeight);

        // if (scrollPosition < heroHeight) {
        //     removeHeaderElements();
        // } else {
        //     addHeaderElements();
        // }
    });
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const tabTarget = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);

            hideAllTabs();
            removeActiveClasses();

            tab.classList.add('shows__list--is-active');
            btn.target.classList.add('shows__tabs__button--is-active');
        });
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', toggleFaqQuestion);
    }
});

// function removeHeaderElements() {
//     const header = document.querySelector('.header');
//     header.classList.remove('header--is-hidden');
// }

// function addHeaderElements() {
//     const header = document.querySelector('.header');
//     header.classList.add('header--is-hidden');
// }

function removeActiveClasses() {
    const tabButtons = document.querySelectorAll('[data-tab-button');

    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('shows__tabs__button--is-active');
    }
}


function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function toggleFaqQuestion(element) {
    const classe = 'faq__questions__item--is-open';
    const parentNode = element.target.parentNode;

    parentNode.classList.toggle(classe);
}