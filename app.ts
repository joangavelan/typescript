function Logger(logString: string) {
  console.log('LOGGER FACTORY')
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY')
  return function (constructor: any) {
    console.log('Rendering template')
    const HTMLelem = document.getElementById(hookId);
    const p = new constructor();

    if (HTMLelem) {
      HTMLelem.innerHTML = template;
      HTMLelem.querySelector('h1')!.textContent = p.name;
    }
  };
}

@Logger('LOGGING')
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = 'Joan';

  constructor() {
    console.log("Creating person object...");
  }
}

// const pers = new Person();

// console.log(pers);
