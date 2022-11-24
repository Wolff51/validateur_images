import { CSVLink, CSVDownload } from "react-csv";
let myArray = [];


const validators = {
    isValid(img) {
    const myImg = img.replace('./', '');
    const row = {name: myImg, Avalue: 1};
    myArray.push(row);
    },
    isNotValid(img) {
        const myImg = img.replace('./', '');
        const row = {name: myImg, Avalue: 0};
        myArray.push(row);
    },
    isNotImg(img, result) {
        const myImg = img.replace('./', '');
        const row = {name: myImg, Avalue: -1};
        myArray.push(row);
    },
    save() {
        console.log("sauvegarde en cours");
        // send data from array in myArray to csv file in data directory
        const csvData = myArray;
        const header = [
            { label: "Nom de l'image", key: "name" },
            { label: "Valeur de A", key: "Avalue" },
        ];
        const csvReport = {
            data: csvData,
            headers: header,
            filename: 'result.csv',
        };
        return (
            <CSVLink {...csvReport} separator=";">Download me</CSVLink>
        );
    },
    previous() {
    // remove from myArray the last element
    myArray.pop();
    console.log("previous")
    }

}

export default{myArray, validators};
