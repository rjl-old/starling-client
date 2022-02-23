module.exports = {
  starling: {
    input: 'api/starling.json',
    output: {
      client: 'react-query',
      mode: 'tags',
      target: 'api/service/hooks.ts',
      schemas: 'api/service/models',
      prettier: true,
      override: {
        mutator: {
          path: './api/useAxios.ts',
          name: 'useAxios',
        },
      },
    },
  },
};
