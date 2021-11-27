import { useState } from "react";

const useInfo = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [show, setShow] = useState({});

    return {
        name,
        phone,
        show,
        setName,
        setPhone,
        setShow
    }
}

export default useInfo;