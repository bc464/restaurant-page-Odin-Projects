const renderFooter = (() => {
	const contentContainer = document.querySelector("#content");

	const footer = document.createElement("div");
	footer.innerHTML = `
	<footer>
    <div class="footer-content">
    <p>&copy;2022 The Restaurant Page</p>
    <p>Images by <a href="https://www.pexels.com/search/food/">Pexels</a></p>
  </footer>`;

  contentContainer.appendChild(footer);
	
})();

export { renderFooter };