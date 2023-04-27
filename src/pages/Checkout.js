export default function Checkout() {
    return(
        <CheckoutContainer>
            <h1>Checkout</h1>
            <input placeholder="CPF"/>
            <input placeholder="Nome no cartão"/>
            <input placeholder="Número do cartão"/>
            <div>
                <input placeholder="Validade"/>
                <input placeholder="CVC"/>
            </div>
            <button>Finalizar compra</button>
        </CheckoutContainer>
    )
}