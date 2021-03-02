const questions = {
    "rawlist weekday": [
        {
            type: 'rawlist',
            name: 'weekday',
            message: 'Please choose which week & day you want to clone repos?',
            choices: [],
        }
    ],
    "action": [
        {
            type: 'list',
            name: 'action',
            message: 'Please choose, what action you want to do?',
            choices: ['Clone repos', 'Set config', 'Help'],
            default: false,
        }
    ],
    "set config": [
        {
            type: 'input',
            name: 'batch',
            message: 'Please input batch?',
            default: 'rmt-010-jersey-fox',
          },
          {
            type: 'input',
            name: 'phase',
            message: 'Please input phase?',
            default: '0',
          },
          {
            type: 'input',
            name: 'set',
            message: 'Please input set challenges?',
            default: '1',
          },
    ]
}

export {
    questions
}