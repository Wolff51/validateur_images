
import './Validation.css';

function Validation() {
return (
<div className="images">
 <p className="subtitle">Voulez-vous valider cette image ?</p>
<img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="Lights" width="100%" height="100%" />
<button className="button is-normal is-rounded  is-success is-responsive">Valider</button>
<button className="button is-normal is-rounded  is-danger is-responsive">Refuser</button>
<br/>
<button className="button is-normal is-rounded  is-info is-responsive">Précédent</button>

</div>
);
}


export default Validation;