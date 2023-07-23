document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const navbar = header.querySelector('.navbar');

    if (window.scrollY > 100) {
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark');
    }
});



/* const counters = document.querySelectorAll(".count");
const speed = 200;

counters.forEach((counter) => {
    const updateCount = () => {
        const target = parseInt(+counter.getAttribute("data-target"));
        const count = parseInt(+counter.innerText);
        const increment = Math.trunc(target / speed);
        console.log(increment);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    };
    updateCount();
}); */


/* const runCounter = () => {
    const counters = document.querySelectorAll(".count");
    const speed = 1769;

    counters.forEach((counter) => {
        const updateCount = () => {
            const target = parseInt(+counter.getAttribute("data-target"));
            const count = parseInt(+counter.innerText);
            const increment = Math.trunc(target / speed);
            console.log(increment);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Intersection Observer
const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            runCounter();
            observer.unobserve(entry.target); // Stop observing after it's triggered once
        }
    });
}, options);

// Observe the specific section
const specificSection = document.querySelector(".counting");
observer.observe(specificSection); */





const runCounter = () => {
    const counters = document.querySelectorAll(".count");
    const speed = 1000;

    counters.forEach((counter) => {
        const updateCount = () => {
            const target = parseInt(+counter.getAttribute("data-target"));
            const count = parseInt(+counter.innerText);
            const increment = Math.trunc(target / speed);
            console.log(increment);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
                counter.classList.add("highlight"); // Add the CSS class to highlight the counter
            }
        };
        updateCount();
    });
};

// Intersection Observer
const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            runCounter();
            observer.unobserve(entry.target); // Stop observing after it's triggered once
        }
    });
}, options);

// Observe the specific section
const specificSection = document.querySelector(".counting");
observer.observe(specificSection);