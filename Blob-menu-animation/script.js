function toggle() {
    let links = document.getElementById("links");
    let blob = document.getElementById("blob");
    blob.classList.toggle("open");
    if (links.style.display == "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }