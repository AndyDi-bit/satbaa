<template>
  <q-page class="q-pa-none">
    <div class="contenedor">
      <q-img src="/img/pi.png" class="imagen-ajustada" fit="cover full-width full-height">
        <div class="absolute-full overlay"></div>
        <div class="absolute-full flex flex-center overlay-text">
          <h1 class="q-mx-md overlay-text">Proyecto de investigación</h1>
        </div>
      </q-img>
    </div>
    <div class="row">
      <q-img src="/img/bomberos.jpg" style="height: 540px; width: 770px" class="col" />
      <div class="col-6 q-pa-lg q-mt-xl q-ml-xl col-sm-6">
        <p>
          Los desastres configuran una gama de riesgo diferenciada para personas y comunidades según
          los grados de vulnerabilidad de cada una de estas. Sus consecuencias se intensifican deido
          a una de las principales características de la mayoría de ellos: su impredecibilidad.
        </p>
        <p>
          Afortunadamente, los diversos esfuerzos tecnológicos han permitido acercarnos a la
          identificación de causas y circunstancias que se asocian al origen y ocurrencia de los
          desastres. Ejemplo de ello son los Sistemas de Seguridad y Alerta Temprana de Riesgos
          [SSATR].
        </p>
        <p>
          La propuesta consiste en un SSATR compuesto de múltiples agentes hetterogéneos comunicados
          tanto entre ellos, como con otros componentes: usuarios primarios y secundarios (gestores
          de información y personal de mantenimiento), infraestructura pública, autoridades y otros
          sitemas de cómputo.
        </p>
      </div>
    </div>
    <!-- Objetivo General -->
    <div class="q-pa-xl">
      <div class="column items-center">
        <p class="text-bold text-h3 q-mt-lg" style="color: #61c2d7">Objetivo General</p>
        <p class="q-mt-md text-justify">
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
          <q-icon :name="matIcons.matFeed" style="font-size: 50px" class="icono" />
          <p class="q-mt-md">
            Proporcionar información pertinente a los usuarios para mejorar las condiciones de las
            víctimas de un evento desastroso que los lleve a evitar el peligro y minimizar el
            riesgo.
          </p>
        </div>
        <div class="col-4 col-sm-12 col-md-4 q-mt-md flex column items-center text-center">
          <q-icon :name="matIcons.matDiversity2" style="font-size: 50px" class="icono" />
          <p class="q-mt-md">
            Aumentar la eficiencia y coordinación de los equipos de emergencia durantes sus
            intervenciones.
          </p>
        </div>
        <div class="col-4 col-sm-12 col-md-4 q-mt-md flex column items-center text-center">
          <q-icon :name="matIcons.matGroupAdd" style="font-size: 50px" class="icono" />
          <p class="q-mt-md">
            Apoyar a los tomadores de decisiones que les permita mejorar las condiciones de
            seguridad y gestión del riesgo.
          </p>
        </div>
      </div>
    </div>
    <!-- Objetivos Específicos -->
    <div class="q-pa-xl full-width">
      <div
        class="text-h4 text-md-h3 text-lg-h2 text-center q-mb-xl q-mt-lg text-bold"
        style="color: #61c2d7"
      >
        Objetivos Específicos
      </div>

      <!-- Objetivos Específicos -->
      <div class="row q-col-gutter-md">
        <div
          class="col-12 col-sm-6 col-md-4 q-ma-sm"
          v-for="colaborador in colaboradores"
          :key="colaborador.id"
          style="max-width: 30.333%; display: flex; flex-direction: column"
        >
          <p
            class="text-h4 text-left text-bold"
            style="color: #61c2d7; margin: 0; line-height: 1.8"
          >
            {{ colaborador.id }}
          </p>
          <p class="text-left">{{ colaborador.descripcion }}</p>
        </div>
      </div>
    </div>
    <!-- Diagrama de bloques -->
    <div class="flex column items-center text-center q-mt-sm">
      <div class="">
        <p class="text-bold text-h3 q-mt-lg" style="color: #61c2d7">Diagrama de Bloques</p>
        <q-img
          src="/img/Proyecto_Diagrama.Bloques.jpg"
          style="height: 640px; width: 670px"
          class="q-mt-lg q-mb-xl"
        />
      </div>
    </div>
  </q-page>
</template>
<script setup>
import * as matIcons from '@quasar/extras/material-icons'
const colaboradores = [
  {
    id: 1,
    descripcion:
      'Diseñar un modelo de representación de los distintos elementos físicos, infórmaticos y humanos implicados en el dominio de desastres naturales y antópicos.´',
  },
  {
    id: 2,
    descripcion:
      'Determinar los tipos y escalas de los riesgos susceptibles de ser contemplados por el rango de operación del SSATR.',
  },
  {
    id: 3,
    descripcion:
      'Diseñar una arquitectura Multi-Agente de un SSATR que integre tanto agentes heterogéneos como otros componentes identificados como parte del sistema.',
  },
  {
    id: 4,
    descripcion:
      'Diseñar modelos y protocolos de interacción entre agentes, artefactos, usuarios y otros sistemas orientados a la alerta y gestión de desastres naturales y antrópicos.',
  },
  {
    id: 5,
    descripcion:
      'Diseñar un modelo para el cálculo del riesgo, la vulnerabilidad y amenza, personal y colectiva, que considere las particularidades físicas,fisiológicas, psicológicas, ambientales y sociales.',
  },
  {
    id: 6,
    descripcion: 'Diseñar un modelo de confirmación colectiva del riesgo detectado.',
  },
  {
    id: 7,
    descripcion:
      'Desarrollar un protocolo de seguridad y orientación de acciones a tomar antes, durantes y después de un desastre natural o antrópico con base en la información autorizada de las fuentes oficiales de rescate y gestión de desastres.',
  },
  {
    id: 8,
    descripcion:
      'Desarrollar mecanismos de retroalimentación para los usuarios que les permitan tomar decisiones más acertadas en momentos de peligro.',
  },
  {
    id: 9,
    descripcion:
      'Incorporar consideraciones éticas e implmentarlas para el beneficio de los usuarios del sistema y la salvaguarda de la integridad de datos y derechos digitales.',
  },
  {
    id: 10,
    descripcion:
      'Indagar sobre los requerimientos del sistema (UOAE). Definir los pefiles de usuario.',
  },
  {
    id: 11,
    descripcion:
      'Evaluar el sistema para definir la eficiencia y satisfacción del usuario durante la interacción del producto.',
  },
]
</script>

<style scoped>
.contenedor {
  width: 100%;
  height: 400px;
}

.imagen-ajustada {
  object-fit: cover;
  width: 100%;
  height: 100%;
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
