import { withSwagger } from "next-swagger-doc";

const swaggerHandler = withSwagger({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Watson Shop Public API",
      version: "0.1.0",
    },
    servers:
      process.env.NODE_ENV === "development"
        ? [
            {
              url: "http://localhost:300/api",
            },
          ]
        : [
            {
              url: "https://react-watson-prev.vercel.app/api",
            },
          ],
  },
  apiFolder: "pages/api",
});
export default swaggerHandler();
