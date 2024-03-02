import path from 'node:path'
import { expect, test } from 'vitest'
import { build } from 'esbuild'
import UnpluginReplace from '../src/esbuild'

test('esbuild', async () => {
  const { outputFiles } = await build({
    entryPoints: [path.resolve(__dirname, 'fixtures/main.js')],
    format: 'esm',
    write: false,
    bundle: true,
    platform: 'node',
    plugins: [
      UnpluginReplace({
        'process.platform': '"darwin"',
      }),
    ],
  })
  expect(outputFiles[0].text).toMatchSnapshot()
})
