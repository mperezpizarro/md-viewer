import ThemeContext from "../context/Theme"
import themes from "./themes"
import { useContext } from "preact/hooks"

export function generateDoc(html) {
    const [value, setValue] = useContext(ThemeContext)
    return(
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css">
        <link rel="stylesheet" href="${themes[value]}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Markdown result</title>
        <style>
            :root {
                color-scheme: light;
            }
        </style>
    </head>
    <body>
        ${html}
    </body>
</html>`
    )
} 