const renderHomePage = (() => {
	const contentContainer = document.querySelector("#content");

	const home = document.createElement("div");
  home.classList.add("tab-content");
	home.innerHTML = `
  <div id="home" class="active" data-tab-content>
  	
  <main>
    <div class="heading">
      <h1>The Chef's Corner</h1>
      <h4>The Ultimate Restaurant Experience</h4>
      <p><em>Welcome to the ultimate restaurant experience.</em></p>
      <p><em>We are here to provide you with the ulitmate in cuisine, ambiance that will leave you satisfied without breaking the bank.</em> </p> 
    </div>
    
  </main>

  <footer>
    <div class="footer-content">
    <p>&copy;2022 The Restaurant Page</p>
    
    <p>Images by <a href="https://www.pexels.com/search/food/">Pexels</a></p>
  </footer>
  </div>   `;

  contentContainer.appendChild(home);

})();

export { renderHomePage };