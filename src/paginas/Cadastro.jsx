import { useState } from "react"

export default function Cadastro({navegar}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')

    const cadastrar = async () => {
        const resultado = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, senha, nome})
        })
        const data = await resultado.json()
        console.log(data);
        console.log(resultado.ok);
        if (!resultado.ok) {
            alert(data.error)
        } else {
            alert('deu boa!')
            navegar('login')
        }
        
        
    }

    return (
        <div>
            <input type="text" id="email"
            placeholder="digite o email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="text" id="nome"
            placeholder="digite o nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
            <input type="text" id="senha"
            placeholder="digite a senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />
            <button onClick={cadastrar}>cadastrar</button>
        </div>
    )
}