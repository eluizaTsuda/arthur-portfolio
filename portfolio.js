// PORTFOLIO FILTER
// Set Portfolio Filter Variables
const filterContainer = document.querySelector(".portfolio-filter");
const filterBtns = filterContainer.children;
const totalFilterBtns = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfolioItems = portfolioItems.length;
const splash = document.querySelector(".splash");

// Set Splash Image Variables
let all = document.querySelector('#all');
let cars = document.querySelector('#cars');
let objects = document.querySelector('#objects');
let architecture = document.querySelector('#architecture');
let nft = document.querySelector('#nft');
let game = document.querySelector('#game');

// Add Event Listeners for Splash Image Changes
all.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash_cars.png)";
})
cars.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash_senna_car.png)";
})
objects.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash_mm.png)";
})
architecture.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash_architecture.png)";
})
nft.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash_nft.png)";
})
game.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash_game.png)";
})

// Filter and Display Items for the Selected Category
for(let i = 0; i < totalFilterBtns; i++){
    filterBtns[i].addEventListener("click", function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for(let k = 0; k < totalPortfolioItems; k++){
            if(filterValue === portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else {
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }
    })
}