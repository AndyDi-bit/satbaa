<template>
  <q-page class="q-pa-none">
    <div class="contenedor">
      <q-img src="/img/prueba6.png" class="full-width full-height">
        <div class="absolute-full overlay"></div>
        <div class="absolute-full flex flex-center overlay-text">
          <q-img src="/img/SATBAA-Dark-Icon.png" style="height: 120px; width: 120px"></q-img>
          <h1 class="q-mx-sm overlay-text">Conferencias</h1>
        </div>
      </q-img>
    </div>

    <!--Conferencias -->
    <div class="q-pa-md">
      <div class="text-center">
        <p class="text-bold text-h3 q-mt-lg" style="color: #ec7711">Videos</p>
      </div>

      <div class="row justify-center">
        <div
          class="col-12 col-sm-6 col-md-6 flex justify-center"
          v-for="(video, index) in videos"
          :key="index"
        >
          <q-card class="my-card q-ma-lg proporciones-card">
            <q-video class="proporciones-video" :src="video.src" />

            <q-card-section>
              <div class="text-h6">{{ video.titulo }}</div>
              <div class="text-subtitulo2">{{ video.autor }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ video.descripcion }}
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="text-center">
        <p class="text-bold text-h3 q-mt-lg" style="color: #ec7711">Videos de Proyecto Terminal</p>
      </div>

      <div class="row justify-center">
        <div
          class="col-12 col-sm-6 col-md-6 flex justify-center"
          v-for="(video, index) in videosPT"
          :key="index"
        >
          <q-card class="my-card q-ma-lg proporciones-card">
            <q-video class="proporciones-video" :src="video.src" />

            <q-card-section>
              <div class="text-h6">{{ video.titulo }}</div>
              <div class="text-subtitle2">{{ video.autor }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ video.descripcion }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!--Presentaciones-->
    <div class="q-pa-md">
      <div class="text-center">
        <p class="text-bold text-h3 q-mt-lg" style="color: #ec7711">Presentaciones</p>
      </div>
      <div class="row justify-center q-gutter-md">
        <q-card
          v-for="(pdf, index) in pdfsSRPC"
          :key="index"
          flat
          bordered
          class="pdfCaja"
          @click="abrirPdf(pdf.url)"
        >
          <!-- Miniatura del PDF -->
          <div class="pdf-container">
            <iframe :src="pdf.url" frameborder="0"></iframe>
          </div>

          <!-- Título y descripción -->
          <q-card-section>
            <div class="text-h6 q-mb-md" style="color: #ec7711">{{ pdf.titulo }}</div>
            <p>
              <span style="color: #ec7711">
                {{
                  pdf.autor.includes(' y ') || pdf.autor.includes(',') ? 'Autores' : 'Autor'
                }}:</span
              >
              {{ pdf.autor }}
            </p>

            <p><span style="color: #ec7711">Descripción: </span> {{ pdf.descripcion }}</p>
          </q-card-section>
        </q-card>
      </div>

      <!-- PDF en grande -->
      <q-dialog v-model="mostrarPDF" maximized>
        <q-card class="tamañoCompletoPDF">
          <q-bar>
            <q-space />
            <q-btn flat :icon="matIcons.matClose" @click="mostrarPDF = false" />
          </q-bar>
          <iframe :src="pdfSeleccionado" frameborder="0"></iframe>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import * as matIcons from '@quasar/extras/material-icons'

const videos = ref([
  {
    src: 'https://www.youtube.com/embed/em28LqSRrmAFM?list=PLMNJhjLUH3gsf3accn0sqr4ff0M-KzlIB&t&start=6950',
    titulo: 'Décimo foro de ciudades incluyentes',
    autor: 'Presentado por: Dr. Wulfrano Arturo Luna-Ramírez',
    descripcion:
      'EL proyecto de investigación SATBBA nace de la idea de cómo la tecnología puede ser de ayuda para aproximarnos a ubicar a la persona con o sin discapacidades dentro de un entorno natural.',
  },
  {
    src: 'https://youtube.com/embed/pqw_N7FdJM0?list=PLMNJhjLUH3gsf3accn0sqr4ff0M-KzlIB',
    titulo:
      'Children facing earthquakes in Mexico City: an educational strategy to promote prevention awareness',
    autor: 'Presentado por: Dr. Wulfrano Arturo Luna-Ramírez',
    descripcion:
      'Presentando en Computer Science & IT Conference Proceedings. Mexico is a country with high seismic activity, and its capital, Mexico City, is considered especially vulnerable due to its geographical characteristics, urbanization and dense population. In this context, risk awareness coupled with education focused on emergency and prevention management is key in minimizing the negative effects of such disasters.',
  },
])

const videosPT = ref([
  {
    src: 'https://player.vimeo.com/video/1064969797',
    titulo: 'Análisis de series de tiempo para monitoreo de riesgo en Cafetales',
    autor: 'Presentado por: Arnol Reyes Rosales',
    descripcion:
      'Desarrollo de un modelo basado en series de tiempo que permita con base a un conjunto de indicadores de métricas de interés monitorear las circunstancias de riesgo parea el cultivo del café.',
  },
  {
    src: 'https://player.vimeo.com/video/1064973108',
    titulo:
      'Detección temprana de roya en los cafetales, mediante redes neuronales convolucionales',
    autor: 'Presentado por: Luis GUillermo Cruz Estrada',
    descripcion:
      'Se propone una técnica basada en (CNN) para ser aplicada en los cultivos de café. Se plantea usar la mata completa y no solamente la hoja o imágenes satelitales.',
  },
])

const mostrarPDF = ref(false)
const pdfSeleccionado = ref('')

const abrirPdf = (url) => {
  pdfSeleccionado.value = url
  mostrarPDF.value = true
}

const pdfsSRPC = ref([
  {
    url: '/pdfs/SeminarioIAyPS.pdf',
    titulo: 'IA y Sociedad',
    autor: 'Sara Cañaveral Uribe',
    descripcion: 'Inteligencia artificial en la generación de imágenes médicas sintéticas.',
  },
  {
    url: '/pdfs/43-EDUPT-ChildreFacingPonenciaProbatorio.pdf',
    titulo:
      'Children facing earthquakes in Mexico City: an educational strategy to promote prevention awareness',
    autor: ' Daniela Pérez, Wulfrano Arturo Luna-Ramírez, Sara Margarita',
    descripcion:
      'Es fundamental contar con sistemas de informacion que permitan gestionar el riesgo que estos fenómenos representan, a la vez que mantienen a la población informada y preparada.',
  },
  {
    url: '/pdfs/diaposSATBAA-SID14.pdf',
    titulo:
      'Diseño ergonómico de sistemas de seguridad y alerta temprana De riesgo personal en caso de sismos.',
    autor: 'Wulfrano Arturo Luna-Ramírez',
    descripcion:
      'Es fundamental contar con sistemas de informacion que permitan gestionar el riesgo que estos fenómenos representan, a la vez que mantienen a la población informada y preparada.',
  },
  {
    url: '/pdfs/smrp_pcENC2024_presentacion.pdf',
    titulo: 'SMRP-PC: propuesta de un panel de control para gestión del riesgo en caso de sismos',
    autor: 'Andrea Domínguez-Lara y Wulfrano Arturo Luna-Ramírez',
    descripcion:
      'Es fundamental contar con sistemas de informacion que permitan gestionar el riesgo que estos fenómenos representan, a la vez que mantienen a la población informada y preparada.',
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
  border: 4px solid #ec7711;
  border-radius: 8px;
  max-width: 32%;
}
.icono {
  color: #61c2d7;
}

.proporciones-card {
  max-width: 550px;
  min-height: 500px;
}

.proporciones-video {
  aspect-ratio: 16 / 12;
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

.pdfCaja {
  width: 32%;
  max-width: 400px;
  cursor: pointer;
}

.pdf-container {
  width: 100%;
  height: 400px;
  border-bottom: 1px solid #ccc;
}

iframe {
  width: 100%;
  height: 100%;
}

.tamañoCompletoPDF {
  width: 100vw;
  height: 100vh;
  background: white;
}

.tamañoCompletoPDF iframe {
  width: 100%;
  height: calc(100% - 50px);
}
</style>
