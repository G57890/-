window.onload = function () {
  const وجبةالسرية = document.getElementById("وجبةالسرية");
  const وجبةتشيكن = document.getElementById("وجبةتشيكن");
  const الجيتميل = document.getElementById("الجيتميل");
  const وجبةحريقه = document.getElementById("وجبةحريقه");
  const وجبةبرجر = document.getElementById("وجبةبرجر");
  const وجبةفاهيتا = document.getElementById("وجبةفاهيتا");
  const وجبةمو = document.getElementById("وجبةمو");

  const meals = [
    وجبةالسرية,
    وجبةتشيكن,
    الجيتميل,
    وجبةحريقه,
    وجبةبرجر,
    وجبةفاهيتا,
    وجبةمو,
  ];

  const bt = document.getElementById("bt");
  const theMeal = document.getElementById("theMeal");

  bt.onclick = function () {
    const randomIndex = Math.floor(Math.random() * meals.length);
    const selectedMeal = meals[randomIndex];

    const clonedMeal = selectedMeal.cloneNode(true);
    clonedMeal.style.display = "block";

    theMeal.innerHTML = "";
    theMeal.appendChild(clonedMeal);
  };
};
