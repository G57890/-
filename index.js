window.onload = function () {
  /*** جزء اختيار وجبة عشوائية ***/
  const meals = [
    document.getElementById("وجبةالسرية"),
    document.getElementById("وجبةتشيكن"),
    document.getElementById("الجيتميل"),
    document.getElementById("وجبةحريقه"),
    document.getElementById("وجبةبرجر"),
    document.getElementById("وجبةفاهيتا"),
    document.getElementById("وجبةمو"),
  ];

  const bt = document.getElementById("bt");
  const theMeal = document.getElementById("theMeal");

  if (bt) {
    bt.onclick = function () {
      const randomIndex = Math.floor(Math.random() * meals.length);
      const selectedMeal = meals[randomIndex];

      const clonedMeal = selectedMeal.cloneNode(true);
      clonedMeal.style.display = "block";

      theMeal.innerHTML = "";
      theMeal.appendChild(clonedMeal);
    };
  }

  /*** جزء شريط التنقل (السلايد) ***/
  const nav = document.querySelector("nav");
  const navWrapper = document.querySelector(".nav-wrapper");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  function scrollNav(amount) {
    const dir = getComputedStyle(nav).direction;
    nav.scrollBy({
      left: dir === "rtl" ? -amount : amount,
      behavior: "smooth",
    });
  }

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => scrollNav(-150));
    rightBtn.addEventListener("click", () => scrollNav(150));
  }

  /*** Scroll Spy + تحريك الـ nav ***/
  const sections = document.querySelectorAll("h1[id]");
  const navLinks = document.querySelectorAll(".a-nav");

  function scrollToActiveLink() {
    const activeLink = document.querySelector(".a-nav.active");
    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  function activateSection() {
    let currentId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });

    scrollToActiveLink();
  }

  window.addEventListener("scroll", activateSection);

  /*** التحكم في ظهور الظلال مع RTL ***/
  function toggleNavShadow() {
    const dir = getComputedStyle(nav).direction;
    const maxScroll = nav.scrollWidth - nav.clientWidth;
    let scrollLeft = nav.scrollLeft;

    if (dir === "rtl") {
      scrollLeft = Math.abs(scrollLeft); // لعكس القيم في RTL
      if (scrollLeft <= 1) {
        navWrapper.classList.add("hide-right");
      } else {
        navWrapper.classList.remove("hide-right");
      }

      if (scrollLeft >= maxScroll - 1) {
        navWrapper.classList.add("hide-left");
      } else {
        navWrapper.classList.remove("hide-left");
      }
    } else {
      if (scrollLeft <= 1) {
        navWrapper.classList.add("hide-left");
      } else {
        navWrapper.classList.remove("hide-left");
      }

      if (scrollLeft >= maxScroll - 1) {
        navWrapper.classList.add("hide-right");
      } else {
        navWrapper.classList.remove("hide-right");
      }
    }
  }

  nav.addEventListener("scroll", toggleNavShadow);
  toggleNavShadow(); // استدعاء أولي
};
