import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import tslint from 'rollup-plugin-tslint';
import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';
import dts from 'rollup-plugin-dts';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  external: ['styled-components-theme', 'react', 'react-router-dom'],
  plugins: [
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
    }),
    tslint(),
    // dts(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    terser(),
    uglify(),
  ],
};
