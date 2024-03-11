// Function to create a new animal object with a specified sound-making action
function createAnimal(species, action, sound) {
    return {
      species,
      // Dynamically create a method based on the action that returns the animal's sound
      [action]() {
        return sound;
      },
    };
  }
  
  // Creating a dog object with a 'bark' method
  const dog = createAnimal("dog", "bark", "Woooof!");
  // Invoking the 'bark' method to get the dog's sound
  console.log(dog.bark()); // Outputs: "Woooof!"
  
  // Creating a sheep object with a 'bleet' method
  const sheep = createAnimal("sheep", "bleet", "BAAAAaaaa");
  // Invoking the 'bleet' method to get the sheep's sound
  console.log(sheep.bleet()); // Outputs: "BAAAAaaaa"
  