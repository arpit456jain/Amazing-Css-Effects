const lists = document.querySelectorAll(".list");
lists.forEach(function(item)
{
    item.addEventListener("click",function()
    {
        for( i =0 ;i<lists.length;i++)
        {
            lists[i].classList.remove("active");
        }
        item.classList.add("active");
    })
});

const button = document.querySelector(".togglebtn");
const navbar = document.querySelector(".navbar");
button.addEventListener("click",function()
{
    button.classList.toggle("active");
    navbar.classList.toggle("active");
});