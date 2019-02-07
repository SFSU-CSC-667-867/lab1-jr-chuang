// declaring classes in js

class Something {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(this.name)
  }
}

const s = new Something('tim');
s.hello();

// for practice

// Create a subclass

class SomethingChild extends Something {
  constructor(namer) {
    super(namer)
  }

  nohello() {
    console.log(this.name + " no hello");
  }
}

const s2 = new SomethingChild('james');
s2.hello();
s2.nohello();

// add a property after the object has been instantiated

s2.age = 6;
console.log(s2);

// add a static function

SomethingChild.printOkay = () => { console.log( 'okay' ) }
SomethingChild.printOkay()