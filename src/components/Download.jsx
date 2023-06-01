import { DownloadIcon } from "./icons/DownloadIcon"
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
            <Menu.Button className={``}>
                Download
                <DownloadIcon />
            </Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    {({active}) => (
                        <a 
                        href={URL.createObjectURL(mdFile)} download="document.md" 
                    >
                        as MD
                    </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({active}) => (
                        <a 
                        href={URL.createObjectURL(htmlFile)} download="document.html" 
                    >
                        as HTML
                    </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}