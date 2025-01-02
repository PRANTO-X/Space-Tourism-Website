import {data} from "./data.js";
console.log(data);

document.addEventListener('DOMContentLoaded', () => {
  const mainElement = document.querySelector('main');
  if (mainElement) {
      setTimeout(() => {
          mainElement.classList.remove('hidden'); 
      }, 500); 
  }
});

// function for navbar
let navbar = document.querySelector('.navbar');
let navBtn = document.querySelector('.nav-btn');
let navLinks = document.querySelectorAll('.nav-link');

navBtn.addEventListener('click',()=>{
    navBtn.classList.toggle('open');
    navbar.classList.toggle('show');
});


// destination
const links = document.querySelectorAll(".destination-link");

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();  
      links.forEach(link => link.classList.remove("active"));
      e.target.classList.add('active');
      const name = e.target.textContent.trim();
      updateDestination(name);
    });
  });
  
  let updateDestination = (name) => {
    let destinationDetail = document.querySelector('.destination-detail');
    let infoContainer = document.querySelector('.info-container');
    let underLine = document.querySelector('.underline')
    let planetImg = document.querySelector('#planet-image');
    if(!destinationDetail) return;
    // Fade out
    destinationDetail.classList.add('hidden');
    infoContainer.classList.add('hidden');
    underLine.classList.add('hidden');
    planetImg.classList.add('hidden');
  
    setTimeout(() => {
      let destination = data.destinations.find(dest => dest.name.toLowerCase() === name.toLowerCase());
      if (destination) {
        planetImg.src = destination.images.png;
        planetImg.alt = destination.name;

        document.getElementById('name').textContent = destination.name;
        document.getElementById("description").textContent = destination.description;
        document.getElementById("distance").textContent = destination.distance;
        document.getElementById("travel").textContent = destination.travel;
      }
  
      // Fade in
      destinationDetail.classList.remove('hidden');
      infoContainer.classList.remove('hidden');
      underLine.classList.remove('hidden');
      planetImg.classList.remove('hidden');
    }, 500); 
  };
  
  updateDestination('Moon');
  

// crew
let updateCrew = (role) => {
  let crewDetail= document.querySelector('.crew-detail');
  let crewImg = document.querySelector('#crew-image');
  if(!crewDetail) return;
  crewDetail.classList.add('hidden');
  crewImg.classList.add('hidden');
  setTimeout(() => {
    let crew = data.crew.find((e) => e.role.toLowerCase() === role.toLowerCase());
    if (crew) {
      document.querySelector('.role').textContent = crew.role;
      document.querySelector('.crew-name').textContent = crew.name;
      crewImg.src = crew.images.png;
      crewImg.alt = crew.name;
      document.querySelector('.bio').textContent = crew.bio;
    }

    crewDetail.classList.remove('hidden');
    crewImg.classList.remove('hidden');
  }, 500);
};

let bullets = document.querySelectorAll('.bullets span');

bullets.forEach((bullet) => {
  bullet.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Clicked role:", e.target.getAttribute('role')); 
    bullets.forEach((b) => b.classList.remove('active')); 
    e.target.classList.add('active'); 
    let role = e.target.getAttribute('role');
    updateCrew(role);
  });
});

updateCrew('commander');

// Technology
let updateTechnology = (techName)=>{
  let techDetail = document.querySelector('.tech-detail');
  let techImg = document.querySelector('#tech-img');
  if(!techDetail) return;

  techDetail.classList.add('hidden');
  techImg.classList.add('hidden');

    setTimeout(()=>{
      let tech = data.technology.find(tech => tech.name.toLowerCase() === techName.toLowerCase());
      if(tech){
        document.querySelector('.tech-name').textContent = tech.name;
        document.querySelector('.description').textContent = tech.description;

        const techImg = document.querySelector('#tech-img');
        const isSmallScreen = window.matchMedia('(max-width: 855px)').matches;

        if (isSmallScreen) {
            techImg.src = tech.images.landscape;
        } else {
            techImg.src = tech.images.portrait;
        }
        document.querySelector('#tech-img').alt = tech.name;
      }

      techDetail.classList.remove('hidden');
      techImg.classList.remove('hidden');
    },500)
}

let numbers = document.querySelectorAll('.numbers span')

numbers.forEach(number => {
  number.addEventListener('click',(e)=>{
    e.preventDefault();
    numbers.forEach(num => num.classList.remove('active'));
    e.target.classList.add('active');
    let name = e.target.getAttribute('name');
    updateTechnology(name);
  });
});

updateTechnology('Launch vehicle');