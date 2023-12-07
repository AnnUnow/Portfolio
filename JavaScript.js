console.log("Hello world")
const d = new Date("2023-11-28");
document.getElementById("demo").innerHTML = d.getFullYear();
var tablinks = document.getElementsByClassName("tab-links");
			var tabcontents = document.getElementsByClassName("tab-contents");
			function opentab(tabname){
				for(tablink of tablinks){
					tablink.classList.remove("active-link");
				}
				for(tabcontent of tabcontents){
					tabcontent.classList.remove("active-tab");
					tabcontent.classList.add("initial-tab");
					tabcontent.setAttribute("hidden", true);
				}
			var selectedTab = document.getElementById(tabname);
   			selectedTab.classList.add("active-tab");
    		selectedTab.removeAttribute("hidden");				
				event.currentTarget.classList.add("active-link");
			}

var btnAlert = document.getElementById('btn-alert');
btnAlert.addEventListener('click', function() {
    alert('Hello world!');
});
document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'Goodbye';
    btnAlert.style.backgroundColor = '#3498db';  
    btnAlert.style.color = '#00796b';
};
document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'Welcome';
    btnAlert.style.backgroundColor = '';  
    btnAlert.style.color = '';  
};
let count = 1;
 
const buttonfeed = document.getElementById('btn-counter');
const counterText = document.getElementById('txt-counter');
 
 
const numbersList = document.getElementById('numbers');
const counterButton = document.getElementById('btn-counter');
const numbersButton = document.getElementById('btn-counter');
 
buttonfeed.addEventListener('click', function() {
   
count = count + 1;
 
    counterText.innerHTML = '' + count + '';
 
    if (count % 2 === 0) {
        console.log('Even')
         counterText.classList.remove('odd');
         counterText.classList.add('even');
     } else {
         console.log('Odd')
         counterText.classList.remove('even');
         counterText.classList.add('odd');
     };
});



