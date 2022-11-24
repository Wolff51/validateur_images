import { CSVLink, CSVDownload } from "react-csv";

let myArray = [];


const validators = {
    isValid(img) {
    const myImg = img.replace('./', '');
    const row = {name: myImg, Avalue: 1, Bvalue: "-", Choice: 1 };
    myArray.push(row);
    },

    isNotValid(img) {
    const myImg = img.replace('./', '');
    const row = {name: myImg, Avalue: 0, Bvalue: "-", Choice: 1 };
    myArray.push(row);
    },

    BisValid(img) {
        const myImg = img.replace('./', '');
        // find where name is equal to myImg in myArray and add Bvalue
        const index = myArray[0].findIndex(x => x.name === myImg);
        myArray[0][index].Bvalue = 1;
        myArray[0][index].Choice = 0;
        },

    BisNotValid(img) {
        const myImg = img.replace('./', '');
        const index = myArray[0].findIndex(x => x.name === myImg);
        myArray[0][index].Bvalue = 0;
        myArray[0][index].Choice = -1;
    },

    isNotImg(img) {
        const myImg = img.replace('./', '');
        const row = {name: myImg, Avalue: -1, Bvalue: "waitingBvalidation", Choice: "waitingBvalidation" };
        myArray.push(row);
    },

    save() {
        const csvData = myArray;
        const header = [
            { label: "Nom de l'image", key: "name" },
            { label: "Valeur de A", key: "Avalue" },
            { label: "Valeur de B", key: "Bvalue" },
            { label: "Choice", key: "Choice" },
        ];
        const csvReport = {
            data: csvData,
            headers: header,
            filename: 'resA.csv',
        };

        return (
            <CSVLink {...csvReport} separator=";"  onClick={() => {
                localStorage.setItem("AisValide", true);
                localStorage.setItem("myArray", JSON.stringify(myArray));
                window.location.reload();
              }}>Enregistrer et Télécharger les résultats</CSVLink>
        );
            
    },

    saveB() {
        const dataB = myArray[0];
        console.log(dataB);
        const dataA = JSON.parse(localStorage.getItem("myArray"))
        const resultArray = dataA.map(row => {
            const name = row.name.split('.')[0];
            return {...row, name};  
        });
        for (const prop of dataB) {
            const index = resultArray.findIndex(x => x.name === prop.name);
            resultArray[index].Bvalue = prop.Bvalue;
            resultArray[index].Choice = prop.Choice;
        }


      console.log(resultArray)

        const csvData = resultArray;
        const header = [
            { label: "Nom de l'image", key: "name" },
            { label: "Valeur de A", key: "Avalue" },
            { label: "Valeur de B", key: "Bvalue" },
            { label: "Choice", key: "Choice" },
        ];
        const csvReport = {
            data: csvData,
            headers: header,
            filename: 'res.csv',
        };

        return (
            <CSVLink {...csvReport} separator=";"  onClick={() => {
                localStorage.removeItem("AisValide");
                localStorage.removeItem("myArray");
                localStorage.setItem("validation", true);
                window.location.reload();
              }}>Enregistrer et Télécharger les résultats</CSVLink>
        );
            
    },

    getResult() {
        const data = JSON.parse(localStorage.getItem("myArray"))
        const filteredData = data.filter(row => row.Avalue === 0 || row.Avalue === -1);
        // remove any extension from name in firlteredData
        const filteredData2 = filteredData.map(row => {
            const name = row.name.split('.')[0];
            return {...row, name};  
        });
        myArray.push(filteredData2);
    },

    previous() {
    myArray.pop();
    },

    previousB(img){
        const myImg = img.replace('./', '');
        const index = myArray[0].findIndex(x => x.name === myImg);
        myArray[0][index].Bvalue = "undefined";
        myArray[0][index].Choice = "undefined";
    }

}

export default{myArray, validators};
