
// hmaburger_menu_open_close_logic
const navDialouge = document.getElementById("nav-dialouge");
function handelMenue() {
  navDialouge.classList.toggle("hidden");
}



// Dropdown_menue_Logic
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownToggle.addEventListener('click', function () {
  dropdownMenu.classList.toggle('hidden');
});


 
// Slider_script
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
        slide.classList.add("order-2", "scale-100"); 
      } else if (i === (index + 1) % slides.length) {
        slide.classList.add("order-3", "scale-90", "opacity-100"); 
      } else {
        slide.classList.add("order-1", "scale-90", "opacity-100"); 
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

  updateSlides(1);
  updateDots(1);




// Accordian_Script
document.querySelectorAll(".accordian-header").forEach((header) => {
  header.addEventListener("click", function () {
    
    document.querySelectorAll(".accordian-header").forEach((otherHeader) => {
      if (otherHeader !== this) {
        otherHeader.classList.remove("bg-[#D5F486]");
        otherHeader.classList.add("bg-[#FAFAFA]");

        const otherBody = otherHeader.nextElementSibling;
        if (otherBody) {
          otherBody.classList.add("hidden");
        }

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

    this.classList.toggle("bg-[#FAFAFA]");
    this.classList.toggle("bg-[#D5F486]");

    const body = this.nextElementSibling;
    if (body) {
      body.classList.toggle("hidden");
    }

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
