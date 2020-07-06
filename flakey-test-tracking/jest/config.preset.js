const flakeTrackingConfig = {
  //globalSetup: require.resolve('./setup.global.js'),
  globals: {
    FLAKES: Map,
    RETRY_TIMES: 10,
    SKIP_KNOWN_FLAKES: true,
  },
  setupFilesAfterEnv: [require.resolve('./setup.js')],
  testEnvironment: require.resolve('./environment.js'),
  testRunner: 'jest-circus/runner',
}

const defaultConfig = {
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
}

module.exports = process.env.CI || process.env.FLAKEY ? flakeTrackingConfig : defaultConfig
