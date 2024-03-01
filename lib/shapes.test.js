const { Circle, Triangle, Square } = require('./shapes');

// Helper function to normlaize whitespace for string comparison
function normalizeWhitespace(str) {
    return str.replace(/\s+/g, ' ').trim();
}

describe('Shape rendering', () => {
    const color = 'red';
    const textColor = 'black';
    const text = 'ABC';

    test('Circle should render correct SVG' , () => {
        const circle = new Circle(color, textColor, text);
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${color}" /> <text x="150" y="105" font-family="Arial" font-size="30" fill="${textColor}" text-anchor="middle">${text}</text> </svg>`;
        expect(normalizeWhitespace(circle.render())).toEqual(normalizeWhitespace(expectedSVG));
    });

    test('Triangle should render correct SVG', () => {
        const triangle = new Triangle(color, textColor, text);
        const expectedSVG = `<svg width="300" height="200" xmlns='http://www.w3.org/2000/svg"> <polygon points="150,20 250,180 50,180" fill="${color}" /> <text x="150" y="105" font-family="Arial" font-size="30" fill="${textColor}" text-anchor="middle">${text}</text> </svg>`;
        expect(normalizeWhitespace(triangle.render())).toEqual(normalizeWhitespace(expectedSVG));
    });

    test('Square should render correct SVG' , () => {
        const square = new Square(color, textColor, text);
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="50" y="50" width="200" height="100" fill="${color}" /> <text x="150" y="105" font-family="Arial" font-size="30" fill="${textColor}" text-anchor="middle">${text}</text> </svg>`;
        expect(normalizeWhitespace(square.render())).toEqual(normalizeWhitespace(expectedSVG));
    });
})