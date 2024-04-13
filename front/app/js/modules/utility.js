export function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export async function get_csrf_token() {
    await fetch("https://localhost:4241/user/get_csrf_token", {
        method: "GET",
        credentials: 'include',
        mode: "cors"
        }
    )
    .catch(error => {
        console.error('Error generating token: ', error);
    }
    );
}