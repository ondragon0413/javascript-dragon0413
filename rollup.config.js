import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript'
import compiler from 'typescript'


const defaultConfig = {
  name: 'ULID',
  input: './index.ts',
}

const defaultPlugins = [
  typescript({ typescript: compiler })
]

// const es6Config = Object.assign({}, defaultConfig, {
//   output: {
//     format: 'es',
//     file: './lib/ulid.es6.js'
//   },
//   plugins: [
//     ...defaultPlugins
//   ]
// })

const umdConfig = Object.assign({}, defaultConfig, {
  output: {
    format: 'umd',
    file: './lib/index.umd.js'
  },
  plugins: [
    ...defaultPlugins,
    babel()
  ]
})

export default [
  // es6Config,
  umdConfig
]
