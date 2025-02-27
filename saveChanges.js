const { exec } = require("child_process");

function getCurrentTimestamp() {
    return new Date().toISOString();
}

function runGitCommands() {
    const commitMessage = `"${getCurrentTimestamp()}"`;

    exec("git add .", (err, stdout, stderr) => {
        if (err) {
            console.error(`Error adding files: ${stderr} ${stdout}`);
            return;
        }
        console.log("Files added successfully.");

        exec(`git commit -m ${commitMessage}`, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error committing files: ${stderr} ${stdout}`);
                return;
            }
            console.log("Files committed successfully.");

            exec("git push --force", (err, stdout, stderr) => {
                if (err) {
                    console.error(`Error pushing files: ${stderr} ${stdout}`);
                    return;
                }
                console.log("Files pushed successfully.");
            });
        });
    });
}

setInterval(()=>{
    runGitCommands()
},30*1000)

runGitCommands()