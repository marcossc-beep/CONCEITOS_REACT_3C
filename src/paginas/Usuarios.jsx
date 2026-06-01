import { useEffect, useState } from "react"
export default function Usuarios(){
    const [cont, setCont] = useState(0)
    const [usuarios, setUsuarios] = useState([])
    const [modal, setModal] = useState(false)

    const aumenta = () => {
        setCont(cont + 1)
    }

    useEffect(() => {
        document.title = `count: ${cont}`
        const buscarUsuarios = async () => {
            const resultado = await fetch('http://localhost:3000/usuarios')
            const data = await resultado.json()
            console.log(data);
            setUsuarios(data)
        }

        buscarUsuarios()
    }, [cont])

    const editar = (usuario) => {
        console.log('editando ', usuario);
        setModal(true)
    }

    

    return (
        <div>
            <h1>Usuarios</h1>
            {cont}
            <button onClick={() => aumenta()}>aumenta</button>

            <br />
            <br />

            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.nome}, 
                        {usuario.email},
                        {usuario.senha},
                        <button onClick={() => editar(usuario)}>Editar</button>
                    </li>
                ))}

            </ul>

            {modal && (
                <div className="fundo-modal" onClick={() => setModal(false)}>
                    <div className="modal-content">
                        <h1>Editar</h1>
                    </div>
                </div>
            )}

        </div>
    )
}