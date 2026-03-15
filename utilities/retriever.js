async function getRawData(path) {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/330i/personal-website-data/refs/heads/main/${path}`);
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