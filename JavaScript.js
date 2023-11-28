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

