class Shape {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        // This method should be overridden by subclasses
        throw new Error(`Render method must be implemented by subclasses`);
    }
}

class Circle extends Shape {
    render() {
        // Circle with text inside
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="90" fill="${this.color}" />
            <text x="150" y="115" font-family="Arial" font-size="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>`;
    }
}

class Triangle extends Shape {
   render() {
        // Triangle with text inside
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,18 244,182 56,182" fill="${this.color}" />
            <text x="150" y="130" font-family="Arial" font-size="40" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>`;
   }
}

class Square extends Shape {
   render(){
        const size = 150; // Square size (width and height)
        const x = (300 - size) / 2; // Horizontally center
        const y = (200  - size) / 2; // Vertically center
        // Square with text inside
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${this.color}" />
            <text x="150" y="115" font-family="Arial" font-size="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>`;
   }
}

module.exports = { Circle, Triangle, Square };