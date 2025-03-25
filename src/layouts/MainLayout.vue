<template>
  <q-layout view="hHh lpR fFf">
    <!-- Barra superior -->
    <q-header elevated class="bg-primary text-white" style="height: 90px">
      <q-toolbar class="overlay">
        <!-- Logo a la izquierda -->

        <q-btn flat clickable @click="inicio" class="q-ma-lg">
          <q-img
            src="/src/img/SATBAA-Light-Horizontal-Primary.png"
            style="height: 40px; width: 250px"
          />
        </q-btn>

        <q-space />

        <!-- Botón de menú hamburguesa-->
        <q-btn
          :icon="matIcons.matMenu"
          style="color: #61c2d7"
          @click="toggleDrawer"
          v-if="!$q.screen.gt.sm"
        />

        <q-tabs align="right" v-if="$q.screen.gt.sm">
          <q-route-tab to="/ProyectoInvestigacion" label="Proyecto" />
          <q-btn-dropdown
            flat
            dense
            label="Aplicaciones"
            :dropdown-icon="matIcons.matKeyboardArrowDown"
          >
            <q-list>
              <q-item clickable v-ripple to="/PagSrp">
                <q-item-section>Semáforo Riesgo Personal</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/PagSrc">
                <q-item-section>Semáforo de la Roya del Café</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/PagApiEnv">
                <q-item-section>API Eventos Naturales</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown
            flat
            dense
            label="Divulgación"
            :dropdown-icon="matIcons.matKeyboardArrowDown"
          >
            <q-list>
              <q-item clickable v-ripple to="/PagConferencias">
                <q-item-section>Conferencias</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/PagCarteles">
                <q-item-section>Infografías y Carteles</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/PagArticulos">
                <q-item-section>Artículos</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-route-tab to="/EquipoColaboradores" label="Equipo" />
          <q-route-tab to="/SeminarioIAyPS" label="Seminario IA y PS" />

          <q-route-tab to="/page5" label="Contacto" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <!-- Contenedor de página -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- menu responsive -->
    <q-drawer v-model="drawer" show-if-above side="left" bordered v-if="$q.screen.lt.md">
      <q-list>
        <q-item to="/ProyectoInvestigacion">
          <q-item-section>Proyecto</q-item-section>
        </q-item>
        <q-btn-dropdown
          flat
          dense
          label="Aplicaciones"
          :dropdown-icon="matIcons.matKeyboardArrowDown"
        >
          <q-list>
            <q-item clickable v-ripple to="/PagSrp">
              <q-item-section>Semáforo Riesgo Personal</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/PagSrc">
              <q-item-section>Semáforo de la Roya del Café</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/PagApiEnv">
              <q-item-section>API Eventos Naturales</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown
          flat
          dense
          label="Divulgación"
          :dropdown-icon="matIcons.matKeyboardArrowDown"
        >
          <q-list>
            <q-item clickable v-ripple to="/PagConferencias">
              <q-item-section>Conferencias</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/PagCarteles">
              <q-item-section>Infografías y Carteles</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/PagArticulos">
              <q-item-section>Artículos</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-item to="/EquipoColaboradores">
          <q-item-section>Equipo - Colaboradores</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>Contacto</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- footer -->
    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="flex justify-center">
          <div>Copyright &copy; 2023 bdi-dr | SATBAA</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import * as matIcons from '@quasar/extras/material-icons'

const p = useRouter()

const drawer = ref(false)

const toggleDrawer = () => {
  drawer.value = !drawer.value
}

const inicio = () => {
  p.push('/')
}
</script>

<style scoped>
.transparencia {
  background-color: rgba(0, 108, 145, 0.9) !important;
}
</style>
