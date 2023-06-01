import { DownloadIcon } from "./icons/DownloadIcon"
import { MarkdownIcon } from "./icons/MarkdownIcon"
import { HTMLIcon } from "./icons/HTMLIcon"
import { Menu } from '@headlessui/react'

export function Download({ mdText, htmlText }) {
    const mdFile = new Blob([mdText], {
        type: "text/markdown"
    })

    const htmlFile = new Blob([htmlText], {
        type: "text/markdown"
    })

    return(
        <Menu>
            <Menu.Button className="flex items-center gap-x-2 px-3 py-2 border-2 rounded-md border-black">
                Download
                <DownloadIcon />
            </Menu.Button>
            <Menu.Items className="absolute w-48 top-14 -right-2 z-10 bg-white p-4 border-2 border-black rounded-md">
                <Menu.Item className="flex items-center gap-x-2 py-1 hover:text-gray-700 border-b border-black">
                    {({active}) => (
                        <a 
                        href={URL.createObjectURL(mdFile)} download="document.md" 
                    >
                        as MD
                        <MarkdownIcon />
                    </a>
                    )}
                </Menu.Item>
                <Menu.Item className="flex items-center gap-x-2 py-1 hover:text-gray-700">
                    {({active}) => (
                        <a 
                        href={URL.createObjectURL(htmlFile)} download="document.html" 
                    >
                        as HTML
                        <HTMLIcon />
                    </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}