var sportsTrivia = {
    "response_code": 0,
    "results": [
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which of the following sports is not part of the triathlon?",
            "correct_answer": "Horse-Riding",
            "incorrect_answers": [
                "Cycling",
                "Swimming",
                "Running"
            ]
        },
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which English football club has the nickname The Foxes?",
            "correct_answer": "Leicester City",
            "incorrect_answers": [
                "Northampton Town",
                "Bradford City",
                "West Bromwich Albion"
            ]
        },
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What team did England beat to win in the 1966 World Cup final?",
            "correct_answer": "West Germany",
            "incorrect_answers": [
                "Soviet Union",
                "Portugal",
                "Brazil"
            ]
        },
        {
            "category": "Sports",
            "type": "boolean",
            "difficulty": "easy",
            "question": "There are a total of 20 races in Formula One 2016 season.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who won the 2017 Formula One World Drivers Championship?",
            "correct_answer": "Lewis Hamilton",
            "incorrect_answers": [
                "Sebastian Vettel",
                "Nico Rosberg",
                "Max Verstappen"
            ]
        }
    ]
}

var title = document.createElement('h1')
title.textContent = "Sports Trivia List"
document.body.appendChild(title)

var div = document.createElement('div')
document.body.appendChild(div)

for(let i = 0; i < sportsTrivia.results.length; i++){
    let list = document.createElement('ul');
    let cat = document.createElement('li')
    let question = document.createElement('li')
    let answer = document.createElement('li')

    cat.textContent = sportsTrivia.results[i].category;
    question.textContent = sportsTrivia.results[i].question;
    answer.textContent = sportsTrivia.results[i].correct_answer;

    list.append(cat)
    list.append(question)
    list.append(answer)

    div.appendChild(list)
}
