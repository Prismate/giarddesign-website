//------------------ANIMATIONS-------------------

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//------------------ALBUM-------------------

var macyInstance = Macy({
    container: "#macy-container",
    trueOrder: true,
    columns: 3,
    margin: {
        x: 12,
        y: 15
    },
    waitForImages: false,
});