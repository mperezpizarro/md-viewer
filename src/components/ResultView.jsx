import { generateDoc } from '../lib/generateDoc'

export function ResultView({ html }) {
  const htmlPage = generateDoc(html)

  return (
    <iframe
      srcDoc={htmlPage}
      className="w-full h-full px-6 py-4 overflow-auto border-2 border-black shadow-cartoon shadow-gray-800"
    ></iframe>
  )
}
