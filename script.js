/*
let targetParagraph = document.body.querySelector(".paragraph-two");

let unknown = window.getComputedStyle(targetParagraph, ":target-text");
let highlightedText = unknown["content"];

let afterText = window.getComputedStyle(targetParagraph, ":after");
let highlightedTextTwo = afterText["content"];

console.log(unknown);
console.log(`"${highlightedText}"`);

console.log("\nline break here\n");
console.log(highlightedTextTwo);

// Function to get the selected text

let url = window.location.href;

console.log(`is this the issue? "${url}"`);

if (fragment.includes('#:~:text=')) {
   let index = url.indexOf("=");
   let fragmentText = url.substring(++index);
   fragmentText = fragmentText.replaceAll("%20", " ");

  console.log(fragmentText);

  }
/*
  window.addEventListener("DOMContentLoaded", function () {

      window.scrollBy(10000, document.evaluate("//*[text()[contains(., 'Blazor is a modern front-end')]][last()]", document.body).iterateNext().getBoundingClientRect().right);

      console.log("scroll is working")

  });
*/ 
// Text Fragment Scroll
if (document.fragmentDirective) {
   const textFragmentScroll = () => {
       window.scrollTo(0, window.scrollY);  // Keeps the same scroll position
       console.log("Page moved");
   };

   // Scroll listener to maintain scroll position
   window.addEventListener("scroll", textFragmentScroll, true);

   // Resize listener for resizing behavior
   window.addEventListener("resize", () => {
       const overflowContainer = document.querySelector(".main-container");
       if (overflowContainer) {
           overflowContainer.style.overflow = "hidden";  // Prevent overflow after resize
       }
       textFragmentScroll();
       console.log("Resize working");
   }, true);

   textFragmentScroll();  // Initial scroll position reset
}

