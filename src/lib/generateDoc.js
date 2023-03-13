export function generateDoc(html) {
    return(
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://unpkg.com/style.css@1.0.0">
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