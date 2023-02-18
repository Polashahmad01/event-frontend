import { HttpClient } from "./HttpClient"

export class TagsHttpClient {
  client = new HttpClient()

  getTags = async () => await this.client.request("api/v1/tags")

  createNewTag = async (tagFormData) => await this.client.post("api/v1/tags", tagFormData)
}
