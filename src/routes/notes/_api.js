/*
	This module is used by the /todos.json and /todos/[uid].json
	endpoints to make calls to api.svelte.dev, which stores todos
	for each user. The leading underscore indicates that this is
	a private module, _not_ an endpoint — visiting /todos/_api
	will net you a 404 response.

	(The data on the todo app will expire periodically no
	guarantees are made. Don't use it to organise your life.)
*/

const base = 'https://crudcrud.com/api/6722f1f7d6494ad0b00d1bd48ee349fd'

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
