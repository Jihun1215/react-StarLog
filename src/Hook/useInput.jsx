import { useState } from 'react';


const useInput = () => {
    // state
    const [value, setValue] = useState('')
    // Hanlder 
    const Handler = (e) => {
        setValue(e.target.value);
    }
    const reset = () => {
        setValue('');
    }


    return [value, Handler, reset];
}
export default useInput;

