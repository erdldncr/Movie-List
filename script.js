let addButton=document.querySelector('button')
let watchList=document.querySelector('ul')
let movie=document.querySelector('input')
let allLi=document.querySelectorAll('li')
allLi.forEach(item=>item.setAttribute('onclick','remove(this)'))
addButton.addEventListener('click',function()
{
    event.preventDefault()
    let li=document.createElement('li')
    li.innerHTML=`<span class='name'>${movie.value}</span>
    <span class='delete'>delete</span>`
    li.setAttribute('onclick','remove(this)')
    console.log(li)
    watchList.appendChild(li)     
})
function remove(element){
    element.remove()
}