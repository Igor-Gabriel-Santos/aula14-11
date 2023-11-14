import React, {useState} from 'react'

function CalculadoraDeSub() {
    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [soma, setSub] = useState(null);

    const calcular = () => {
        const resultado = Number(numero1) - Number(numero2);
        setSub(resultado)
    }

    return(
        <div className='Calculadora'>
            <input type='number' value={numero1} onChange={(e) => setNumero1(e.target.value)} placeholder='Digite o primeiro número'/>
            <input type='number' value={numero2} onChange={(e) => setNumero2(e.target.value)} placeholder='Digite o segundo número'/>

            <button onClick={calcular}> Calcular Sub</button>
            {soma !== null && <p>Resultado: {soma}</p>}
        </div>
    )

}

export default CalculadoraDeSub