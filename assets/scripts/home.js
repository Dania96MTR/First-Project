const searchBtn = document.querySelector("#search-btn")
const searchForm = document.querySelector(".search-form")
const loginForm = document.querySelector(".login-form")
const menuBar = document.querySelector("#menu-bar")
const nav = document.querySelector("nav")
const video = document.querySelectorAll(".video")
const trip = document.querySelector(".trip")
const forms = document.querySelectorAll("form")
const inputPlace = document.querySelector(".input-place")
const option = document.querySelectorAll("option")

function showbar(){
    searchBtn.classList.toggle("fa-times")
    searchForm.classList.toggle("active")

}
function showform(){
    loginForm.classList.add("active")

}
function hideForm(){
    loginForm.classList.remove("active")

}
function showmenu(){
    menuBar.classList.toggle("fa-times")
    nav.classList.toggle("active")
}

 
var swiper = new Swiper(".review-slider", {
    spaceBetween :20 ,
    loop: true,
    autoplay: {
        delay:2000,
    },
   
});

 
forms.forEach(form =>{
   form.addEventListener("submit" , (e) =>{
        e.preventDefault();
        
    })

})


const logo = document.querySelector(".logo")
logo.addEventListener("click" , ()=>{
    window.open("./home.html")
})

function myFunction() {
    var dots = document.querySelector(".dots");
    var moreText = document.querySelector(".more");
    var btnText = document.querySelector(".my-btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  
  


 fetch("home.json")
.then(res => res.json())
.then(data => {
    let dataAsString = JSON.stringify(data)
    localStorage.setItem('trips' , dataAsString)
    dataAsString = localStorage.getItem('trips')
    let dataAsObj =JSON.parse(dataAsString)
   
})
 
const getTrips = async () => {
    const res = await fetch('home.json')
    const data = await res.json()
    const Data = data.Trips
    
    const titles = document.querySelectorAll(".title")
searchBtn.addEventListener("keyup" , ele =>{
    const e = ele.target.value.toLowerCase()
    titles.forEach(title =>{
        console.log(title)

        if (title.querySelector(".group").textContent.toLocaleLowerCase().startsWith(e) ) {
            console.log(true)
            
        }  else console.log(false)
    })
})
    Data.forEach(ele => {
        trip.innerHTML += 
        `
        <div class="group d-flex flex-column align-items-start" >
             <div class="content-img"><img class="trip-img" src= "${ele.image}"></div>
              <div class="trip-information">
                  <h2 class ="title">${ele.title}</h2>
                  <p>Arrival: ${ele.Arrival}</p>
                  <p>Leaving: ${ele.Leaving}</p>
                  <span class="price">price: $${ele.price}</span> 
                 </div>
                <div>
                   <button class="btn" id=${ele.id}>Book</button>
                </div>
        </div>`
    });
}

getTrips()



trip.addEventListener("click" , () =>{
        window.open("./book.html")
})

let myAudio = document.querySelector(".my-audio")
myAudio.volume = 0.1

/* const titles = document.querySelectorAll(".title")
searchBtn.addEventListener("keyup" , ele =>{
    const e = ele.target.value.toLowerCase()
    titles.forEach(title =>{
        console.log(title)

        if (title.querySelector(".trip-information").textContent.toLocaleLowerCase().startsWith(e) ) {
            return title
            
        }  
    })
}) */