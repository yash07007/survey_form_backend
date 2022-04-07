const data = [
    ["Caring for people who have suffered is an important virtue.", "mfq_1"],
    ["I believe that compassion for those who are suffering is one of the most crucial virtues.", "mfq_2"],
    ["We should all care for people who are in emotional pain.", "mfq_3"],
    ["I am empathetic toward those people who have suffered in their lives.", "mfq_4"],
    ["Everyone should try to comfort people who are going through something hard.", "mfq_5"],
    ["It pains me when I see someone ignoring the needs of another human being.", "mfq_6"],
    ["The world would be a better place if everyone made the same amount of money.", "mfq_7"],
    ["Our society would have fewer problems if people had the same income.", "mfq_8"],
    ["I believe that everyone should be given the same quantity of resources in life.", "mfq_9"],
    ["I believe it would be ideal if everyone in society wound up with roughly the same amount of money.", "mfq_10"],
    [
        "When people work together toward a common goal, they should share the rewards equally, even if some worked harder on it.",
        "mfq_11",
    ],
    ["I get upset when some people have a lot more money than others in my country.", "mfq_12"],
    ["I think people who are more hard-working should end up with more money.", "mfq_13"],
    ["I think people should be rewarded in proportion to what they contribute.", "mfq_14"],
    ["The effort a worker puts into a job ought to be reflected in the size of a raise they receive.", "mfq_15"],
    ["It makes me happy when people are recognized on their merits.", "mfq_16"],
    ["In a fair society, those who work hard should live with higher standards of living.", "mfq_17"],
    ["I feel good when I see cheaters get caught and punished.", "mfq_18"],
    ["I think children should be taught to be loyal to their country.", "mfq_19"],
    ["It upsets me when people have no loyalty to their country.", "mfq_20"],
    ["Everyone should love their own community.", "mfq_21"],
    ["Everyone should defend their country, if called upon. ", "mfq_22"],
    ["Everyone should feel proud when a person in their community wins in an international competition.", "mfq_23"],
    ["I believe the strength of a sports team comes from the loyalty of its members to each other.", "mfq_24"],
    ["I think it is important for societies to cherish their traditional values.", "mfq_25"],
    ["I feel that most traditions serve a valuable function in keeping society orderly", "mfq_26"],
    ["I think obedience to parents is an important virtue. ", "mfq_27"],
    ["We all need to learn from our elders. ", "mfq_28"],
    ["I believe that one of the most important values to teach children is to have respect for authority.", "mfq_29"],
    ["I think having a strong leader is good for society.", "mfq_30"],
    ["I think the human body should be treated like a temple, housing something sacred within.", "mfq_31"],
    ["I believe chastity is an important virtue.", "mfq_32"],
    ["It upsets me when people use foul language like it is nothing.", "mfq_33"],
    [
        "If I found out that an acquaintance had an unusual but harmless sexual fetish I would feel uneasy about them",
        "mfq_34",
    ],
    ["People should try to use natural medicines rather than chemically identical human-made ones.", "mfq_35"],
];

const axios = require("axios");

for (let i = 0; i < data.length; i++) {
    const question_text = data[i][0];
    const question_code = data[i][1];

    const question = { question_text: question_text, question_code: question_code };

    // axios.post("http://localhost:5000/question/add", question);
}
