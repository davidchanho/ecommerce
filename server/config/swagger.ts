/**
 * Swagger options
 */
const swaggerOptions = {
    info: {
        version: "1.0.0",
        title: "Ecommerce Rest api",
        license: {
            name: "MIT",
        },
    },
    security: {
        BasicAuth: {
            type: "http",
            scheme: "basic",
        },
    },
    baseDir: __dirname,
    filesPattern: "../**/*.ts",
    swaggerUIPath: "/api-docs",
    exposeSwaggerUI: true,
    exposeApiDocs: false,
    apiDocsPath: "/v3/api-docs",
    notRequiredAsNullable: false,
    swaggerUiOptions: {},
    multiple: true,
};

export default swaggerOptions;
