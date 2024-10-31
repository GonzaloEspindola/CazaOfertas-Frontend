<template>
  <section
    class="hero-gradient-animation your_css_selector_here flex gap-10 w-full grow rounded-md p-12 border border-border"
  >
    <article class="flex text-center items-center gap-4 grow">
      <img
        src="/public/assets/landing/filters.webp"
        alt="Información"
        class="w-90 h-90 object-cover"
      />

      <div class="flex flex-col gap-4 grow px-28">
        <h3 class="text-xl text-text-primary">
          Elige tus supermercados preferidos para personalizar tu experiencia de
          compra
        </h3>
        <p class="text-sm text-text-secondary">
          Selecciona de la lista los supermercados en los que prefieres realizar
          tus compras. De esta manera, solo verás productos y ofertas de tus
          opciones favoritas, facilitando una búsqueda más rápida y precisa en
          función de tus preferencias.
        </p>
      </div>
    </article>
  </section>
</template>

<style scoped>
@keyframes hero-gradient-animation {
  0% {
    --y-0: 90%;
    --s-start-0: 1%;
    --s-end-0: 61%;
    --c-0: hsla(124.67532467532469, 0%, 0%, 1);
    --x-0: 91%;
    --x-1: 2%;
    --c-1: hsla(75, 0%, 0%, 1);
    --s-start-1: 0%;
    --s-end-1: 55%;
    --y-1: 101%;
    --s-start-2: 19%;
    --s-end-2: 54%;
    --y-2: 56%;
    --x-2: 21%;
    --c-2: hsla(0, 100%, 25%, 1);
    --x-3: 51%;
    --c-3: hsla(0, 100%, 70%, 1);
    --s-start-3: 0%;
    --s-end-3: 67%;
    --y-3: 80%;
    --x-4: 74%;
    --c-4: hsla(349, 0%, 0%, 1);
    --s-start-4: 12%;
    --s-end-4: 82%;
    --y-4: 93%;
    --s-start-5: 12%;
    --s-end-5: 82%;
    --y-5: 38%;
    --x-5: 94%;
    --c-5: hsla(349, 0%, 0%, 1);
  }

  100% {
    --y-0: 8%;
    --s-start-0: 4.686035613870666%;
    --s-end-0: 94.34052125739515%;
    --c-0: hsla(0, 83%, 43%, 1);
    --x-0: 15%;
    --x-1: 79%;
    --c-1: hsla(124.67532467532469, 0%, 0%, 1);
    --s-start-1: 4.686035613870666%;
    --s-end-1: 77%;
    --y-1: 36%;
    --s-start-2: 6%;
    --s-end-2: 73%;
    --y-2: 88%;
    --x-2: 91%;
    --c-2: hsla(321, 0%, 0%, 1);
    --x-3: 82%;
    --c-3: hsla(0, 0%, 0%, 1);
    --s-start-3: 8%;
    --s-end-3: 86%;
    --y-3: 18%;
    --x-4: 10%;
    --c-4: hsla(109, 0%, 0%, 1);
    --s-start-4: 20%;
    --s-end-4: 75%;
    --y-4: 69%;
    --s-start-5: 20%;
    --s-end-5: 75%;
    --y-5: 10%;
    --x-5: 66%;
    --c-5: hsla(109, 0%, 0%, 1);
  }
}

@property --y-0 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 90%;
}

@property --s-start-0 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 1%;
}

@property --s-end-0 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 61%;
}

@property --c-0 {
  syntax: '<color>';
  inherits: false;
  initial-value: hsla(124.67532467532469, 0%, 0%, 1);
}

@property --x-0 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 91%;
}

@property --x-1 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 2%;
}

@property --c-1 {
  syntax: '<color>';
  inherits: false;
  initial-value: hsla(75, 0%, 0%, 1);
}

@property --s-start-1 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

@property --s-end-1 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 55%;
}

@property --y-1 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 101%;
}

@property --s-start-2 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 19%;
}

@property --s-end-2 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 54%;
}

@property --y-2 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 56%;
}

@property --x-2 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 21%;
}

@property --c-2 {
  syntax: '<color>';
  inherits: false;
  initial-value: hsla(0, 100%, 25%, 1);
}

@property --x-3 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 51%;
}

@property --c-3 {
  syntax: '<color>';
  inherits: false;
  initial-value: hsla(0, 100%, 70%, 1);
}

@property --s-start-3 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

@property --s-end-3 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 67%;
}

@property --y-3 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 80%;
}

@property --x-4 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 74%;
}

@property --c-4 {
  syntax: '<color>';
  inherits: false;
  initial-value: hsla(349, 0%, 0%, 1);
}

@property --s-start-4 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 12%;
}

@property --s-end-4 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 82%;
}

@property --y-4 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 93%;
}

@property --s-start-5 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 12%;
}

@property --s-end-5 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 82%;
}

@property --y-5 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 38%;
}

@property --x-5 {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 94%;
}

@property --c-5 {
  syntax: '<color>';
  inherits: false;
  initial-value: hsla(349, 0%, 0%, 1);
}

.your_css_selector_here {
  --y-0: 90%;
  --c-0: hsla(124.67532467532469, 0%, 0%, 1);
  --x-0: 91%;
  --x-1: 2%;
  --c-1: hsla(75, 0%, 0%, 1);
  --y-1: 101%;
  --y-2: 56%;
  --x-2: 21%;
  --c-2: hsla(0, 100%, 25%, 1);
  --x-3: 51%;
  --c-3: hsla(0, 100%, 70%, 1);
  --y-3: 80%;
  --x-4: 74%;
  --c-4: hsla(349, 0%, 0%, 1);
  --y-4: 93%;
  --y-5: 38%;
  --x-5: 94%;
  --c-5: hsla(349, 0%, 0%, 1);
  background-color: hsla(356, 0%, 0%, 1);
  background-image: radial-gradient(
      circle at var(--x-0) var(--y-0),
      var(--c-0) var(--s-start-0),
      transparent var(--s-end-0)
    ),
    radial-gradient(
      circle at var(--x-1) var(--y-1),
      var(--c-1) var(--s-start-1),
      transparent var(--s-end-1)
    ),
    radial-gradient(
      circle at var(--x-2) var(--y-2),
      var(--c-2) var(--s-start-2),
      transparent var(--s-end-2)
    ),
    radial-gradient(
      circle at var(--x-3) var(--y-3),
      var(--c-3) var(--s-start-3),
      transparent var(--s-end-3)
    ),
    radial-gradient(
      circle at var(--x-4) var(--y-4),
      var(--c-4) var(--s-start-4),
      transparent var(--s-end-4)
    ),
    radial-gradient(
      circle at var(--x-5) var(--y-5),
      var(--c-5) var(--s-start-5),
      transparent var(--s-end-5)
    );
  animation: hero-gradient-animation 10s linear infinite alternate;
  background-blend-mode: normal, normal, normal, normal, normal, normal;
}
</style>
