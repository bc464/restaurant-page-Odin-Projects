(()=>{var t={34:()=>{(()=>{const t=document.querySelector("#content"),e=document.createElement("header");e.innerHTML='\n\t\t<nav>\n\t\t    <ul>\n\t\t      <li data-tab-target="#home" class="tab red">Home</li>\n\t\t      <li data-tab-target="#menu" class="tab">Menu</li>\n\t\t      <li data-tab-target="#contact" class="tab">Contact</li>\n\t\t    </ul>\n\t  \t</nav> ',t.appendChild(e)})()}},e={};function n(a){var c=e[a];if(void 0!==c)return c.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}(()=>{"use strict";n(34),(()=>{const t=document.querySelector("#content"),e=document.createElement("div");e.classList.add("tab-content"),e.innerHTML='\n  <div id="home" class="active" data-tab-content>\n  \t\n  <main>\n    <div class="heading">\n      <h1>The Chef\'s Corner</h1>\n      <h4>The Ultimate Restaurant Experience</h4>\n      <p><em>Welcome to the ultimate restaurant experience.</em></p>\n      <p><em>We are here to provide you with the ulitmate in cuisine, ambiance that will leave you satisfied without breaking the bank.</em> </p> \n    </div>\n    \n  </main>\n\n  <footer>\n    <div class="footer-content">\n    <p>&copy;2022 The Restaurant Page</p>\n    \n    <p>Images by <a href="https://www.pexels.com/search/food/">Pexels</a></p>\n  </footer>\n  </div>   ',t.appendChild(e)})(),(()=>{const t=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","menu"),e.setAttribute("data-tab-content",""),e.classList.add(".menu-section"),e.innerHTML='\n\t<div class="menu-section--container">\n\t\t<div class="menu-box">\n\t\t\t<img src="images/pizza.jpg" alt="pizza">\n\t\t\t<h4>Pizza</h4>\n\t\t</div>\n\t\t<div class="menu-box">\n\t\t\t<img src="images/chicken.jpg" alt="chicken">\n\t\t\t<h4>Chicken</h4>\n\t\t</div>\n\t\t<div class="menu-box">\n\t\t\t<img src="images/meat.jpg" alt="meat">\n\t\t\t<h4>Meat</h4>\n\t\t</div>\n\t\t<div class="menu-box">\n\t\t\t<img src="images/vegan.jpg" alt="vegan">\n\t\t\t<h4>Vegan</h4>\n\t\t</div>\n\t\t<div class="menu-box">\n\t\t\t<img src="images/cake.jpg" alt="cake">\n\t\t\t<h4>Chocolat Desert</h4>\n\t\t</div>\n\t\t<div class="menu-box">\n\t\t\t<img src="images/pancakes.jpg" alt="pancakes">\n\t\t\t<h4>Pancakes</h4>\n\t\t</div>\n\t</div>\t',t.appendChild(e)})(),(()=>{const t=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","contact"),e.setAttribute("data-tab-content",""),e.classList.add(".contact-section"),e.innerHTML='\n\t\n\t<div class="contact-box">\n\t\t<h3>Operating Hours</h3>\n\t\t<h4>Tuesday to Thursday</h4>\n\t\t<p>2pm to 11pm</p>\n\t\t<h4>Friday to Sunday</h4>\n\t\t<p>4pm to 12pm</p>\n\t\t\n\t</div>\n\t<div class="contact-box">\n\t\t<h3>Contact Details</h3>\n\t\t<h4>Contact Number</h4>\n\t\t<p>010 234 6789</p>\n\t\t<h4>Address Details</h4>\n\t\t<p>The Harbour House, Harbour Road, South End</p> \n\t</div>\n\n\t',t.appendChild(e)})();const t=document.querySelectorAll("[data-tab-target]"),e=document.querySelectorAll("[data-tab-content]");t.forEach((t=>t.addEventListener("click",(()=>{console.log(t);const n=document.querySelector(t.dataset.tabTarget);e.forEach((t=>{t.classList.remove("active")})),n.classList.add("active")}))))})()})();