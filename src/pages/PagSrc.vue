<template>
  <q-page class="q-pa-none">
    <div class="contenedor">
      <q-img src="/img/src.jpg" class="full-width full-height">
        <div class="absolute-full overlay"></div>
        <div class="absolute-full flex flex-center overlay-text">
          <q-img src="/img/SCC-Light-Icon.png" style="height: 120px; width: 120px"></q-img>
          <h1 class="q-mx-sm overlay-text">Semáforo de la Roya del Café</h1>
        </div>
      </q-img>
    </div>
    <div class="row">
      <q-img src="/img/src2.jpg" style="height: 540px; width: 770px" class="col" />
      <div class="col-6 q-pa-lg q-mt-xl q-ml-xl col-sm-6">
        <p>
          La planta del café puede ser dañada por diversas plagas y enfermedades, las cualaes se ven
          favorecidas o inhibidad por condiciones climáticas, estas plagas podrían incrementar su
          distribución en un intervalo altitudinal, contagiando plantaciones a un nivel global.
        </p>
        <p>
          El Semáforo de la Roya del Café (SRC) es una aplicación web que estima la probabilidad de
          la presencia de roya en matas de café a partir de datos colectados in situ referentes a
          valores e indicadores de su fenología (humedad relativa, temperatura y fecha de lectura).
          Ofrece un panel de visualización de las estimaciones, los indicadores y variables de los
          plantíos de café monitoreados.
        </p>
        <p>
          El SRC permite cargar nuevos datos a los cuales aplicar los distintos algoritmos y modelos
          para su análisis, o bien se puede explorar los bancos de datos que integran la colección
          de la aplicación.
        </p>
      </div>
    </div>

    <!-- Diagrama de bloques -->
    <div class="flex column items-center text-center q-mt-sm">
      <div class="">
        <p class="text-bold text-h3 q-mt-lg" style="color: #63a030">Diagrama de Bloques</p>
        <q-img
          src="/img/bloquesSRC.png"
          style="height: 540px; width: 770px"
          class="q-mt-lg q-mb-xl"
        />
      </div>
    </div>
    <!-- Aplicación-->

    <div class="q-pa-xl">
      <div class="text-h4 text-center text-bold" style="color: #63a030">Aplicación</div>

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
            style="color: #63a030"
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
      <div class="text-h4 text-center text-bold" style="color: #63a030">Infografías</div>
      <q-carousel
        v-model="slide"
        swipeable
        animated
        :control-type="controlType"
        control-color="green"
        navigation
        padding
        arrows
        height="380px"
        class="ounded-borders q-pt-lg"
        :prev-icon="matIcons.matChevronLeft"
        :next-icon="matIcons.matChevronRight"
        :navigation-icon="matIcons.matRadioButtonChecked"
      >
        <q-carousel-slide name="style" class="row no-wrap justify-center">
          <q-img
            src="/img/infografias/infografiasSRC/CalculoIRP_UsuarioB.jpg"
            class="thumbnail q-mx-xl"
            @click="abrirInfo('/src/img/infografias/infografiasSRC/CalculoIRP_UsuarioB.jpg')"
          />
          <q-img
            src="/img/infografias/infografiasSRC/DesarrolloDelFrutoDelCafe_UsuarioA.jpg"
            class="thumbnail q-mx-xl"
            @click="
              abrirInfo(
                '/src/img/infografias/infografiasSRC/DesarrolloDelFrutoDelCafe_UsuarioA.jpg',
              )
            "
          />
          <q-img
            src="/img/infografias/infografiasSRC/EtapasFenologicasDelFrutoDelCafe_UsuarioB.jpg"
            class="thumbnail q-mx-xl"
            @click="
              abrirInfo(
                '/src/img/infografias/infografiasSRC/EtapasFenologicasDelFrutoDelCafe_UsuarioB.jpg',
              )
            "
          />
        </q-carousel-slide>
        <q-carousel-slide name="stylee" class="row no-wrap justify-center">
          <q-img
            src="/img/infografias/infografiasSRC/DesarrolloDelFrutoDelCafe_UsuarioA.jpg"
            class="thumbnail q-mx-xl"
            @click="
              abrirInfo(
                '/src/img/infografias/infografiasSRC/DesarrolloDelFrutoDelCafe_UsuarioA.jpg',
              )
            "
          />
          <q-img
            src="/img/infografias/infografiasSRC/GestacionDeLaRoyaDelCafe_UsuarioA.jpg"
            class="thumbnail q-mx-xl"
            @click="
              abrirInfo('/src/img/infografias/infografiasSRC/GestacionDeLaRoyaDelCafe_UsuarioA.jpg')
            "
          />
          <q-img
            src="/img/infografias/infografiasSRC/LaboratorioDigitalDeCafeticultura_UsuarioAB.jpg"
            class="thumbnail q-mx-xl"
            @click="
              abrirInfo(
                '/src/img/infografias/infografiasSRC/LaboratorioDigitalDeCafeticultura_UsuarioAB.jpg',
              )
            "
          />
        </q-carousel-slide>
        <q-carousel-slide name="styleee" class="row no-wrap justify-center">
          <q-img
            src="/img/infografias/infografiasSRC/SemaforoDeLaRoyaDelCafe_UsuarioA.jpg"
            class="thumbnail q-mx-xl"
            @click="
              abrirInfo('/src/img/infografias/infografiasSRC/SemaforoDeLaRoyaDelCafe_UsuarioA.jpg')
            "
          />
        </q-carousel-slide>
      </q-carousel>

      <q-dialog v-model="abrirlightBox" full-width full-height>
        <q-card class="lightbox-card" @wheel="zoomImgn">
          <!-- Botón de Cerrar -->
          <q-btn
            flat
            dense
            round
            :icon="matIcons.matClose"
            class="botonCerrar"
            @click="abrirlightBox = false"
          />

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
    <!-- Animaciones -->

    <div class="q-pa-xl">
      <div class="text-h4 text-center text-bold" style="color: #63a030">Animaciones</div>
      <div class="row items-center justify-center">
        <div class="row justify-center">
          <div
            class="col-12 col-sm-6 col-md-6 flex justify-center"
            v-for="(video, index) in animaciones"
            :key="index"
          >
            <q-card class="my-card q-ma-lg custom-card">
              <q-video class="custom-video" :src="video.src" />
            </q-card>
          </div>
        </div>
        <!-- <q-btn
          to="/"
          class="col-xl-2 col-sm-6 col-md-4 text-bold"
          style="color: white; background-color: #63a030"
          no-caps
        >
          Ver más animaciones
        </q-btn> -->
      </div>
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

const animaciones = ref([
  {
    src: 'https://player.vimeo.com/video/1064839650',
  },
])
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
  border: 4px solid #63a030;
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
