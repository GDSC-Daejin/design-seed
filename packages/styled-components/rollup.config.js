import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript';
import tslint from 'rollup-plugin-tslint';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    typescript(),
    tslint(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
};
