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
    myArray.pop();
    }

}

export default{myArray, validators};
