import { generateDoc } from '../lib/generateDoc'

export function ResultView({ html }) {
  const htmlPage = generateDoc(html)

  return (
    <iframe
      srcDoc={htmlPage}
      className="w-full h-full p-4 overflow-auto border-2 border-black rounded-lg"
    ></iframe>
  )
}
