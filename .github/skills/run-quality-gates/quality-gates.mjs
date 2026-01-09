#!/usr/bin/env node
import { spawn } from 'node:child_process'

const run = (cmd, args, cwd) => {
  return new Promise((resolve) => {
    const bin = process.platform === 'win32' ? `${cmd}.cmd` : cmd
    const p = spawn(bin, args, { cwd, stdio: 'inherit' })
    p.on('close', (code) => resolve(code === 0))
  })
}

const main = async () => {
  const cwd = process.cwd()
  console.log('Running quality gates...')
  const lint = await run('npm', ['run', 'lint'], cwd)
  const typecheck = await run('npm', ['run', 'typecheck'], cwd)
  const test = await run('npm', ['test'], cwd)

  const summary = [
    `Lint: ${lint ? 'PASS' : 'FAIL'}`,
    `Typecheck: ${typecheck ? 'PASS' : 'FAIL'}`,
    `Tests: ${test ? 'PASS' : 'FAIL'}`
  ].join('\n')

  console.log('\nQuality Gates Summary')
  console.log(summary)

  if (!lint) console.log('- Fix lint issues and re-run: npm run lint')
  if (!typecheck) console.log('- Fix type errors and re-run: npm run typecheck')
  if (!test) console.log('- Fix failing tests and re-run: npm test')
}

main().catch((err) => {
  console.error('Quality gates script failed:', err)
  process.exit(1)
})
