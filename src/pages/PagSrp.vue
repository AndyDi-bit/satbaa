<template>
  <q-page class="q-pa-none">
    <div class="contenedor">
      <q-img src="/src/img/srp.jpg" class="full-width full-height">
        <div class="absolute-full overlay"></div>
        <div class="absolute-full flex flex-center overlay-text">
          <q-img src="/src/img/SRP-Light-Icon.png" style="height: 120px; width: 120px"></q-img>
          <h1 class="q-mx-sm overlay-text">Semáforo de Riesgo Personal</h1>
        </div>
      </q-img>
    </div>
    <div class="row">
      <q-img src="/src/img/srp2.jpg" style="height: 540px; width: 770px" class="col" />
      <div class="col-6 q-pa-lg q-mt-xl q-ml-xl col-sm-6">
        <p>
          El Semáforo de Riesgo Personal, permite calcular el índice de riesgo (IR) que presenta una
          persona ante un desastre natural a través de una aplicación móvil. Considera los eventos
          sísmicos como un caso de estudio. El cálculo del IR personalizado considera variables
          fisiógicas, sensoriales y de ubicación del usuario junto con los datos proporcionado por
          los sistemas oficiales de monitoreo ambiental a través de la API de Eventos Naturales.
        </p>
        <p>
          De esta forma, el semáforo de riesgos permite informar de manera personalizada el riesgo
          que presenta el usuario mediante tres colores diferenciados.
        </p>
      </div>
    </div>

    <!-- Diagrama de bloques -->
    <div class="flex column items-center text-center q-mt-sm">
      <div class="">
        <p class="text-bold text-h3 q-mt-lg" style="color: #ec7711">Diagrama de Bloques</p>
        <q-img
          src="/src/img/bloquesSRP.png"
          style="height: 540px; width: 770px"
          class="q-mt-lg q-mb-xl"
        />
      </div>
    </div>
    <!-- Aplicación-->

    <div class="q-pa-xl">
      <div class="text-h4 text-center text-bold" style="color: #ec7711">Aplicación</div>

      <div class="row items-center justify-center">
        <!-- Código -->
        <div class="col-12 col-md-4 q-mt-md flex column items-center text-center">
          <p class="q-ma-sm text-bold texto">Código</p>
          <p class="">El código está disponible a petición, favor de entrar al siguiente enlace:</p>
          <q-btn
            label="Enviar correo"
            class="bg-srp bordes"
            :icon="matIcons.matEmail"
            href="mailto:wluna@cua.uam.mx"
            style="color: #ec7711"
          />
        </div>

        <!-- Demo -->
        <div class="col-12 col-md-4 q-mt-md flex column items-center text-center">
          <p class="q-ma-sm text-bold texto">Demo</p>
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <!-- APP -->
        <div class="col-12 col-md-4 q-mt-md flex column items-center text-center">
          <p class="q-ma-sm text-bold texto">APP</p>
          <q-icon :name="matIcons.matTouchApp" style="font-size: 50px" />
          <p class="q-mt-xl">Prueba la aplicación aquí</p>
        </div>
      </div>
    </div>

    <!-- Infografías-->
    <div class="q-pa-xl">
      <div class="text-h4 text-center text-bold" style="color: #ec7711">Infografías</div>
      <q-carousel
        v-model="slide"
        swipeable
        animated
        :control-type="controlType"
        control-color="orange"
        navigation
        padding
        arrows
        height="380px"
        class="rounded-borders q-pt-lg"
        :prev-icon="matIcons.matChevronLeft"
        :next-icon="matIcons.matChevronRight"
        :navigation-icon="matIcons.matRadioButtonChecked"
      >
        <q-carousel-slide name="style" class="row no-wrap justify-center">
          <q-img
            src="/src/img/infografias/CalculoIRP_UsuarioB.jpg"
            class="thumbnail q-mx-xl"
            @click="abrirInfo('/src/img/infografias/CalculoIRP_UsuarioB.jpg')"
          />
          <q-img
            src="/src/img/infografias/RecomendacionesEnUnSismoPlantaBaja_UsuarioA.jpg"
            class="thumbnail q-mx-xl"
            @click="
              abrirInfo('/src/img/infografias/RecomendacionesEnUnSismoPlantaBaja_UsuarioA.jpg')
            "
          />
          <q-img
            src="/src/img/infografias/PlanDeSeguridadAnteSismos_UsuarioA.jpg"
            class="thumbnail q-mx-xl"
            @click="abrirInfo('/src/img/infografias/PlanDeSeguridadAnteSismos_UsuarioA.jpg')"
          />
        </q-carousel-slide>
        <q-carousel-slide name="stylee" class="row no-wrap justify-center">
          <q-img
            src="/src/img/infografias/RecomendacionesEnUnSismoPisos4al8_UsuarioA.jpg"
            class="thumbnail q-mx-xl"
            @click="
              abrirInfo('/src/img/infografias/RecomendacionesEnUnSismoPisos4al8_UsuarioA.jpg')
            "
          />
          <q-img
            src="/src/img/infografias/RecomendacionesEnUnSismoPisos4al8_UsuarioB.jpg"
            class="thumbnail q-mx-xl"
            @click="
              abrirInfo('/src/img/infografias/RecomendacionesEnUnSismoPisos4al8_UsuarioB.jpg')
            "
          />
          <q-img
            src="/src/img/infografias/RecomendacionesEnUnSismoPisosE2yE3_UsuarioB.jpg"
            class="thumbnail q-mx-xl"
            @click="
              abrirInfo('/src/img/infografias/RecomendacionesEnUnSismoPisosE2yE3_UsuarioB.jpg')
            "
          />
        </q-carousel-slide>
        <q-carousel-slide name="styleee" class="row no-wrap justify-center">
          <q-img
            src="/src/img/infografias/RecomendacionesEnUnSismoPlantaBaja_UsuarioB.jpg"
            class="thumbnail q-mx-xl"
            @click="
              abrirInfo('/src/img/infografias/RecomendacionesEnUnSismoPlantaBaja_UsuarioB.jpg')
            "
          />
          <q-img
            src="/src/img/infografias/RutasEvacuacionUAMc_UsuarioAB.jpg"
            class="thumbnail q-mx-xl"
            @click="abrirInfo('/src/img/infografias/RutasEvacuacionUAMc_UsuarioAB.jpg')"
          />
          <q-img
            src="/src/img/infografias/SemaforoMovilDeRiesgoPersonal_UsuarioA.jpg"
            class="thumbnail q-mx-xl"
            @click="abrirInfo('/src/img/infografias/SemaforoMovilDeRiesgoPersonal_UsuarioA.jpg')"
          />
        </q-carousel-slide>
      </q-carousel>

      <q-dialog v-model="abrirlightBox" full-width full-height>
        <q-card class="lightbox-card" @wheel="zoomImgn">
          <!-- Botón de Cerrar -->
          <q-btn flat dense round :icon="matIcons.matClose" class="botonCerrar" @click="abrirlightBox = false" />

          <q-img
            :src="imgLightBox"
            fit="scale-down"
            style="max-width: 100vw; max-height: 100vh"
            class="imgCompleta"
            :style="{ transform: 'scale(' + zoomLevel + ')', transition: 'transform 0.2s ease' }"
          />
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import * as matIcons from '@quasar/extras/material-icons'

const controlType = ref('flat')
const slide = ref('style')
const abrirlightBox = ref(false)
const imgLightBox = ref('')
const zoomLevel = ref(1) // Nivel de zoom

const abrirInfo = (imgSrc) => {
  imgLightBox.value = imgSrc
  abrirlightBox.value = true
}

const zoomImgn = (event) => {
  if (event.deltaY < 0) {
    zoomLevel.value = Math.min(zoomLevel.value + 0.1, 3)
  } else {
    zoomLevel.value = Math.max(zoomLevel.value - 0.1, 1)
  }
}
</script>

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
.icono {
  color: #61c2d7;
}

.thumbnail {
  width: 140px;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.thumbnail:hover {
  transform: scale(1.05);
}

.lightbox-card {
  width: 90vw;
  height: 90vh;
  position: relative;
  padding: 10px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.botonCerrar {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  background: rgba(212, 111, 44, 0.7);
  color: white;
}

.imgCompleta {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}
</style>
