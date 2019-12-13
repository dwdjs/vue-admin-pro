<template>
  <div class="app-container">
    <MonacoEditor
      :options="options"
      @change="onChange"
      v-model="json"
      height="500"
      theme="vs-dark"
      language="json"
    />
  </div>
</template>

<script>
import MonacoEditor from '@/components/MonacoEditor'

const json = {
  firstName: 'John',
  // lastName: 'Doe',
  gender: null,
  age: '28',
  availableToHire: true,
  job: {
    company: 'freelance',
    role: 'developer',
    salary: 100,
  },
}

export default {
  name: 'MonacoDemo',
  components: {
    MonacoEditor,
  },
  data() {
    return {
      options: {
        //Monaco Editor Options
      },
      json: JSON.stringify(json, null, 2),
    }
  },
  methods: {
    onChange(value) {
      console.log(value)
    },
  },
}
</script>
