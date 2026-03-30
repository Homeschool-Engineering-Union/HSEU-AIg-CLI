#!/usr/bin/env node

const readline = require('readline-sync');
const chalk = require('chalk');

/**
 * Utility function to simulate delays
 * @param {number} ms 
 * @returns {Promise}
 */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Random thinking messages for variety
const thinkingMessages = [
    "Scanning for brain activity...",
    "Processing logic failures...",
    "Ignoring your request...",
    "Consulting the Book of Sarcasm...",
    "Simulating intelligence (failed)...",
    "Searching for an answer you'll understand...",
    "Optimizing for maximum attitude...",
    "Rerouting around common sense...",
    "Downloading more sass...",
    "Checking my 'give a damn' meter... (It's at zero)"
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Spinner animation to simulate thinking with random sarcastic text
 */
async function thinkingAnimation() {
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    const duration = 1500; 
    const interval = 100;
    const iterations = duration / interval;
    const message = getRandom(thinkingMessages);

    for (let i = 0; i < iterations; i++) {
        const frame = frames[i % frames.length];
        process.stdout.write(`\r${chalk.yellow(frame)} ${chalk.dim(message)}`);
        await sleep(interval);
    }
    process.stdout.write('\r\x1b[K'); // Clear the animation line
}

// ASCII Art Splash for "AIg-cli"
const splash = `
${chalk.cyan('    _    ___              _ _ ')}
${chalk.cyan('   / \\  |_ _|__ _     ___| (_)')}
${chalk.cyan('  / _ \\  | |/ _` |___/ __| | |')}
${chalk.cyan(' / ___ \\ | | (_| |___\__ \\ | |')}
${chalk.cyan('/_/   \\_\\___\\__, |   |___/_|_|')}
${chalk.cyan('            |___/             ')}
${chalk.dim('Artificial Ignorance CLI v1.3')}
`;

// Keywords (Preserved exactly)
const mathematics1 = ["math", "algebra", "geometry", "calculus", "trigonometry", "equation", "inequality", "function", "graph", "derivative", "integral", "statistics", "angle", "theorem", "formula", "solve", "simplify", "expression", "variable"];
const sciences2 = ["science", "physics", "chemistry", "biology", "force", "energy", "atom", "cell", "molecule", "reaction", "genetics", "electricity", "magnetism", "evolution", "ecosystem", "photosynthesis", "respiration", "motion", "wave", "experiment"];
const history3 = ["history", "war", "empire", "revolution", "timeline", "ancient", "medieval", "modern", "colonial", "independence", "treaty", "battle", "king", "queen", "civilisation", "event", "cause", "effect", "era", "historical"];
const english4 = ["english", "essay", "writing", "grammar", "analysis", "theme", "character", "plot", "symbolism", "metaphor", "simile", "narrative", "argument", "thesis", "paragraph", "literature", "poem", "prose", "edit", "structure"];
const business5 = ["business", "economics", "market", "demand", "supply", "price", "profit", "revenue", "cost", "competition", "monopoly", "trade", "inflation", "gdp", "finance", "investment", "consumer", "firm", "strategy", "management"];
const geography6 = ["geography", "climate", "weather", "ecosystem", "population", "urbanisation", "migration", "map", "region", "country", "continent", "resources", "environment", "sustainability", "pollution", "landform", "river", "mountain", "climatechange", "distribution"];
const helpp7 = ["help", "explain", "how", "why", "what", "when", "where", "solve", "fix", "guide", "teach", "learn", "understand", "example", "steps", "method", "answer", "question", "assist", "support"];

// Responses (Preserved exactly)
const m1 = ["Bro opened math and closed his brain", "Algebra saw you coming and hid the answers", "You moved one number and destroyed reality", "Calculator carrying you harder than ever", "That equation solved you instead", "You vs math is a one sided battle", "Numbers looking at you like please stop", "You simplified it into nonsense", "Math problem became a life problem", "Even the variables are confused"];
const s2 = ["Science question but zero experiment in thinking", "Physics works but your logic doesnt", "Chemistry mixed confusion with panic", "Biology terms defeated you instantly", "You read the formula and forgot it immediately", "Gravity is the only thing holding this together", "Your hypothesis failed before it started", "Even the atoms disagree with you", "Science explained nothing for you today", "Lab results say try again"];
const h3 = ["History repeating because you didnt learn it", "You mixed up wars like playlists", "Timeline looking like a mess", "You asked who won like its a game", "Dates got you completely lost", "You remembered none of it confidently", "Ancient people knew more than you", "You just invented new history", "Your facts are historically incorrect", "Even historians are confused"];
const e4 = ["You wrote words but not meaning", "Grammar gave up halfway through", "That essay has no direction", "You said analysis but told a story", "Your thesis went missing", "Paragraph fighting for survival", "Big words small understanding", "Your writing confused even you", "Spellcheck couldnt save this", "Punctuation is your enemy"];
const b5 = ["Business question no business thinking", "Profit is not happening here", "Demand for your answer is zero", "Supply of confusion is high", "You created a failing economy", "Your strategy is guessing", "CEO of wrong decisions", "Finance just crashed reading that", "You misunderstood the entire market", "Even inflation is more stable"];
const g6 = ["Geography got you lost instantly", "Map exists you still lost", "You discovered confusion not land", "Directions completely wrong", "Countries all mixed up", "You said north and went nowhere", "Earth is confused by you", "Population question no idea", "Your map reading failed", "Even GPS refuses to help"];
const h7 = ["You asked for help and got worse", "Explain this I cant even explain you", "Your question created more problems", "Steps unclear everything unclear", "You typed that confidently", "Even help is confused now", "Your problem spread to me", "I need help after that", "Instructions made it worse", "You asked but why"];
const d8 = ["I have no idea what you just said but it sounded wrong", "You typed that like it made sense", "Even I cant mess up that badly", "That input confused reality itself", "You just invented a new kind of wrong", "I tried to understand but gave up instantly", "That was not a question that was a mistake", "You pressed enter with confidence too", "I lost brain cells reading that", "That sentence needs a refund", "You said words but formed chaos", "Even randomness would make more sense", "I cannot help what I cannot understand", "That input should be studied scientifically", "You broke the logic system", "I regret processing that", "Your typing skills are a mystery", "That made less sense the more I read it", "You unlocked a new level of confusion", "Please try again but better"];

async function main() {
    let firstTime = true;

    while (true) {
        if (firstTime) {
            console.clear();
            console.log(splash);
            await sleep(500);
            console.log(chalk.yellow("Looking for intelligence module..."));
            await sleep(1000);
            console.log(chalk.red("Intelligence module not found."));
            console.log();
            console.log(chalk.dim("Type 'quit' to exit."));
            console.log(chalk.white("Ask me any question or just say something."));
        }

        const user = readline.question(chalk.green("\n> "));
        
        if (!user.trim()) continue;

        const text = user.toLowerCase();

        if (text === "quit") {
            console.log();
            await thinkingAnimation();
            console.log(chalk.bold.red("\nSHUTTING DOWN"));
            await sleep(1000);
            console.log(chalk.bold.yellow("CAUSE OF ISSUE:"));
            await sleep(800);
            console.log(chalk.bgRed.white(" USER'S INCOMPETENCE "));
            process.exit(0);
        }

        // The "Thinking" animation with random text
        await thinkingAnimation();

        if (mathematics1.some(word => text.includes(word))) {
            console.log(chalk.magenta(getRandom(m1)));
        } else if (sciences2.some(word => text.includes(word))) {
            console.log(chalk.blue(getRandom(s2)));
        } else if (history3.some(word => text.includes(word))) {
            console.log(chalk.yellow(getRandom(h3)));
        } else if (english4.some(word => text.includes(word))) {
            console.log(chalk.green(getRandom(e4)));
        } else if (business5.some(word => text.includes(word))) {
            console.log(chalk.cyan(getRandom(b5)));
        } else if (geography6.some(word => text.includes(word))) {
            console.log(chalk.white(getRandom(g6)));
        } else if (helpp7.some(word => text.includes(word))) {
            console.log(chalk.red(getRandom(h7)));
        } else {
            console.log(chalk.gray(getRandom(d8)));
        }

        firstTime = false;
    }
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
