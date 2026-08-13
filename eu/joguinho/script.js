/* =========================================================
   MONEY EMPIRE
   Advanced Clicker / Tycoon System
========================================================= */


/* =========================================================
   GAME STATE
========================================================= */

const defaultGame = {

    money: 0,

    lifetime: 0,

    clicks: 0,

    level: 1,

    xp: 0,

    combo: 1,

    bestCombo: 1,

    lastClick: 0,

    empirePoints: 0,

    researchPoints: 0,

    prestigeCount: 0,

    totalAssets: 0,

    sound: true,

    lastSave: Date.now(),

    assets: {},

    research: {},

    missions: {}

};


/* =========================================================
   ASSET DATABASE
========================================================= */

const assets = [

    {
        id: "lemonade",
        name: "Lemonade Stand",
        icon: "🥤",
        description: "Seu primeiro pequeno negócio.",
        baseCost: 500,
        income: 15
    },

    {
        id: "foodtruck",
        name: "Food Truck",
        icon: "🍔",
        description: "Mobilidade e alto giro.",
        baseCost: 5000,
        income: 120
    },

    {
        id: "store",
        name: "Retail Store",
        icon: "🏪",
        description: "Uma operação comercial profissional.",
        baseCost: 50000,
        income: 850
    },

    {
        id: "restaurant",
        name: "Restaurant Chain",
        icon: "🍽️",
        description: "Expanda sua marca pelo mercado.",
        baseCost: 500000,
        income: 6500
    },

    {
        id: "factory",
        name: "Industrial Factory",
        icon: "🏭",
        description: "Produção em escala industrial.",
        baseCost: 5000000,
        income: 52000
    },

    {
        id: "bank",
        name: "Private Bank",
        icon: "🏦",
        description: "Controle grandes fluxos financeiros.",
        baseCost: 50000000,
        income: 420000
    },

    {
        id: "tech",
        name: "Tech Corporation",
        icon: "💻",
        description: "Tecnologia para dominar novos mercados.",
        baseCost: 500000000,
        income: 3500000
    },

    {
        id: "conglomerate",
        name: "Global Conglomerate",
        icon: "🌐",
        description: "Um império econômico global.",
        baseCost: 5000000000,
        income: 30000000
    },

    {
        id: "island",
        name: "Private Island",
        icon: "🏝️",
        description: "Luxo reservado para bilionários.",
        baseCost: 50000000000,
        income: 250000000
    },

    {
        id: "space",
        name: "Space Company",
        icon: "🚀",
        description: "Leve seu império para além da Terra.",
        baseCost: 500000000000,
        income: 2000000000
    }

];


/* =========================================================
   RESEARCH DATABASE
========================================================= */

const research = [

    {
        id: "strongHands",
        name: "Strong Hands",
        description: "+25% dinheiro por clique.",
        cost: 5,
        type: "click",
        value: 0.25
    },

    {
        id: "compound",
        name: "Compound Interest",
        description: "+20% renda passiva.",
        cost: 10,
        type: "passive",
        value: 0.20
    },

    {
        id: "marketing",
        name: "Advanced Marketing",
        description: "+50% dinheiro por clique.",
        cost: 20,
        type: "click",
        value: 0.50
    },

    {
        id: "automation",
        name: "Automation",
        description: "+75% renda passiva.",
        cost: 35,
        type: "passive",
        value: 0.75
    },

    {
        id: "ai",
        name: "AI Management",
        description: "+100% renda passiva.",
        cost: 70,
        type: "passive",
        value: 1
    },

    {
        id: "quantum",
        name: "Quantum Finance",
        description: "+200% dinheiro por clique.",
        cost: 150,
        type: "click",
        value: 2
    }

];


/* =========================================================
   MISSIONS
========================================================= */

const missions = [

    {
        id: "firstClick",
        name: "First Capital",
        description: "Faça 1 clique.",
        target: 1,
        type: "clicks",
        reward: 1000,
        xp: 20
    },

    {
        id: "hundredClicks",
        name: "Work Ethic",
        description: "Faça 100 cliques.",
        target: 100,
        type: "clicks",
        reward: 10000,
        xp: 50
    },

    {
        id: "thousandClicks",
        name: "Machine",
        description: "Faça 1.000 cliques.",
        target: 1000,
        type: "clicks",
        reward: 100000,
        xp: 100
    },

    {
        id: "firstMillion",
        name: "Millionaire",
        description: "Ganhe $1.000.000.",
        target: 1000000,
        type: "lifetime",
        reward: 500000,
        xp: 150
    },

    {
        id: "tenMillion",
        name: "Serious Business",
        description: "Ganhe $10.000.000.",
        target: 10000000,
        type: "lifetime",
        reward: 2000000,
        xp: 300
    },

    {
        id: "assetOwner",
        name: "Business Owner",
        description: "Compre 10 ativos.",
        target: 10,
        type: "assets",
        reward: 500000,
        xp: 200
    },

    {
        id: "billionaire",
        name: "Billionaire",
        description: "Ganhe $1.000.000.000.",
        target: 1000000000,
        type: "lifetime",
        reward: 100000000,
        xp: 1000
    }

];


/* =========================================================
   GAME VARIABLES
========================================================= */

let game = loadGame();

let eventMultiplier = 1;

let eventTime = 60;

let offlineMoney = 0;

let toastTimeout;


/* =========================================================
   DOM
========================================================= */

const moneyElement =
    document.getElementById("money");

const netWorthElement =
    document.getElementById("netWorth");

const clickPowerElement =
    document.getElementById("clickPower");

const passiveIncomeElement =
    document.getElementById("passiveIncome");

const multiplierElement =
    document.getElementById("multiplier");

const levelElement =
    document.getElementById("level");

const xpElement =
    document.getElementById("xp");

const clicksElement =
    document.getElementById("clicks");

const bestComboElement =
    document.getElementById("bestCombo");

const xpProgress =
    document.getElementById("xpProgress");

const xpPercent =
    document.getElementById("xpPercent");

const comboElement =
    document.getElementById("combo");

const lifetimeElement =
    document.getElementById("lifetime");

const currentMoneyElement =
    document.getElementById("currentMoney");

const overviewPassive =
    document.getElementById("overviewPassive");

const empirePointsElement =
    document.getElementById("empirePoints");

const researchPointsElement =
    document.getElementById("researchPoints");

const assetList =
    document.getElementById("assetList");

const researchList =
    document.getElementById("researchList");

const missionList =
    document.getElementById("missionList");

const assetCount =
    document.getElementById("assetCount");

const missionCount =
    document.getElementById("missionCount");

const rankElement =
    document.getElementById("rank");

const moneyButton =
    document.getElementById("moneyButton");

const floatingNumbers =
    document.getElementById("floatingNumbers");

const toast =
    document.getElementById("toast");

const toastText =
    document.getElementById("toastText");

const eventName =
    document.getElementById("eventName");

const eventDescription =
    document.getElementById("eventDescription");

const eventTimer =
    document.getElementById("eventTimer");

const offlineModal =
    document.getElementById("offlineModal");

const offlineText =
    document.getElementById("offlineText");


/* =========================================================
   NUMBER FORMATTER
========================================================= */

function formatMoney(value) {

    if (!isFinite(value)) {
        return "$∞";
    }

    if (value < 1000) {
        return "$" + Math.floor(value);
    }

    if (value < 1000000) {
        return "$" +
            (value / 1000)
                .toFixed(1)
                .replace(".0", "") +
            "K";
    }

    if (value < 1000000000) {
        return "$" +
            (value / 1000000)
                .toFixed(2)
                .replace(".00", "") +
            "M";
    }

    if (value < 1000000000000) {
        return "$" +
            (value / 1000000000)
                .toFixed(2)
                .replace(".00", "") +
            "B";
    }

    if (value < 1000000000000000) {
        return "$" +
            (value / 1000000000000)
                .toFixed(2)
                .replace(".00", "") +
            "T";
    }

    return "$" +
        (value / 1000000000000000)
            .toFixed(2) +
        "Q";
}


/* =========================================================
   SAVE SYSTEM
========================================================= */

function saveGame() {

    game.lastSave = Date.now();

    localStorage.setItem(
        "moneyEmpireSave",
        JSON.stringify(game)
    );
}


/* =========================================================
   LOAD SYSTEM
========================================================= */

function loadGame() {

    const saved =
        localStorage.getItem(
            "moneyEmpireSave"
        );

    if (!saved) {

        return {
            ...defaultGame
        };

    }

    try {

        const parsed =
            JSON.parse(saved);

        return {

            ...defaultGame,

            ...parsed,

            assets:
                parsed.assets || {},

            research:
                parsed.research || {},

            missions:
                parsed.missions || {}

        };

    } catch {

        return {
            ...defaultGame
        };

    }

}


/* =========================================================
   CLICK POWER
========================================================= */

function getClickPower() {

    let power = 1;

    power *=
        1 +
        game.level *
        0.05;

    for (const item of research) {

        if (
            game.research[item.id]
            &&
            item.type === "click"
        ) {

            power *=
                1 + item.value;

        }

    }

    power *=
        1 +
        game.empirePoints *
        0.05;

    power *= eventMultiplier;

    return power;
}


/* =========================================================
   PASSIVE INCOME
========================================================= */

function getPassiveIncome() {

    let income = 0;

    for (const item of assets) {

        const amount =
            game.assets[item.id] || 0;

        if (amount > 0) {

            income +=
                item.income *
                amount;

        }

    }


    let multiplier = 1;


    multiplier +=
        game.level *
        0.02;


    for (const item of research) {

        if (
            game.research[item.id]
            &&
            item.type === "passive"
        ) {

            multiplier *=
                1 + item.value;

        }

    }


    multiplier *=
        1 +
        game.empirePoints *
        0.05;


    multiplier *= eventMultiplier;


    return income * multiplier;
}


/* =========================================================
   TOTAL MULTIPLIER
========================================================= */

function getMultiplier() {

    return (
        getClickPower()
    );
}


/* =========================================================
   ADD MONEY
========================================================= */

function addMoney(amount) {

    if (
        !isFinite(amount) ||
        amount <= 0
    ) {
        return;
    }

    game.money += amount;

    game.lifetime += amount;

}


/* =========================================================
   CLICK
========================================================= */

moneyButton.addEventListener(
    "click",
    handleClick
);


function handleClick(event) {

    const now = Date.now();

    let comboBonus = 1;


    /* COMBO */

    if (
        now - game.lastClick <
        1200
    ) {

        game.combo++;

        if (
            game.combo >
            game.bestCombo
        ) {

            game.bestCombo =
                game.combo;

        }

    } else {

        game.combo = 1;

    }


    game.lastClick = now;


    comboBonus =
        1 +
        Math.min(
            game.combo * 0.03,
            3
        );


    /* CRITICAL */

    const critical =
        Math.random() < 0.08;


    let amount =
        getClickPower() *
        comboBonus;


    if (critical) {

        amount *= 10;

    }


    addMoney(amount);


    game.clicks++;


    addXP(
        critical
            ? 8
            : 2
    );


    createFloatingMoney(
        event,
        amount,
        critical
    );


    updateUI();


    if (critical) {

        showToast(
            "CRITICAL HIT ×10"
        );

    }


    checkMissions();

}


/* =========================================================
   FLOATING MONEY
========================================================= */

function createFloatingMoney(
    event,
    amount,
    critical
) {

    const number =
        document.createElement(
            "div"
        );

    number.className =
        "floating-money" +
        (
            critical
                ? " critical"
                : ""
        );


    number.textContent =
        critical
            ? "CRITICAL +" +
              formatMoney(amount)
            : "+" +
              formatMoney(amount);


    number.style.left =
        event.clientX + "px";

    number.style.top =
        event.clientY + "px";


    floatingNumbers.appendChild(
        number
    );


    setTimeout(
        () => number.remove(),
        900
    );

}


/* =========================================================
   XP SYSTEM
========================================================= */

function getXPRequired() {

    return Math.floor(
        100 *
        Math.pow(
            game.level,
            1.45
        )
    );

}


function addXP(amount) {

    game.xp += amount;


    let required =
        getXPRequired();


    while (
        game.xp >= required
    ) {

        game.xp -= required;

        game.level++;

        required =
            getXPRequired();


        showToast(
            "LEVEL UP! LEVEL " +
            game.level
        );

    }

}


/* =========================================================
   BUY ASSET
========================================================= */

function getAssetCost(asset) {

    const amount =
        game.assets[asset.id] || 0;


    return Math.floor(
        asset.baseCost *
        Math.pow(
            1.17,
            amount
        )
    );

}


function buyAsset(id) {

    const asset =
        assets.find(
            item => item.id === id
        );


    if (!asset) {
        return;
    }


    const cost =
        getAssetCost(asset);


    if (game.money < cost) {

        showToast(
            "Capital insuficiente"
        );

        return;

    }


    game.money -= cost;


    game.assets[id] =
        (game.assets[id] || 0) + 1;


    game.totalAssets++;


    addXP(20);


    showToast(
        asset.name +
        " acquired"
    );


    renderAssets();

    updateUI();

    checkMissions();

}


/* =========================================================
   RENDER ASSETS
========================================================= */

function renderAssets() {

    assetList.innerHTML = "";


    assets.forEach(asset => {

        const amount =
            game.assets[asset.id] || 0;


        const cost =
            getAssetCost(asset);


        const card =
            document.createElement(
                "button"
            );


        card.className =
            "asset";


        card.disabled =
            game.money < cost;


        card.innerHTML = `

            <div class="asset-icon">
                ${asset.icon}
            </div>

            <div class="asset-info">

                <strong>
                    ${asset.name}
                </strong>

                <span>
                    ${asset.description}
                </span>

                <div class="asset-level">
                    LEVEL ${amount}
                </div>

            </div>

            <div class="asset-price">

                <small>
                    ACQUIRE
                </small>

                <b>
                    ${formatMoney(cost)}
                </b>

            </div>

        `;


        card.addEventListener(
            "click",
            () => buyAsset(asset.id)
        );


        assetList.appendChild(card);

    });


    const total =
        game.totalAssets;


    assetCount.textContent =
        total +
        (
            total === 1
                ? " ASSET"
                : " ASSETS"
        );

}


/* =========================================================
   RESEARCH
========================================================= */

function renderResearch() {

    researchList.innerHTML = "";


    research.forEach(item => {

        const purchased =
            game.research[item.id];


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "research-card";


        card.innerHTML = `

            <h3>
                ${item.name}
            </h3>

            <p>
                ${item.description}
            </p>

            <div class="research-bottom">

                <b>
                    ${purchased
                        ? "UNLOCKED"
                        : item.cost + " RP"
                    }
                </b>

                <button
                    class="claim-button"
                    ${purchased ? "disabled" : ""}
                >
                    ${purchased
                        ? "ACTIVE"
                        : "RESEARCH"
                    }
                </button>

            </div>

        `;


        const button =
            card.querySelector(
                "button"
            );


        button.addEventListener(
            "click",
            () => buyResearch(item.id)
        );


        researchList.appendChild(card);

    });


    researchPointsElement.textContent =
        game.researchPoints +
        " RP";

}


function buyResearch(id) {

    const item =
        research.find(
            x => x.id === id
        );


    if (!item) {
        return;
    }


    if (game.research[id]) {

        return;

    }


    if (
        game.researchPoints <
        item.cost
    ) {

        showToast(
            "Research Points insuficientes"
        );

        return;

    }


    game.researchPoints -=
        item.cost;


    game.research[id] =
        true;


    showToast(
        item.name +
        " unlocked"
    );


    renderResearch();

    updateUI();

}


/* =========================================================
   MISSIONS
========================================================= */

function getMissionProgress(
    mission
) {

    if (
        mission.type ===
        "clicks"
    ) {

        return game.clicks;

    }


    if (
        mission.type ===
        "lifetime"
    ) {

        return game.lifetime;

    }


    if (
        mission.type ===
        "assets"
    ) {

        return game.totalAssets;

    }


    return 0;

}


function renderMissions() {

    missionList.innerHTML = "";


    let completed = 0;


    missions.forEach(mission => {

        const claimed =
            game.missions[
                mission.id
            ];


        const progress =
            Math.min(
                getMissionProgress(
                    mission
                ),
                mission.target
            );


        const done =
            progress >=
            mission.target;


        if (claimed) {
            completed++;
        }


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "mission-card";


        card.innerHTML = `

            <h3>
                ${mission.name}
            </h3>

            <p>
                ${mission.description}
            </p>

            <div class="mission-bottom">

                <strong>
                    ${formatMoney(progress)}
                    /
                    ${formatMoney(mission.target)}
                </strong>

                <button
                    class="claim-button"
                    ${!done || claimed
                        ? "disabled"
                        : ""}
                >
                    ${
                        claimed
                            ? "CLAIMED"
                            : done
                                ? "CLAIM"
                                : "+" +
                                  mission.xp +
                                  " XP"
                    }
                </button>

            </div>

        `;


        const button =
            card.querySelector(
                "button"
            );


        button.addEventListener(
            "click",
            () => claimMission(
                mission.id
            )
        );


        missionList.appendChild(card);

    });


    missionCount.textContent =
        completed +
        " / " +
        missions.length;

}


function claimMission(id) {

    const mission =
        missions.find(
            x => x.id === id
        );


    if (!mission) {
        return;
    }


    if (
        game.missions[id]
    ) {
        return;
    }


    if (
        getMissionProgress(
            mission
        ) <
        mission.target
    ) {

        return;

    }


    game.missions[id] =
        true;


    addMoney(
        mission.reward
    );


    addXP(
        mission.xp
    );


    showToast(
        "MISSION COMPLETE +" +
        formatMoney(
            mission.reward
        )
    );


    renderMissions();

    updateUI();

}


/* =========================================================
   CHECK MISSIONS
========================================================= */

function checkMissions() {

    renderMissions();

}


/* =========================================================
   MARKET EVENTS
========================================================= */

const marketEvents = [

    {
        name: "Bull Market",
        description:
            "Mercado em alta. Toda sua economia produz +50%.",
        multiplier: 1.5
    },

    {
        name: "Market Boom",
        description:
            "Investidores estão extremamente otimistas.",
        multiplier: 2
    },

    {
        name: "Stable Market",
        description:
            "Economy operating normally.",
        multiplier: 1
    },

    {
        name: "Investor Frenzy",
        description:
            "Capital circulando em velocidade recorde.",
        multiplier: 3
    },

    {
        name: "Market Correction",
        description:
            "Mercado desacelerou temporariamente.",
        multiplier: 0.7
    }

];


function newMarketEvent() {

    const event =
        marketEvents[
            Math.floor(
                Math.random() *
                marketEvents.length
            )
        ];


    eventMultiplier =
        event.multiplier;


    eventName.textContent =
        event.name;


    eventDescription.textContent =
        event.description;


    eventTime = 60;


    eventTimer.textContent =
        "60s";

}


setInterval(
    () => {

        eventTime--;

        eventTimer.textContent =
            eventTime + "s";


        if (
            eventTime <= 0
        ) {

            newMarketEvent();

        }

    },
    1000
);


/* =========================================================
   PASSIVE INCOME LOOP
========================================================= */

setInterval(
    () => {

        const income =
            getPassiveIncome();


        if (
            income > 0
        ) {

            addMoney(
                income
            );

            updateUI();

        }

    },
    1000
);


/* =========================================================
   COMBO RESET
========================================================= */

setInterval(
    () => {

        if (
            Date.now() -
            game.lastClick >
            1500
        ) {

            game.combo = 1;

            updateCombo();

        }

    },
    250
);


/* =========================================================
   COMBO UI
========================================================= */

function updateCombo() {

    comboElement.textContent =
        "COMBO x" +
        game.combo;

}


/* =========================================================
   RANK
========================================================= */

function getRank() {

    const ranks = [

        {
            level: 1,
            name: "NOVICE"
        },

        {
            level: 5,
            name: "ENTREPRENEUR"
        },

        {
            level: 10,
            name: "EXECUTIVE"
        },

        {
            level: 20,
            name: "CEO"
        },

        {
            level: 35,
            name: "TYCOON"
        },

        {
            level: 50,
            name: "BILLIONAIRE"
        },

        {
            level: 75,
            name: "MAGNATE"
        },

        {
            level: 100,
            name: "EMPIRE LORD"
        }

    ];


    let current =
        ranks[0].name;


    ranks.forEach(rank => {

        if (
            game.level >=
            rank.level
        ) {

            current =
                rank.name;

        }

    });


    return current;

}


/* =========================================================
   UPDATE UI
========================================================= */

function updateUI() {

    const clickPower =
        getClickPower();


    const passive =
        getPassiveIncome();


    moneyElement.textContent =
        formatMoney(
            game.money
        ).replace("$", "");


    netWorthElement.textContent =
        formatMoney(
            game.money
        );


    clickPowerElement.textContent =
        formatMoney(
            clickPower
        );


    passiveIncomeElement.textContent =
        formatMoney(
            passive
        ) +
        "/s";


    multiplierElement.textContent =
        "x" +
        getMultiplier()
            .toFixed(2);


    levelElement.textContent =
        game.level;


    xpElement.textContent =
        Math.floor(game.xp);


    clicksElement.textContent =
        game.clicks;


    bestComboElement.textContent =
        "x" +
        game.bestCombo;


    lifetimeElement.textContent =
        formatMoney(
            game.lifetime
        );


    currentMoneyElement.textContent =
        formatMoney(
            game.money
        );


    overviewPassive.textContent =
        formatMoney(
            passive
        ) +
        "/s";


    empirePointsElement.textContent =
        game.empirePoints;


    rankElement.textContent =
        getRank();


    updateXP();

    updateCombo();

    renderAssets();

}


/* =========================================================
   XP UI
========================================================= */

function updateXP() {

    const required =
        getXPRequired();


    const percent =
        Math.min(
            (
                game.xp /
                required
            ) * 100,
            100
        );


    xpProgress.style.width =
        percent + "%";


    xpPercent.textContent =
        Math.floor(
            percent
        ) +
        "%";

}


/* =========================================================
   PRESTIGE
========================================================= */

const prestigeButton =
    document.getElementById(
        "prestigeButton"
    );

const legacyPoints =
    document.getElementById(
        "legacyPoints"
    );

const globalBonus =
    document.getElementById(
        "globalBonus"
    );


function getPrestigePoints() {

    return Math.floor(
        Math.sqrt(
            game.lifetime /
            1000000
        )
    );

}


function updatePrestige() {

    const points =
        getPrestigePoints();


    legacyPoints.textContent =
        points +
        " EP";


    prestigeButton.disabled =
        game.lifetime <
        1000000;


    globalBonus.textContent =
        "+" +
        (
            game.empirePoints *
            5
        ) +
        "%";

}


prestigeButton.addEventListener(
    "click",
    prestige
);


function prestige() {

    if (
        game.lifetime <
        1000000
    ) {

        return;

    }


    const points =
        getPrestigePoints();


    if (
        !confirm(
            "REBUILD YOUR EMPIRE?\n\n" +
            "Você perderá seu dinheiro, " +
            "ativos, nível e progresso atual."
        )
    ) {

        return;

    }


    game.money = 0;

    game.lifetime = 0;

    game.clicks = 0;

    game.level = 1;

    game.xp = 0;

    game.combo = 1;

    game.bestCombo = 1;

    game.totalAssets = 0;

    game.assets = {};

    game.research = {};

    game.researchPoints = 0;

    game.missions = {};

    game.empirePoints += points;

    game.prestigeCount++;


    showToast(
        "EMPIRE REBUILT +" +
        points +
        " EP"
    );


    updateUI();

    renderResearch();

    renderMissions();

    updatePrestige();

    saveGame();

}


/* =========================================================
   RESEARCH POINTS
========================================================= */

setInterval(
    () => {

        if (
            game.level >= 5
        ) {

            game.researchPoints +=
                1;

            renderResearch();

        }

    },
    30000
);


/* =========================================================
   OFFLINE EARNINGS
========================================================= */

function calculateOffline() {

    if (!game.lastSave) {
        return 0;
    }


    const seconds =
        Math.floor(
            (
                Date.now() -
                game.lastSave
            ) / 1000
        );


    if (
        seconds < 10
    ) {

        return 0;

    }


    const cappedSeconds =
        Math.min(
            seconds,
            60 * 60 * 12
        );


    const income =
        getPassiveIncome();


    return (
        income *
        cappedSeconds *
        0.5
    );

}


function showOffline() {

    const earned =
        calculateOffline();


    if (
        earned <= 0
    ) {

        return;

    }


    offlineMoney =
        earned;


    offlineText.textContent =
        "Enquanto você estava fora, " +
        "seus negócios geraram " +
        formatMoney(earned) +
        ".";


    offlineModal.classList.remove(
        "hidden"
    );

}


document
    .getElementById(
        "collectOffline"
    )
    .addEventListener(
        "click",
        () => {

            addMoney(
                offlineMoney
            );


            offlineMoney = 0;


            offlineModal.classList.add(
                "hidden"
            );


            updateUI();

        }
    );


/* =========================================================
   TABS
========================================================= */

document
    .querySelectorAll(".tab")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const tab =
                    button.dataset.tab;


                document
                    .querySelectorAll(
                        ".tab"
                    )
                    .forEach(
                        x =>
                            x.classList.remove(
                                "active"
                            )
                    );


                document
                    .querySelectorAll(
                        ".tab-content"
                    )
                    .forEach(
                        x =>
                            x.classList.remove(
                                "active"
                            )
                    );


                button.classList.add(
                    "active"
                );


                document
                    .getElementById(
                        tab
                    )
                    .classList.add(
                        "active"
                    );

            }
        );

    });


/* =========================================================
   SOUND
========================================================= */

const soundButton =
    document.getElementById(
        "soundButton"
    );


soundButton.addEventListener(
    "click",
    () => {

        game.sound =
            !game.sound;


        soundButton.textContent =
            game.sound
                ? "♫"
                : "×";


        showToast(
            game.sound
                ? "Sound enabled"
                : "Sound disabled"
        );

    }
);


/* =========================================================
   RESET
========================================================= */

document
    .getElementById(
        "resetButton"
    )
    .addEventListener(
        "click",
        () => {

            const confirmation =
                prompt(
                    "Digite RESET para apagar todo o progresso:"
                );


            if (
                confirmation !==
                "RESET"
            ) {

                return;

            }


            localStorage.removeItem(
                "moneyEmpireSave"
            );


            location.reload();

        }
    );


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    toastText.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   AUTOSAVE
========================================================= */

setInterval(
    () => {

        saveGame();

    },
    5000
);


/* =========================================================
   BEFORE CLOSE
========================================================= */

window.addEventListener(
    "beforeunload",
    saveGame
);


/* =========================================================
   INITIALIZATION
========================================================= */

function initializeGame() {

    newMarketEvent();

    renderAssets();

    renderResearch();

    renderMissions();

    updateUI();

    updatePrestige();

    showOffline();

}


/* =========================================================
   START
========================================================= */

initializeGame();