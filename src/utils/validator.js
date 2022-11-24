import { CSVLink, CSVDownload } from "react-csv";

let myArray = [];


const validators = {
    isValid(img) {
    const myImg = img.replace('./', '');
    const row = {name: myImg, Avalue: 1, Bvalue: "-", Choice: 1 };
    myArray.push(row);
    },
    BisValid(img) {
        const myImg = img.replace('./', '');
        console.log(myImg);
        // find where name is equal to myImg in myArray and add Bvalue
        const index = myArray[0].findIndex(x => x.name === myImg);
        myArray[0][index].Bvalue = 1;
        myArray[0][index].Choice = 0;
        console.log(myArray);

        },
    isNotValid(img) {
        const myImg = img.replace('./', '');
        const row = {name: myImg, Avalue: 0};
        myArray.push(row);
    },
    isNotImg(img) {
        const myImg = img.replace('./', '');
        const row = {name: myImg, Avalue: -1};
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
            filename: 'result.csv',
        };

        return (
            <CSVLink {...csvReport} separator=";"  onClick={() => {
                console.log("You click the link");
                localStorage.setItem("AisValide", true);
                localStorage.setItem("myArray", JSON.stringify(myArray));
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
        console.log(filteredData2)
        localStorage.removeItem("myArray");
    },

    previous() {
    myArray.pop();
    }

}

export default{myArray, validators};
