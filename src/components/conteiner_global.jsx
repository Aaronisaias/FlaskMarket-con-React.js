import './styles_components/conteiner_global_style.css'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Conteiner() {

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState(0)
    const [precio, setPrecio] = useState(0)
    const [descuento, setDescuento] = useState(0)
    const [total,setTotal] = useState(0)

    const SubmitControl = (e) => {
       e.preventDefault()

       const precio_total = Number(cantidad) * Number(precio) * (1 - Number(descuento) / 100 ) 
       setTotal(precio_total)
    }
    

    return (
        <>
        <section className='conteiner'>
            <h1>¿Que es <b>FlashMarket</b>?</h1>
            <p><b>FlashMarket</b> es una App para Calcular el Valor Total a Pagar a la Hora ir de Compras al Supermercado de Nuestro dia a dia, Sin necesidad de pensar demasiado por que <b>FlashMarket</b> lo hace todo por ti.</p>
                <form onSubmit={SubmitControl}>
                    <div className='conteiner-position-input'>
                    <div className='conteiner-label-input'>
                       <label htmlFor="nombre">Nombre del Producto</label>
                       <input type="text" id='nombre' onChange={(e) =>  setNombre(e.target.value)} placeholder='Producto de Limpieza'/>
                    </div>

                    <div className='conteiner-label-input'>
                       <label htmlFor="can">Cantidad de Productos</label>
                       <input type="number" id='can' onChange={(e) => setCantidad(e.target.value) } placeholder='5'/>
                    </div>

                    <div className='conteiner-label-input'>
                       <label htmlFor="precio">Precio del Producto</label>
                       <input type="number" id='precio' onChange={(e) => setPrecio(e.target.value) } placeholder='$100'/>
                    </div>

                    <div className='conteiner-label-input'>
                       <label htmlFor="des">Descuento</label>
                       <input type="number" id='des' onChange={(e) => setDescuento(e.target.value)} placeholder='45%'/>
                    </div>
                    </div>
                    <button type="submit">Total a Pagar</button>

                </form>

                <section className='resultado'>
                    <h1>Total a Pagar</h1>
                    <div>
                        <code>$ <span>{total}</span></code>
                    </div>
                </section>
        </section>
        </>
    )
}