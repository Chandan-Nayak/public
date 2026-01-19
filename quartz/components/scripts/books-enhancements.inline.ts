// Back to top button functionality
const initBackToTop = () => {
  // Create back to top button if it doesn't exist
  let backToTopBtn = document.getElementById('back-to-top')
  
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button')
    backToTopBtn.id = 'back-to-top'
    backToTopBtn.innerHTML = '↑'
    backToTopBtn.setAttribute('aria-label', 'Back to top')
    backToTopBtn.setAttribute('title', 'Back to top')
    document.body.appendChild(backToTopBtn)
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }
  
  // Show/hide button based on scroll position
  const toggleBackToTop = () => {
    if (window.scrollY > 300) {
      backToTopBtn?.classList.add('visible')
    } else {
      backToTopBtn?.classList.remove('visible')
    }
  }
  
  window.addEventListener('scroll', toggleBackToTop)
  toggleBackToTop() // Check initial position
}

// Live search functionality for books
const initBookSearch = () => {
  console.log('[Books] Initializing search...')
  const searchInput = document.getElementById('book-search') as HTMLInputElement
  const resultsCount = document.querySelector('.search-results-count') as HTMLElement
  
  if (!searchInput) {
    console.log('[Books] Search input not found')
    return
  }
  
  console.log('[Books] Search initialized successfully')
  
  // Get all book list items
  const getAllBookItems = () => {
    return Array.from(document.querySelectorAll('details ul li'))
  }
  
  // Perform search and filter
  const performSearch = () => {
    const query = searchInput.value.toLowerCase().trim()
    const bookItems = getAllBookItems()
    const allDetails = document.querySelectorAll('details')
    
    if (!query) {
      // Reset: show all books, remove highlights, collapse all details
      bookItems.forEach(item => {
        item.classList.remove('search-hidden')
        // Remove any existing highlights
        const strongTag = item.querySelector('strong')
        if (strongTag && strongTag.innerHTML.includes('<mark')) {
          strongTag.innerHTML = strongTag.textContent || ''
        }
      })
      // Collapse all details when search is cleared
      allDetails.forEach(detail => detail.removeAttribute('open'))
      resultsCount.textContent = ''
      return
    }
    
    // Track which details have matches
    const detailsWithMatches = new Set<HTMLDetailsElement>()
    
    // Filter and highlight matches
    let matchCount = 0
    bookItems.forEach(item => {
      const bookText = (item.textContent || '').toLowerCase()
      const strongTag = item.querySelector('strong')
      const bookTitle = strongTag?.textContent || ''
      
      if (bookText.includes(query)) {
        item.classList.remove('search-hidden')
        matchCount++
        
        // Find parent details element and mark it for opening
        const parentDetails = item.closest('details')
        if (parentDetails) {
          detailsWithMatches.add(parentDetails as HTMLDetailsElement)
        }
        
        // Highlight matching text in title
        if (strongTag && bookTitle.toLowerCase().includes(query)) {
          const regex = new RegExp(`(${query})`, 'gi')
          const highlightedTitle = bookTitle.replace(regex, '<mark class="search-highlight">$1</mark>')
          strongTag.innerHTML = highlightedTitle
        }
      } else {
        item.classList.add('search-hidden')
        // Remove highlights from hidden items
        if (strongTag && strongTag.innerHTML.includes('<mark')) {
          strongTag.innerHTML = bookTitle
        }
      }
    })
    
    // Open details that have matches, close others
    allDetails.forEach(detail => {
      if (detailsWithMatches.has(detail as HTMLDetailsElement)) {
        detail.setAttribute('open', '')
      } else {
        detail.removeAttribute('open')
      }
    })
    
    // Update result count
    resultsCount.textContent = `${matchCount} ${matchCount === 1 ? 'book' : 'books'}`
  }
  
  // Debounce search for better performance
  let searchTimeout: ReturnType<typeof setTimeout>
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(performSearch, 200)
  })
  
  // Clear search on Escape key
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = ''
      performSearch()
      searchInput.blur()
    }
  })
}

// Color-code book status sections using JavaScript
const colorCodeBookSections = () => {
  // Find all details elements (category sections)
  const detailsElements = document.querySelectorAll('details')
  
  detailsElements.forEach(details => {
    // Find all h3 headings within this details
    const headings = details.querySelectorAll('h3')
    
    headings.forEach(heading => {
      const headingText = heading.textContent?.toUpperCase() || ''
      const nextElement = heading.nextElementSibling
      
      // Only process if next element is a ul
      if (nextElement?.tagName === 'UL') {
        const listItems = nextElement.querySelectorAll('li')
        
        // Apply color coding based on heading text
        if (headingText.includes('READ') && !headingText.includes('SKIMMED')) {
          // READ sections - green
          listItems.forEach((li, index) => {
            li.classList.add('status-read')
            if (index % 2 === 0) li.classList.add('even')
          })
        } else if (headingText.includes('SKIMMED')) {
          // SKIMMED sections - blue
          listItems.forEach((li, index) => {
            li.classList.add('status-skimmed')
            if (index % 2 === 0) li.classList.add('even')
          })
        } else if (headingText.includes('PENDING')) {
          // PENDING sections - yellow
          listItems.forEach((li, index) => {
            li.classList.add('status-pending')
            if (index % 2 === 0) li.classList.add('even')
          })
        } else if (headingText.includes('IN-PROGRESS') || headingText.includes('IN PROGRESS')) {
          // IN-PROGRESS sections - stronger yellow
          listItems.forEach((li, index) => {
            li.classList.add('status-inprogress')
            if (index % 2 === 0) li.classList.add('even')
          })
        }
      }
    })
  })
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initBackToTop()
  colorCodeBookSections()
  initBookSearch()
})

// Re-initialize after navigation (for SPA behavior)
document.addEventListener('nav', () => {
  initBackToTop()
  colorCodeBookSections()
  initBookSearch()
})
