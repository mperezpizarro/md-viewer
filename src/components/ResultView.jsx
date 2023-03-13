export function ResultView({ html }) {
  return (
    <iframe
      srcDoc={html}
      className="w-full h-full px-6 py-4 overflow-auto border-2 border-black"
    ></iframe>
  )
}
