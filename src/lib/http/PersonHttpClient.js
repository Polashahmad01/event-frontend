import { HttpClient } from "./HttpClient"

export class PersonHttpClient {
  client = new HttpClient()

  createPerson = async (personFormData) => await this.client.post("api/v1/user", personFormData)
}
