<template>
  <header class="py-4 shadow-md">
    <nav class="max-w-screen-xl mx-auto">
      <ul class="flex justify-between items-center">
        <li>
          <NuxtLink to="/">
            <SVGLogo />
          </NuxtLink>
        </li>
        <li>
          <AppSearch />
        </li>
        <li>
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  </header>
</template>
