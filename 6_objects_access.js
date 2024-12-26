// Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

// Accessing elements. Similar to JSON
var gloveBoxContents = myStorage.car.inside["glove box"]; // Access the value of "glove box"
console.log(gloveBoxContents); // Output: maps

// creating copies
var copyOfMyStorage = JSON.parse(JSON.stringify(myStorage));