const { append, unlink, exists, readdir, mkdir, rmdir, rename } = require('./modules.js');

const executeAction = async (action, ...params) => {
    try {
        await action(...params);
        console.log(`${action.name} executed successfully.`);
    } catch (err) {
        console.log(`Error executing ${action.name}: ${err}`);
    }
};

// Append
const appendAction = async () => {
    await executeAction(append, './text.txt', 'Nekoj si tekst');
};

// Unlink 
const unlinkAction = async () => {
    await executeAction(unlink, './text.txt');
};

// Exists
const existsAction = async () => {
    const fileStatus = await executeAction(exists, './text.txt');
    console.log(`File status: ${fileStatus ? 'Exists' : 'Does not exist'}`);
};

// Read
const readdirAction = async () => {
    await executeAction(readdir, '../domasna4');
};

// Create directory
const mkdirAction = async () => {
    await executeAction(mkdir, './folder', 'test');
};

// Remove directory
const rmdirAction = async () => {
    await executeAction(rmdir, './folder');
};

// Rename file
const renameAction = async () => {
    await executeAction(rename, 'text.txt', 'drugoIme.txt');
};

(async () => {
    await appendAction();
    await unlinkAction();
    await existsAction();
    await readdirAction();
    await mkdirAction();
    await rmdirAction();
    await renameAction();
})();
