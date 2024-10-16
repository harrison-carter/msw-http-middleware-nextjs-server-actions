import { http, HttpResponse, passthrough } from 'msw'

export const handlers = [
  http.get('/', () => {
    return passthrough()
  }),
  http.post('/', () => {
    return HttpResponse.json({
      id: '15d42a4d-1948-4de4-ba78-b8a893feaf45',
      firstName: 'John',
    })
  }),
]
