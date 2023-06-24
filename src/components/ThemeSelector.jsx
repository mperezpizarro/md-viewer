import { Menu } from "@headlessui/react";
import { useContext } from "preact/hooks";
import ThemeContext from "../context/theme";

export function ThemeSelector() {
    const [value, setValue] = useContext(ThemeContext)
    
    return(
        <Menu>
            <Menu.Button className="flex items-center gap-x-2 px-3 py-2 border-2 rounded-md border-black">
               Theme
            </Menu.Button>
            <Menu.Items className="absolute w-48 top-14 -right-2 z-10 bg-white p-4 border-2 border-black rounded-md">
                <Menu.Item className="flex items-center gap-x-2 py-1 hover:text-gray-700 border-b border-black">
                    {({active}) => (
                        <button className="w-full hover:text-gray-700" onClick={() => setValue("style")}>style.css</button>
                    )}
                </Menu.Item>
                <Menu.Item className="flex items-center gap-x-2 py-1 hover:text-gray-700 border-b border-black">
                    {({active}) => (
                       <button className="w-full hover:text-gray-700" onClick={() => setValue("mvp")}>MVP.css</button>
                    )}
                </Menu.Item>
                <Menu.Item className="flex items-center gap-x-2 py-1 hover:text-gray-700">
                    {({active}) => (
                       <button className="w-full hover:text-gray-700" onClick={() => setValue("new")}>new.css</button>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}