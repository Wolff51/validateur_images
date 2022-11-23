import './Validation.css';

function Validation() {
const imagesA = require.context('../../data/A', true, /(\.txt|\.jpg)$/);
const imagesB = require.context('../../data/B', true, /(\.txt|\.jpg)$/);

let keyA = imagesA.keys()

console.log(keyA)

return (
<div className="images">
 <p className="subtitle">Voulez-vous valider cette image ?</p>
<img src={imagesA(keyA[0])} alt="Lights" width="100%" height="100%" />
<button className="button is-normal is-rounded  is-success is-responsive">Valider</button>
<button className="button is-normal is-rounded  is-danger is-responsive">Refuser</button>
<br/>
<button className="button is-normal is-rounded  is-info is-responsive">Précédent</button>

</div>
);
}


export default Validation;