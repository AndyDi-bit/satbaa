<template>
  <q-page class="q-pa-none">
    <div class="contenedor">
      <q-img src="/img/pruebaIA.png" class="full-width full-height">
        <div class="absolute-full overlay"></div>
        <div class="absolute-full flex flex-center overlay-text">
          <h1 class="q-mx-sm overlay-text">
            Seminario de Inteligencia Artificial y Problemas Sociales
          </h1>
        </div>
      </q-img>
    </div>

    <div class="q-ma-md">
      <!-- Introducción-->
      <div class="q-pa-sm">
        <div class="column items-center">
          <p class="text-bold text-h4 q-mt-lg" style="color: #ec7711">Introducción</p>
          <p class="q-ma-sm text-h6" style="text-justify">Introducción de wulfrano</p>
          <p class="text-bold text-h6 q-mt-lg" style="color: #ec7711">Enlaces a seminarios</p>

          <q-item to="/PrimerSeminarioIAyPS" clickable>
            <q-item-section>1er Seminario de IA y PS (2020)</q-item-section>
          </q-item>
          <q-item to="/SegundoSeminarioIAyPS" clickable>
            <q-item-section>2do Seminario de Ia y PS (2024)</q-item-section>
          </q-item>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup></script>

<style scoped>
.contenedor {
  width: 100%;
  height: 400px;
}

.overlay {
  background: linear-gradient(to bottom, rgba(139, 139, 139, 0.5), rgba(139, 139, 139, 0.5));
}

/* Texto*/
.overlay-text h1 {
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: clamp(1.5rem, 5vw, 3rem);
  padding: 10px;
  max-width: 90%;
  font-size: 60px;
}

.texto {
  font-size: 25px;
}

.bordes {
  border: 4px solid #ec7711;
  border-radius: 8px;
  max-width: 32%;
}
.puntos {
  border-bottom: 2px dotted;
  width: 100%;
  margin: 18px 0;
}

.depto-title {
  text-align: left;
  margin-left: -648px;
}
</style>
