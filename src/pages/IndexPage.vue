<template>
  <q-page class="flex flex-center">
    <!-- encabezado2 -->

    <div class="row bg-primary col q-pa-xl">
      <q-img src="/img/Inicio_SitioWeb.png" style="height: 520px; width: 810px" />
      <div class="col-6 q-mt-xl col-sm">
        <p class="text-bold text-h2" style="color: #61c2d7">SATBAA</p>
        <p class="text-bold text-h4" style="color: #61c2d7">
          Sistema de Alerta Temprana Basada en Agentes Autónomos
        </p>
      </div>
    </div>
    <!-- Introducción -->

    <div class="row">
      <q-img src="/img/fire.png" style="height: 540px; width: 770px" class="col" />
      <div class="col-6 q-pa-lg q-mt-xl q-ml-xl col-sm-6">
        <p>
          A lo largo de la historia de la humanidad han ocurrido diversos fenómenos, ya sean de
          carácter natural como las inundcaciones, sismos, erupciones volcánicas, entre otros, así
          como conflictos causados por la misma sociedad. Estos fenómenos traen consigo
          consecuencias tales como los daños a las infraestructuras y los vienes a la población, al
          igual que víctimas fatales.
        </p>
        <p>
          Afortunadamente, los diversos avances tecnológicos han permitido acercarnos a la
          identificación de causas y circunstancias asociadas a su origen y a la frecuencia con la
          que ocurren, como ejemplo tenemos a los Sistemas de Seguridad y Alerta Temprana de Riesgos
          [SSATR].
        </p>
        <p>
          Este proyecto se orienta al desarrollo de un sistema de detección y alerta oportuna de
          desastres naturales y antrópicos, que provea ayuda en la toma de decisiones a dos tipos de
          usuarios
          <strong>a) víctimas y b) equipos de respuesta y gestión de desastres...</strong>
        </p>
        <q-btn class="bg-secondary col-12" no-caps>Saber más</q-btn>
      </div>
    </div>
    <!-- Objetivo General -->

    <div class="q-pa-xl">
      <div class="column items-center">
        <p class="text-bold text-h3 q-mt-lg" style="color: #61c2d7">Objetivo General</p>
        <p class="q-mt-md">
          Desarrollar un SSATR basado en un Sistema Multi-Agente compuesto por agentes heterogéneos
          (cognitivos y reactivos), objetos y artefactos, que identifique riesgos y amenazas
          personales y colectivas con base en un modelo computacional de ineracción que comprenda
          personas y otros sitemas informáticos, que actúe en beneficio de los usuarios y
          salvaguarde la integridad de los datos de estos.
        </p>
      </div>
    </div>
    <!-- Beneficios -->

    <div class="q-pa-xl">
      <div class="text-h4 text-center text-bold" style="color: #61c2d7">Beneficios</div>
      <div class="row items-center justify-center">
        <div class="col-4 col-sm-12 col-md-4 q-mt-md flex column items-center text-center">
          <q-icon :name="matIcons.matFeed" style="font-size: 50px" />
          <p class="q-mt-md">
            Proporcionar información pertinente a los usuarios para mejorar las condiciones de las
            víctimas de un evento desastroso que los lleve a evitar el peligro y minimizar el
            riesgo.
          </p>
        </div>
        <div class="col-4 col-sm-12 col-md-4 q-mt-md flex column items-center text-center">
          <q-icon :name="matIcons.matDiversity2" style="font-size: 50px" />
          <p class="q-mt-md">
            Aumentar la eficiencia y coordinación de los equipos de emergencia durantes sus
            intervenciones.
          </p>
        </div>
        <div class="col-4 col-sm-12 col-md-4 q-mt-md flex column items-center text-center">
          <q-icon :name="matIcons.matGroupAdd" style="font-size: 50px" />
          <p class="q-mt-md">
            Apoyar a los tomadores de decisiones que les permita mejorar las condiciones de
            seguridad y gestión del riesgo.
          </p>
        </div>
        <q-btn
          to="/ProyectoInvestigacion"
          class="bg-secondary col-xl-2 col-sm-6 col-md-4 text-bold"
          no-caps
        >
          Ver objetivos específicos
        </q-btn>
      </div>
    </div>
    <!-- Aplicaciones desarrolladas -->
    <div class="q-pa-lg">
      <div class="text-h3 text-center q-mb-xl q-mt-lg text-bold" style="color: #61c2d7">
        Aplicaciones desarrolladas
      </div>
      <div class="row items-center justify-center">
        <div
          class="col-4 col-sm-12 col-md-4 q-mt-md flex column items-center text-center bordes q-ma-sm"
        >
          <q-img
            src="/img/APIEN-Light-Icon.png"
            style="height: 40px; width: 100px"
            class="col q-ma-sm"
          />
          <p class="text-bold text-h6">API de Eventos Naturales</p>
          <p class="q-ma-sm">
            Integra información de datos de monitoreo ambiental oficiales (en esta fase
            considera...)
          </p>
          <q-btn class="bg-secondary col-xl-2 col-sm-6 col-md-4 q-ma-sm" no-caps to="/PagApiEnv">
            Ver más
          </q-btn>
        </div>
        <div
          class="col-4 col-sm-12 col-md-4 q-mt-md flex column items-center text-center bordes q-ma-sm"
        >
          <q-img
            src="/img/SCC-Light-Icon.png"
            style="height: 40px; width: 100px"
            class="col q-ma-sm"
          />
          <p class="text-bold text-h6">Semáforo de la Roya del Café</p>
          <p class="q-ma-sm">
            Estima la probabilidad de la presencia de roya en las matas de café a partir de datos...
          </p>
          <q-btn class="bg-secondary col-xl-2 col-sm-6 col-md-4 q-ma-sm" no-caps to="/PagSrc">
            Ver más
          </q-btn>
        </div>
        <div
          class="col-4 col-sm-12 col-md-4 q-mt-md flex column items-center text-center bordes q-ma-sm"
        >
          <q-img
            src="/img/SRP-Light-Icon.png"
            style="height: 40px; width: 100px"
            class="col q-ma-sm"
          />
          <p class="text-bold text-h6">Semáforo de Riesgo Personal</p>
          <p class="q-ma-sm">
            Permite calcular el índice de riesgo (IR) que presenta una persona ante un desastre
            natural a través...
          </p>
          <q-btn class="bg-secondary col-xl-2 col-sm-6 col-md-4 q-ma-sm" no-caps to="/PagSrp">
            Ver más
          </q-btn>
        </div>
      </div>
    </div>
    <!-- Artículos publicados -->
    <div class="q-pa-xl">
      <div class="text-h3 text-center q-mb-xl q-mt-lg text-bold" style="color: #61c2d7">
        Artículos y publicaciones
      </div>
      <div class="row items-center justify-center">
        <div class="col-6 col-sm-12 col-md-4 q-mt-md flex column items-center text-center q-ma-sm">
          <q-card class="bg-primary" flat bordered style="max-width: 640px">
            <q-img src="/img/grietas.png" style="height: 350px" />

            <q-card-section style="flex-grow: 1; overflow-y: auto">
              <div class="text-h5 q-mt-sm q-mb-xs" style="color: #ffffff">
                Hacia un semáforo de riesgo personal para sismos en la República Mexicana
              </div>
              <div class="text-h7" style="color: #ffffff">
                Rodrigo Vázquez Espino, Wulfrano Arturo Luna-Ramírez, Anasol Peña-Rios, Miguel
                Capllonch Juan.
              </div>
            </q-card-section>

            <!-- Card Actions -->
            <q-card-actions class="row items-center justify-between q-mb-xs" style="flex-shrink: 0">
              <q-btn
                flat
                label="Ver publicación"
                class="bg-secondary"
                style="color: #092231"
                no-caps
              />
              <q-space />
              <q-btn
                round
                flat
                dense
                @click="expandir = !expanded"
                :label="expandir ? 'Ocultar resumen' : 'Leer resumen'"
                style="color: #ffffff"
                no-caps
              >
                <q-icon
                  :name="expandir ? matIcons.matExpandLess : matIcons.matExpandMore"
                  style="font-size: 50px"
                />
              </q-btn>
            </q-card-actions>

            <q-slide-transition>
              <div v-show="expanded" style="width: 100%">
                <q-separator />
                <q-card-section style="color: #ffffff">
                  {{ lorem }}
                </q-card-section>
              </div>
            </q-slide-transition>
          </q-card>
        </div>
        <div class="col-6 col-sm-12 col-md-4 q-mt-md flex column items-center text-center q-ma-sm">
          <q-card class="bg-primary" flat bordered style="max-width: 640px">
            <q-img src="/img/2.png" style="height: 350px" />

            <q-card-section style="flex-grow: 1; overflow-y: auto">
              <div class="text-h5 q-mt-sm q-mb-xs" style="color: #ffffff">
                Hacia un semáforo de riesgo personal para sismos en la República Mexicana
              </div>
              <div class="text-caption" style="color: #ffffff">
                Rodrigo Vázquez Espino, Wulfrano Arturo Luna-Ramírez, Anasol Peña-Rios, Miguel
                Capllonch Juan.
              </div>
            </q-card-section>

            <q-card-actions class="row items-center justify-between q-mb-xs" style="flex-shrink: 0">
              <q-btn
                flat
                label="Ver publicación"
                class="bg-secondary"
                style="color: #092231"
                no-caps
              />
              <q-space />
              <q-btn
                round
                flat
                dense
                @click="expandir = !expanded"
                :label="expandir ? 'Ocultar resumen' : 'Leer resumen'"
                style="color: #ffffff"
                no-caps
              >
                <q-icon
                  :name="expandir ? matIcons.matExpandLess : matIcons.matExpandMore"
                  style="font-size: 50px"
                />
              </q-btn>
            </q-card-actions>

            <q-slide-transition>
              <div v-show="expanded" style="width: 100%">
                <q-separator />
                <q-card-section class="text-subtitle2">
                  {{ lorem }}
                </q-card-section>
              </div>
            </q-slide-transition>
          </q-card>
        </div>
        <q-btn
          class="bg-secondary col-xl-2 col-sm-6 col-md-4 q-ma-xl"
          style="width: 400px; height: 200px"
          no-caps
          to="/PagArticulos"
          >Ver más publicaciones
        </q-btn>
      </div>
    </div>
    <!-- Material de divulgación -->
    <div class="q-pa-xl">
      <div class="text-h3 text-center q-mb-xl q-mt-lg text-bold" style="color: #61c2d7">
        Material de divulgación
      </div>
      <div class="row items-center justify-center">
        <div class="col-4 col-sm-12 col-md-4">
          <div class="q-pa-md" style="width: 300px">
            <q-card class="my-card">
              <q-parallax src="/img/cafe.png" :height="350" />
              <q-card-section>
                <div class="text-h6">Animaciones</div>
                <div class="text-subtitle2"></div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="col-4 col-sm-12 col-md-4">
          <div class="q-pa-md" style="width: 300px">
            <q-card class="my-card">
              <q-parallax src="/img/infoPC.png" :height="350" />
              <q-card-section>
                <q-btn flat class="text-h6 text-lowercase cursor-pointer" to="/PagCarteles">
                  Infografías
                </q-btn>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="col-4 col-sm-12 col-md-4" style="width: 300px">
          <div class="q-pa-md">
            <q-card class="my-card">
              <q-parallax src="/img/tc.png" :height="350" />
              <q-card-section>
                <q-btn flat class="text-h6 text-lowercase cursor-pointer" to="/PagArticulos">
                  Textos científicos
                </q-btn>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <!-- Disciplinas y tecnologías -->
    <div class="q-pa-xl">
      <div class="text-h3 text-center q-mb-xl q-mt-lg text-bold" style="color: #61c2d7">
        Disciplinas y tecnologías
      </div>
      <div class="row items-center justify-center">
        <div class="col-6 col-sm-12 col-md-4 q-mt-md flex column items-center text-center q-pa-lg">
          <q-img src="/img/celular.png" style="height: 350px; width: 470px" class="col-6" />
        </div>
        <div class="col-6 col-sm-12 col-md-4 q-mt-md flex column items-center text-center">
          <p class="text-left">
            Aunque este proyecto podría englobarse dentro de la disciplina de Ciencias de la
            Computación, vale la pena señalar que por la naturaleza del problema es de carácter
            interdisciplinario.
          </p>
          <p class="text-left">
            Por estar fuertmente relacionado su proceso con la indagación, desarrollo y evaluación
            con el Diseño Centrado en el Usuario, tiene fuerte presencia del Diseño de Interfaces e
            Interacción y la Ergonomía Cognitiva, ya que se relaciona con usuarios reales, la
            Usabilidad, la Inteligencia Artificial, las Tecnologías Inmersivas, las interacciones
            Humano-Computadora y el Cómputo Ubicuo.
          </p>
        </div>
      </div>
    </div>
    <!-- Equipo de colaboradores -->
    <div class="q-pa-xl full-width">
      <!-- Título responsive -->
      <div
        class="text-h4 text-md-h3 text-lg-h2 text-center q-mb-xl q-mt-lg text-bold"
        style="color: #61c2d7"
      >
        Equipo de colaboradores
      </div>

      <!-- Contenedor de colaboradores -->
      <div class="row q-col-gutter-md justify-center">
        <div
          class="col-12 col-sm-6 col-md-4 q-ma-sm"
          v-for="colaborador in colaboradores"
          :key="colaborador.id"
          style="max-width: 30.333%; display: flex; flex-direction: column; align-items: center"
        >
          <q-icon :name="matIcons.matPortrait" style="font-size: 50px" />
          <p class="text-h6 text-center" style="color: #092231; margin: 0; line-height: 1.8">
            {{ colaborador.nombre }}
          </p>
          <p class="text-h7 text-center" style="color: #61c2d7; margin: 0; line-height: 1.8">
            {{ colaborador.rol }}
          </p>
          <p class="text-grey-7" style="margin: 0; line-height: 1.5 text-left">
            {{ colaborador.descripcion }}
          </p>
          <q-btn class="bg-secondary col-12 q-mt-lg" no-caps>Leer más</q-btn>
        </div>
        <q-btn
          class="bg-secondary col-xl-2 col-sm-6 col-md-4 q-ma-xl"
          style="width: 600px; height: 50px"
          to="/EquipoColaboradores"
          no-caps
          >Ver a todos los colaboradores</q-btn
        >
      </div>
    </div>
  </q-page>
</template>

<script setup>
import * as matIcons from '@quasar/extras/material-icons'
import { ref } from 'vue'

const expandir = ref(false)
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const colaboradores = [
  {
    id: 1,
    nombre: 'Dr. Wulfrano Arturo Luna-Ramírez',
    rol: 'Responsable del proyecto',
    descripcion:
      'Experiencia en inteligencia artificial, sistemas multi-agente, procesamiento de lenguaje natural, aprendizaje automático e ingeniería de software oritentada a agentes.',
  },
  {
    id: 2,
    nombre: 'Dra. Anasol Peña Rios',
    rol: 'Investigadora',
    descripcion:
      'Experiencia en interacciones humano-computadora, tecnologías inmersivas, cómputo ubicuo, internet de las cosass inteligentes, ambientes inteligentes y gemelos digitales. ',
  },
  {
    id: 3,
    nombre: 'Dr. Emmanuel Ferreyra',
    rol: 'Investigador',
    descripcion:
      'Experiencia dirigda por objetivos, inteligencia artifical explicable, optimización matemática, aprendizaje automático, computación evolutiva, sistemas difusos, evaluación de riesgo, ingeniería financiera arquitectura orietnada a recursos e integración de sistemas',
  },
  {
    id: 4,
    nombre: 'Dr. Miguel Capllonch',
    rol: 'Investigador',
    descripcion:
      'Experiencia en modelado de sistemas físicos, neurociencia computacional, meteorología y aprendizaje de máquinas. ',
  },
  {
    id: 5,
    nombre: 'Dr. Gustavo Ortiz Hernández',
    rol: 'Investigador',
    descripcion:
      'Experiencia en sistemas multi-agente, inteligencia artifical, ingeniería de software orientada a agentes, desarrollo de sistemas y aplicaciones móviles y agroecología. ',
  },
  {
    id: 6,
    nombre: 'Mtra. Lucila Mercado Colín',
    rol: 'Investigadora',
    descripcion: 'Experiencia en diseño y evaluación ergonómica de productos.',
  },
]
</script>
<style scoped>
.bordes {
  border: 4px solid #61c2d7;
  border-radius: 8px;
}
</style>
