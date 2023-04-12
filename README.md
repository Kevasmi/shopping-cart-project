# shopping-cart-project

## Intro

This Shopping Cart project was created to let me crystalize all of the React knowledge I had learned up to this point in my mind. Completing allowed me to see how a frequently used system on thousands of websites across the web actually functioned in detail. Creating a version of it for myself allowed me to see the deeper nuances of its operation and taught me to use Reacts entire toolset to my advantage to achieve it.

While there is an overall simplicity in the websites layout, I was able to focus for on expanding my CSS skills, as I took the approach of copying Koenigseggs website as closely as I could in design. It was a fun challenge and I very much enjoyed the project.

## Code

The project was my first foray in to implementing Typescript for my work. While at first, learning to consistently type my variables and functions, and having to research how to find correct typings for React specific functions and also event handlers, was admittedly frustrating, I eventually realized the real power of typing my projects. 

As I pushed further into my project, my debugging became noticably easier due to the built in linting for invalid typing on functions and variables, possibly saving me hours, if not days of work time.

### Shopping Cart Context

Much of the projects complexity lies here. 

The shopping cart functionality works by use a Context component to provide state data, of the cart, to all necessary components without having to pass said state down as props on each level. 

![image](https://user-images.githubusercontent.com/96889143/231597974-654032b7-2c10-4816-b86f-3a3de48e0cda.png)

All of the shopping carts logic is contained within ShoppingCartContext file. This includes increasing/decreasing cart items, removing cart items, and finding item quantities. These functions are then used in various components where needed to manipulate cart behavior.

### React Bootstrap
I used React Bootstrap to handle creating a quick and easy to modify modal component. It has built in micro-components for UI interactions. Also much like Bootstrap, it has it's own pre-made classes that made integrating the modal to the page much more straightforawrd.