import './main.css'
import Content from './content/content.jsx'
import KatalogContainer from './katalog/katalog.jsx'

const Main = (props) => {
    return (
        <main>
            <KatalogContainer store={props.store}/>
            <Content store={props.store}/>
        </main>
    )
}

export default Main