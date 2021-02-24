import { readFileSync, writeFileSync } from 'fs';
import shell from "shelljs";
const path = require('path')
const configPath = '../../config/config.json'
const configPathResolved = path.resolve(__dirname, configPath)


const readRepos = () => {
    try {
        const { phase } = readConfig()
        const repos = readFileSync(path.resolve(__dirname, `../assets/repos-${phase}.json`), "utf8")
        return JSON.parse(repos)
    } catch (error) {
        return error
    }
}

const readConfig = () => {    
    try {
        const config = readFileSync(configPathResolved, 'utf-8')
        return JSON.parse(config)
    } catch (error) {
        return error
    }
}

const updateConfig = ({ batch, phase }) => {
    try {
        const config = readConfig()
        config.batch = batch || config.batch
        config.phase = phase || config.phase
        writeFileSync(configPathResolved, JSON.stringify(config, null, 4))
        return config;
    } catch (error) {
        return error
    }
}

const cloneRepos = (repos, weekday) => {
    shell.set("-v")
    const { batch } = readConfig()
    repos[weekday].forEach(repo => {
        let n = shell.exec(`git clone git@github.com:${batch}/${repo}.git`)
        // console.log(n)
        // console.log(n.code)
        console.log("===============")
        if (n.code === 0) {
            console.log("berhasil clone repo:", repo)
        }else{
            console.log("tidak berhasil clone repo:", repo)
        }
        console.log("================")
        // n.code = 0 success
        // n.code = 128 error
    });
    return repos[weekday]
}


const helpFeedback = () => {
    console.log("clone repos")
    console.log('Version 1.0.1')
    console.log()
    console.log('Usage:')
    console.log();
    console.log('clonerp');
    console.log('\t to select a feature');
    console.log();
    console.log('clonerp w<week>d<day>');
    console.log('\t to clone repos by week and day');
    console.log('\t ex: clonerp w1d2');
}

export {
    readConfig,
    readRepos,
    updateConfig,
    cloneRepos,
    helpFeedback
}