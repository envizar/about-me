<script setup>
import Card from "@/components/Card.vue";
import {ref, onMounted, computed} from 'vue';
import {useDateFormat} from "@vueuse/core";
import AC from "@/components/AC.vue";

const currentTime = ref();

function updateTime() {
  const now = new Date();
  const utc3 = new Date(now.getTime() + now.getTimezoneOffset()*60*1000 + 3*60*60*1000);
  currentTime.value = useDateFormat(utc3, 'HH:mm:ss')
}

// Update the time every second
onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
});

const age = computed(() => {
  const born = new Date(1182888000 * 1000);
  const now = new Date();
  const thisYearBirthday = new Date(now.getFullYear(), born.getMonth(), born.getDate());
  return now.getFullYear() - born.getFullYear() - (now < thisYearBirthday ? 1 : 0);
});
</script>

<template>
  <div class="flex flex-col gap-2 items-center justify-center mb-8 mt-16 lg:mt-0">
    <img src="/avatar.png" alt="avatar" class="w-20 h-20 rounded-lg avatar">
    <span class="text-2xl font-700 color-white font-['JetBrains_Mono',_serif]">envizar</span>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 max-w-120 lg:w-200 lg:max-w-200">

    <Card icon="lucide:scroll-text" title="Основное">
      <ul>
        <li>Возраст: <AC>{{ age }} лет</AC></li>
        <li>Пол: <AC>Мужской</AC></li>
        <li>Страна: <AC>Россия</AC></li>
        <li>Время: <AC>{{ currentTime }} (UTC+3)</AC></li>
      </ul>
    </Card>

    <Card icon="lucide:link" title="Ссылки">
      <ul>
        <li>Telegram:
          <a href="https://t.me/envizar" target="_blank">@envizar</a>
          <span class="bull">&bull;</span>
          <a href="https://t.me/meza_inc" target="_blank">@meza_inc</a>
        </li>
        <li>GitHub:
          <a href="https://github.com/envizar" target="_blank">@envizar</a>
          <span class="bull">&bull;</span>
          <a href="https://github.com/mezamc" target="_blank">@mezamc</a>
        </li>
        <li>Проекты:
          <a href="https://servers.meza.one" target="_blank">MezaServers</a>
          <span class="bull">&bull;</span>
          <a href="https://book.meza.one" target="_blank">MezaBook</a>
        </li>
        <li>YouTube:
          <a href="https://www.youtube.com/@envizar" target="_blank">@envizar</a>
        </li>
      </ul>
    </Card>

    <Card icon="lucide:box" title="Minecraft">
      <p>Более трёх лет создаю <AC>Minecraft сервера</AC>.
      Настраиваю и <AC>пишу плагины</AC>, делаю оформление,
      даже немного консультирую людей по этим вопросам.</p>
      <p>Самый крупный проект - ныне закрытый
      мистический сервер <AC>SiimpAlone</AC>.</p>
    </Card>

    <Card icon="lucide:list-checks" title="Скиллы">
      <ul>
        <li>Пишу <AC>Minecraft</AC> плагины на <AC>Kotlin</AC></li>
        <li>Создаю сайты на <AC>Vue/Nuxt</AC></li>
        <li>Немного <AC>графический дизайнер</AC> (использую Adobe Illustrator)</li>
        <li>I use <AC>NixOS</AC> btw</li>
      </ul>
    </Card>

  </div>

</template>

<style scoped lang="scss">
.avatar {
  box-shadow: 0 0 5rem #e78e7c44;
  z-index: 1;
  outline: solid transparent 0px;
  transition: 100ms all ease-in-out;
  cursor: grab;
  &:hover {
    outline: solid var(--c-brand) 2px;
    outline-offset: 4px;
    box-shadow: 0 0 5rem #e78e7c99;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(.9);
    filter: brightness(2);
    outline-color: #ffc7c7;
    box-shadow: 0 0 8rem #e78e7caa;
    outline-offset: 2px;
    cursor: grabbing;
  }
}
</style>
