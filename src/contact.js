const renderContact = (() => {
	const contentContainer = document.querySelector("#content");
	const contact = document.createElement("div");
	contact.setAttribute("id", "contact");
	contact.setAttribute("data-tab-content", "");
	
	contact.classList.add(".contact-section");
	contact.innerHTML = `
	
	<div class="contact-box">
		<h3>Operating Hours</h3>
		<h4>Tuesday to Thursday</h4>
		<p>2pm to 11pm</p>
		<h4>Friday to Sunday</h4>
		<p>4pm to 12pm</p>
		
	</div>
	<div class="contact-box">
		<h3>Contact Details</h3>
		<h4>Contact Number</h4>
		<p>010 234 6789</p>
		<h4>Address Details</h4>
		<p>The Harbour House, Harbour Road, South End</p> 
	</div>

	`;
	contentContainer.appendChild(contact);
})();

export { renderContact }; 