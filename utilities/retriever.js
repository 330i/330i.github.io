async function getRawData(path) {
    console.log(`${process.env.NEXT_PUBLIC_TESTING_MODE === "true" ? "http://localhost:5000/data" : "https://raw.githubusercontent.com/330i/personal-website-data/refs/heads/main"}/${path}`);
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_TESTING_MODE === "true" ? "http://localhost:5000/data" : "https://raw.githubusercontent.com/330i/personal-website-data/refs/heads/main"}/${path}`);
        if (!response.ok) {
            console.error("Network error when getting data:", response.statusText);
            return;
        }
        return response;
    }
    catch (e) {
        console.error("Error when getting data:", e);
        return;
    }
}

export { getRawData };