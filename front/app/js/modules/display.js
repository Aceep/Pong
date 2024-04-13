// Contains HTML injection code ONLY
// There MUST NOT be any application logic here

const body = document.querySelector("body");

export function display_welcome_page() {

    body.innerHTML = `
        <script src="./bootstrap/js/bootstrap.bundle.js" defer></script>
        <script src="./js/main.js" defer></script>
        <div id="modal_space"></div>
        <main class="form-signin w-100 m-auto">
            <img class="mb-4" src="https://42.fr/wp-content/uploads/2021/07/42-Final-sigle-seul.svg" alt="42 logo" width="72" height="72">
            <h1 class="h3 mb-3 fw-normal">Welcome !</h1>
            <button class="w-100 btn btn-lg btn-primary btn-block py-2 my-1" id="login">Login</button>
            <button class="w-100 btn btn-lg btn-primary btn-block py-2 my-1" id="register">Register</button>
            <p class="mt-4 mb-3 text-muted">2024 - ft_transcendence</p>
        </main>`;
}

export function display_login_page() {
    body.innerHTML = `
        <script src="./bootstrap/js/bootstrap.bundle.js" defer></script>
        <script src="./js/main.js" defer></script>
        <div id="modal_space"></div>
        <main class="form-signin w-100 m-auto">
            <img class="mb-4" src="https://42.fr/wp-content/uploads/2021/07/42-Final-sigle-seul.svg" alt="42 logo" width="72" height="72">
            <h1 class="h3 mb-3 fw-normal">Login</h1>
            <form class="form-floating" id="form_element">
                <div class="form-floating">
                    <input id="login_username_input" class="form-control" type="text" required>
                    <label for="login_username_input">Username</label>
                </div>
                <div class="form-floating">
                    <input id="login_password_input" class="form-control" type="password" pattern="[a-zA-Z0-9]{6,}" title="Must contain at least 6 alphanumeric characters" required>
                    <label for="login_password_input">Password</label>
                </div>
                <div id="info"></div>
                <button class="w-100 btn btn-lg btn-primary btn-block py-2 my-1" type ="submit" id="login_submit">Login</button>
            </form>
            <p class="mt-4 mb-3 text-muted">2024 - ft_transcendence</p>
        </main>`;
}

export function display_register_page() {
    body.innerHTML = `
        <script src="./bootstrap/js/bootstrap.bundle.js" defer></script>
        <script src="./js/main.js" defer></script>
        <div id="modal_space"></div>
        <main class="form-signin w-100 m-auto">
            <img class="mb-4" src="https://42.fr/wp-content/uploads/2021/07/42-Final-sigle-seul.svg" alt="42 logo" width="72" height="72">
            <h1 class="h3 mb-3 fw-normal">Register</h1>
            <form class="form-floating" id="form_element">
                <div class="form-floating">
                    <input id="register_username_input" class="form-control" type="text" required>
                    <label for="register_username_input">Username</label>
                </div>
                <div class="form-floating">
                    <input id="register_password_input" class="form-control" type="password" pattern="[a-zA-Z0-9]{6,}" title="Must contain at least 6 alphanumeric characters" required>
                    <label for="register_password_input">Password</label>
                </div>
                <div class="form-floating">
                    <input id="register_password_input_confirm" class="form-control" type="password" pattern="[a-zA-Z0-9]{6,}" title="Must contain at least 6 alphanumeric characters" required>
                    <label for="register_password_input_confirm">Confirm password</label>
                </div>
                <div id="info"></div>
                <button class="w-100 btn btn-lg btn-primary btn-block py-2 my-1" type="submit" id="register_submit">Register</button>
            </form>
            <p class="mt-4 mb-3 text-muted">2024 - ft_transcendence</p>
        </main>`;
}

export function display_profile_page() {
    body.innerHTML = `
    <script src="./bootstrap/js/bootstrap.bundle.js" defer></script>
    <script src="./js/main.js" defer></script>
    <div class="modal fade modal-sheet" role="dialog" id="logoutConfirm" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-3 shadow">
          <div class="modal-body p-4 text-center">
            <h5 class="mb-0">Confirm logout?</h5>
          </div>
          <div class="modal-footer flex-nowrap p-0">
            <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end" id="confirm_logout"><strong>Yes</strong></button>
            <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" data-bs-dismiss="modal">No</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade modal-sheet" role="dialog" id="deleteConfirm" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-3 shadow">
          <div class="modal-body p-4 text-center">
            <h5 class="mb-0">Confirm account deletion?</h5>
            <p> Warning! This is a definitive action.</p>
          </div>
          <div class="modal-footer flex-nowrap p-0">
            <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end" id="confirm_delete"><strong>Yes</strong></button>
            <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" data-bs-dismiss="modal">No</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade modal-sheet" role="dialog" id="editInfo" tabindex="-1" aria-hidden="true">
     <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <h1 class="fw-bold mb-0 fs-2">Edit account info</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-5 pt-0">
            <form id="form_element">
              <div class="form-floating mb-3">
                <input type="text" class="form-control rounded-3" id="newUsername" required>
                <label for="newUsername">New username</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control rounded-3" id="newPassword" pattern="[a-zA-Z0-9]{6,}" title="Must contain at least 6 alphanumeric characters" required>
                <label for="newPassword">New password</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control rounded-3" id="newPasswordConfirm" pattern="[a-zA-Z0-9]{6,}" title="Must contain at least 6 alphanumeric characters" required>
                <label for="newPasswordConfirm">New password confirm</label>
              </div>
              <div id="info"></div>
              <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" id="edit_submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <main id="profile_container" class="container py-5">
        <div class="row">
            <div class="col-lg-4" id="profile_info">
                <div class="card mb-1">
                    <div class="card-body text-center">
                        <img src="" alt="Avatar" id="profile_avatar">
                        <h5 class="my-3" id="profile_username"></h5>
                        <div class="d-flex justify-content-center mb-2">
                            <button type="button" class="btn btn-warning ms-1" id="profile_logout_button" data-bs-toggle="modal" data-bs-target="#logoutConfirm">Logout</button>
                            <button type="button" class="btn btn-secondary ms-1" id="profile_edit_button" data-bs-toggle="modal" data-bs-target="#editInfo">Edit</button>
                            <button type="button" class="btn btn-outline-primary ms-1" id="profile_delete_button" data-bs-toggle="modal" data-bs-target="#deleteConfirm">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="card mb-1">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-5">
                                <p class="mb-0">Games played:</p>
                            </div>
                            <div class="col-sm-7">
                                <p class="text-muted mb-0" id="stats_games_played"></p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-5">
                                <p class="mb-0">Games won:</p>
                            </div>
                            <div class="col-sm-7">
                                <p class="text-muted mb-0" id="stats_winrate"></p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-5">
                                <p class="mb-0">Balls hit:</p>
                            </div>
                            <div class="col-sm-7">
                                <p class="text-muted mb-0" id="stats_balls_hit"></p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-5">
                                <p class="mb-0">Friends:</p>
                            </div>
                            <div class="col-sm-7">
                                <p class="text-muted mb-0" id="stats_friends_count"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-1">
                <div class="card mb-1" id="leaderboard">
                    <div class="row">
                        <div class="table-responsive">
                            <table class="table table-hover caption-top">
                                <caption>Leaderboard</caption>
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Played</th>
                                    <th scope="col">Won</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    <tr id="leaderboard_1">
                                    </tr>
                                    <tr id="leaderboard_2">
                                    </tr>
                                    <tr id="leaderboard_3">
                                    </tr>
                                    <tr id="leaderboard_4">
                                    </tr>
                                    <tr id="leaderboard_5">
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-grid gap-2 mt-5">
                            <button type="button" class="btn btn-lg btn-success ms-1" type="button" id="play_button">Play !</button>
                            <button type="button" class="btn btn-lg btn-info ms-1" type="button" id="right_panel_button_toggle">Friends</button>
                        </div>
                        <p class="mt-4 mb-2 text-muted">2024 - ft_transcendence</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card mb-1" id="history">
                    <div class="row">
                        <div class="table-responsive" id="right_panel">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>`;
}

// Will put a match history table on the right side (or bottom on mobile) of the screen
export function display_match_history() {

    const rightPanel = document.getElementById('right_panel');

    rightPanel.innerHTML = `
                        <table class="table table-hover caption-top" id="leaderboard">
                        <caption>Match history</caption>
                        <thead>
                            <tr>
                            <th scope="col">Against</th>
                            <th scope="col">Date</th>
                            <th scope="col">Won ?</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr id="history_1">
                            </tr>
                            <tr id="history_2">
                            </tr>
                            <tr id="history_3">
                            </tr>
                            <tr id="history_4">
                            </tr>
                            <tr id="history_5">
                            </tr>
                            <tr id="history_6">
                            </tr>
                            <tr id="history_7">
                            </tr>
                            <tr id="history_8">
                            </tr>
                            <tr id="history_9">
                            </tr>
                            <tr id="history_10">
                            </tr>
                        </tbody>
                    </table>
                    `
}

// Will put a match history table on the right side (or bottom on mobile) of the screen
export function display_friend_list() {

    const rightPanel = document.getElementById('right_panel');

    rightPanel.innerHTML = `
                        <table class="table table-hover caption-top" id="friend_list">
                        <caption>Friend list</caption>
                        <thead>
                            <tr>
                            <th scope="col" style="width:70%">Name</th>
                            <th scope="col" style="width:30%">Delete ?</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr id="friend_1">
                            </tr>
                            <tr id="friend_2">
                            </tr>
                            <tr id="friend_3">
                            </tr>
                            <tr id="friend_4">
                            </tr>
                            <tr id="friend_5">
                            </tr>
                            <tr id="friend_6">
                            </tr>
                            <tr id="friend_7">
                            </tr>
                            <tr id="friend_8">
                            </tr>
                            <tr id="friend_9">
                            </tr>
                            <tr id="friend_10">
                            </tr>
                        </tbody>
                    </table>
                    `
}


// Game page display

export function display_game_page() {
    body.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="game-title">
                    <img src="./ressources/pong_game.jpg" alt="3D Pong">
                    <h1 class="text-center">3D Pong</h1>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="player-info">
                        <img src="./ressources/favicon.ico" alt="Player 1 Avatar">
                        <p>Player 1 : John Doe</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="player-info">
                        <p>Player 2: Jane Smith</p>
                        <img src="./ressources/favicon.ico" alt="Player 2 Avatar">
                    </div>
                </div>
            </div>
            
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="game-container" id="game_container">
                        <!-- Container for Pong game -->
                    </div>
                </div>
            </div>

            <div class="scoreboard">
                <h2 class="text-center">Scoreboard</h2>
                <div class="row">
                    <p>Player 1: <span class="score" id="Left_Player">0</span> - <span class="score" id="Right_Player">0</span> : Player 2</p>
                </div>
            </div>
        </div>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
        <script src="./js/main.js" defer></script>
        <script type="module" src="./game/src/game.js" defer></script>
    `;
};
