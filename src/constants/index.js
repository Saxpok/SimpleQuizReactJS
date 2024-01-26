export const Levels = ['Easy', 'Hard']

export const levelData = {
    EASY: [
        {
            question: 'Сколько грамм в килограмме',
            answers: [
                {
                    msg: '10',
                    trigger: 'wrong'
                },
                {
                    msg: '1000',
                    trigger: 'correct'
                },
                {
                    msg: '100',
                    trigger: 'wrong'
                }
            ]
        },
        {
            question: 'Сколько см в метре',
            answers: [
                {
                    msg: '0.1',
                    trigger: 'wrong'
                },
                {
                    msg: '1000',
                    trigger: 'wrong'
                },
                {
                    msg: '100',
                    trigger: 'correct'
                }
            ]
        }
    ],
    HARD: [
        {
            question: 'Сколько костей в руке',
            answers: [
                {
                    msg: '32',
                    trigger: 'correct'
                },
                {
                    msg: '29',
                    trigger: 'wrong'
                },
                {
                    msg: '2',
                    trigger: 'wrong'
                }
            ]
        },
        {
            question: 'Сколько картин написал Леонардо да Винчи',
            answers: [
                {
                    msg: '205',
                    trigger: 'correct'
                },
                {
                    msg: '144',
                    trigger: 'wrong'
                },
                {
                    msg: '150',
                    trigger: 'wrong'
                }
            ]
        }
    ]
};