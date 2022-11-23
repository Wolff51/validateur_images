let myArray = [];

const validors = {
    isValid(img) {
    const myImg = img.replace('./', '');
    const row = [myImg, 1];
    myArray.push(row);
    console.log(myArray)
    },
    isNotValid(img) {
        const myImg = img.replace('./', '');
        const row = [myImg, 0];
        myArray.push(row);
        console.log(myArray)
    },
    isNotImg(img, result) {
    console.log("l'image n'est pas une image")
    },
    previous() {
    // remove from myArray the last element
    myArray.pop();
    console.log(myArray)
    console.log("previous")
    }

}

export default validors;