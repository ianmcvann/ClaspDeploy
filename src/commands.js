const vscode = require('vscode');
const cp = require('child_process')
function claspDeployCommand() {
    let properties = vscode.workspace.getConfiguration('clasp-deploy');
    vscode.window.showInformationMessage('Deployment started!');
    let orange = vscode.window.createOutputChannel("Clasp Deploy Output");
    orange.show();

    var onlyPath = require('path').dirname(properties.srcDir);
    orange.appendLine(onlyPath)
    cp.exec(`clasp -P src/ push`, {cwd: onlyPath}, (err, stdout, stderr) => {
        orange.appendLine(stderr);
        orange.appendLine(stdout);
        if (err) {
            orange.appendLine(err);
        } else {
            vscode.window.showInformationMessage('Deployment finished!');
            openDevelopmentSheet();
        }
    });
}
async function openDevelopmentSheet() {
    let properties = vscode.workspace.getConfiguration('clasp-deploy');
    // dynamically import the 'open' module
    const open = await import('open');
    // opens the url in the default browser 
    open.default(properties.developmentSheetURL);
  }

module.exports = {
    claspDeployCommand
}