<template>
  <q-page class="q-pa-none">
    <div class="contenedor">
      <q-img src="/img/portadaArt.JPG" class="full-width full-height">
        <div class="absolute-full overlay"></div>
        <div class="absolute-full flex flex-center overlay-text">
          <q-img src="/img/SATBAA-Dark-Icon.png" style="height: 120px; width: 120px"></q-img>
          <h1 class="q-mx-sm overlay-text">Conferencias</h1>
        </div>
      </q-img>
    </div>
    <!-- Articulos sismos-->
    <div class="q-pa-md">
      <div class="text-h4 text-center text-bold q-pb-lg" style="color: #ec7711">
        Artículos de Semáforo de Riesgo Personal
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
            <div class="text-h6">{{ pdf.titulo }}</div>
            <div class="text-subtitle2">{{ pdf.descripcion }}</div>
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

    <!-- Articulos sismos-->
    <div class="q-pa-md">
      <div class="text-h4 text-center text-bold q-pb-lg" style="color: #63a030">
        Artículos de Semáforo de la Roya del Café
      </div>

      <div class="row justify-center q-gutter-md">
        <q-card
          v-for="(pdf, index) in pdfsSRC"
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
            <div class="text-h6">{{ pdf.titulo }}</div>
            <div class="text-subtitle2">{{ pdf.descripcion }}</div>
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

const mostrarPDF = ref(false)
const pdfSeleccionado = ref('')

const abrirPdf = (url) => {
  pdfSeleccionado.value = url
  mostrarPDF.value = true
}

const pdfsSRPC = ref([
  {
    url: '/pdfs/articuloMelissaIADIS2022.pdf',
    titulo: 'SERIOUS VIDEO GAME TO PROMOTE EARTHQUAKE PREVENTION IN CHILDREN',
    descripcion:
      'In Mexico, since 1990, the National Seismological Service has reported various earthquakes, in some cases they usually imperceptible, it doesn’t ensure that the population cannot be injured, therefore, it is important to keep the entire population informed and prepared in the event that is presented an actual event.',
  },
  {
    url: '/pdfs/artSMRP A MOBILE APPLICATION FOR EARTHQUAKE PERSONAL RISK ALARMS.pdf',
    titulo: 'SMRP: A MOBILE APPLICATION FOR EARTHQUAKE PERSONAL RISK ALARMS',
    descripcion:
      'Digital technologies come across almost all aspects of daily life of institutions, communities and individuals. The uncountable applications range from entertainment to medical assistance or life preserving equipment. This scope touches a field that has been calling the attention of industry, government and academia: natural disasters and risk recovery.',
  },
  {
    url: '/pdfs/smrp_pcENC2024.pdf',
    titulo: 'SMRP-PC: propuesta de un panel de control para gestión del riesgo en caso de sismos',
    descripcion:
      'Es fundamental contar con sistemas de informacion que permitan gestionar el riesgo que estos fenómenos representan, a la vez que mantienen a la población informada y preparada.',
  },
])

const pdfsSRC = ref([
  {
    url: '/pdfs/COMIA_2022_paper_120-SemaforoRoyaCafe.pdf',
    titulo:
      'Semáforo para estimar el riesgo de roya en cafetales: una propuesta basada en Series de Tiempo',
    descripcion:
      'En este trabajo se reporta la aplicación de análisis de Series de Tiempo en datos reales colectados in situ en fincas cafetaleras del Estado de Veracruz, México, con el fin de estimar el riesgo de aparición del hongo causante de la roya del cafeto con base en las variables de temperatura y humedad relativa.',
  },
  {
    url: '/pdfs/artSMRP A MOBILE APPLICATION FOR EARTHQUAKE PERSONAL RISK ALARMS.pdf',
    titulo: 'SMRP: A MOBILE APPLICATION FOR EARTHQUAKE PERSONAL RISK ALARMS',
    descripcion:
      'Digital technologies come across almost all aspects of daily life of institutions, communities and individuals. The uncountable applications range from entertainment to medical assistance or life preserving equipment. This scope touches a field that has been calling the attention of industry, government and academia: natural disasters and risk recovery.',
  },
  {
    url: '/pdfs/smrp_pcENC2024.pdf',
    titulo: 'SMRP-PC: propuesta de un panel de control para gestión del riesgo en caso de sismos',
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
