const cssTriangle = require('../lib/css-triangle');

describe('.generate()', ()=>{
    describe('direction?: string', ()=>{
        test('\'top\'', ()=>{
            const cssProperties = cssTriangle.generate({
                direction: 'top'
            });

            expect(cssProperties).toEqual({
                'width': 0,
                'height': 0,
                'border-style': 'solid',
                'border-width': '0 50px 100px 50px',
                'border-color': 'transparent',
                'border-bottom-color': '#999'
            });
        });

        test('\'bottom\'', ()=>{
            const cssProperties = cssTriangle.generate({
                direction: 'bottom'
            });

            expect(cssProperties).toEqual({
                'width': 0,
                'height': 0,
                'border-style': 'solid',
                'border-color': 'transparent',
                'border-width': '100px 50px 0 50px',
                'border-top-color': '#999'
            });
        });

        test('\'right\'', ()=>{
            const cssProperties = cssTriangle.generate({
                direction: 'right'
            });

            expect(cssProperties).toEqual({
                'width': 0,
                'height': 0,
                'border-style': 'solid',
                'border-color': 'transparent',
                'border-width': '50px 0 50px 100px',
                'border-left-color': '#999'
            });
        });

        test('\'left\'', ()=>{
            const cssProperties = cssTriangle.generate({
                direction: 'left'
            });

            expect(cssProperties).toEqual({
                'width': 0,
                'height': 0,
                'border-style': 'solid',
                'border-color': 'transparent',
                'border-width': '50px 100px 50px 0',
                'border-right-color': '#999'
            });
        });
    });
});
