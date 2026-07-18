module.exports = {
  apps: [
    {
      name: "brighto-main",
      script: "pnpm",
      args: "start",
      cwd: "/root/brighto-main",
      env: {
        NODE_ENV: "production",
        PORT: 7007
      }
    }
  ]
};
