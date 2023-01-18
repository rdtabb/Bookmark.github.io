const buttonOne = document.querySelector('.mobile-nav-toggle');
const navigation = document.querySelector('.primary-navigation')

buttonOne.addEventListener('click', () => {
    const isOpened = buttonOne.getAttribute('aria-expanded')
    if (isOpened === "true") {
        buttonOne.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('opacity')
    } else {
        buttonOne.setAttribute('aria-expanded', 'true');
        navigation.classList.add('opacity')
    }
})