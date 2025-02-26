const navDialouge = document.getElementById("nav-dialouge");
function handelMenue() {
  navDialouge.classList.toggle("hidden");
}




  // const slidesContainer = document.querySelector(".slides-container");
  // const slides = Array.from(document.querySelectorAll(".slide"));
  // const dots = document.querySelectorAll(".dot");
  // let currentIndex = 1;

  // function updateSlides(index) {
  //   const newOrder = [...slides.slice(index), ...slides.slice(0, index)];
  //   slidesContainer.innerHTML = "";
  //   newOrder.forEach((slide) => slidesContainer.appendChild(slide));
  // }

  // function updateDots(index) {
  //   dots.forEach((dot, i) => {
  //     dot.classList.toggle("active", i === index);
  //   });
  // }

  // dots.forEach((dot, index) => {
  //   dot.addEventListener("click", () => {
  //     currentIndex = index;
  //     updateSlides(currentIndex);
  //     updateDots(currentIndex);
  //   });
  // });

  // updateSlides(currentIndex);
  // updateDots(currentIndex);
 

  const slidesContainer = document.querySelector(".slides-container");
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dots = document.querySelectorAll(".dot");

  function updateSlides(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove(
        "order-1",
        "order-2",
        "order-3",
        "scale-100",
        "scale-90",
        "opacity-50"
      );

      if (i === index) {
        slide.classList.add("order-2", "scale-100"); // Bring selected slide to the center
      } else if (i === (index + 1) % slides.length) {
        slide.classList.add("order-3", "scale-90", "opacity-100"); // Move next slide to the right
      } else {
        slide.classList.add("order-1", "scale-90", "opacity-100"); // Move previous slide to the left
      }
    });
  }

  function updateDots(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-green-900", i === index);
      dot.classList.toggle("w-5", i === index);
      dot.classList.toggle("h-5", i === index);
      dot.classList.toggle("bg-gray-400", i !== index);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateSlides(index);
      updateDots(index);
    });
  });

  // Set initial state
  updateSlides(1);
  updateDots(1);




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
