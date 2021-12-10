const animals = ["dog", "cat", "hamster", "turtle", "mouse", "wolf", "fox", "bear", "giraffe", "spider"]
console.log(animals[0])

const dogAnimal = {
    name: "Max",
    type: "dog",
    age: 4,
    voice: function(){
        console.log("Woof")
    }
}
const catAnimal = {
    name: "Windy",
    type: "cat",
    age: 5,
    voice: function(){
        console.log("Meow")
    }
}
const hamsterAnimal = {
    name: "Andy",
    type: "hamster",
    age: 1,
    voice: function(){
        console.log("~~~")
    }
}
const turtleAnimal = {
    name: "Sindy",
    type: "turtle",
    age: 9,
    voice: function(){
        console.log("...")
    }
}
const mouseAnimal = {
    name: "Mickey",
    type: "mouse",
    age: 1,
    voice: function(){
        console.log("Sss")
    }
}
const wolfAnimal = {
    name: "Mike",
    type: "wolf",
    age: 7,
    voice: function(){
        console.log("Wof")
    }
}
const foxAnimal = {
    name: "Lisa",
    type: "fox",
    age: 4,
    voice: function(){
        console.log("Aah")
    }
}
const bearAnimal = {
    name: "Max",
    type: "bear",
    age: 6,
    voice: function(){
        console.log("Arghh")
    }
}
const sheepAnimal = {
    name: "Max",
    type: "sheep",
    age: 3,
    voice: function(){
        console.log("Maii")
    }
}
const cowAnimal = {
    name: "Max",
    type: "cow",
    age: 4,
    voice: function(){
        console.log("Moo")
    }
}
console.log(dogAnimal.voice())
console.log(catAnimal.voice())
console.log(hamsterAnimal.voice())
console.log(turtleAnimal.voice())
console.log(mouseAnimal.voice())
console.log(wolfAnimal.voice())
console.log(foxAnimal.voice())
console.log(bearAnimal.voice())
console.log(sheepAnimal.voice())
console.log(cowAnimal.voice())