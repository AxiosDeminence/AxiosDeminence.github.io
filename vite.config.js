const { defineConfig } = require('vite');
const path = require('path');

console.log('test');

module.exports = {
  root: 'eleventy-output',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
}