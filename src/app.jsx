import { useEffect, useState } from 'preact/hooks'
import * as Showdown from 'showdown'
import { CodeEditor } from './components/CodeEditor'
import { Download } from './components/Download'
import { ResultView } from './components/ResultView'

export function App() {
  const [markdown, setMarkdown] = useState('# Hola, mundo.')
  const [html, setHtml] = useState('')
  const [isFocused, setIsFocused] = useState(false)

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
    <main id='app' className='w-full relative'>
      <section className='grid grid-cols-1 gap-8 md:grid-cols-2 h-screen p-8'>
        <CodeEditor 
          initialMD={'# Hola, mundo.'} 
          onChange={handleChange} 
          onFocus={() => { setIsFocused(true) }} 
          onBlur={() => { setIsFocused(false) }}
        />
        <ResultView html={html} />
      </section>
      <Download text={markdown} disabled={isFocused} />
    </main>
  )
}
