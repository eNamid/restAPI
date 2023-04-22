module.exports = {
    apps: [
      {
        name: 'restAPI',
        script: 'service.js',
        watch: true,
        ignore_watch: ['node_modules'],
        env: {
          PORT: 8080,
          NODE_ENV: 'development',
          DB: 'mydatabase',
          USER: 'dima',
          PASS: '543dimon543',
          HOST: 'localhost'
        }
      },
    ],
  };