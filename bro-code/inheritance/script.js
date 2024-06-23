class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is eating`);
  }
}

class Rabbit extends Animal {
  name = "Rabbit";
}

class Fish extends Animal {
  name = "Fish";
}
class Hawk extends Animal {
  name = "Hawk"; 
}

const rabbit = new Rabbit();
rabbit.alive = false;
console.log(rabbit.alive);
