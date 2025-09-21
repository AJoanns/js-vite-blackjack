import {defineConfig } from 'vite';
// Archivo para configurar Vite, personalizadamente
// En este caso lo configuraremos para subir el proyecto a Git Pages

export default defineConfig({
    base: '/js-vite-blackjack/',
});

// LUEGO DE AGREGAR CONFIGURACION, CONSTRUIMOS NUEVAMENTE EL PROYECTP
// 'npm run build'