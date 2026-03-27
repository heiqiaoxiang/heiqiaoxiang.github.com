import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://heiqiaoxiang.github.io',
  base: '/',
  output: 'static',
  build: {
    format: 'directory'
  }
});
