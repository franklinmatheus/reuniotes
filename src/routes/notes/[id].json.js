import { api } from './_api'

// GET /notes/:id.json
export const get = async (request) => {
	const response = await api(request, `notes/${request.params.id}`)
	
	if (response.status === 404) {
		return { body: [] }
	}

	return response
}

// PUT /notes/:id.json
export const put = async (request) => {
	return api(request, `notes/${request.params.id}`, {
		title: request.body['title'],
		content: request.body['content'],
		date: request.body['date']
	})
}

// DELETE /notes/:id.json
export const del = async (request) => {
	return api(request, `notes/${request.params.id}`)
}
