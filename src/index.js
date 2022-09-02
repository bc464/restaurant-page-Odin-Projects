import { pageLoad } from "./pageLoad";
import { renderHomePage } from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";

const tabs = document.querySelectorAll("[data-tab-target]");

const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
console.log(tab);
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    target.classList.add("active");
  })
);