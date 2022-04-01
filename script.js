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
const experi = document.getElementById("cardd")
const ProjectCounter = document.getElementById('counter');
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredProjects = projects.filter( projects => {
        
        return projects.name.toLowerCase().includes(searchString.toLowerCase());
    });

    displayProjects(filteredProjects);
});

const getProject = fetch('style_links.json')
                .then(response => response.json())
                .then(data => {
                    projects = data;
                    displayProjects(projects)

});

 // <a target="_blank" href="https://github.com/arpit456jain/Amazing-Css-Effects/tree/master/${links[i].name}" class="code">Code</a>
 const displayProjects = (projects) => {

      
    const htmlString = projects
    .map((project) => {
      console.log(projects.length)
        return`<div class="stylebox">
          
              <img class="image" src="/${project.name}/preview.png" alt="" >
              <div class="card-data">
                  <p class="card-heading">${project.name}</p>
                  <a href=${project.link}><button class="btnn">View</button></a>
              </div>
       
          </div>`;
          
    })
   
    // allProjectList.innerHTML = htmlString;
    experi.innerHTML = htmlString
    ProjectCounter.innerHTML = projects.length;
    
}

getProject();

// fetch('style_links.json')
//     .then(response => response.json())
//     .then(data => {
//         let links = data;

//         for (let i = 0; i < links.length; i++) {
//             console.log(links.length);
//             let StyleBoxDiv = document.createElement('div');
//             StyleBoxDiv.innerHTML = 
//             `<div class="stylebox">
//                 <div class="image">
//                     <img src="https://raw.githubusercontent.com/arpit456jain/Amazing-Css-Effects/master/${links[i].name}/preview.png" alt="">
//                 </div>
//                 <div class="card-data">
//                     <p class="card-heading">${links[i].name}</p>
//                     <a href=${links[i].link}><button class="btnn">View</button></a>
//                 </div>
            
//             </div>`;
//             document.getElementById('styles').appendChild(StyleBoxDiv);
//         };
// });
    // <a target="_blank" href="https://github.com/arpit456jain/Amazing-Css-Effects/tree/master/${links[i].name}" class="code">Code</a>