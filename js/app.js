/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
*/
// Navigation Global Var
const navbar_list = document.querySelector("#navbar__list");
// Section Global Var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



// build the nav

const createNavbarItems = () => {
    // looping over all sections 
    sections.forEach(section => {
        const newItem = document.createElement('li');
        newItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;

        //append all elments to the nav
        navbar_list.appendChild(newItem);


    });
};
createNavbarItems();


// Add class 'active' to section when near top of viewport

const activeSection = () =>{
    sections.forEach(section =>{
        if (section.getBoundingClientRect().top <=150 && section.getBoundingClientRect().top>=-400 ){

            section.classList.add("your-active-class");

            
        }
        else {
            section.classList.remove("your-active-class");
            
        }
    });
};
window.addEventListener('scroll',activeSection);





/**
 * End Main Functions
 * Begin Events
 * 
*/



// // Scroll to section on link click



const scrollToElement = (element) => 
{
    const destination = element.textContent.replace(/\s/g, "").toLowerCase();
    document.getElementById(destination).scrollIntoView({ behavior: "smooth" });
  }
  
  document.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click",  (e) => {
      e.preventDefault();
      scrollToElement(link);
    });
  });