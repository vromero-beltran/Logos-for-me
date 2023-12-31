const {Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    test('render correctly', () => {
        const shape = new Circle();
        var color = ('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="blue"/>`);
    });
});

describe('Square', () => {
    test('render correctly', () => {
        const shape = new Square();
        var color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="red"/>`);
    });
});

describe('Triangle', () => {
    test('render correctly', () => {
        const shape = new Triangle();
        var color = ('green');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="green"/>`);
    });
});