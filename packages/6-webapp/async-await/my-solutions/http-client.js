export class HttpClient {
  async getFetch(url) {
    return await fetch(url)
  }
}
