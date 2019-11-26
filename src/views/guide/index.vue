<template>
  <div class="app-container">
    <aside>
      {{ $t('guide.description') }}
      <a rel="noopener noreferrer" href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
    </aside>
    <el-button @click.prevent.stop="guide" icon="el-icon-question" type="primary">
      {{ $t('guide.button') }}
    </el-button>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

export default {
  name: 'Guide',
  data() {
    return {
      driver: null,
    }
  },
  mounted() {
    this.driver = new Driver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    },
  },
}
</script>
