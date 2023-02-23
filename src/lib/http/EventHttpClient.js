import { HttpClient } from "./HttpClient"

export class EventHttpClient {
  client = new HttpClient()

  createNewEvent = async (eventFormData) => await this.client.post("api/v1/event", eventFormData)

  fetchAllEvents = async () => await this.client.get("api/v1/event")

  deleteEvent = async (eventId) => await this.client.delete(`api/v1/event/${eventId}`)
  
  getAllTags = async () => await this.client.get("api/v1/tags")
}
