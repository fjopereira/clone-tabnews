function status(request, response) {
  response.status(200).json({
    status: "ok",
    message: "teste de status",
  });
}
export default status;
