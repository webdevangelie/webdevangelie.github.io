const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBoxes = document.querySelectorAll('.text-box');

//Dark or Light images
function imageMode(theme) {
    image1.src = `img/covid_${theme}.svg`;
    image2.src = `img/quote_${theme}.svg`;
    image3.src = `img/wip_${theme}.svg`;
}

//Dark Mode Styles
function darkMode() {
    toggleSwitch.checked = true;

    Array.prototype.forEach.call(textBoxes, function (textBox) {
        textBox.style.background = 'rgb(255 255 255 / 50%)';
        console.log('textBoxes[0]');
    });

    //change the NAV background color
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';

    //textBox[i].style.background = 'rgb(255 255 255 / 50%)';

    //change the ICON from sun to moon
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

    //call images as per dark theme
    imageMode('dark');
}

function lightMode() {
    //change the NAV background color
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';

    Array.prototype.forEach.call(textBoxes, function (textBox) {
        textBox.style.background = 'rgb(0 0 0 / 50%)';
        console.log('textBoxes[0]');
    });

    //change the ICON from sun to moon
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');


     //call images as per light theme
    imageMode('light');
}

//Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        // toggleSwitch.checked = true;
        darkMode();
    }
} 