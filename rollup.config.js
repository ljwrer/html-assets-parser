import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/index.js',
  dest: 'lib/index.js',
  format: 'cjs',
  moduleName: 'html-assets-parser',
  plugins: [
    commonjs()
  ],
  sourceMap: 'true'
}
