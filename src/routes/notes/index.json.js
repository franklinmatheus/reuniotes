import { api } from './_api'

// GET /notes.json
export const get = async (request) => {
	const response = await api(request, `notes`)

	if (response.status === 404)
		return { body: [] }

	return response
}

// POST /notes.json
export const post = async (request) => {
	const response = await api(request, `notes`, {
		title: request.body['title'],
		content: request.body['content'],
		date: request.body['date']
	})

	return response
}
