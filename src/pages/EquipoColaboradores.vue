<template>
  <q-page class="q-pa-none">
    <div class="contenedor">
      <q-img src="/src/img/colaboradores.jpg" class="full-width full-height">
        <div class="absolute-full overlay"></div>
        <div class="absolute-full flex flex-center overlay-text">
          <h1 class="q-mx-md overlay-text">Equipo de colaboradores</h1>
        </div>
      </q-img>
    </div>
    <!-- Responsable del proyecto -->
    <div class="q-pa-xl full-width">
      <div
        class="text-h4 text-md-h3 text-lg-h2 text-center q-mb-xl q-mt-lg text-bold"
        style="color: #61c2d7"
      >
        Responsable del proyecto
      </div>

      <!-- Contenedor de colaboradores -->
      <div class="row q-col-gutter-md justify-center">
        <div
          class="col-12 col-sm-10 col-md-6 col-lg-4 q-pa-md"
          style="display: flex; align-items: center"
        >
          <!-- Ícono a la izquierda -->
          <q-icon
            :name="matIcons.matPortrait"
            style="font-size: 140px; color: #61c2d7; margin-right: 28px"
            class="q-ml-xl"
          />

          <!-- Contenido a la derecha -->
          <div style="display: flex; flex-direction: column; align-items: flex-start; width: 100%">
            <p class="text-h6" style="color: #092231; margin: 0; line-height: 1.9">
              Dr. Wulfrano Arturo Luna-Ramírez
            </p>
            <p class="text-grey-7" style="margin: 0; line-height: 1.5">
              Experiencia en inteligencia artificial, sistemas multi-agente, procesamiento de
              lenguaje natural, aprendizaje automático e ingeniería de software orientado a agentes.
            </p>
            <q-btn class="bg-secondary q-mt-md" no-caps style="margin-right: 78px">Ver más</q-btn>
          </div>
        </div>
      </div>
    </div>
    <!-- Equipo de colaboradores investigadores -->
    <div class="q-pa-xl full-width">
      <!-- Título responsive -->
      <div
        class="text-h4 text-md-h3 text-lg-h2 text-center q-mb-xl q-mt-lg text-bold"
        style="color: #61c2d7"
      >
        Colaboradores investigadores
      </div>

      <div class="row q-col-gutter-md justify-center">
        <div
          class="col-12 col-sm-6 col-md-4 q-ma-sm"
          v-for="colaboradori in colaboradoresI"
          :key="colaboradori.id"
          style="max-width: 30.333%; display: flex; flex-direction: column; align-items: center"
        >
          <q-icon :name="matIcons.matPortrait" style="font-size: 50px" />
          <p class="text-h6 text-center" style="color: #092231; margin: 0; line-height: 1.8">
            {{ colaboradori.nombre }}
          </p>
          <p class="text-grey-7" style="margin: 0; line-height: 1.5">
            {{ colaboradori.descripcion }}
          </p>
          <q-btn class="bg-secondary col-12 q-mt-md" no-caps>Leer más</q-btn>
        </div>
        >
      </div>
    </div>
    <!-- Equipo de colaboradores proyecto terminal -->
    <div class="q-pa-xl full-width">
      <!-- Título responsive -->
      <div
        class="text-h4 text-md-h3 text-lg-h2 text-center q-mb-xl q-mt-lg text-bold"
        style="color: #61c2d7"
      >
        Colaboradores proyecto terminal
      </div>

      <!-- Contenedor de colaboradores -->
      <div class="row q-col-gutter-md justify-center">
        <div
          class="col-12 col-sm-6 col-md-4 q-ma-sm"
          v-for="colaboradorpt in colaboradoresPT"
          :key="colaboradorpt.id"
          style="max-width: 30.333%; display: flex; flex-direction: column; align-items: center"
        >
          <q-icon :name="matIcons.matPortrait" style="font-size: 50px" />
          <p class="text-h6 text-center text-primary text-bold" style="margin: 0; line-height: 1.8">
            {{ colaboradorpt.nombre }}
          </p>
          <p
            class="text-h6 text-center text-secondary text-bold"
            style="margin: 0; line-height: 1.8"
          >
            Licenciatura
          </p>
          <p class="text-grey-7" style="margin: 0; line-height: 1.5">
            {{ colaboradorpt.licenciatura }}
          </p>
          <p
            class="text-h6 text-center text-secondary text-bold"
            style="margin: 0; line-height: 1.8"
          >
            Correo
          </p>
          <p class="text-grey-7" style="margin: 0; line-height: 1.5">
            {{ colaboradorpt.correo }}
          </p>
          <p
            class="text-h6 text-center text-secondary text-bold"
            style="margin: 0; line-height: 1.8"
          >
            Colabroración
          </p>
          <p class="text-grey-7" style="margin: 0; line-height: 1.5">
            {{ colaboradorpt.colaboracion }}
          </p>
          <q-btn class="bg-secondary col-12 q-mt-md" no-caps>Leer más</q-btn>
        </div>
        >
      </div>
    </div>
    <!-- Equipo de colaboradores servicio social -->
    <div class="q-pa-xl full-width">
      <!-- Título responsive -->
      <div
        class="text-h4 text-md-h3 text-lg-h2 text-center q-mb-xl q-mt-lg text-bold"
        style="color: #61c2d7"
      >
        Colaboradores servicio social
      </div>

      <!-- Contenedor de colaboradores -->
      <div class="row q-col-gutter-md justify-center">
        <div
          class="col-12 col-sm-6 col-md-4 q-ma-sm"
          v-for="colaboradorss in colaboradoresSS"
          :key="colaboradorss.id"
          style="max-width: 30.333%; display: flex; flex-direction: column; align-items: center"
        >
          <q-icon :name="matIcons.matPortrait" style="font-size: 50px" />
          <p class="text-h6 text-center text-primary text-bold" style="margin: 0; line-height: 1.8">
            {{ colaboradorss.nombre }}
          </p>
          <p
            class="text-h6 text-center text-secondary text-bold"
            style="margin: 0; line-height: 1.8"
          >
            Licenciatura
          </p>
          <p class="text-grey-7" style="margin: 0; line-height: 1.5">
            {{ colaboradorss.licenciatura }}
          </p>
          <p
            class="text-h6 text-center text-secondary text-bold"
            style="margin: 0; line-height: 1.8"
          >
            Correo
          </p>
          <p class="text-grey-7" style="margin: 0; line-height: 1.5">
            {{ colaboradorss.correo }}
          </p>
          <p
            class="text-h6 text-center text-secondary text-bold"
            style="margin: 0; line-height: 1.8"
          >
            Colabroración
          </p>
          <p class="text-grey-7" style="margin: 0; line-height: 1.5">
            {{ colaboradorss.colaboracion }}
          </p>
          <q-btn class="bg-secondary col-12 q-mt-md" no-caps>Leer más</q-btn>
        </div>
        >
      </div>
    </div>
  </q-page>
</template>
<script setup>
import * as matIcons from '@quasar/extras/material-icons'
const colaboradoresPT = [
  {
    id: 1,
    nombre: 'Arnol Reyes Rosales',
    licenciatura: 'Tecnologías y Sistemas de Información',
    correo: 'arnol.reyes@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 2,
    nombre: 'Rodrigo Vázquez Espino',
    licenciatura: 'Tecnologías y Sistemas de Información',
    correo: 'rodrigo.vazquez@cua.uam.mx',
    colaboracion: 'Semáforo de Riesgo Personal',
  },
  {
    id: 3,
    nombre: 'Luz Cabrera',
    licenciatura: '',
    correo: 'luz.cabrera@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 4,
    nombre: 'Daniela Sánchez Covarrubias',
    licenciatura: 'Tecnologías y Sistemas de Información',
    correo: 'daniela.sanchez@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 4,
    nombre: 'Daniela Sánchez Covarrubias',
    licenciatura: 'Tecnologías y Sistemas de Información',
    correo: 'daniela.sanchez@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 5,
    nombre: 'Jennifer Melissa García Dávila',
    licenciatura: 'Tecnologías y Sistemas de Información',
    correo: 'jennifer.garcia@cua.uam.mx',
    colaboracion: 'Semáforo de Riesgo Personal',
  },
  {
    id: 6,
    nombre: 'Luis Guillermo Cruz Estrada',
    licenciatura: 'Tecnologías y Sistemas de Información',
    correo: 'luis.cruz@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 7,
    nombre: 'Juan Carlos García Zepeda',
    licenciatura: 'Tecnologías y Sistemas de Información',
    correo: 'juan.garcia@cua.uam.mx',
    colaboracion: 'Semáforo de Riesgo Personal',
  },
]

const colaboradoresI = [
  {
    id: 1,
    nombre: 'Dra. Anasol Peña Rios',
    descripcion:
      'Experiencia en interacciones humano-computadora, tecnologías inmersivas, cómputo ubicuo, internet de las cosass inteligentes, ambientes inteligentes y gemelos digitales. ',
  },
  {
    id: 2,
    nombre: 'Dr. Emmanuel Ferreyra',
    descripcion:
      'Experiencia dirigda por objetivos, inteligencia artifical explicable, optimización matemática, aprendizaje automático, computación evolutiva, sistemas difusos, evaluación de riesgo, ingeniería financiera arquitectura orietnada a recursos e integración de sistemas',
  },
  {
    id: 3,
    nombre: 'Dr. Miguel Capllonch',
    descripcion:
      'Experiencia en modelado de sistemas físicos, neurociencia computacional, meteorología y aprendizaje de máquinas. ',
  },
  {
    id: 4,
    nombre: 'Dr. Gustavo Ortiz Hernández',
    descripcion:
      'Experiencia en sistemas multi-agente, inteligencia artifical, ingeniería de software orientada a agentes, desarrollo de sistemas y aplicaciones móviles y agroecología. ',
  },
  {
    id: 5,
    nombre: 'Mtra. Lucila Mercado Colín',
    descripcion: 'Experiencia en diseño y evaluación ergonómica de productos.',
  },
]
const colaboradoresSS = [
  {
    id: 1,
    nombre: 'Diego Rubén Manrique Cruz',
    licenciatura: 'Diseño',
    correo: 'diego.manrique@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 2,
    nombre: 'Lucero Montero Álvarez',
    licenciatura: 'Diseño',
    correo: 'lucero.montero@cua.uam.mx',
    colaboracion: 'Semáforo de Riesgo Personal',
  },
  {
    id: 3,
    nombre: 'Karolina Enriquez Ortiz',
    licenciatura: 'Diseño',
    correo: 'luz.cabrera@cua.uam.mx',
    colaboracion: 'Semáforo de Riesgo Personal',
  },
  {
    id: 4,
    nombre: 'Ana Lizeth Hernández Oribio',
    licenciatura: '',
    correo: 'ana.hernandez@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 4,
    nombre: 'Patricia Alavedra Schega',
    licenciatura: 'Ciencias de la Comunicación',
    correo: 'patricia.alavedra@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 5,
    nombre: 'Alejandro López Vázquez ',
    licenciatura: '',
    correo: 'alejandro.lopez@cua.uam.mx',
    colaboracion: 'Semáforo de Riesgo Personal',
  },
  {
    id: 6,
    nombre: 'Diego Jovan Cansino Malpica',
    licenciatura: '',
    correo: 'diego.cansino@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 7,
    nombre: 'Arnol Reyes Rosales',
    licenciatura: 'Tecnologías y Sistemas de Información',
    correo: 'alma.reyes@cua.uam.mx',
    colaboracion: 'Semáforo de Riesgo Personal',
  },
  {
    id: 8,
    nombre: 'Luis Alberto Hernández Valencia',
    licenciatura: '',
    correo: 'luis.hernandez@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 9,
    nombre: 'Juan Carlos García Zepeda',
    licenciatura: 'Tecnologías y Sistemas de Información',
    correo: 'juan.garcía.@cua.uam.mx',
    colaboracion: 'Semáforo de Riesgo Personal',
  },
  {
    id: 10,
    nombre: 'Luis Guillermo Cruz Estrada',
    licenciatura: 'Tecnologías y Sistemas de Información',
    correo: 'luis.cruz@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 11,
    nombre: 'Adrian Francisco Simón Rodriguez',
    licenciatura: 'Tecnologías y Sistemas de Información',
    correo: 'adrian.simon@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 12,
    nombre: 'Diego Arroyo Sánchez',
    licenciatura: '',
    correo: 'diego.arroyo@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 13,
    nombre: 'Lizbeth Verónica Ochoa Fonseca',
    licenciatura: '',
    correo: 'lizbeth.ochoa@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 14,
    nombre: 'Jorge Armando Gutiérrez Martínez',
    licenciatura: 'Diseño',
    correo: 'jorge.gutierrez@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
  {
    id: 15,
    nombre: 'Daniela Rodriguez Maldonado',
    licenciatura: '',
    correo: 'diego.rodriguez@cua.uam.mx',
    colaboracion: 'Sistema de Alerta Temprana',
  },
]
</script>

<style scoped>
.contenedor {
  width: 100%;
  height: 400px; 
}

.overlay {
  background: linear-gradient(to bottom, rgba(139, 139, 139, 0.5), rgba(139, 139, 139, 0.5));
}

/* Texto responsivo */
.overlay-text h1 {
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: clamp(1.5rem, 5vw, 3rem);
  padding: 10px;
  max-width: 90%;
  font-size: 80px;
}

.bordes {
  border: 4px solid #61c2d7;
  border-radius: 8px;
  max-width: 30%;
}
.icono {
  color: #61c2d7;
}
</style>
