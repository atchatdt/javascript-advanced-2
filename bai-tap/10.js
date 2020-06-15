let dog = {
  breed: 'Border Collie',
  sound: 'Wooh',
  getBreed: () => {
    return this.breed;
  },
  getSound: function() {
    return this.sound;
  }
};
console.log(dog.getBreed(), dog.getSound());


