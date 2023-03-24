import { Machine } from 'xstate';

const drawingMachine = Machine({
  id: 'drawing',
  initial: 'drawing',
  states: {
    drawing: {
      on: {
        DRAW: {
          actions: 'drawPixel',
        },
        CLEAR: {
          actions: 'clearPixels',
        },
      },
    },
  },
});

export default drawingMachine;