// Navbar Toggling starts

//NavBar
$(document).ready(function () {
    $("ul.navbar-nav a").click(function (e) {
     $("ul.navbar-nav a").removeClass("active");
     $(this).addClass("active");
      });
  });

// Navbar Toggling end 

// scroll to top starts

var scrolltop = $('#scroll-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 80) {
        scrolltop.addClass('active');
    } else {
        scrolltop.removeClass('active');
    }
});
    
scrolltop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
});

// scroll to top ends

let projects = [] ;
const allProjectList = document.getElementById('styles');
const experi = document.getElementById("cardd")
console.log(allProjectList)
const searchBar = document.getElementById("searchBar");
const ProjectCounter = document.getElementById('counter');
console.log(searchBar);

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredProjects = projects.filter( projects => {
        
        return projects.name.toLowerCase().includes(searchString.toLowerCase());
    });

    console.log(filteredProjects)
    displayProjects(filteredProjects);
});


const getProject = fetch('style_links.json')
                .then(response => response.json())
                .then(data => {
                    projects = data;
                    displayProjects(projects)
                    console.log(projects)

});


    // <a target="_blank" href="https://github.com/arpit456jain/Amazing-Css-Effects/tree/master/${links[i].name}" class="code">Code</a>
    const displayProjects = (projects) => {

        const htmlString = projects
        .map((project) => {
            return`<div class="stylebox">
                 <div class="image">
                      <img src="https://raw.githubusercontent.com/arpit456jain/Amazing-Css-Effects/master/${project.name}/preview.png" alt="">
                  </div>
                  <div class="card-data">
                      <p class="card-heading">${project.name}</p>
                      <a href=${project.link}><button class="btnn">View</button></a>
                  </div>
           
              </div>`;
              
        })
        
        
        experi.innerHTML = htmlString
        ProjectCounter.innerHTML = projects.length;
        
    }

    getProject();
