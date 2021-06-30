$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

function redirecionar() {
  window.open("https://www.youtube.com/watch?v=sA8ZhXHRFcA");
}

function info() {
  window.open(
    "https://portalpopline.com.br/tudo-sobre-loco-novo-lancamento-da-anitta/"
  );
}
