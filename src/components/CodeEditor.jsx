export function CodeEditor({ initialMD, onChange }) {
  return (
    <textarea
      className="w-full h-full resize-none p-4 border-2 border-black overflow-auto rounded-lg"
      onChange={onChange}
    >
      {initialMD}
    </textarea>
  )
}
