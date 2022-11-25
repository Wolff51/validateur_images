/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import './Validation.css';
import validator from '../../utils/validator';


if (localStorage.getItem("myArray") !== null) {
   validator.validators.getResult();
 }


 

function Validation() {    
/* Je récupère mes images */
const imagesA = require.context('../../data/A', true, /(\.txt|\.jpg)$/);

let keyA = imagesA.keys();

const [count, setCount] = useState(0);


useEffect(() => {
  document.title = `You clicked ${count} times`;
});

useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);
      if(localStorage.getItem("AisValide") === "true") {
        if(event.key === "1") {
            event.preventDefault();
            validator.validators.BisValid(validator.myArray[0][count].name);
            if(count === validator.myArray[0].length -1) {
            const myDiv = document.getElementById("validateB");
            ReactDOM.render(validator.validators.saveB(), myDiv);
            const myButton = document.getElementsByClassName("buttonBhide")
            for (let i = 0; i < myButton.length; i++) {
            myButton[i].style.visibility = "hidden";
        }
            } else {
                setCount(count + 1);
            }
        }
        if(event.key === "0") {
            event.preventDefault();
            validator.validators.BisNotValid(validator.myArray[0][count].name);
            if(count === validator.myArray[0].length -1) {
            const myDiv = document.getElementById("validateB");
            ReactDOM.render(validator.validators.saveB(), myDiv);
            const myButton = document.getElementsByClassName("buttonBhide")
            for (let i = 0; i < myButton.length; i++) {
            myButton[i].style.visibility = "hidden";
        }
            } else {
                setCount(count + 1);
            }
        }
    } 
    else {
    if(event.key === "0") {
        event.preventDefault();
        validator.validators.isNotValid(keyA[count]);
        if(count === keyA.length -1) { 
            const myDiv = document.getElementById("validate");
            ReactDOM.render(validator.validators.save(), myDiv);
            const myButton = document.getElementsByClassName("buttonhide")
            for (let i = 0; i < myButton.length; i++) {
            myButton[i].style.visibility = "hidden";
        }}
        else {
            setCount(count + 1);
        }
    }
    if(event.key === "1") {
        event.preventDefault();
        validator.validators.isValid(keyA[count]);
        if(count === keyA.length -1) { 
            const myDiv = document.getElementById("validate");
            ReactDOM.render(validator.validators.save(), myDiv);
            const myButton = document.getElementsByClassName("buttonhide")
            for (let i = 0; i < myButton.length; i++) {
            myButton[i].style.visibility = "hidden";
        }}
        else {
            setCount(count + 1);
        }
    }}
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
  });

// document.addEventListener('keydown', (event) => {
//     console.log(event.key);
    
//  });



if(localStorage.getItem("AisValide") !== "true" && localStorage.getItem("validation") !== "true"){
    return (
        <div className="images">
         <p className="subtitle">Voulez-vous valider l'image A numéro {count+1} ?</p>
        <img src={imagesA(keyA[count])} alt="Lights" width="100%" height="100%" />
        <br/>
        <button className="buttonhide button is-normal is-rounded  is-success is-responsive" onClick={() => {
               validator.validators.isValid(keyA[count]);
                if(count === keyA.length -1) { 
                    const myDiv = document.getElementById("validate");
                    ReactDOM.render(validator.validators.save(), myDiv);
                    const myButton = document.getElementsByClassName("buttonhide")
                    for (let i = 0; i < myButton.length; i++) {
                    myButton[i].style.visibility = "hidden";
                }}
                else {
                    setCount(count + 1);
                }
                }}>Valider</button>
        
        <button className="buttonhide button is-normal is-rounded  is-danger is-responsive" onClick={() => {
                             validator.validators.isNotValid(keyA[count]);
                             if(count === keyA.length -1) { 
                                 const myDiv = document.getElementById("validate");
                                 ReactDOM.render(validator.validators.save(), myDiv);
                                 const myButton = document.getElementsByClassName("buttonhide")
                                 for (let i = 0; i < myButton.length; i++) {
                                 myButton[i].style.visibility = "hidden";
                             }}
                             else {
                                 setCount(count + 1);
                             }
                }}>Refuser</button>
        
        <br/>
        
        <button className="button is-normal is-rounded  is-info is-responsive" onClick={() => {
                        if(count === 0){
                            alert("Vous êtes déjà sur la première image")
                        } else if (count !== validator.myArray[0].length -1) {
                            const myButton = document.getElementsByClassName("buttonhide")
                            for (let i = 0; i < myButton.length; i++) {
                                myButton[i].style.visibility = "visible";
                            }
                            validator.validators.previous();
                            setCount(count -1);
                        } else {
                            if(document.getElementsByClassName("buttonhide")[0].style.visibility === "visible"){
                                setCount(count -1);
                            }
                            validator.validators.previous();
                            const myButton = document.getElementsByClassName("buttonhide")
                            for (let i = 0; i < myButton.length; i++) {
                                    myButton[i].style.visibility = "visible";
                            } 
                        } 
            }}>Précédent</button>
        
        <br/>
        
        <button className="buttonhide button is-normal is-rounded  is-info is-responsive" onClick={() => {
                  validator.validators.isNotImg(keyA[count]);
                  setCount(count + 1);
        }}>Pas d'image</button>
        
        
        <br/>
        
        <div id="validate">
        
        </div>
        
        </div>
        );

}


if(localStorage.getItem('validation', 'true')){
    return (
        <div className="Validation">
            <h1>Validation</h1>
            <p>Vous avez validé toutes les images</p>
            </div>
    )
}

if(localStorage.getItem('AisValide', 'true')){
    return (
        <div className="images">
         <p className="subtitle">Voulez-vous valider l'image B numéro {count+1} ?</p>
        <img src={require(`../../data/B/${validator.myArray[0][count].name}.jpg`)} alt="Lights" width="100%" height="100%" />
        <br/>
        <button className="buttonBhide button is-normal is-rounded  is-success is-responsive" onClick={() => {
            validator.validators.BisValid(validator.myArray[0][count].name);
            if(count === validator.myArray[0].length -1) {
            const myDiv = document.getElementById("validateB");
            ReactDOM.render(validator.validators.saveB(), myDiv);
            const myButton = document.getElementsByClassName("buttonBhide")
            for (let i = 0; i < myButton.length; i++) {
            myButton[i].style.visibility = "hidden";
        }
            } else {
                setCount(count + 1);
            }
                }}>Valider</button>
        
        <button className="buttonBhide button is-normal is-rounded  is-danger is-responsive" onClick={() => {
              validator.validators.BisNotValid(validator.myArray[0][count].name);
                 if(count === validator.myArray[0].length -1) {
                    const myDiv = document.getElementById("validateB");
                    ReactDOM.render(validator.validators.saveB(), myDiv);
                    const myButton = document.getElementsByClassName("buttonBhide")
                    for (let i = 0; i < myButton.length; i++) {
                    myButton[i].style.visibility = "hidden";
                }
                } else {
                    setCount(count + 1);
                }
                }}>Refuser</button>
        
        <br/>
        
        <button className="button is-normal is-rounded  is-info is-responsive" onClick={() => {
            if(count === 0){
                alert("Vous êtes déjà sur la première image")
            } else if (count !== validator.myArray[0].length -1) {
                const myDiv = document.getElementById("validateB")
                myDiv.style.display = "none";
                const myButton = document.getElementsByClassName("buttonBhide")
                for (let i = 0; i < myButton.length; i++) {
                    myButton[i].style.visibility = "visible";
                }
                validator.validators.previousB(validator.myArray[0][count].name);
                setCount(count -1);
            } else {
                if(document.getElementsByClassName("buttonBhide")[0].style.visibility === "visible"){
                    setCount(count -1);
                }
                validator.validators.previousB(validator.myArray[0][count].name);
                const myButton = document.getElementsByClassName("buttonBhide")
                for (let i = 0; i < myButton.length; i++) {
                        myButton[i].style.visibility = "visible";
                } 
            }  
        }}>Précédent</button>

        <br/>
        <div id="validateB">
        {/* {validator.validators.saveB()} */}
    </div>
        </div>
        );
}

};
export default Validation;