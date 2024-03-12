const sections = document.querySelectorAll(".section")
const sectionButtons = document.querySelectorAll(".controls")
const sectionButton = document.querySelectorAll(".control")
const allSections = document.querySelector(".main-content")

function PageTransitions() {
  //Button click active, used to toggle active button in navigation control
  for (let i = 0; i < sectionButton.length; i++) {
    sectionButton[i].addEventListener("click", function () {
      let currentButton = document.querySelector(".active-btn")
      currentButton.classList.remove("active-btn")
      this.classList.add("active-btn")

      //remove and replace active section
      sections.forEach((section) => {
        section.classList.remove("active")
      })

      const currentId = this.dataset.id
      const selectedSection = document.getElementById(currentId)
      selectedSection.classList.add("active")
    })
  }
}

PageTransitions()
