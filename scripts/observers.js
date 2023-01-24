const faders = document.querySelectorAll('.disappear')

const fadersOptions = { 
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
}

const appearOnScroll = new IntersectionObserver(function (
    entries, 
    appearOnScroll
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in')
            } else {
                entry.target.classList.remove('slide-in')
            }
        })
    }, 
fadersOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})