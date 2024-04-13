// Contains only PURE request function returning the response
// There MUST NOT be any application logic here

export async function fetch_user_data() {

    try {

        var headers = new Headers();

        const response = await fetch("https://localhost:4241/user/data", {
            method: "GET",
            headers: headers,
            credentials: 'include',
            mode: 'cors'
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return (data);
    }
    catch (error) {
        console.error(`ERROR: ${error}`);
    }
    return (null);
}

export async function fetch_user_history() {

    try {

        var headers = new Headers();

        const response = await fetch("https://localhost:4241/user/history", {
            method: "GET",
            headers: headers,
            credentials: 'include',
            mode: 'cors'
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return (data);
    }
    catch (error) {
        console.error(`ERROR: ${error}`);
    }
    return (null);
}

export async function fetch_stats() {

    try {

        var headers = new Headers();

        const response = await fetch("https://localhost:4241/user/game_stat", {
            method: "GET",
            headers: headers,
            credentials: 'include',
            mode: 'cors'
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return (data);
    }
    catch (error) {
        console.error(`ERROR: ${error}`);
    }
    return (null);
}

export async function fetch_leaderboard() {

    try {

        var headers = new Headers();

        const response = await fetch("https://localhost:4241/stats/leaderboard", {
            method: "GET",
            headers: headers,
            credentials: 'include',
            mode: 'cors'
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return (data);
    }
    catch (error) {
        console.error(`ERROR: ${error}`);
    }
    return (null);
}

export async function fetch_friends() {

    try {

        var headers = new Headers();

        const response = await fetch("https://localhost:4241/user/friends", {
            method: "GET",
            headers: headers,
            credentials: 'include',
            mode: 'cors'
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return (data);
    }
    catch (error) {
        console.error(`ERROR: ${error}`);
    }
    return (null);
}
