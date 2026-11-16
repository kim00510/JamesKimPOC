
/**
 * Tests for the Food Products API.
 * Uses Jest and Supertest to verify GET /foods.
 */

const request = require("supertest");
const app = require("../server/app");

describe("Food Products API", () => {
  test("GET /foods returns five food items", async () => {
    const response = await request(app).get("/foods");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(5);
  });

  test("Each food item has an ID, name, and price", async () => {
    const response = await request(app).get("/foods");

    response.body.forEach((food) => {
      expect(food).toHaveProperty("id");
      expect(food).toHaveProperty("name");
      expect(food).toHaveProperty("price");
      expect(typeof food.price).toBe("number");
    });
  });

  test("Unknown routes return 404", async () => {
    const response = await request(app).get("/unknown");

    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe("Route not found");
  });
});
