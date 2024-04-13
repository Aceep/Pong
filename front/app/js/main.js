import {display_welcome_page, display_login_page, display_register_page, display_profile_page, display_match_history, display_friend_list, display_game_page} from "./modules/display.js";
import {fetch_user_data, fetch_user_history, fetch_stats, fetch_leaderboard, fetch_friends} from "./modules/request.js";
import {fill_profile_page, fill_match_history, fill_friend_list} from "./modules/fill.js";
import {getCookie, get_csrf_token} from "./modules/utility.js";

// Game import
import * as GAME from "../game/src/game.js";

var page_status = "welcome_page";				// Used to keep track of our current status
const body = document.querySelector("body");
const modal_space = document.getElementById("modal_space");
var	state = {saved_status:page_status};			// An object containing a status, used with history API

// Detect when the user clicks on an element
// 	- If the id of the clicked element corresponds to a change of page:
//			1. Save the current page in history
//			2. Change the page_status to the new state
//			3. Also save that new state
//			4. Call the main function that will act based on page_status
//	- If the id corresponds to a submit element, act based on input received
//	  then, if needed, redirect to the correct page using the above steps
document.addEventListener("click", function(event) {

    event.preventDefault();

    const element = event.target;
    switch (element.id) {

        case "login":
            state.saved_status = page_status;
            page_status = "login_page";
            state.saved_status = page_status;
            history.pushState(state, "login", "?page=login");
            main();
            break;
        case "register":
            state.saved_status = page_status;
            page_status = "register_page";
            state.saved_status = page_status;
            history.pushState(state, "register", "?page=register");
            main();
            break;

        case "login_submit":
            check_login_input();
            break;

        case "register_submit":
            check_register_input();
            break;

        case "edit_submit":
            check_edit_input();
            break;

        case "confirm_logout":
            confirm_user_logout();
            break;

        case "confirm_delete":
            confirm_user_delete();
            break;

        case "right_panel_button_toggle":
            handle_right_panel_switch();
            break;

        default:
            break;
    }
});

// The other way to change "pages" is to use back/forward buttons, which are caught here
// Update our page status based on what the state saved earlier then call main()
window.addEventListener('popstate', function(event) {

    var state = event.state;

    if (state) {
        page_status = state.saved_status;
        main();
    }
});

// Initial call to main
main();

// The main function will call the right display function based on page_status
//! It will attempt to read from the url so it's mandatory to properly use history.pushState()
function main() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    page_status = urlParams.get('page') + '_page';

    if (page_status === "null_page") {
        page_status = "welcome_page";
    }

    switch (page_status) {

        case "welcome_page":
            display_welcome_page();
            break;

        case "login_page":
            display_login_page();
            break;

        case "register_page":
            display_register_page();
            break;

        case "profile_page":
            display_profile_page();
            display_match_history();
            fill_profile_page();
            fill_match_history();
            break;

		case "game_page":
			display_game_page(); //Adding the game page
			break;

        default :
            console.error("Unknown page_status.");
    }

    history.replaceState(state, null, '?page=' + page_status.split('_')[0]);
}

// We'll send a request to the back with the form input (username + password)
// The back will check that the user is known and the password is correct, if so, move to the profile page
async function check_login_input() {

    const	infoField = document.getElementById("info");
    const   formElement = document.getElementById("form_element");

    if (formElement.checkValidity() === false) {
        formElement.reportValidity();
        return;
    }

    var username = document.getElementById("login_username_input").value;
    var password = document.getElementById("login_password_input").value;


    await get_csrf_token();
    var csrftoken = getCookie('csrftoken');
    // formData.append("csrfmiddlewaretoken", csrftoken);

    const jsonData = {
        username: username,
        password: password,
        csrftoken: csrftoken
    };

    console.log("csrftoken: " + csrftoken);
    var headers = new Headers()
    headers.append("Content-Type", "application/json");
    headers.append('X-CSRFToken', csrftoken);

    try {
        console.log("wait fetch");;
        const response = await fetch("https://localhost:4241/user/login", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(jsonData),
            credentials: 'include',
            mode: 'cors'
        });

        if (!response.ok) {
            infoField.textContent="Invalid username or password. Please try again";
            return;
        }
        console.log("fetch done");
        console.log(response.text());
        state.saved_status = page_status;
        history.pushState(state, "login", "?page=login");
        page_status = "profile_page";
        state.saved_status = page_status;
        history.pushState(state, "profile", "?page=profile");
        main();
    }
    catch (error) {
        infoField.textContent="Server might be down. Please try again later";
        console.error("Fetch request failed:", error);
    }
}

// We'll send a request to the back with the form input (username + password + password_confirm)
// The back will check that the two password match, if so, move to the profile page
async function check_register_input() {

    const	infoField = document.getElementById("info");
    const   formElement = document.getElementById("form_element");

    if (formElement.checkValidity() === false) {
        formElement.reportValidity();
        return;
    }

    var username = document.getElementById("register_username_input").value;
    var password = document.getElementById("register_password_input").value;
    var password_confirm = document.getElementById("register_password_input_confirm").value;

    
    await get_csrf_token();
    var csrftoken = getCookie('csrftoken');

    const jsonData = {
        username: username,
        password: password,
        password_confirm: password_confirm,
        csrftoken: csrftoken
    };

    var headers = new Headers()
    headers.append("Content-Type", "application/json");
    headers.append('X-CSRFToken', csrftoken);

    try {
        const response = await fetch("https://localhost:4241/user/register", {
            method: "POST",
            body: JSON.stringify(jsonData),
            headers: headers,
            credentials: 'include'
        });

        if (!response.ok) {
            infoField.textContent="Passwords don't match. Please try again";
            return;
        }
        state.saved_status = page_status;
        history.pushState(state, "login", "?page=login");
        page_status = "profile_page";
        state.saved_status = page_status;
        history.pushState(state, "profile", "?page=profile");
        main();
    }
    catch(error) {
        infoField.textContent="Server might be down. Please try again later";
        console.error("Fetch request failed:", error);
    }
}

// We'll send a request to the back with the form input (username + password + password_confirm)
// The back will check that the two password match, if so, move to the profile page
async function check_edit_input() {

    const	infoField = document.getElementById("info");
    const   formElement = document.getElementById("form_element");

    if (formElement.checkValidity() === false) {
        formElement.reportValidity();
        return;
    }

    var username = document.getElementById("newUsername").value;
    var password = document.getElementById("newPassword").value;
    var password_confirm = document.getElementById("newPasswordConfirm").value;

    await get_csrf_token();
    var csrftoken = getCookie('csrftoken');

    const jsonData = {
        new_username: username,
        new_password: password,
        new_password_confirm: password_confirm,
        csrftoken: csrftoken
    };

    try {
        const response = await fetch("https://localhost:4241/user/edit", {
            method: "POST",
            body: JSON.stringify(jsonData),
            credentials: 'include'
        });

        if (!response.ok) {
            infoField.textContent="Passwords don't match. Please try again";
            return;
        }
        main();
    }
    catch(error) {
        infoField.textContent="Server might be down. Please try again later";
        console.error("Fetch request failed:", error);
    }
}

// Warn the server that we want to log out, if it's okay go back to welcome page
async function confirm_user_logout() {

    //!TODO POST or GET request ? What is needed to identify a user over another
    console.log("User should be logged out");
}

// Warn the server that we want to delete, if it's okay go back to welcome page
async function confirm_user_delete() {

    //!TODO POST or GET request ? What is needed to identify a user over another
    console.log("User should be deleted");
}

// Change the right panel from Match history to Friend list and vice versa
function handle_right_panel_switch() {

    const   friend_table = document.getElementById("friend_list");
    const   switch_button = document.getElementById("right_panel_button_toggle");

    if (friend_table === null) {
        switch_button.innerHTML = "Match history";
        display_friend_list();
        fill_friend_list();
    }
    else {
        switch_button.innerHTML = "Friend list";
        display_match_history();
        fill_match_history();
    }
}
