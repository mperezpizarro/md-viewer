import { Menu } from "@headlessui/react";
import { useContext } from "preact/hooks";
import ThemeContext from "../context/theme";

export function ThemeSelector() {
    const [theme, setTheme] = useContext(ThemeContext)
    
    return(
        <Menu>
            <Menu.Button className="flex items-center gap-x-2 px-3 py-2 border-2 rounded-md border-black">
               Theme
            </Menu.Button>
        </Menu>
    )
}