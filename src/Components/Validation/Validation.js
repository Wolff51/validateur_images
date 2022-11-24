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
let keyB = imagesB.keys();

const [count, setCount] = useState(0);

// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  document.title = `You clicked ${count} times`;
});

console.log(validator.myArray)

if(localStorage.getItem('AisValide', 'true')){
    return (
        <div className="images">
         <p className="subtitle">Voulez-vous valider l'image B numéro {count+1} ?</p>
        <img src={imagesA(keyB[count])} alt="Lights" width="100%" height="100%" id="actual_image" />
        <button className="button is-normal is-rounded  is-success is-responsive" onClick={() => {
                if(count === keyB.length -1) {
                    alert("Vous avez validé toutes les images")
                    localStorage.setItem('AisValide', 'true');
                    navigate('/validation');
                }
                  validator.validators.BisValid(keyB[count]);
                  setCount(count + 1);
                }}>Valider</button>
        
        <button className="button is-normal is-rounded  is-danger is-responsive" onClick={() => {
                  validator.validators.BisNotValid(keyB[count]);
                  setCount(count + 1);
                }}>Refuser</button>
        
        <br/>
        
        <button className="button is-normal is-rounded  is-info is-responsive" onClick={() => {
            if(count === 0) {
                alert("Vous êtes déjà sur la première image")
            } else {
                  validator.validators.previous();
                  setCount(count -1);
        }}}>Précédent</button>
                
        
        </div>
        );
}
return (
<div className="images">
 <p className="subtitle">Voulez-vous valider l'image A numéro {count+1} ?</p>
<img src={imagesA(keyA[count])} alt="Lights" width="100%" height="100%" id="actual_image" />

{/* <button className="primary" onClick={() => setCount(count + 1)}>Suivant</button> */}

<button className="button is-normal is-rounded  is-success is-responsive" onClick={() => {
        if(count === keyA.length -1) {
            alert("Vous avez validé toutes les images")
            localStorage.setItem('AisValide', 'true');
            navigate('/');
        }
          validator.validators.isValid(keyA[count]);
          setCount(count + 1);
        }}>Valider</button>

<button className="button is-normal is-rounded  is-danger is-responsive" onClick={() => {
          validator.validators.isNotValid(keyA[count]);
          setCount(count + 1);
        }}>Refuser</button>

<br/>

<button className="button is-normal is-rounded  is-info is-responsive" onClick={() => {
    if(count === 0) {
        alert("Vous êtes déjà sur la première image")
    } else {
          validator.validators.previous();
          setCount(count -1);
}}}>Précédent</button>

<br/>

<button className="button is-normal is-rounded  is-info is-responsive" onClick={() => {
          validator.validators.isNotImg(keyA[count]);
          setCount(count + 1);
}}>Pas d'image</button>


<br/>

{validator.validators.save()}
        

</div>
);
}


export default Validation;