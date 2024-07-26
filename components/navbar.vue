<template>
    <header class=" flex  justify-center py-4 ps-72 pe-72 bg-[#EFF1ED]">
  <nav class="flex justify-center  gap-16 font-sans" >
    <a href="#" class="text-24 mt-4 hover:underline">La nostra storia</a>
    <a href="#" class="text-24 mt-4 hover:underline">Ottica</a>
    <a href="#" class="text-24 mt-4 hover:underline">Visite oculistiche</a>
    <button class="block w-[235px] h-[55px] rounded-lg bg-[rgba(80,90,91,1)] text-white border-none text-[24px] font-medium font-sans">
      Vieni a trovarci
  </button>
  </nav>
  
</header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');


header{
  width: 1440px;
  height: 80px;
}

nav{
  width: 879px;
  height: 61px;
  display: flex;
  justify-content: center;
}

nav a{
  font-family: inter;
  font-weight: 600;
}

nav :hover{
  color: red;
}

button{
  font-family: inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 29.05px;
}

</style>