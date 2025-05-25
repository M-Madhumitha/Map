let directions = document.getElementById("directions")
let ic = document.getElementById("ic")
let from = document.getElementById("from")
let to = document.getElementById("to")
let searchbtn = document.getElementById("searchbtn")
let pushing = document.getElementById("pushing")

ic.addEventListener("click", ()=>{
     pushing.innerHTML = `<iframe src="https://maps.google.com/maps?q=${directions.value},&amp;z=15&amp;output=embed"  width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
     directions.value=''
})

searchbtn.addEventListener("click", ()=>{
    pushing.innerHTML =`<iframe  width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?saddr=${from.value}&daddr=${to.value}&output=embed"></iframe>`
    from.value =''
    to.value=''
})
