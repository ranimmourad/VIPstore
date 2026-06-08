module.exports = {
  apps: [
    {
      name: "vip-store",
      script: "npm",
      args: "run start",
      cwd: "/home/user/webapp",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0",
      },
      watch: false,
      instances: 1,
      exec_mode: "fork",
      max_memory_restart: "1G",
    },
  ],
};
