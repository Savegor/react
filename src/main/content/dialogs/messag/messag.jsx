import { Route, Routes } from 'react-router-dom'
import './messag.css'

const Messag = () => {
    const Name = () =>{
        return (
            <>
                <div>Egor</div>
            </>
        )
    }
    return (
        <div className="messag">
            <Routes>
                <Route path='/Dialogs/1' element={<Name/>} />
                <Route path='/Dialogs/2' element={<div>Nikita</div>} />
                <Route path='/Dialogs/3' element={<div>Olga</div>} />
                <Route path='/Dialogs/4' element={<div>Robert</div>} />
            </Routes>
        </div>
    )
}

export default Messag