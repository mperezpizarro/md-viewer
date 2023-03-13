export function CodeEditor({ initialMD, onChange }) {
  return (
    <textarea
      className="w-full h-full resize-none px-6 py-4 border-2 border-black overflow-auto shadow-cartoon shadow-gray-800"
      onChange={onChange}
    >
      {initialMD}
    </textarea>
  )
}
