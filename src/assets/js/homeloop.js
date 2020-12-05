const homeloop = document.querySelector('#homeloop');
const countries = ["Germany", "France", "Italy"];

setInterval(function(){
    countries.forEach((country) => {
        console.log('1')
        setTimeout(function () {
            homeloop.innerHTML = country;
        }, 500);
    });
    },1000);