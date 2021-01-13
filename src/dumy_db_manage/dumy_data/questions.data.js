

const questions = [
    {
        "id": 1,
        "question": 'How many time zones are there in Russia?',
        "option_a": '11',
        "option_b": '10',
        "option_c": '9',
        "option_d": '1',
        "correct_answer": 'a',
    },
    {
        "id": 2,
        "question": 'When did they open the London underground?',
        "option_a": '1860',
        "option_b": '1861',
        "option_c": '1862',
        "option_d": '1863',
        "correct_answer": 'd',
    },
    {
        "id": 3,
        "question": 'What is the slang name for New York City, used by locals?',
        "option_a": "Vatican",
        "option_b": "Gotham",
        "option_c": "Ottawa",
        "option_d": "Banksy",
        "correct_answer": 'b',
    },
]

export default questions

let data = [
    {
        "new_tin": "2N-BC",
        "tin_date": "2021-01-12T12:05:02.027Z",
        "asses_name": "tanim",
        "fath_name": "sultan ahmed",
        "moth_name": "monira ahmed",
        "contact_telephone": "01924252248",
        "contract_email_addr": "arafat@gmail.com",
        "incorp_number": "1234",
        "circle_no": "2",
        "old_tin": "1K-BC",
        "circle_name": "wtf"
    },
    {
        "new_tin": "GN-BC",
        "tin_date": "2021-01-12T12:33:22.347Z",
        "asses_name": "arafat",
        "fath_name": "sultan",
        "moth_name": "monira",
        "contact_telephone": "01924252249",
        "contract_email_addr": "ok@gmail.com",
        "incorp_number": "123444",
        "circle_no": "24",
        "old_tin": "1K-HC",
        "circle_name": "wtf2"
    }
]

const arry2D = data.map(item => Object.keys(item).map(key => item[key]))