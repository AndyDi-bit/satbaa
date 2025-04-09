<template>
  <q-page class="q-pa-none">
    <div class="contenedor">
      <q-img src="/img/pruebaIA.png" class="full-width full-height">
        <div class="absolute-full overlay"></div>
        <div class="absolute-full flex flex-center overlay-text">
          <h1 class="q-mx-sm overlay-text">
            Segundo Seminario de Inteligencia Artificial y Problemas Sociales
          </h1>
        </div>
      </q-img>
    </div>

    <div class="q-ma-xl">
      <!-- Comité organizador-->

      <div class="q-pa-md">
        <div class="q-pa-sm">
          <div class="column items-center">
            <p class="text-bold text-h4 q-mt-lg" style="color: #ec7711">Organizado por:</p>
            <p class="q-ma-sm text-h6" style="text-justify">
              Dr. Wulfrano Arturo Luna Ramírez (Responsable del seminario)
            </p>
          </div>
        </div>
      </div>
      <div class="q-pa-md">
        <div class="q-pa-sm">
          <div class="column items-center">
            <p class="text-bold text-h4 q-mt-lg" style="color: #ec7711">Colaboradores</p>
          </div>
        </div>
      </div>
      <div class="row items-start justify-center q-gutter-md">
        <div class="col-4 col-sm-12 col-md-4 q-ma-xl flex column">
          <p class="text-h5 text-center">UAM CUAJIMALPA</p>
          <div class="puntos"></div>
          <ul class="lista q-ml-md">
            <li>Mtra. Lucila Mercado Colín. (DTPD)</li>
            <li>Dr. Enrique G. Gallegos. (DCSH/DCS)</li>
          </ul>
        </div>
        <div class="col-4 col-sm-12 col-md-4 q-ma-xl flex column">
          <p class="text-h5 text-center">Externos</p>
          <div class="puntos"></div>
          <ul class="lista q-ml-md">
            <li>Dr. Gustavo Ortiz Hernández. (Universidad Veracruzana)</li>
            <li>
              Dra. Karina Gutiérrez Fragoso (Instituto Tecnológico Autónomo del Estado de Hidalgo
              -ITESA)
            </li>
            <li>César de Rosas Ramírez (Instituto de Investigaciones Filosóficas).</li>
          </ul>
        </div>
      </div>

      <!-- Propósito del seminario-->
      <div class="q-pa-md">
        <div class="q-pa-sm">
          <div class="column items-center">
            <p class="text-bold text-h4 q-mt-lg" style="color: #ec7711">Objetivo</p>
            <p class="q-ma-sm" style="  text-justify ">
              Continuar la discusión que se generó en su primera edición acerca del papel que juegan
              las disciplinas y tecnologías derivadas de la Inteligencia Artificial (IA) en el
              análisis y propuestas de solución de la problemática social, centrándose en los casos
              de México y Latinoamérica. Se busca contribuir al entendimiento de cómo estas
              tecnologías y teorías impactan en las sociedades actuales, y, a su vez, aportar a su
              entendimiento y modelación en aras de imaginar opciones para un desarrollo tecnológico
              y científico que atienda las problemáticas en cuestión.
            </p>
          </div>
        </div>
      </div>
      <!-- Propósito del seminario-->
      <div class="q-pa-md">
        <div class="q-pa-sm">
          <div class="column items-center">
            <p class="text-bold text-h4 q-mt-lg" style="color: #ec7711">Temática</p>
            <p class="q-ma-sm" style="  text-justify">
              Se mantiene la pretención de generar un intercambio, desde diversas perspectivas,
              sobre la importancia e impacto de las ciencias y tecnologías relacionadas con la IA en
              nuestras sociedades, así como la importancia y aporte que las Ciencias Sociales y
              Humanas pueden realizar para el desarrollo de la IA. El fin último es acercarse al
              entendimiento de las formas en que tales disciplinas se influyen mutuamente, así como
              indagar su potencial para el estudio y la generación de soluciones a las problemáticas
              sociales observadas. Siendo desafío tan amplio, ciertos temas tendrán centralidad,
              pero no se excluye la posibilidad de que haya otros ámbitos de discusión. Además, en
              esta ocasión, el Seminario está vinculado al Proyecto de Investigación Sistema de
              Alerta Temprana Basado en Agentes Autónomos (SATBA-DCCD.TI.PI-64); de tal forma, los
              tópicos se proponen descriptiva, más no limitativamente a los siguientes:
            </p>
            <ul class="lista">
              <li>
                <span style="color: #ec7711"> Ámbitos teórico-prácticos de la IA:</span>
                concepción, desarrollo histórico, hacia dónde se orienta la disciplina, sus
                posibilidades de desarrollo y marco de trabajo.
              </li>
              <li>
                <span style="color: #ec7711"> IA y sociedad:</span>
                salud, seguridad y soberanía, simulaciones de fenómenos sociales y la importancia de
                incorporar las disciplinas humanísticas a ella: gestión del riesgo, salud, soberanía
                almentaria, regulación y gobierno.
              </li>
              <li>
                <span style="color: #ec7711"> Educación e IA:</span>
                educación, plataformas digitales y tecnologías utilizadas, análisis de las
                estrategias educativas y su ejecución, influencia de las tecnologías inteligentes en
                la educación y el impacto de disciplinas humanísticas como el Diseño y la
                Comunicación.
              </li>
              <li>
                <span style="color: #ec7711"> IA y personas:</span>
                la relación de la IA y las tecnologías digitales con las dimensiones humanas.
                Referente al uso de la IA en otros ámbitos, como el combate a la discriminación, el
                análisis de medios de información y las redes sociales.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="q-pa-md">
        <div class="text-center">
          <p class="text-bold text-h4 q-mt-lg" style="color: #ec7711">Sesiones</p>
        </div>

        <div class="row justify-center">
          <div
            class="col-12 col-sm-12 col-md-10 q-ma-lg"
            v-for="(video, index) in videosS"
            :key="index"
          >
            <q-card class="my-card custom-card row no-wrap">
              <div class="col-12 col-md-6 flex justify-center">
                <q-video class="disenoVideo q-mt-md" :src="video.src" />
              </div>

              <div class="col-12 col-md-6 q-pa-md flex column justify-start">
                <q-card-section>
                  <div class="text-h6 q-mb-md" style="color: #ec7711">{{ video.titulo }}</div>
                  <p>
                    <span style="color: #ec7711">
                      {{
                        video.autor.includes(' y ') || video.autor.includes(',')
                          ? 'Participantes'
                          : 'Participantes'
                      }}:
                    </span>
                    {{ video.autor }}
                  </p>
                  <p>
                    <span style="color: #ec7711">Conferencia Magistral: </span>
                    {{ video.adscripcion }}
                  </p>
                  <p><span style="color: #ec7711">Horario y Lugar: </span> {{ video.hyl }}</p>
                  <a
                    v-if="video.url && video.url.trim() !== ''"
                    @click="abrirPdf(video.url)"
                    class="enlacePDF"
                  >
                    Diapositivas de la presentación 1
                  </a>
                  <br />
                  <a
                    v-if="video.url2 && video.url2.trim() !== ''"
                    @click="abrirPdf(video.url)"
                    class="enlacePDF"
                  >
                    Diapositivas de la presentación 2
                  </a>

                  <p class="puntos"></p>
                  <a
                    v-if="video.url && video.url.trim() !== ''"
                    @click="abrirPdf(video.url)"
                    class="enlacePDF"
                  >
                    Diapositivas de la conferencia magistral
                  </a>
                </q-card-section>
              </div>
            </q-card>
          </div>
        </div>

        <!-- Diálogo para mostrar el PDF -->
        <q-dialog v-model="mostrarPDF" maximized>
          <q-card class="tamañoCompletoPDF">
            <q-bar>
              <q-space />
              <q-btn flat :icon="matIcons.matClose" @click="mostrarPDF = false" />
            </q-bar>
            <iframe
              :src="pdfSeleccionado"
              frameborder="0"
              width="100%"
              height="100%"
              allowfullscreen
            ></iframe>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import * as matIcons from '@quasar/extras/material-icons'

const videosS = ref([
  {
    src: 'https://www.youtube.com/embed/FrVlD8JP0ZY?si=VMly49z_XqUDIN4b',
    titulo: 'Sesión 1, Mesa 1: IA y sociedad 1: salud, seguridad y soberanía.',
    autor:
      'Dr. Rodrigo Edgar Palacios Leyva (Inst), Dr. Miguel Capllonch Juan (Essex) y Mtra. Sara Cañaveral Uribe (IU Digital de Antioquia)',
    adscripcion: 'Dra. Luz Amelia Sánchez Landero (UV)',
    hyl: '09 de diciembre de 2024, 12:00 h. Aula Magna.',
    urlcf: '/pdfs/SeminarioIAyPS.pdf',
    url: '/pdfs/SeminarioIAyPS.pdf',
    url2: '/pdfs/SeminarioIAyPS.pdf',
  },
  {
    src: 'https://www.youtube.com/embed/FrVlD8JP0ZY?si=VMly49z_XqUDIN4b',
    titulo: 'Sesión 2, Mesa 2: IA y sociedad II: investigación, docencia',
    autor: 'Lic. Luis Felipe Cajero (ENAH), Dr. Emmanuel Ferreyra Olivares (Essex).',
    adscripcion: 'Dr. Christian Lemaître León (UAM-C)',
    hyl: '10 de diciembre de 2024, 12:00 h. Aula Magna.',
    url: '/pdfs/SeminarioIAyPS.pdf',
    url2: '/pdfs/SeminarioIAyPS.pdf',
  },
  // {
  //   src: 'https://www.youtube.com/embed/MueHW4FR0ss?si=60pW5xTglK7hMOOv',
  //   titulo: 'Sesión 3. IA y educación.',
  //   autor: 'Dra. Christian Lemaître León.',
  //   adscripcion: 'UAM-C.',
  //   hyl: '10 de diciembre de 2024, 11:00 h. Aula Magna.',
  //   contacto: 'Dr. Wulfrano Arturo Luna Ramírez.',
  //   email: 'wluna@correo.cua.uam.mx',
  // },
  // {
  //   src: 'https://www.youtube.com/embed/cNrZZ9lkNpk?si=eeHuzxSyr_coFdke',
  //   titulo: 'Sesión 4. IA y sociedad II: Investigación, Docencia.',
  //   autor: 'Lic. Luis Felipe Cajero, Dr. Emmanuel Ferreyra Olivares.',
  //   adscripcion: 'ENAH y UdeEssex',
  //   hyl: '10 de diciembre de 2024, 12:00 h. Aula Magna.',
  //   contacto: 'Dr. Wulfrano Arturo Luna Ramírez.',
  //   email: 'wluna@correo.cua.uam.mx',
  // },
  // {
  //   src: 'https://www.youtube.com/embed/BXUD2h0zRE4?si=emLKSo1TqEvOFN7F',
  //   titulo: 'Sesión 5. IA y personas II: Tecnologías inteligentes, individuos y sociedad.',
  //   autor:
  //     'Dra. Anasol Peña Rios, MDI. Erick Iroel Heredia Carrillo, MDI. Julian Covarrubias Valdivia.',
  //   adscripcion: 'UdeEssex, UNAM',
  //   hyl: '11 de diciembre de 2024, 11:00 h. Aula Magna.',
  //   contacto: 'Dr. Wulfrano Arturo Luna Ramírez.',
  //   email: 'wluna@correo.cua.uam.mx',
  // },
  // {
  //   src: 'https://www.youtube.com/embed/BgobNjwRkjU?si=mFPFvkQan7EzKZZc',
  //   titulo: 'Sesión 6. Presentación del libro IA y PS.',
  //   autor: 'Dr. Wulfrano Arturo Luna Ramírez',
  //   adscripcion: 'UAM - C.',
  //   hyl: '12 de diciembre de 2024, 11:00 h. Aula Magna.',
  //   contacto: 'Dr. Wulfrano Arturo Luna Ramírez.',
  //   email: 'wluna@correo.cua.uam.mx',
  // },
  // {
  //   src: 'https://www.youtube.com/embed/iixVi3N9khk?si=UKu1lcjr4bxsi2FD',
  //   titulo: 'Sesión 7. IA. Problemas filosóficos y sociales.',
  //   autor:
  //     'Felipe Victoriano, Dr. Hermann Amaya Velasco, Mtr. José Manuel Iglesias Granada, Mtro. César de Rosas Ramírez.',
  //   adscripcion: 'UdG, CSIC España.',
  //   hyl: '12 de diciembre de 2024, 12:00 h. Aula Magna.',
  //   contacto: 'Dr. Wulfrano Arturo Luna Ramírez.',
  //   email: 'wluna@correo.cua.uam.mx',
  // },
  // {
  //   src: 'https://www.youtube.com/embed/iixVi3N9khk?si=UKu1lcjr4bxsi2FD',
  //   titulo: 'Sesión 8. Tecnologías inmersivas, IA y Desastres naturales.',
  //   autor: 'Dra. Karina Gutiérrez Fragoso.',
  //   adscripcion: 'ITESA-Hidalgo.',
  //   hyl: '13 de diciembre de 2024, 10:00 h. Aula Magna.',
  //   contacto: 'Dr. Wulfrano Arturo Luna Ramírez.',
  //   email: 'wluna@correo.cua.uam.mx',
  // },
  // {
  //   src: 'https://www.youtube.com/embed/iixVi3N9khk?si=UKu1lcjr4bxsi2FD',
  //   titulo: 'Sesión 9. IA y personas II: gestión del riesgo y desastres naturales.',
  //   autor:
  //     'Dr. German Cuaya Simbro, Dr. Elías Ruiz Hernández, Dr. Mauricio Enrique Reyes Castillo y MDI. Alejandro Rodea Chávez.',
  //   adscripcion: 'ITESA-Hidalgo, CIDI UNAM, UAM-C.',
  //   hyl: '13 de diciembre de 2024, 11:00 h. Aula Magna.',
  //   contacto: 'Dr. Wulfrano Arturo Luna Ramírez.',
  //   email: 'wluna@correo.cua.uam.mx',
  // },
])

const mostrarPDF = ref(false)
const pdfSeleccionado = ref('')

const abrirPdf = (url) => {
  pdfSeleccionado.value = url
  mostrarPDF.value = true
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

.botonCerrar {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  background: rgba(212, 111, 44, 0.7);
  color: white;
}

.lista {
  list-style: none;
  padding-left: 0;
}

.lista li {
  display: flex;
  align-items: center;
  gap: 5px;
}

.lista li::before {
  content: '•';
  color: #ec7711;
  font-size: 1.2em;
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

.disenoVideo {
  width: 600px;
  height: 300px;
}

.enlacePDF {
  display: inline-block;
  color: #ec7711;
  cursor: pointer;
  text-decoration: none;
}

.enlacePDF:hover {
  text-decoration: underline;
}
</style>
