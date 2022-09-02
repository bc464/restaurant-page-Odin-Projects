const renderNav = (() => {

	const contentContainer = document.querySelector("#content");
	const nav = document.createElement("div");
	nav.innerHTML = `
	<nav>
    <ul>
      // <li data-tab-target="#home" class="tab red"><a href="#">Home</a></li>
      // <li data-tab-target="#menu" class="tab"><a href="#">Menu</a></li>
      // <li data-tab-target="#contact" class="tab"><a href="#">Contact</a></li>

      <li data-tab-target="#home" class="tab red">Home</li>
      <li data-tab-target="#menu" class="tab">Menu</li>
      <li data-tab-target="#contact" class="tab">Contact</li>
    </ul>

  </nav>

	`
	contentContainer.appendChild(nav);
})();

export { renderNav};