import typescript from '@rollup/plugin-typescript';
import tslint from 'rollup-plugin-tslint';
import babel from '@rollup/plugin-babel';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bundle.js', // 출력 경로
    format: 'es', // 출력 형식
    sourcemap: true, // 소스 맵을 켜놔서 디버깅을 쉽게 만들자
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
