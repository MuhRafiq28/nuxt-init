<template>
  <header
    class="flex justify-center py-4 ps-72 pe-72 bg-[#EFF1ED] w-[1440px] h-[80px]"
  >
    <nav class="flex justify-center gap-16 font-sans w-[879px] h-[61px]">
      <a href="#" class="text-24 mt-4 hover:underline font-sans font-semibold"
        >La nostra storia</a
      >
      <a href="#" class="text-24 mt-4 hover:underline">Ottica</a>
      <a href="#" class="text-24 mt-4 hover:underline">Visite oculistiche</a>
      <button
        class="block w-[235px] h-[55px] rounded-lg bg-[rgba(80,90,91,1)] text-white border-none text-[24px] font-medium font-sans"
      >
        Vieni a trovarci
      </button>
    </nav>
  </header>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

nav :hover {
  color: red;
}

button {
  font-family: inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 29.05px;
}
</style>
