const baseUrl = 'http://localhost:5002';

export default {
	get(id, endpoint) {
		return fetch(`${baseUrl}/${endpoint}`).then((r) => r.json());
	},
	getAll(endpoint) {
		return fetch(`${baseUrl}/${endpoint}`).then((r) => r.json());
	},
	post(newObj, endpoint) {
		return fetch(`${baseUrl}/${endpoint}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newObj)
		}).then((data) => data.json());
	}
};
