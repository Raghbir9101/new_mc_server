const { exec } = require("child_process");

function saveChanges() {
    exec("node ./saveChanges.js", (err, stdout, stderr) => {
        if (err) {
            console.error(`Error adding files: ${stderr}`);
            return;
        }
        console.log("Running saveChanges.js");
    });
}

const SAVE_FREQUENCY = 60; // IN SECs

// Run every 5 minutes
setInterval(saveChanges, SAVE_FREQUENCY * 1000);

// Run immediately on start
saveChanges();

exec("java -Xmx10G -Xms10G -jar server.jar nogui", (err, stdout, stderr) => {
    if (err) {
        console.error(`Error adding files: ${stderr}`);
        return;
    }
    console.log("Starting Minecraft server", stdout);
})
