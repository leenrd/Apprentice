const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Apprentice API",
      version: "1.0.0",
      description:
        "API documentation for Apprentice API (Inventory Management System)",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
      },
    ],
  },
  apis: ["./src/tenants/router/*.ts"],
};

export default swaggerOptions;
