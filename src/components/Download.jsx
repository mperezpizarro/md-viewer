export function Download({ text }) {
    const file = new Blob([text], {
        type: "text/markdown"
    })

    return(
        <a 
            href={URL.createObjectURL(file)} download="markdown.md" 
            className="flex items-center gap-x-2 border-2 bg-white border-black shadow-cartoon shadow-gray-800 w-fit p-4 absolute top-2 left-[50%] translate-x-[-50%]"
        >
            Download MD <Icon />
        </a>
    )
}

function Icon () {
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" height="1em" 
            viewBox="0 0 24 24"
        >
            <path fill="currentColor" d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7l7-7z"></path>
        </svg>
    )
}