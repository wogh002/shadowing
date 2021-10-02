import { useState, useCallback } from 'react';
const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const handler = useCallback(({ target }) => {
        setValue(target.value);
    }, []);
    return [value, handler,setValue];
}
export default useInput;