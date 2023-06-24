import { render } from 'preact'
import ThemeContext from './context/theme'
import { App } from './app'
import './index.css'

render(
    <ThemeContext.Provider value='style'>
        <App />
    </ThemeContext.Provider>, document.getElementById('app')
)
