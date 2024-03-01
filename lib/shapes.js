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
            <circle cx="150" cy="100" r="80" fill="${this.color}" />
            <text x="150" y="105" font-family="Arial" font-size="30" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>`;
    }
}

class Triangle extends Shape {
   render() {
        // Triangle with text inside
        return `<svg width="300" height="200" xmlns='http://www.w3.org/2000/svg">
            <polygon points="150,20 250,180 50,180" fill="${this.color}" />
            <text x="150" y="105" font-family="Arial" font-size="30" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>`;
   }
}

class Square extends Shape {
   render(){
        // Square with text inside
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
            <text x="150" y="105" font-family="Arial" font-size="30" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>`;
   }
}

module.exports = { Circle, Triangle, Square };