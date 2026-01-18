// Auto-expand details elements when navigating via anchor links
document.addEventListener("nav", () => {
  // Function to open details and scroll to target
  function handleHashNavigation() {
    const hash = window.location.hash
    if (!hash) return
    
    const targetId = decodeURIComponent(hash.substring(1))
    const targetElement = document.getElementById(targetId)
    
    if (targetElement && targetElement.tagName === "DETAILS") {
      // Open the details element
      targetElement.setAttribute("open", "")
      
      // Small delay to ensure rendering before scrolling
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }
  
  // Handle on page load
  handleHashNavigation()
  
  // Handle clicks on category badges
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    if (target.classList.contains("category-badge")) {
      // Let the navigation happen, then handle opening
      setTimeout(handleHashNavigation, 50)
    }
  })
})
