angular.module('questions', []).constant('Data', {
    questions: [
        {question: 'How often do you watch sports?', options: [
            {value: 'Everyday'},
            {value: 'Often'},
            {value: 'Some days', correct: true},
            {value: 'Rarely'},
            {value: 'Never'}
        ]},
        {question: 'What is the best pet for your home?', options: [
            {value: 'Cat'},
            {value: 'Dog'},
            {value: 'Fish'},
            {value: 'Rabbit', correct: true},
            {value: 'Other'}
        ]},
        {question: 'What is your preferred bank?', options: [
            {value: 'Chase'},
            {value: 'Citi'},
            {value: 'Bank of America'},
            {value: 'Wells Fargo'},
            {value: 'Regional'},
            {value: 'Online', correct: true},
            {value: 'Other'}
        ]},
        {question: 'How many siblings do you have?', options: [
            {value: 'More than 4'},
            {value: '4'},
            {value: '3', correct: true},
            {value: '2'},
            {value: '1'},
            {value: 'None'}
        ]},
        {question: 'Do you eat seafood?', options: [
            {value: true},
            {value: false, correct: true}
        ]}
    ]
});