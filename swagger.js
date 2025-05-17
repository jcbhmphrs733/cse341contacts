const swaggerAutogen = require('swagger-autogen')();
const doc = {
  info: {
    title: 'User API',
    description: 'API for managing users',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate the swagger_output.json file
swaggerAutogen(outputFile, endpointsFiles, doc);