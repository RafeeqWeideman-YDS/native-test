import { Machine } from 'xstate';

const DrawingMachine = Machine({
    id: 'drawing',
    initial: 'drawing',
    states: {
        drawing: {
            on: {
                DRAW: {
                    actions: 'drawPixel',
                },
                ERASE: {
                    actions: 'erasePixel',
                },
                CLEAR: {
                    actions: 'clearPixels',
                },
            },
        },
    },
});

export default DrawingMachine