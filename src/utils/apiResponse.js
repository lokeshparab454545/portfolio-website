class APiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCOde = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { APiResponse };
