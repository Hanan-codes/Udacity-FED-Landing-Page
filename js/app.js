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

const nav_link =document.querySelectorAll(".menu__link");

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






const scrollLinks = document.querySelectorAll('#navbar__list li');


// Add class 'active' to section when near top of viewport

const activeSection = () =>{
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top <=150 && sections[i].getBoundingClientRect().top>=-400 ){
      sections[i].classList.add("your-active-class");
      scrollLinks[i].classList.add('active__item');


    }
        
    else {
      sections[i].classList.remove("your-active-class");
      scrollLinks[i].classList.remove('active__item');



            }
      };
  }
window.addEventListener('scroll',activeSection);




/**
 * End Main Functions
 * Begin Events
 * 
*/






const scrollToElement = (element) => 
{
    const destination = element.textContent.replace(/\s/g, "").toLowerCase();
    document.getElementById(destination).scrollIntoView({ behavior: "smooth" });
  }
  
    nav_link.forEach((link) => {
    link.addEventListener("click",  (e) => {
      e.preventDefault();
      scrollToElement(link);
    });
  });



