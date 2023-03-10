import { HttpClient } from "./HttpClient"

export class EventHttpClient {
  client = new HttpClient()

  createNewEvent = async (eventFormData) => await this.client.post("api/v1/event", eventFormData)

  fetchAllEvents = async () => await this.client.get("api/v1/event")

  fetchSingleEvent = async (eventId) => await this.client.get(`api/v1/event/${eventId}`)

  deleteEvent = async (eventId) => await this.client.delete(`api/v1/event/${eventId}`)

  publishEvent = async (eventId, formData) => await this.client.put(`api/v1/event/${eventId}`, formData)

  unPublishEvent = async (eventId, formData) => await this.client.put(`api/v1/event/${eventId}`, formData)

  editEvent = async (eventId, formData) => await this.client.put(`api/v1/event/${eventId}`, formData)
  
  getAllTags = async () => await this.client.get("api/v1/tags")

  searchAll = async (filterData) => await this.client.post("api/v1/event/search", filterData)
}
