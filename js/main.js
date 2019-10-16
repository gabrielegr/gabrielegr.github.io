

function day_btn(){
let btn_day1 = document.getElementById('btn_day1')

btn_day1.addEventListener("click",()=>{
    let this_day=document.getElementById('day1')
    this_day.style.display = "block"
    var no_day=[2,3,4,5] 

for (i =0; i < no_day.length; i++) {
  let remove_display=document.getElementById(`day${no_day[i]}`)  
  remove_display.style.display = "none" 
}} )

let btn_day2 = document.getElementById('btn_day2')

btn_day2.addEventListener("click",()=>{
    let this_day=document.getElementById('day2')
    this_day.style.display = "block"
    var no_day=[1,3,4,5] 

for (i =0; i < no_day.length; i++) {
  let remove_display=document.getElementById(`day${no_day[i]}`)  
  remove_display.style.display = "none" 
}} )

let btn_day3 = document.getElementById('btn_day3')

btn_day3.addEventListener("click",()=>{
    let this_day=document.getElementById('day3')
    this_day.style.display = "block"
    var no_day=[1,2,4,5] 

for (i = 0; i < no_day.length; i++) {
  let remove_display=document.getElementById(`day${no_day[i]}`)  
  remove_display.style.display = "none" 
}} )

let btn_day4 = document.getElementById('btn_day4')

btn_day4.addEventListener("click",()=>{
    let this_day=document.getElementById('day4')
    this_day.style.display = "block"
    var no_day=[1,2,3,5] 

for (i = 0; i < no_day.length; i++) {
  let remove_display=document.getElementById(`day${no_day[i]}`)  
  remove_display.style.display = "none" 
}} )

let btn_day5 = document.getElementById('btn_day5')

btn_day5.addEventListener("click",()=>{
    let this_day=document.getElementById('day5')
    this_day.style.display = "block"
    var no_day=[1,2,3,4] 

for (i = 0; i < no_day.length; i++) {
  let remove_display=document.getElementById(`day${no_day[i]}`)  
  remove_display.style.display = "none" 
}} )
}

window.onload = function() {
   day_btn();
  };
