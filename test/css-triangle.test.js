const cssTriangle = require('../lib/css-triangle');

describe('cssTriangle', ()=>{
    test('generate({\nwidth: string\n})', ()=>{
        const cssProperties = cssTriangle.generate({
            color: '#000',
            width: 20,
            height: 20
        });

        expect(cssProperties).toBeTruthy();
    });
});
