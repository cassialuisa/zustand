import {create} from 'zustand'

type CounterStore = {
    count: number;
    increment: () => void;
    incrementAsync: () => Promise<void>;
    decrement: () => void;
}
// this is equivalent to the const [count, setCounter] = useState(0) but without the limitation of being declarated locally in the component
//besides that, here we're declaring a custom hook with no need to wrap anything in a provider or pass it as props

//this funcion has access to the set that we use to set a value and update the count
export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({count: state.count + 1}))
    },
    incrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state) => ({count: state.count + 1}))
    },
    decrement: () => {
        set((state) => ({count: state.count - 1}))
    }
}));

