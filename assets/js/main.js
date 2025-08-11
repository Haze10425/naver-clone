document.querySelectorAll(".content_area").forEach((area) => {
  const newsTabs = area.querySelectorAll(".tab_item");
  const tabContents = area.querySelectorAll(".tab_content");

  newsTabs.forEach((tabItem, index) => {
    tabItem.addEventListener("click", () => {
      area.querySelectorAll(".tab").forEach((tab) => {
        tab.classList.remove("active");
      });

      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      const clickedTab = tabItem.querySelector(".tab");
      clickedTab.classList.add("active");

      if (tabContents[index]) {
        tabContents[index].classList.add("active");
      }
    });
  });
});

function updateDateTime() {
  const now = new Date();

  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const formatted = `${month}.${day} ${hours}:${minutes}`;
  document.getElementById("currentDateTime").textContent = formatted;
}
updateDateTime();

document
  .querySelector(".btn_refresh")
  .addEventListener("click", updateDateTime);

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.click();
    }
  });
});
