<template>
  <f7-app v-bind="f7params">
    <!-- Right panel with reveal effect-->
    <f7-panel right reveal theme-dark>
      <f7-view links-view=".view-main">
        <f7-page>
          <f7-navbar title="Right Panel"></f7-navbar>

          <f7-list>
            <f7-list-item title="About" link="/about/" panel-close></f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Your main view, should have "view-main" class -->
    <f7-view 
      main 
      class="safe-areas" 
      url="/" 
    ></f7-view>
  </f7-app>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { f7, f7ready } from "framework7-vue";
import { Framework7Parameters } from "framework7/types";

import routes from "./config/router";

export default defineComponent({
  setup() {
    // Framework7 Parameters
    const f7params: Framework7Parameters = {
      name: "framework7-vue-typescript", // App name
      theme: "auto", // Automatic theme detection
      routes: routes, // App routes
      navbar: {
        mdCenterTitle: true,
      },
    };
    onMounted(() => {
      f7ready(() => {
        // Call F7 APIs here
        helloWorld();
      });
    });

    function helloWorld() {
      console.log('Hello World!');
    }

    return {
      f7params,
      helloWorld
    };
  },
});
</script>