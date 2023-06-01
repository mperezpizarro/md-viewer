import { MarkdownIcon } from "./icons/MarkdownIcon"
import { Download } from "./Download"

export function Navbar({ mdText, htmltext }) {
    return(
        <nav className="w-full h-[70px] flex items-center justify-between gap-4 flex-wrap p-4">
            <div className="flex items-center gap-x-2">
                <MarkdownIcon />
                <span className="font-bold">Viewer</span>
            </div>
            <div className="relative">
                <Download mdText={mdText} htmlText={htmltext} />
            </div>
        </nav>
    )
}