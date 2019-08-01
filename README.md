# week1.day1.bouncingBall

## Instructions
1. Use command line to create a new project folder called `bouncingBall`
    - Navigate into the folder and create your required files (`index.html`, `sketch.js`) 
    - Include a reference to p5.js in your `index.html` file
2. In your `sketch.js`, setup your canvas (600x600) and draw a circle in the center of the canvas
    - Your circle should be drawn from the CENTER by default, but if this isn’t the case, try using rectMode(CENTER) 
3. Have the circle move along the x axis, you will need to define the x & y position as a variable and incrementally increase them (try different increments for each).
4. You will need a conditional statement for each side of your canvas. If the ball reaches that position (i.e. x < 25 at it's center), it should reverse the incremental direction of the 'speed' you applied above. 
    - Trying drawing this out by hand - Think, what should happen to the ball when it hits top, left, right, and bottom walls?
    - *HINT: If something is changing, think about using a variable!*
    - *HINT: If something occurs in a certain situation (i.e. ball touches wall), think about using a conditional and IF/ELSE IF statement!*

## Extra Credit
- Have the ball start out in a random position on the canvas, instead of the center of the canvas
- Write a function that changes the color of the ball if the user is able to click it while it is on the move.
  - Think about what “clicking the ball” really means - the mouse x and y were within the radius of the circle. *Hint: [dist()](https://p5js.org/reference/#/p5/dist)*
- Make the ball speed up every time it hits the edge of the canvas

## Helpful Resources
- [p5.js reference](https://p5js.org/reference/)
- [p5.js CDN](https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js) found at [cdnjs.com](https://cdnjs.com/libraries/p5.js/)
