test("GET to /api/v1/status shoud return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();

  const parsedUpdateAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedUpdateAt);

  //neondb
  //expect(responseBody.dependencies.database.version).toEqual("16.9");
  expect(responseBody.dependencies.database.version).toEqual("16.0");

  //neondb
  //expect(responseBody.dependencies.database.max_connections).toEqual(901);
  expect(responseBody.dependencies.database.max_connections).toEqual(100);

  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
