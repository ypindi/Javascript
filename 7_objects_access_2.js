var collection = {
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette", "test"]
    },
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"]
    },
    5439: {
        album: "ABBA Gold",
        artist: "ABBA"
    }
};


var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

// Alter values below to test your code
console.log(updateRecords(2468, "tracks", "test"));
console.log(updateRecords(5439, "artist", "ABBA etrsrth"));

