// rollup.config.js
import { defineConfig } from 'rollup'
// uglify-js只能翻译es5语法。如果要转译es6+语法，请改用terser
import { terser } from 'rollup-plugin-terser'
// 本地服务
// import serve from 'rollup-plugin-serve'
// 热更新
// import livereload from 'rollup-plugin-livereload'
// babel
import babel from 'rollup-plugin-babel'
import pkg from './package.json'
export default defineConfig([
  {
    input: 'src/main.js',
    external: ['lodash'],
    output: {
      file: pkg.main, //输出文件
      name: 'wa-bluetooth-sdk',
      format: 'cjs', // amd /  es6 / iife / umd / cjs
      // sourcemap: true,
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      terser(),
      // livereload(),
      // serve({
      //   open: false, // 默认不打开
      //   port: 2222,
      // }),
    ],
  },
])
