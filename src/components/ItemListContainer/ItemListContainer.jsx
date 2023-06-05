import "./ItemListContainer.css"
import Button from 'react-bootstrap/Button';


const ItemListContainer = ({mensaje}) => {
    return (
        <div className="list__container">
            <h2>Catalogo E-COMMERCE</h2>
            <hr/>
            <p>{mensaje}</p>
            <Button variant="outline-primary">PROBANDO</Button>
        </div>
    )
}

export default ItemListContainer