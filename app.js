document.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    window.scrollTo({
      behavior: "smooth",
      bottom: 0
    })
  }
})
