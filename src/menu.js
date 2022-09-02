const renderMenu = (() => {
	const contentContainer = document.querySelector("#content");
	const menu =document.createElement("div");
	menu.setAttribute("id", "menu");
	menu.setAttribute("data-tab-content", "");
	menu.classList.add(".menu-section");
	menu.innerHTML = `
	<div class="menu-section--container">
		<div class="menu-box">
			<img src="images/pizza.jpg" alt="pizza">
			<h4>Pizza</h4>
		</div>
		<div class="menu-box">
			<img src="images/chicken.jpg" alt="chicken">
			<h4>Chicken</h4>
		</div>
		<div class="menu-box">
			<img src="images/meat.jpg" alt="meat">
			<h4>Meat</h4>
		</div>
		<div class="menu-box">
			<img src="images/vegan.jpg" alt="vegan">
			<h4>Vegan</h4>
		</div>
		<div class="menu-box">
			<img src="images/cake.jpg" alt="cake">
			<h4>Chocolat Desert</h4>
		</div>
		<div class="menu-box">
			<img src="images/pancakes.jpg" alt="pancakes">
			<h4>Pancakes</h4>
		</div>
	</div>	`;

	contentContainer.appendChild(menu);
})();

export { renderMenu };