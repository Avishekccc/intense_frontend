







document.querySelectorAll(".accordian-header").forEach((header) => {
  header.addEventListener("click", function () {
    // Close all other accordions except the clicked one
    document.querySelectorAll(".accordian-header").forEach((otherHeader) => {
      if (otherHeader !== this) {
        otherHeader.classList.remove("bg-[#D5F486]");
        otherHeader.classList.add("bg-[#FAFAFA]");

        const otherBody = otherHeader.nextElementSibling;
        if (otherBody) {
          otherBody.classList.add("hidden");
        }

        // Toggle icons inside other headers
        const otherMobileIcon = otherHeader.querySelector(".lg\\:hidden i");
        const otherDesktopIcon = otherHeader.querySelector(".lg\\:block i");
        if (otherMobileIcon) {
          otherMobileIcon.classList.remove("bx-chevron-up");
          otherMobileIcon.classList.add("bx-chevron-down");
        }
        if (otherDesktopIcon) {
          otherDesktopIcon.classList.remove("bx-up-arrow-alt");
          otherDesktopIcon.classList.add("bx-down-arrow-alt");
        }
      }
    });

    // Toggle background color of clicked header
    this.classList.toggle("bg-[#FAFAFA]");
    this.classList.toggle("bg-[#D5F486]");

    // Toggle the clicked accordion body
    const body = this.nextElementSibling;
    if (body) {
      body.classList.toggle("hidden");
    }

    // Toggle icons for the clicked header
    const mobileIcon = this.querySelector(".lg\\:hidden i");
    const desktopIcon = this.querySelector(".lg\\:block i");

    if (mobileIcon) {
      mobileIcon.classList.toggle("bx-chevron-down");
      mobileIcon.classList.toggle("bx-chevron-up");
    }
    if (desktopIcon) {
      desktopIcon.classList.toggle("bx-down-arrow-alt");
      desktopIcon.classList.toggle("bx-up-arrow-alt");
    }
  });
});


