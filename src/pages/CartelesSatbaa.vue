<template>
  <q-page class="q-pa-none">
    <div class="contenedor">
      <q-img src="/img/srp.jpg" class="full-width full-height">
        <div class="absolute-full overlay"></div>
        <div class="absolute-full flex flex-center overlay-text">
          <q-img src="/img/SATBAA-Dark-Icon.png" style="height: 120px; width: 120px"></q-img>
          <h1 class="q-mx-sm overlay-text">Infografías y Carteles</h1>
        </div>
      </q-img>
    </div>

    <!-- Infografías de Semáforo de Riesgo Personal -->

    <div class="flex column items-center text-center q-ma-xl">
      <p class="text-bold text-h3 q-mt-xl" style="color: #ec7711">
        Infografías de Semáforo de Riesgo Personal
      </p>

      <div class="q-pa-md row justify-center">
        <q-card
          v-for="(image, index) in infografiasSRP"
          :key="index"
          class="q-ma-xl"
          flat
          bordered
          style="width: 280px; height: 410px"
          @click="abrirCajaD(image.src)"
        >
          <q-img
            :src="image.src"
            class="cursor-pointer full-width full-height"
            style="object-fit: cover; height: 70%"
          />
          <q-card-section class="text-center" style="height: 30%">
            <div class="text-h6">{{ image.titulo }}</div>
          </q-card-section>
        </q-card>
      </div>
      <!-- Lightbox - Imagen en Pantalla Completa -->
      <q-dialog v-model="abrirCaja" full-width full-height>
        <q-card class="bg-black text-white">
          <q-btn
            :icon="matIcons.matClose"
            class="botonCerrar"
            flat
            round
            dense
            @click="abrirCaja = false"
          />
          <q-img :src="imgnSeleccionada" fit="contain" class="full-height full-width" />
        </q-card>
      </q-dialog>
    </div>
    <!-- Infografías de Semáforo de la Roya de Café-->
    <div class="flex column items-center text-center q-mt-sm">
      <div class="">
        <p class="text-bold text-h3 q-mt-lg" style="color: #63a030">
          Infografías de Semáforo de la Roya de Café
        </p>
        <div class="q-pa-md row justify-center">
          <q-card
            v-for="(image, index) in infografiasSRC"
            :key="index"
            class="q-ma-xl"
            flat
            bordered
            style="width: 280px; height: 410px"
            @click="abrirCajaD(image.src)"
          >
            <q-img
              :src="image.src"
              class="cursor-pointer full-width full-height"
              style="object-fit: cover; height: 70%"
            />
            <q-card-section class="text-center" style="height: 30%">
              <div class="text-h6">{{ image.titulo }}</div>
            </q-card-section>
          </q-card>
        </div>
        <q-dialog v-model="abrirCaja" full-width full-height>
          <q-card class="bg-black text-white">
            <q-btn
              :icon="matIcons.matClose"
              class="botonCerrar"
              flat
              round
              dense
              @click="abrirCaja = false"
            />
            <q-img :src="imgnSeleccionada" fit="contain" class="full-height full-width" />
          </q-card>
        </q-dialog>
      </div>
    </div>

    <!-- Carteles-->
    <div class="q-pa-md">
      <div class="text-center">
        <p class="text-bold text-h3 q-mt-lg" style="color: #ec7711">Carteles</p>
      </div>
      <div class="row justify-center q-gutter-md">
        <q-card
          v-for="(pdf, index) in carteles"
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

const infografiasSRP = ref([
  { src: 'src/img/infografias/CalculoIRP_UsuarioB.jpg', titulo: 'Cálculo del IRP.' },
  {
    src: 'src/img/infografias/LaboratorioDigitalDeGestionDeRiesgos_UsuarioA.jpg',
    titulo: 'Laboratorio Digital de Gestión de Riesgos',
  },
  {
    src: 'src/img/infografias/PlanDeSeguridadAnteSismos_UsuarioA.jpg',
    titulo: 'Plan de seguridad ante sismos',
  },
  {
    src: 'src/img/infografias/RecomendacionesEnUnSismoPisos4al8_UsuarioA.jpg',
    titulo: 'Recomendaciones en un sismo: pisos 4 al 8.',
  },
  {
    src: 'src/img/infografias/RecomendacionesEnUnSismoPisos4al8_UsuarioB.jpg',
    titulo: 'Recomendaciones en un sismo: pisos 4 al 8.',
  },
  {
    src: 'src/img/infografias/RecomendacionesEnUnSismoPisosE2yE3_UsuarioA.jpg',
    titulo: 'Recomendaciones en un sismo: pisos E2-E3.',
  },
  {
    src: 'src/img/infografias/RecomendacionesEnUnSismoPisosE2yE3_UsuarioB.jpg',
    titulo: 'Recomendaciones en un sismo: pisos E2-E3.',
  },
  {
    src: 'src/img/infografias/RecomendacionesEnUnSismoPlantaBaja_UsuarioA.jpg',
    titulo: 'Recomendaciones en un sismo: Planta baja.',
  },
  {
    src: 'src/img/infografias/RecomendacionesEnUnSismoPlantaBaja_UsuarioB.jpg',
    titulo: 'Recomendaciones en un sismo: Planta baja.',
  },
  {
    src: 'src/img/infografias/SemaforoMovilDeRiesgoPersonal_UsuarioA.jpg',
    titulo: 'Semáforo móvil de riesgo personal.',
  },
  {
    src: 'src/img/infografias/SemaforoMovilDeRiesgoPersonal_UsuarioB.jpg',
    titulo: 'Semáforo móvil de riesgo personal.',
  },
])

const infografiasSRC = ref([
  {
    src: 'src/img/infografias/infografiasSRC/CalculoIRP_UsuarioB.jpg',
    titulo: 'Semáforo de la Roya del café',
  },
  {
    src: 'src/img/infografias/infografiasSRC/DesarrolloDelFrutoDelCafe_UsuarioA.jpg',
    titulo: 'Desarrollo del fruto del café.',
  },
  {
    src: 'src/img/infografias/infografiasSRC/EtapasFenologicasDelFrutoDelCafe_UsuarioB.jpg',
    titulo: 'Etapas fenológicas del fruto del café.',
  },
  {
    src: 'src/img/infografias/infografiasSRC/GestacionDeLaRoyaDelCafe_UsuarioA.jpg',
    titulo: 'Gestación de la roya del café. Usuario A.',
  },
  {
    src: 'src/img/infografias/infografiasSRC/GestacionDeLaRoyaDelCafe_UsuarioB.jpg',
    titulo: 'Gestación de la roya del café. Usuario B.',
  },
  {
    src: 'src/img/infografias/infografiasSRC/LaboratorioDigitalDeCafeticultura_UsuarioAB.jpg',
    titulo: 'Laboratorio digital de cafeticultura.',
  },
  {
    src: 'src/img/infografias/infografiasSRC/SemaforoDeLaRoyaDelCafe_UsuarioA.jpg',
    titulo: 'Semáforo de la roya del café.',
  },
])

const mostrarPDF = ref(false)
const pdfSeleccionado = ref('')

const abrirPdf = (url) => {
  pdfSeleccionado.value = url
  mostrarPDF.value = true
}

const carteles = ref([
  {
    url: '/pdfs/CartealAL.pdf',
    titulo: 'SMRP-PC: propuesta de un panel de control para gestión del riesgo en caso de sismos',
    autor: 'Andrea Domínguez-Lara y Wulfrano Arturo Luna-Ramírez',
    descripcion:
      'Es fundamental contar con sistemas de informacion que permitan gestionar el riesgo que estos fenómenos representan, a la vez que mantienen a la población informada y preparada.',
  },
  {
    url: '/pdfs/CartealAL.pdf',
    titulo: 'SMRP-PC: propuesta de un panel de control para gestión del riesgo en caso de sismos',
    autor: 'Andrea Domínguez-Lara y Wulfrano Arturo Luna-Ramírez',
    descripcion:
      'Es fundamental contar con sistemas de informacion que permitan gestionar el riesgo que estos fenómenos representan, a la vez que mantienen a la población informada y preparada.',
  },
  {
    url: '/pdfs/CartealAL.pdf',
    titulo: 'SMRP-PC: propuesta de un panel de control para gestión del riesgo en caso de sismos',
    autor: 'Andrea Domínguez-Lara y Wulfrano Arturo Luna-Ramírez',
    descripcion:
      'Es fundamental contar con sistemas de informacion que permitan gestionar el riesgo que estos fenómenos representan, a la vez que mantienen a la población informada y preparada.',
  },
])
const abrirCaja = ref(false)
const imgnSeleccionada = ref('')

const abrirCajaD = (img) => {
  imgnSeleccionada.value = img
  abrirCaja.value = true
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

.card-size {
  height: 600px;
  width: 400px;
}

.q-img {
  height: 100%;
  object-fit: cover;
}

.q-intersection {
  transition: none !important;
  animation: none !important;
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
