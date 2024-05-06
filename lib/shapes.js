//shapes.js
const Shape = require('./shape');

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render(x, y, size, textSize, fontWeight) {
        const halfSize = size / 2;
        const points = `${x},${y - halfSize} ${x + halfSize},${y + halfSize} ${x - halfSize},${y + halfSize}`;
        return `
            <polygon points="${points}" fill="${this.color}" />
            <text x="${x}" y="${y}" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" font-size="${textSize}" font-weight="${fontWeight}">Your Text</text>
        `;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    render(x, y, size, textSize, fontWeight) {
        return `
            <circle cx="${x}" cy="${y}" r="${size / 2}" fill="${this.color}" />
            <text x="${x}" y="${y}" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" font-size="${textSize}" font-weight="${fontWeight}">Your Text</text>
        `;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render(x, y, size, textSize, fontWeight) {
        const halfSize = size / 2;
        return `
            <rect x="${x - halfSize}" y="${y - halfSize}" width="${size}" height="${size}" fill="${this.color}" />
            <text x="${x}" y="${y}" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" font-size="${textSize}" font-weight="${fontWeight}">Your Text</text>
        `;
    }
}

module.exports = { Triangle, Circle, Square };