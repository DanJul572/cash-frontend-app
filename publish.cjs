#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

const REGISTRY = 'http://localhost:4873';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

async function publishPackage() {
    console.log('\n🚀 Publishing package...\n');

    execSync(`pnpm publish --registry ${REGISTRY} --no-git-checks`, {
        stdio: 'inherit',
    });
}

async function unpublishAll() {
    const packageName = await ask('Package name: ');

    if (!packageName.trim()) {
        console.log('❌ Package name is required');
        return;
    }

    console.log(`\n🗑️ Unpublishing all versions of ${packageName}...\n`);

    execSync(`pnpm unpublish ${packageName} --registry ${REGISTRY} --force`, {
        stdio: 'inherit',
    });
}

async function unpublishVersion() {
    const packageName = await ask('Package name: ');
    const version = await ask('Version: ');

    if (!packageName.trim() || !version.trim()) {
        console.log('❌ Package name and version are required');
        return;
    }

    console.log(`\n🗑️ Unpublishing ${packageName}@${version}...\n`);

    execSync(`pnpm unpublish ${packageName}@${version} --registry ${REGISTRY}`, {
        stdio: 'inherit',
    });
}

async function main() {
    console.log(`
==================================
 Verdaccio Package Manager
==================================

1. Publish package
2. Unpublish all versions
3. Unpublish a specific version
`);

    const choice = await ask('Select an option (1-3): ');

    try {
        switch (choice.trim()) {
            case '1':
                await publishPackage();
                break;

            case '2':
                await unpublishAll();
                break;

            case '3':
                await unpublishVersion();
                break;

            default:
                console.log('❌ Invalid option');
        }
    } catch (error) {
        console.error('\n❌ Error:');
        console.error(error.message);
    } finally {
        rl.close();
    }
}

main();
