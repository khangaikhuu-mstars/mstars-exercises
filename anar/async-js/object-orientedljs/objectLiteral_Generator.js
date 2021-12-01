


function randomPetGenerator() {

  const types = ['dog', 'cat', 'bird', 'horse', 'fox', 'reptile', 'snake', 'fish', 'elephant', 'hippo'];
  const breeds = ['mongolian', 'japanese', 'korean', 'saharan', 'arctic', 'indian', 'oceanic']


  // console.log('const pets = [')
  for (let i = 0; i < 10; i++) {
    let randomAnimal = Math.random().toString(36).substring(9);
    let randomVoice = Math.random().toString(36).substring(9);
    console.log(
      `
      
      const ${types[i]} = 
        {\ 
          name: "animal_${i + 1}_${randomAnimal}",
          breed: "${breeds[Math.floor(Math.random() * types.length)]}",
          voice: () => {
            console.log("${randomVoice}")
          }
        };`
    );
  }
  // console.log('];')

  for (let i = 0; i < 10; i++) {
    console.log(`${types[i]}.voice()`)
  }
};


randomPetGenerator();