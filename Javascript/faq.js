// Link this as an external asset tag script path reference line at your HTML document footer bases.

// 1. Accordion Toggle Expansion Functionality
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const answerPanel = faqItem.querySelector(".faq-answer-panel");
    
    // Check if item is already active
    const isActive = faqItem.classList.contains("active-item");
    
    // Close any currently open accordion sections first (Optional Accordion Rule)
    document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active-item");
        item.querySelector(".faq-answer-panel").style.maxHeight = null;
    });
    
    // Toggle active state for chosen clicked target panel block item
    if (!isActive) {
        faqItem.classList.add("active-item");
        // Scroll height measures precise pixel depth of target container dynamic content sizes
        answerPanel.style.maxHeight = answerPanel.scrollHeight + "px";
    }
}

// 2. Client-Side Instant Dynamic Keyword Text Searching Filter
function filterFAQ() {
    const input = document.getElementById("faqSearchInput");
    const filter = input.value.toUpperCase();
    const faqItems = document.querySelectorAll(".faq-item");
    
    faqItems.forEach(item => {
        const questionText = item.querySelector(".faq-question-row h2").textContent || item.querySelector(".faq-question-row h2").innerText;
        const answerText = item.querySelector(".panel-content p").textContent || item.querySelector(".panel-content p").innerText;
        
        // Match string presence against text elements within question strings or descriptive paragraphs
        if (questionText.toUpperCase().indexOf(filter) > -1 || answerText.toUpperCase().indexOf(filter) > -1) {
            item.style.display = ""; // Shows item if query substring exists
        } else {
            item.style.display = "none"; // Hides item entirely if search query mismatches elements
        }
    });
}