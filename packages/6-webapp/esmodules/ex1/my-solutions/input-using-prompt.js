export function showFilesPrompt() {
  const result = prompt('Introduce A,B or C', '?').toLowerCase()

  ;(async function () {
    const module = await import(`./${result}.js`)
    console.warn(module.showLog())
  })()
}
