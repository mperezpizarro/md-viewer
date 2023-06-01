import { GithubIcon } from "./icons/GithubIcon"

export function Footer() {
    return(
        <footer className="w-full text-center p-6 flex justify-center">
            <a href="https://github.com/mperezpizarro/md-viewer" target="_blank" className="flex items-center gap-2 hover:text-gray-600">
                Made by Dráfty <GithubIcon />
            </a>
        </footer>
    )
}