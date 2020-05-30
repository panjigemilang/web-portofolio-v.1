// Function for scroller
const displayArrow = (index, sections) => {
    if (index < 1) {
      up.style.opacity = 0
    } else if (index > sections.length - 2) {
      down.style.opacity = 0
    } else {
      up.style.opacity = 1
      down.style.opacity = 1
    }
  }

  const sectionForEachSmooth = index => {
    toggleText(index, "show")
    sections.forEach((section, i) => {
      if (i === index) {
        section.scrollIntoView({
          behavior: "smooth"
        })
        displayArrow(index, sections)
      }
    })
  }

  const sectionForEachToggleText = condition =>
    sections.forEach((section, i) => {
      if (condition === true) {
        if (i === index) {
          section.querySelector(".text").classList.add("show")
        }
      } else {
        if (i === index) {
          section.querySelector(".text").classList.remove("show")
        }
      }
    })

  const toggleText = (i, state) => {
    state === "show"
      ? sectionForEachToggleText(true)
      : sectionForEachToggleText(false)
  }

  const handleKeyPress = e => {
    switch (e.keyCode) {
      case 38:
        if (index < 1) return
        toggleText(index, "hide")
        index--
        sectionForEachSmooth(index)
        break
      case 40:
        if (index > 2) return
        toggleText(index, "hide")
        index++
        sectionForEachSmooth(index)
        break
    }
  }

  const handleWheel = e => {
    const delta = e.wheelDelta
    const currentTime = Date.now()

    if (currentTime - lastTime < animationDuration) {
      e.preventDefault()
      return
    }

    if (delta < 0) {
      const nextBtnClick = new Event("click")
      down.dispatchEvent(nextBtnClick)
    } else {
      const prevBtnClick = new Event("click")
      up.dispatchEvent(prevBtnClick)
    }
    lastTime = currentTime
  }

  // default state
  toggleText(0, "show")
  displayArrow(0, sections)
  
  // Scroll Function
  up.addEventListener("click", e => {
    if (index < 1) return
    toggleText(index, "hide")
    index--
    sectionForEachSmooth(index)
  })

  down.addEventListener("click", e => {
    if (index > 2) return
    toggleText(index, "hide")
    index++
    sectionForEachSmooth(index)
  })