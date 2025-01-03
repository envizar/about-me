<script setup>
import Card from "@/components/Card.vue";
import {ref, onMounted, computed} from 'vue';
import {useDateFormat, useNow} from "@vueuse/core";

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
    <img src="/avatar.jpg" alt="avatar" class="w-20 h-20 rounded-lg avatar">
    <span class="text-2xl font-700 color-white font-['JetBrains_Mono',_serif]">envizar</span>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 max-w-120 lg:w-200 lg:max-w-200">
    <Card icon="lucide:scroll-text" title="Основное">
      <ul>
        <li>Возраст: {{ age }} лет</li>
        <li>Пол: Мужской</li>
        <li>Страна: Россия</li>
        <li>Время: {{ currentTime }} (UTC+3)</li>
      </ul>
    </Card>

    <Card icon="lucide:link" title="Ссылки">
      <ul>
        <li>Telegram:
          <a href="https://t.me/envizar" target="_blank">Аккаунт</a> &bull;
          <a href="https://t.me/meza_inc" target="_blank">Канал</a>
        </li>
        <li>GitHub:
          <a href="https://github.com/envizar" target="_blank">Профиль</a> &bull;
          <a href="https://github.com/mezamc" target="_blank">Организация</a>
        </li>
        <li>Проект:
          <a href="https://book.meza.one" target="_blank">MezaBook</a>
        </li>
        <li>YouTube:
          <a href="https://www.youtube.com/@envizar" target="_blank">Личный канал</a>
        </li>
      </ul>
    </Card>

    <Card icon="lucide:box" title="Minecraft">
      <p>Более трёх лет создаю Minecraft сервера.
      Настраиваю и пишу плагины, делаю оформление,
      даже немного консультирую людей по этим вопросам.</p>
      <p>Самый крупный проект - ныне закрытый
      мистический сервер SiimpAlone.</p>
    </Card>

    <Card icon="lucide:list-checks" title="Скиллы">
      <ul>
        <li>Пишу Minecraft плагины на Kotlin</li>
        <li>Создаю сайты на Vue/Nuxt</li>
        <li>Немного графический дизайнер (использую Adobe Illustrator)</li>
        <li>I use NixOS btw</li>
      </ul>
    </Card>
  </div>

</template>

<style scoped lang="scss">
.avatar {
  box-shadow: 0 0 5rem rgba(255, 0, 0, .25);
  z-index: 1;
  outline: solid transparent 0px;
  transition: 150ms all ease-in-out;
  &:hover {
    outline: solid #ea4c4c 2px;
    outline-offset: 4px;
    box-shadow: 0 0 5rem rgba(255, 0, 0, 0.7);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(.9);
    filter: brightness(2);
    outline-color: #ffc7c7;
    box-shadow: 0 0 8rem rgba(255, 53, 53, 0.75);
    outline-offset: 2px;
  }
}
</style>
