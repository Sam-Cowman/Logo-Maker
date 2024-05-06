//shape.js

class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    // This method should be overridden by child classes
    render(x, y, size, textSize, fontWeight) {
        throw new Error("Method 'render()' must be implemented in subclass");
    }
}

module.exports = Shape;