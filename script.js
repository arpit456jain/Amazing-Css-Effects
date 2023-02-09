// Navbar Toggling starts

//NavBar
$(document).ready(function () {
  $('ul.navbar-nav a').click(function (e) {
    $('ul.navbar-nav a').removeClass('active')
    $(this).addClass('active')
  })
})

// Navbar Toggling end

// scroll to top starts

var scrolltop = $('#scroll-top')

$(window).scroll(function () {
  if ($(window).scrollTop() > 80) {
    scrolltop.addClass('active')
  } else {
    scrolltop.removeClass('active')
  }
})

scrolltop.on('click', function (e) {
  e.preventDefault()
  $('html, body').animate({ scrollTop: 0 }, '200')
})

// scroll to top ends

let projects = []
const allProjectList = document.getElementById('styles')
const experi = document.getElementById('cardd')
// console.log(allProjectList)
const searchBar = document.getElementById('searchBar')
const ProjectCounter = document.getElementById('counter')
// console.log(searchBar)

// Infinite scrolling
var doLoadingOnScroll = true
var noOfCardsToLoad = 5
var cardLoadedYet = 0
var loadingBalls = false
const loading = document.querySelector('.loading')
// console.log(projects[0])
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement

  //   console.log({ scrollTop, scrollHeight, clientHeight })

  var footerHeight = document.getElementById('footer').offsetHeight
  //   console.log(footerHeight)

  if (
    doLoadingOnScroll == true &&
    clientHeight + scrollTop >= scrollHeight - footerHeight &&
    cardLoadedYet < projects.length
  ) {
    // show the loading animation
    // setTimeout(showLoading,1000);
    // showLoading()
  }
})

function showLoading() {
  loading.classList.add('show')
  // load more data
  // showNextItems();
  if (loadingBalls == false) {
    loadingBalls = true
    setTimeout(showNextItems, 500)
  }
}

function showNextItems() {
  //   console.log('show next items')
  const container = document.getElementsByClassName('container')[0]

  //   console.log(projects.length, cardLoadedYet)
  let temp = cardLoadedYet

  for (
    ;
    cardLoadedYet <=
    (noOfCardsToLoad + temp < projects.length
      ? noOfCardsToLoad + temp
      : projects.length - 1);
    cardLoadedYet++
  ) {
    // console.log(projects[cardLoadedYet])
    experi.innerHTML += `<div class="stylebox">
                 <div class="image">
                      <img src="./${projects[cardLoadedYet].name}/preview.png" alt="">
                  </div>
                  <div class="card-data">
                      <p class="card-heading">${projects[cardLoadedYet].name}</p>
                      <a href="${projects[cardLoadedYet].link}"><button class="btnn">View</button></a>
                  </div>
           
              </div>`
    ProjectCounter.innerHTML = projects.length
  }

  if (cardLoadedYet >= projects.length) loading.classList.remove('show')

  loadingBalls = false
}

// end of infinite scrolling

searchBar.addEventListener('keyup', (e) => {
  doLoadingOnScroll = false
  const searchString = e.target.value
  const filteredProjects = projects.filter((projects) => {
    return projects.name.toLowerCase().includes(searchString.toLowerCase())
  })

  //   console.log(filteredProjects)
  loading.classList.remove('show')
  displayProjects(filteredProjects)
})

const getProject = fetch('style_links.json')
  .then((response) => response.json())
  .then((data) => {
    projects = data
    //extra arr bna aur km store kr vohi display kra aur append krtey jaa
    //search real waley se krna
    // displayProjects(projects)
    showNextItems()
    console.log(projects)
  })

// // <a target="_blank" href="https://github.com/arpit456jain/Amazing-Css-Effects/tree/master/${links[i].name}" class="code">Code</a>
//display projects on searching

const displayProjects = (projects) => {
  const htmlString = projects
        .map((project) => {
            return`<div class="stylebox">
                 <div class="image">
                      <img src="./${project.name}/preview.png" onerror="this.src='logo.png'" alt="">
                  </div>
                  <div class="card-data">
                      <p class="card-heading">${project.name}</p>
                      <a href="${project.link}"><button class="btnn">View</button></a>
                  </div>
           
              </div>`;
              
        })

  experi.innerHTML = htmlString
  ProjectCounter.innerHTML = projects.length
}
    

getProject();
