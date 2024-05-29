<script setup lang="ts">
import BackArrowIconsvg from "@/components/icons/BackArrowIconsvg.vue";
// import Avatar from "@/compnents/Avater.vue";
</script>

<template>
  <main class="settings mx-3 py-5 overflow-auto">
    <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 pb-4">
      <BackArrowIconsvg class="flex" />
      <p class="text-base text-center text-white flex-grow pb-5 pt-2 font-bold">
        À propos
      </p>
    </div>
    <!-- <div class="flex">
        <Avatar/>
        <Avatar/>
        <Avatar/>
    </div> -->
    <div class="text-white pb-3">
      <p class="pb-3">Bienvenue sur DreamSheep !</p>
      <p class="pb-3">
        Nous sommes une équipe de trois étudiants en première année de MMI
        (Métiers du Multimédia et de l'Internet) à Montbéliard, passionnés par
        la technologie et la créativité. Notre projet est né dans le cadre d'un
        projet collectif pédagogique, où nous avons eu l'opportunité de mettre
        en pratique nos connaissances acquises en cours et de donner vie à notre
        idée innovante.
      </p>
      <p class="pb-3">
        L'objectif de notre application est de permettre à chacun d'enregistrer
        ses rêves et de les partager avec une communauté de rêveurs passionnés.
        Nous croyons fermement au pouvoir des rêves pour inspirer, intriguer et
        connecter les gens, et nous voulons offrir un espace où ces expériences
        fascinantes peuvent être préservées et partagées.
      </p>
      <p class="pb-3">
        Que vous soyez un rêveur occasionnel ou un explorateur assidu des
        recoins de votre inconscient, DreamSheep est conçu pour vous accompagner
        dans votre voyage onirique. Que vous souhaitiez simplement garder une
        trace de vos rêves les plus mémorables ou que vous cherchiez à trouver
        l'inspiration dans les rêves des autres, notre plateforme est là pour
        vous offrir une expérience enrichissante et immersive.
      </p>
      <p class="pb-3">
        Nous sommes fiers de présenter DreamSheep comme le fruit de notre
        passion, de notre dévouement et de notre créativité collective. Nous
        espérons que vous trouverez autant de plaisir à utiliser notre
        application que nous en avons eu à la créer.
      </p>
      <p class="pb-3">
        N'hésitez pas à nous contacter si vous avez des questions, des
        suggestions ou des retours à partager. Nous sommes impatients de vous
        voir rejoindre notre communauté de rêveurs !
      </p>
      <p class="pb-3">L'équipe de DreamSheep !</p>
    </div>
  </main>
</template>