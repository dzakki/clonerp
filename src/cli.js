import arg from 'arg';
import inquirer from 'inquirer';
import { updateConfig, readRepos, cloneRepos, helpFeedback } from "./functions";
import { questions } from "./variables";

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
      {
        '--help': Boolean,
        '-h': '--help'
      },
      {
        argv: rawArgs.slice(2),
      }
    );
    return {
      weekday: args._[0] || null,
      help: args['--help'] || false
    };
}

async function promptForMissingOptions(options) {
    const { weekday, help } = options
    const repos = readRepos()
    if (help) {
      helpFeedback()
      return;
    }
  
    if (weekday && repos[weekday]) {
        return cloneRepos(repos, weekday)
    }else if (weekday) {
        const listOfweekday = Object.keys(repos)
        questions["rawlist weekday"][0].choices = ["cancel", ...listOfweekday]

        const { weekday } = await inquirer.prompt(questions["rawlist weekday"]);
        if (weekday === "cancel") {
          return "canceled clone repos"
        }else {
          return cloneRepos(repos, weekday)
        }
    }else {
      const { action } = await inquirer.prompt(questions["action"])

      if (action === "Clone repos") { 
        const listOfweekday = Object.keys(repos)
        questions["rawlist weekday"][0].choices = ["cancel", ...listOfweekday]


        const { weekday } = await inquirer.prompt(questions["rawlist weekday"]);
        if (weekday === "cancel") {
          return "canceled clone repos"
        }else {
          return cloneRepos(repos, weekday)
        }

      } else if (action === "Set config") {
        const { batch, phase } = await inquirer.prompt(questions["set config"])
        const updatedConfig = updateConfig({ batch, phase })
        if (updatedConfig.batch && updatedConfig.phase) {
          return `Successfully updated config with batch: ${updatedConfig.batch} and phase: ${updatedConfig.phase}`
        }else {
          return {
            failed: updatedConfig
          }
        } 
      } 
    }

    helpFeedback()
    return false
}

export async function cli(args) {
    console.clear()
    let options = parseArgumentsIntoOptions(args);
    options = await promptForMissingOptions(options);
    console.log(options || "");
}