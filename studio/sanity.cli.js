let defineCliConfig
try {
  defineCliConfig = require('sanity/cli').defineCliConfig
} catch (e) {
  defineCliConfig = (config) => config
}

module.exports = defineCliConfig({
  api: {
    projectId: 'soyi4quf',
    dataset: 'production'
  }
})
