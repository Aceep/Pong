// Contains only functions that will fill data based on prior requests
// There MUST NOT be any application logic here
import {fetch_user_data, fetch_user_history, fetch_stats, fetch_leaderboard, fetch_friends} from "./request.js";

// Get all the data necessary for the profile page through a series of request,
// Try to fill the page with the given data, if a request goes wrong,
// fill the relevant fields with default and warn the user
export async function fill_profile_page() {

    var user_data = await fetch_user_data();
    var user_stats = await fetch_stats();
    var leaderboard = await fetch_leaderboard();

    console.log(leaderboard);

// --- User

    const html_profile_avatar = document.getElementById("profile_avatar");

    if (user_data === null) {
        html_profile_avatar.src = "../favicon.ico";
    }
    else {
        html_profile_avatar.src = user_data.profile_pic;
    }

    const html_profile_username = document.getElementById("profile_username");

    if (user_data === null) {
        html_profile_username.innerHTML = "Bravo";
    }
    else {
        html_profile_username.innerHTML = user_data.username;
    }

//  --- Stats

    const html_stats_games_played = document.getElementById("stats_games_played");

    if (user_stats === null) {
        html_stats_games_played.innerHTML = "-";
    }
    else {
        html_stats_games_played.innerHTML = user_stats.game_count;
    }

    const html_stats_winrate = document.getElementById("stats_winrate");

    if (user_stats === null) {
        html_stats_winrate.innerHTML = "-";
    }
    else {
        html_stats_winrate.innerHTML = user_stats.winrate;
    }

    const html_stats_balls_hit = document.getElementById("stats_balls_hit");

    if (user_stats === null) {
         html_stats_balls_hit.innerHTML = "-";
    }
    else {
        html_stats_balls_hit.innerHTML = user_stats.balls_hit;
    }

    const html_stats_friends_count = document.getElementById("stats_friends_count");

    if (user_stats === null) {
         html_stats_friends_count.innerHTML = "-";
    }
    else {
        html_stats_friends_count.innerHTML = user_stats.friends_count;
    }

//  --- Leaderboard

    const html_leaderboard_1 = document.getElementById("leaderboard_1");

    if (leaderboard === null) {
        html_leaderboard_1.innerHTML = `<th scope="row">1</th>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>`
    }
    else {
        html_leaderboard_1.innerHTML = `<th scope="row">1</th>
                                        <td>${leaderboard["users"][0]["username"]}</td>
                                        <td>${leaderboard["users"][0]["game_count"]}</td>
                                        <td>${leaderboard["users"][0]["winrate"]}</td>`
    }

    const html_leaderboard_2 = document.getElementById("leaderboard_2");

    if (leaderboard === null) {
        html_leaderboard_2.innerHTML = `<th scope="row">2</th>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>`
    }
    else {
        html_leaderboard_2.innerHTML = `<th scope="row">2</th>
                                        <td>${leaderboard["users"][1]["username"]}</td>
                                        <td>${leaderboard["users"][1]["game_count"]}</td>
                                        <td>${leaderboard["users"][1]["winrate"]}</td>`
    }

    const html_leaderboard_3 = document.getElementById("leaderboard_3");

    if (leaderboard === null) {
        html_leaderboard_3.innerHTML = `<th scope="row">3</th>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>`
    }
    else {
        html_leaderboard_3.innerHTML = `<th scope="row">3</th>
                                        <td>${leaderboard["users"][2]["username"]}</td>
                                        <td>${leaderboard["users"][2]["game_count"]}</td>
                                        <td>${leaderboard["users"][2]["winrate"]}</td>`
    }

    const html_leaderboard_4 = document.getElementById("leaderboard_4");

    if (leaderboard === null) {
        html_leaderboard_4.innerHTML = `<th scope="row">4</th>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>`
    }
    else {
        html_leaderboard_4.innerHTML = `<th scope="row">4</th>
                                        <td>${leaderboard["users"][3]["username"]}</td>
                                        <td>${leaderboard["users"][3]["game_count"]}</td>
                                        <td>${leaderboard["users"][3]["winrate"]}</td>`
    }

    const html_leaderboard_5 = document.getElementById("leaderboard_5");

    if (leaderboard === null) {
        html_leaderboard_5.innerHTML = `<th scope="row">5</th>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>`
    }
    else {
        html_leaderboard_5.innerHTML = `<th scope="row">5</th>
                                        <td>${leaderboard["users"][4]["username"]}</td>
                                        <td>${leaderboard["users"][4]["game_count"]}</td>
                                        <td>${leaderboard["users"][4]["winrate"]}</td>`
    }

}

export async function fill_match_history() {

    var user_history = await fetch_user_history();

    const html_history_1 = document.getElementById("history_1");

    if (user_history === null) {
        html_history_1.innerHTML = `
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_history_1.innerHTML = `
                                    <td>${user_history["games"][0]["against"]}</td>
                                    <td>${user_history["games"][0]["date"]}</td>
                                    <td>${user_history["games"][0]["victory"]}</td>`
    }

    const html_history_2 = document.getElementById("history_2");

    if (user_history === null) {
        html_history_2.innerHTML = `
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_history_2.innerHTML = `
                                    <td>${user_history["games"][1]["against"]}</td>
                                    <td>${user_history["games"][1]["date"]}</td>
                                    <td>${user_history["games"][1]["victory"]}</td>`
    }

    const html_history_3 = document.getElementById("history_3");

    if (user_history === null) {
        html_history_3.innerHTML = `
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_history_3.innerHTML = `
                                    <td>${user_history["games"][2]["against"]}</td>
                                    <td>${user_history["games"][2]["date"]}</td>
                                    <td>${user_history["games"][2]["victory"]}</td>`
    }

    const html_history_4 = document.getElementById("history_4");

    if (user_history === null) {
        html_history_4.innerHTML = `
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_history_4.innerHTML = `
                                    <td>${user_history["games"][3]["against"]}</td>
                                    <td>${user_history["games"][3]["date"]}</td>
                                    <td>${user_history["games"][3]["victory"]}</td>`
    }

    const html_history_5 = document.getElementById("history_5");

    if (user_history === null) {
        html_history_5.innerHTML = `
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_history_5.innerHTML = `
                                    <td>${user_history["games"][4]["against"]}</td>
                                    <td>${user_history["games"][4]["date"]}</td>
                                    <td>${user_history["games"][4]["victory"]}</td>`
    }

    const html_history_6 = document.getElementById("history_6");

    if (user_history === null) {
        html_history_6.innerHTML = `
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_history_6.innerHTML = `
                                    <td>${user_history["games"][5]["against"]}</td>
                                    <td>${user_history["games"][5]["date"]}</td>
                                    <td>${user_history["games"][5]["victory"]}</td>`
    }

    const html_history_7 = document.getElementById("history_7");

    if (user_history === null) {
        html_history_7.innerHTML = `
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_history_7.innerHTML = `
                                    <td>${user_history["games"][6]["against"]}</td>
                                    <td>${user_history["games"][6]["date"]}</td>
                                    <td>${user_history["games"][6]["victory"]}</td>`
    }

    const html_history_8 = document.getElementById("history_8");

    if (user_history === null) {
        html_history_8.innerHTML = `
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_history_8.innerHTML = `
                                    <td>${user_history["games"][7]["against"]}</td>
                                    <td>${user_history["games"][7]["date"]}</td>
                                    <td>${user_history["games"][7]["victory"]}</td>`
    }

    const html_history_9 = document.getElementById("history_9");

    if (user_history === null) {
        html_history_9.innerHTML = `
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_history_9.innerHTML = `
                                    <td>${user_history["games"][8]["against"]}</td>
                                    <td>${user_history["games"][8]["date"]}</td>
                                    <td>${user_history["games"][8]["victory"]}</td>`
    }

    const html_history_10 = document.getElementById("history_10");

    if (user_history === null) {
        html_history_10.innerHTML = `
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_history_10.innerHTML = `
                                    <td>${user_history["games"][9]["against"]}</td>
                                    <td>${user_history["games"][9]["date"]}</td>
                                    <td>${user_history["games"][9]["victory"]}</td>`
    }
}

export async function fill_friend_list() {

    var friend_list = await fetch_friends();

    const html_friend_1 = document.getElementById("friend_1");

    if (friend_list === null) {
        html_friend_1.innerHTML = `
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_friend_1.innerHTML = `
                                    <td>${friend_list["friends"][0]["username"]}</td>
                                    <td><button class="friend_delete btn btn-primary" id="delete_friend_1">Delete</td>`
    }

    const html_friend_2 = document.getElementById("friend_2");

    if (friend_list === null) {
        html_friend_2.innerHTML = `
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_friend_2.innerHTML = `
                                    <td>${friend_list["friends"][1]["username"]}</td>
                                    <td><button class="friend_delete btn btn-primary" id="delete_friend_2">Delete</td>`
    }

    const html_friend_3 = document.getElementById("friend_3");

    if (friend_list === null) {
        html_friend_3.innerHTML = `
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_friend_3.innerHTML = `
                                    <td>${friend_list["friends"][2]["username"]}</td>
                                    <td><button class="friend_delete btn btn-primary" id="delete_friend_3">Delete</td>`
    }


    const html_friend_4 = document.getElementById("friend_4");

    if (friend_list === null) {
        html_friend_4.innerHTML = `
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_friend_4.innerHTML = `
                                    <td>${friend_list["friends"][3]["username"]}</td>
                                    <td><button class="friend_delete btn btn-primary" id="delete_friend_4">Delete</td>`
    }


    const html_friend_5 = document.getElementById("friend_5");

    if (friend_list === null) {
        html_friend_5.innerHTML = `
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_friend_5.innerHTML = `
                                    <td>${friend_list["friends"][4]["username"]}</td>
                                    <td><button class="friend_delete btn btn-primary" id="delete_friend_5">Delete</td>`
    }


    const html_friend_6 = document.getElementById("friend_6");

    if (friend_list === null) {
        html_friend_6.innerHTML = `
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_friend_6.innerHTML = `
                                    <td>${friend_list["friends"][5]["username"]}</td>
                                    <td><button class="friend_delete btn btn-primary" id="delete_friend_6">Delete</td>`
    }


    const html_friend_7 = document.getElementById("friend_7");

    if (friend_list === null) {
        html_friend_7.innerHTML = `
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_friend_7.innerHTML = `
                                    <td>${friend_list["friends"][6]["username"]}</td>
                                    <td><button class="friend_delete btn btn-primary" id="delete_friend_7">Delete</td>`
    }


    const html_friend_8 = document.getElementById("friend_8");

    if (friend_list === null) {
        html_friend_8.innerHTML = `
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_friend_8.innerHTML = `
                                    <td>${friend_list["friends"][7]["username"]}</td>
                                    <td><button class="friend_delete btn btn-primary" id="delete_friend_8">Delete</td>`
    }


    const html_friend_9 = document.getElementById("friend_9");

    if (friend_list === null) {
        html_friend_9.innerHTML = `
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_friend_9.innerHTML = `
                                    <td>${friend_list["friends"][8]["username"]}</td>
                                    <td><button class="friend_delete btn btn-primary" id="delete_friend_9">Delete</td>`
    }


    const html_friend_10 = document.getElementById("friend_10");

    if (friend_list === null) {
        html_friend_10.innerHTML = `
                                <td>-</td>
                                <td>-</td>`
    }
    else {
        html_friend_10.innerHTML = `
                                    <td>${friend_list["friends"][9]["username"]}</td>
                                    <td><button class="friend_delete btn btn-primary" id="delete_friend_10">Delete</td>`
    }

}
