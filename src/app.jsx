import { useEffect, useState } from 'preact/hooks'
import * as Showdown from 'showdown'
import { Navbar } from './components/Navbar'
import { CodeEditor } from './components/CodeEditor'
import { ResultView } from './components/ResultView'
import { Footer } from './components/Footer'

export function App() {
  const [markdown, setMarkdown] = useState('# Hola, mundo.')
  const [html, setHtml] = useState('')

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  useEffect(() => {
    const converter = new Showdown.Converter()
    const text = markdown
    const result = converter.makeHtml(text)

    setHtml(result)
  }, [markdown])

  return (
    <main id='app' className='w-full max-w-7xl mx-auto'>
      <Navbar mdText={markdown} htmltext={html} />
      <section className='grid grid-cols-1 gap-4 md:grid-cols-2 h-[calc(100vh-70px)] p-4'>
        <CodeEditor 
          initialMD={'# Hola, mundo.'} 
          onChange={handleChange} 
        />
        <ResultView html={html} />
      </section>
      <Footer />
    </main>
  )
}
