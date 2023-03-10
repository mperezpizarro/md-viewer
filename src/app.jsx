import { useEffect, useState } from "preact/hooks"
import * as Showdown from "showdown"
import { CodeEditor } from "./components/CodeEditor";
import { ResultView } from "./components/ResultView";

export function App() {
	const [markdown, setMarkdown] = useState("# Hola, mundo.")
	const [html, setHtml] = useState("")

	const handleChange = e => {
		setMarkdown(e.target.value)
	}

	useEffect(() => {
		const converter = new Showdown.Converter(),
		text = markdown,
		result = converter.makeHtml(text);

		setHtml(result)
	}, [markdown])

	return (
  		<main id="app" className="w-full">
			<section className="grid grid-cols-1 gap-4 md:grid-cols-2 h-screen p-4">
				<CodeEditor initialMD={"# Hola, mundo."} onChange={handleChange} />
				<ResultView html={html} />
			</section>
		</main>
	)
}
