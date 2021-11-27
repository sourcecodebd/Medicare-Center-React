import { useState, useEffect } from "react";

const useMedical = () => {
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [search, setSearch] = useState([]);
    useEffect(() => {
        const ENDPOINT1 = `services.json`;
        const ENDPOINT2 = `doctors.json`;
        const URL1 = `https://raw.githubusercontent.com/sourcecodebd/Medicare-Center-API/main/${ENDPOINT1}`;
        const URL2 = `https://raw.githubusercontent.com/sourcecodebd/Medicare-Center-API/main/${ENDPOINT2}`;
        fetch(URL1)
            .then((response) => response.json())
            .then(data => setServices(data));
        fetch(URL2)
            .then((response) => response.json())
            .then(data => setDoctors(data));
    }, []);

    return {
        services,
        doctors,
        search,
        setServices,
        setSearch
    }
}

export default useMedical;