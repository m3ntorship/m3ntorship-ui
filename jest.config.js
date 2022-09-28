module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  },
};
