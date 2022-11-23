import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Validation.css';
import validator from '../../utils/validator';

function Validation() {
const navigate = useNavigate();
/* Je récupère mes images */
const imagesA = require.context('../../data/A', true, /(\.txt|\.jpg)$/);
const imagesB = require.context('../../data/B', true, /(\.txt|\.jpg)$/);

let keyA = imagesA.keys()

const [count, setCount] = useState(0);

// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  document.title = `You clicked ${count} times`;
});

console.log(keyA.length)
console.log(count)
if(localStorage.getItem('AisValide', 'true')){
    return(
        <div className="images">
            <p className="subtitle">Validation terminée</p>
        </div>
    )
}
return (
<div className="images">
 <p className="subtitle">Voulez-vous valider cette image ?</p>
<img src={imagesA(keyA[count])} alt="Lights" width="100%" height="100%" id="actual_image" />

{/* <button className="primary" onClick={() => setCount(count + 1)}>Suivant</button> */}

<button className="button is-normal is-rounded  is-success is-responsive" onClick={() => {
        if(count === keyA.length -1) {
            alert("Vous avez validé toutes les images")
            localStorage.setItem('AisValide', 'true');
            navigate('/');
        }
          validator.isValid(keyA[count]);
          setCount(count + 1);
        }}>Valider</button>

<button className="button is-normal is-rounded  is-danger is-responsive" onClick={validator.isNotValid}>Refuser</button>

<br/>

<button className="button is-normal is-rounded  is-info is-responsive" onClick={() => {
          validator.previous();
          setCount(count -1);
        }}>Précédent</button>

</div>
);
}


export default Validation;