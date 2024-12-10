if (document.fragmentDirective) {
    // Function to lock scroll position
    const lockScrollPosition = () => {
        window.scrollTo(0, window.scrollY);  // Keeps the same scroll position
        console.log("Page moved");
    };

    // Add scroll listener to maintain the scroll position
    window.addEventListener("scroll", lockScrollPosition, true);

    var isResizing = false;
    const overflowContainer = document.querySelector(".main-container");

    // Handle window resize events
    window.addEventListener('resize', () => {
        isResizing = true;
        console.log("Window is being resized");

        // Prevent overflow after resize
        if (overflowContainer) {
            overflowContainer.style.overflow = "hidden";
            console.log("Overflow hidden after window resize");
        }

        // Reset scroll position after resize
        lockScrollPosition();
    });

    // Function to detect if the device is emulated
    const isDeviceEmulated = () => {
        const userAgent = navigator.userAgent.toLowerCase();
        
        // Check for mobile emulation in Chrome (excluding Edge)
        if (userAgent.includes('chrome') && !userAgent.includes('edg') && 
            (userAgent.includes('mobile') || userAgent.includes('android') || userAgent.includes('iphone'))) {
            console.log("Emulation mode detected (possibly DevTools).");
            if (overflowContainer) {
                overflowContainer.style.overflow = "hidden";
            }
        } else {
            overflowContainer.removeAttribute0("style");
            console.log("Normal desktop mode.");
        }
    };

    // Initial device emulation check
    isDeviceEmulated();

    // Lock scroll position on initial load
    lockScrollPosition();
}
