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
if (document.fragmentDirective) {

   document.addEventListener("scroll", () => {
      console.log("there is scroll");
      window.scrollTo(0, window.scrollY);
   }, true);

   window.addEventListener("resize", () => { 
      document.body.querySelector(".main-container").style.overflow="hidden";
      console.log("resize EL is active an working to prevent scrollbar");
   });
}
