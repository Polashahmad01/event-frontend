import { HttpClient } from "./HttpClient"

export class EventHttpClient {
  client = new HttpClient()

  createNewEvent = (eventFormData) => this.client.post("api/v1/event", eventFormData)
  
}
