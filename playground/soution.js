async function fetchData(url) {
    const options = {method:'GET'};
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

export async function runCode(URL) {
    try {
        new URL(URL);

    } catch (error) {
        throw new Error("Invalid URL");
    };
    try {
        const data = await fetchData(url);
        return data
    } catch {
        throw new Error("something was wrong")
    }

}