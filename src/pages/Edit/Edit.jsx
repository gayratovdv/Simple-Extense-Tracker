import React, {useRef} from 'react'
import Navbar from '../../../../src/components/Navbar'
import Footer from '../../../../src/components/Footer'
import "./add.scss"

const Add = () => {
    const form = useRef()
    const extenseName = useRef()
    const extenseDate = useRef()
    const extenseCategory = useRef()
    const nameAlert = useRef()
    const dateAlert = useRef()

    let submit = (e) =>{
        e.preventDefault()
        if (extenseName.current.value !== "" && extenseDate.current.value !== ""){
            alert("Submited")
        }
        else{
            if (extenseName.current.value == "") {
                nameAlert.current.style.display = "block"
            }
            
            if (extenseDate.current.value == ""){
                dateAlert.current.style.display = "block"
            }

        }
    }
    

    function log(){
        console.log(extenseDate.current.value);
        console.log(extenseCategory.current.value);
    }

    return (
        <>
            <Navbar />
            <main>
                <h1>Xarajatni qo'shing </h1>
                <form onSubmit={submit} ref={form}>
                    <div>
                        <h3>Xarajatni nomini kiriting: </h3>
                        <input type="text" ref={extenseName} onChange={() => nameAlert.current.style.display = "none"} placeholder='Harajatni nomi' />
                        <p ref={nameAlert}>Xarajatni nomini kiriting!</p>
                    </div>
                    <div>
                        <h3>Xarajatni kategoriyasi: </h3>
                        <select ref={extenseCategory}>
                            <option>Moliya</option>
                            <option>Oziq ovqat</option>
                            <option>Ta'mirlash</option>
                            <option>Soliq to'lovlari</option>
                            <option>Transport</option>
                            <option>Ko'chmas mulk</option>
                            <option>Kommunal to'lo'vlar</option>
                        </select>
                    </div>
                    <div>
                        <h3>Xarajatni sanasini kititing: </h3>
                        <input ref={extenseDate} onChange={() => dateAlert.current.style.display = "none"} type="date" />
                        <p ref={dateAlert}>Xarajatni sanasini kiriting!</p>
                    </div>
                    <button type='submit'>Xarajatni qo'shish</button>
                </form>
            </main>
            <Footer />
        </>
    )
}


export default Add
