import { MarkdownIcon } from "./icons/MarkdownIcon"
import { Download } from "./Download"
import { ThemeSelector } from "./ThemeSelector"

export function Navbar({ mdText, htmltext }) {
    return(
        <nav className="w-full min-h-[70px] flex items-center justify-between gap-4 flex-wrap p-4">
            <div className="flex items-center gap-x-2">
                <MarkdownIcon />
                <span className="font-bold">Viewer</span>
            </div>
            <div className="flex items-center gap-x-4">
                <div className="relative">
                    <Download mdText={mdText} htmlText={htmltext} />
                </div>
                <div className="relative">
                    <ThemeSelector />
                </div>
            </div>
        </nav>
    )
}