

export const createQuestion = async (text: string) => {
    const body = { text };

    const question = await fetch('/api/question', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

    console.log({ question });

    return question;
}