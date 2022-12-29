const container = document.getElementById("contain");
for (var i = 0; i <= 100; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  container.appendChild(blocks);
}

const animateBlocks = () => {
  anime({
    targets: ".block",
    translateX: function () {
      return anime.random(-700, 700);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    scale: function () {
      return anime.random(1, 5);
    },

    easing: "spring(2, 25, 5, 0)",
    duration: 3000,
    delay: anime.stagger(10),
    complete: animateBlocks,
  });
};

animateBlocks();
