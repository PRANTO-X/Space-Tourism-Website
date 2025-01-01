import {data} from "./data.js";
console.log(data);

// function for navbar
let navbar = document.querySelector('.navbar');
let navBtn = document.querySelector('.nav-btn');


navBtn.addEventListener('click',()=>{
    navBtn.classList.toggle('open');
    navbar.classList.toggle('show');
});


// destination

document.querySelectorAll('.destination-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); 
      const name = e.target.textContent.trim();
      updateDestination(name);
    });
  });
  
  let updateDestination = (name) => {
    const destinationBody = document.querySelector('.destination-body');
  
    // Fade out
    destinationBody.classList.add('hidden');
  
    setTimeout(() => {
      let destination = data.destinations.find(dest => dest.name.toLowerCase() === name.toLowerCase());
      if (destination) {
        document.getElementById("planet-image").src = destination.images.png;
        document.getElementById("planet-image").alt = destination.name;
  
        // Update name
        document.getElementById('name').textContent = destination.name;
        // Update description
        document.getElementById("description").textContent = destination.description;
  
        // Update distance and travel time
        document.getElementById("distance").textContent = destination.distance;
        document.getElementById("travel").textContent = destination.travel;
  
        // Update active link
        const links = document.querySelectorAll(".destination-link");
        links.forEach(link => link.classList.remove("active"));
        const activeLink = Array.from(links).find(link => link.textContent.trim().toLowerCase() === name.toLowerCase());
        if (activeLink) activeLink.classList.add("active");
      }
  
      // Fade in
      destinationBody.classList.remove('hidden');
    }, 500); // Match the duration of the fade-out effect
  };
  
  // Initial call to display default data
  updateDestination('Moon');
  

