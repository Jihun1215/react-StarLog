import { useState } from 'react';


const useInput = () => {
    // state
    const [value, setValue] = useState('')
    // Hanlder 
    const Handler = (e) => {
        setValue(e.target.value);
    }
    
    return [value, Handler, setValue];
}
export default useInput;

