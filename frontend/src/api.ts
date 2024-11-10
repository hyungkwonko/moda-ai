// frontend/src/api.ts

const API_URL = "http://127.0.0.1:5000/api";

export const fetchData = async () => {
    const response = await fetch(`${API_URL}/data`);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
};
