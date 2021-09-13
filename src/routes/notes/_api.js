const base = 'https://crudcrud.com/api/0a9705cab4104380bbcb8e7f605afd14'

export async function api(request, resource, data) {
	
	const res = await fetch(`${base}/${resource}`, {
		method: request.method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	})

	if (res.ok && request.method !== 'GET' && request.headers.accept !== 'application/json') {
		return {
			status: 303,
			headers: {
				location: '/notes'
			}
		}
	}

	return {
		status: res.status,
		body: await res.json()
	}
}
