// Update the fetch call in your submit handler
const response = await fetch('http://localhost:3000/send-message', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formProps)
});