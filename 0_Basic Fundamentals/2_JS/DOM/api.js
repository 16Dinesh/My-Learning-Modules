const display = document.querySelector(".display-cordinates");
const btn = document.querySelector('button')

btn.addEventListener('click',()=> {
    //getLocation()
    getPermistion()
})

// function getLocation() {
//      navigator.geolocation.getCurrentPosition(showPosition)
// }

function getPermistion() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
      } catch {
        display.textContent= "Error In Fetching in the Locations Cords! "
        console.log(err)
      }
}


function showPosition(position) {
    display.textContent = "Latitude: " +  position.coords.latitude + 
    "\nLongitude: " + position.coords.longitude;
}