Exercise 1: TypeScript Warmup
=============================
> Note: While my preferred language for all the exercises is TypeScript, you may substitute it with ES2015, if that's what you prefer.

Overview
--------
In this exercise we will calculate the status of an Order. This is in preparation of displaying the status as a visual bar chart.

The status of an order depends on the total quantity of the order, the quantity placed and the quantity executed.

**Example:**

```
quantity = 10000
committed = 7000
done (executed) = 4000

Hence:
notDone = committed - done = 7000 - 4000 = 3000
uncommitted = quantity - committed = 10000 - 7000 = 3000

Order status in percentages:
pctDone = done / quantity = 4000 / 10000 = 0.40
pctNotDone = notDone / quantity = 3000 / 10000 = 0.30
pctUncommitted = uncommitted / quantity = 3000 / 10000 = 0.30
```

Note that `pctDone + pctNotDone + pctUncommitted` should equal 1, i.e. 100%. We will use this formula to eventually render our bar chart.

Exercise
--------
I assume you have already cloned this repository. Perform the following steps to prepare the first exercise.

```
$ cd exercise-1-typescript-warmup
$ yarn install
```

The `src` folder contains the starter code for this exercise:

- The `domain` folder contains starter code for domain objects: `Order`, `Placement` & `Execution`. 
- This folder also contains some preliminary tests for `Order` & `Placement` objects. We are using Jest as our testing tool. Run the tests by executing `yarn test` on the command line. In the true TDD spirit, the tests will fail. Your job is to write the code inside the domain objects to make them pass.
- Think of other test cases to test your code exhaustively. The goal is that the `Order` object should return the correct `OrderStatus` for all combinations of `Orders`, `Placements` & `Executions`.
- Strive to get 100% code coverage in your tests, but don't write meaningless tests just to get to that number!
- Once you are confident that your domain objects are working correctly, write the main program: `src/index.ts`. The purpose of the main program is to load the orders from the data file (`data/index.ts`) and log the status of each. Note that the data is in a normalized format, similar to what you might get from a database. The `loadOrders()` method in the order adapter should convert this normalized data to connected `Order`, `Placement` & `Execution` objects.
- To run the main program, you must first compile your source code using `yarn build`. This compiles TypScript into ES5 and outputs the resulting code into the `dist` folder. Now you can run the compiled code by executing `yarn start`.   

Tips
----
- File names should always be lowercase to avoid subtle bugs due to platform differences. Use a `-` or `.` to separate words, e.g. `order-view.tsx` or `order.store.ts`.
- Run prettier often to clean up your code (`yarn format`). Prettier allows the code to look consistent across our team. Do not alter prettier options in package.json.
- Run lint often to make sure that your code has zero lint errors (`yarn lint`). Don't relax the supplied lint rules.
- The test title should indicate the intent of what you are testing, not the mechanics. Here are examples of good and bad test titles:
  - GOOD: "A partially placed order returns the correct uncommitted percentage"
  - BAD: "A 30% placed order returns 70% uncommitted status" (this does not communicate the intent of the test)

Questions
---------
- What are string literals and why are they useful?

  - String literal types allow us to specify the exact value a string must have. In practice string literal types      combine nicely with union types, type guards, and type aliases.
  
- What are interfaces and why are they useful?

  Interface is an group of related properties and methods that describe an objects.

  - Interfaces ensure proper values are being passed into properties, constructors, or functions. This enforce         consistency across objects.(type-checking)
  - Interfaces make it much easier to catch issues such as missing data while we are writing the initial code.
  - Interfaces provide the additional flexibility in an application and make it more loosely coupled.


- What are accessors and why are they useful?

  TypeScript supports getters/setters as a way of intercepting accesses to a member of an object. Property accessors have two keywords “get” and “set”, which is used with normal functions.

  The “set” accessor initializes a private property through a keyword “value” and “get” accessor returns that private property.

  - As compare with functions the property accessors are more secure, better approach and powerful for access to       private properties, because we have more controls over on properties using the property accessors.


- What are constructor parameter properties?
  public: In TypeScript, each member is public by default. we can mark a member public explicitly.

  private: When a member is marked private, it cannot be accessed from outside of its containing class.

  protected: The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes. 
  Means, protected modifier only accessible within the class and its subclasses.

  readonly: We can make properties readonly by using the readonly keyword. Readonly properties must be initialized at their declaration or in the constructor.


- Is a readonly property modifiable by a method of the class?
  No. example:

  class Person {
    readonly name: string;
    constructor(name: string) { this.name = name; }
  }

  let myFriend = new Person("Rahul");
  myFriend.name = "Sachin"; // error! name is readonly.


- What are generics? Why are they useful?

  Generics are being able to create a component that can work over a variety of types rather than a single one.
  The advantage of generics is that you can reuse code, rather than copy and pasting the code to work for different types.


- What is the difference between an Array and a Map? When would you use one vs. the other?

  An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets ([]).

  The map() method creates a new array with the results of calling a provided function on every element in the calling array.
  we should use .map() when we want to transform elements in an array.   


Resources
---------
- [Official TypeScript documentation](https://www.typescriptlang.org/docs)
- [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/) - An excellent resource for learning TypeScript - must read cover-to-cover!
- [Jest documentation](https://facebook.github.io/jest/)

