import { Machine } from 'xstate'

const PixelMachine = Machine({
    id: "CREATE_WITH_PIXELS",
    initial: "blank",
    states: {
        blank: { on: { DRAW: "draw" } },
        draw: { on: { DRAW: "draw" } }
    }
})

export default PixelMachine