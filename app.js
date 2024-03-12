const sections = document.querySelectorAll(".section")
const sectionButtons = document.querySelectorAll(".controls")
const sectionButton = document.querySelectorAll(".control")
const allSections = document.querySelector(".main-content")

function PageTransitions() {
  /* //Button click active class, used to toggle active button in navigation control
  for (let i = 0; i < sectionButton.length; i++) {
    sectionButton[i].addEventListener("click", function () {
      let currentButton = document.querySelectorAll(".active-btn")
      currentButton[0].className = currentButton[0].className.replace(
        "active-btn",
        ""
      )
      this.className += " active-btn"
    })
  } */

  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id
    if (id) {
      //remove selected from all buttons
      sectionButton.forEach((btn) => {
        btn.classList.remove("active-btn")
      })
    }
    e.target.classList.add("active-btn")

    sections.forEach((section) => {
      section.classList.remove("active")
    })

    const selectedSection = document.getElementById(id)
    selectedSection.classList.add("active")
  })
}

PageTransitions()
