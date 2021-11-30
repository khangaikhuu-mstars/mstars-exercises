// const pets = [
//   dog = [
//       {
//         name: "banhar",
//         type: "dog",
//         breed: "mongolian"
//       }
//   ],
    
//   cat = [
//     {
//     name: "muur",
//     type: "cat",
//     breed: "egyptian"
//     },
//   ],
  
// ]
  

  // console.log(pets);

  
  console.log('const pets = [')
  for(let i = 0; i < 10; i++) {

    let randomAnimal = Math.random().toString(36).substring(3);
    let randomType = Math.random().toString(36).substring(3);
    let randomName = Math.random().toString(36).substring(4);
    let randomBreed = Math.random().toString(36).substring(5);


    console.log(
      `${randomAnimal} = [
        {\
          name: q"${randomName}",
          type: q"${randomType}",
          breed: q"${randomBreed}",
        }
      ],`
    );
  }
  console.log(']')