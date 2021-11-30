const pets = ["dog", "cat", "cow", "horse"]

const dog = {
    name: "Bankhar",
    breed: "Mongolians",
    age: 5,
    voice: function () {
        console.log("woof")
    }

}

const cat = {
    name: "Muur-name",
    breed: "Muur-breed",
    age: 6,
    voice: function(){
        console.log("meow")
    }
}

const cow = {
    name: "cow-name",
    breed: "cow-breed",
    age: 4,
    voice: function (){
        console.log("moo")
    }
}

console.log(dog.voice());
console.log(cat.voice());
console.log(cow.voice());


