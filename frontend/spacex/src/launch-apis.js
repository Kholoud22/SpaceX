const api = "http://localhost:5115/api/launches"

export const get = (id) =>
    fetch(`${api}/${id}`)
    .then(res => res.json())
    .catch(err => console.log(JSON.stringify(err)));

export const getAll = (period) =>
    fetch(`${api}/period/${period}`)
    .then(res => res.json())
    .catch(err => console.log(JSON.stringify(err)));

    