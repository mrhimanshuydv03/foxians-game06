const dashboardData = JSON.parse(localStorage.getItem("dashboard"));
// console.log(dashboardData);
//const proftDisplay = documnet.query()

const ladderMap = {
    3: ["I question everything!", 22],
    7: ["I am regular and punctual.", 31],
    51: ["I work proactively.", 95],
    24: ["I work on the feedback given.", 44],
    43: ["I completed my 6 tasks on time!", 80],
    35: ["I participated in sessions!", 49],
    60: ["I mastered the BDD!", 87],
    67: ["I solved an allemp query!", 81],
};

const snakeMap = {
    16: ["I came late to work.", 4],
    39: ["It’s 10 am! I have not sent a leave application!", 19],
    63: ["My email has typos and errors!", 23],
    85: ["I did not cc Daily Interns Reporting.", 47],
    88: ["I missed my deadline", 28],
    48: ["I was stuck but didn’t ask on allemp.", 57],
    69: ["I completed the task but did not submit it.", 33],
    97: ["Bad quality of work.", 77],
};

const leaderboardDisplay = document.getElementById("leaderboard");
const currentAttempt = dashboardData.dashboard.current_attempt;
const currentUser = dashboardData.dashboard.current_user;
const leaderboard = dashboardData.dashboard.leaderboard;
function init() {
    const goodJob = document.getElementById("dashboard-wish-msg");
    goodJob.innerHTML = `Good job, ${currentUser.username}!`;
}
init();
function populateLeaderboard() {
    var attempts = "";
    leaderboard.forEach((attempt) => {
        const a = `
    <li>
    <span class="player-name">${attempt.user.username}</span>
    <span class="player-score">${attempt.score.toFixed(3)}</span>
    <span class="player-score">${(attempt.time / 60).toFixed(2)} min</span>
    
    </li>
    `;
        attempts += a;
    });

    // console.log(attempts);

    leaderboardDisplay.innerHTML = attempts;
}
populateLeaderboard();

function populateCurrentAttempt() {
    const currentAttemptDisplay = document.querySelector(
        ".current-attempt-data"
    );

    const a = `
    <span >${currentUser.username}</span>
    <span >${(currentAttempt.score * 10).toFixed(3)}</span>
<span >${(currentAttempt.time / 60).toFixed(2)} min</span>
    
    `;
    currentAttemptDisplay.innerHTML = a;
}
populateCurrentAttempt();

function populateProfitAndLoss() {
    const profitDisplay = document.getElementById("profit-section");

    const lossDisplay = document.getElementById("loss-section");

    var agg1 = "<h3 class='milestone-text'>Profit</h3>";

    currentAttempt.profit.forEach((attempt) => {
        const a = `
                <div class="single-stone">
                    <span class="single-stone-number">${attempt}</span>
                    <span class="single-stone-msg">${
                        ladderMap[parseInt(attempt)][0]
                    }</span>
                </div>
`;
        agg1 += a;
    });

    profitDisplay.innerHTML = agg1;

    var agg2 = "<h3 class='milestone-text'>Loss</h3>";

    currentAttempt.loss.forEach((attempt) => {
        const a = `
                <div class="single-stone">
                    <span class="single-stone-number">${attempt}</span>
                    <span class="single-stone-msg">${
                        snakeMap[parseInt(attempt)][0]
                    }</span>
                </div>
`;
        agg2 += a;
    });
    lossDisplay.innerHTML = agg2;
}

populateProfitAndLoss();

function generateMessage(profit, loss) {
    let finalMessage = "";
    profit.forEach((value) => {
        if (ladderMap[value]) {
            finalMessage += ladderMap[value][0] + "\n";
        }
    });

    loss.forEach((value) => {
        if (snakeMap[value]) {
            finalMessage += snakeMap[value][0] + "\n";
        }
    });

    return finalMessage;
}

// console.log(message);
function restart() {
    // Perform actions to restart the game
    // matrixArray.length = 0;
    // createMatrix();
    window.location.replace("/index.html");
}

// profile icon logic

function logout() {
    localStorage.removeItem("currentUser");
    window.location.replace("/login-form");
}
