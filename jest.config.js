export default {
  testEnvironment: "node",
  setupFiles: ["./tests/setup.js"],
  setupFilesAfterEnv: ["./tests/db-setup.js"],
};