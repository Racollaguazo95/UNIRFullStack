import { useEffect, useState } from "react";

export const useMenuCategory = (initialData = []) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(initialData);
    }, [initialData]);

    return data;
}