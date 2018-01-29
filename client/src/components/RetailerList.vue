<template>
  <div> 
    <retailer class="retailer" v-for="(retailer, index) in retailers" v-bind:key="index">
      <h4 class="retailer-name">{{ retailer.name }}</h4>
      <div class="retailer_project" v-for="(project, index) in retailer.projects" v-bind:key="index">
        <li class="project-name">{{ project.name }}</li>
        <li class="project-desc">{{ project.desc }}</li>
      </div>
    </retailer>
  </div>
</template>

<script>

import Retailer from './Retailer.vue'

export default {
  name: "RetailerList",
  methods: {},
  data() {
    return {
      retailers: [
        {
          name: "Costco-US",
          projects: [
            {
              name: "Project A",
              desc: "Description"
            }
          ]
        },
        {
          name: "Costco-CA",
          projects: [
            {
              name: "ADA",
              desc: "Description"
            },
            {
              name: "ADA-2",
              desc: "Description"
            }
          ]
        },
        {
          name: "Samsclub",
          projects: [
            {
              name: "Checkout",
              desc: "Description"
            },
            {
              name: "Checkout-2",
              desc: "Description"
            }
          ]
        }
      ]
    };
  },
  components: {
    'retailer': Retailer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.project-name {
  min-width: 100px;
}
</style>
