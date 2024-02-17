import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import _ from 'lodash';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const port = _.isNaN(Number(env.PORT)) ? 3000 : Number(env.PORT);

  return {
    plugins: [
      react({
        babel: {
          plugins: ['jotai/babel/plugin-react-refresh', 'jotai/babel/plugin-debug-label'],
          presets: ['jotai/babel/preset'],
        },
      }),
    ],
    server: {
      port: port,
      host: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
