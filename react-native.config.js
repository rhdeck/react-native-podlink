const { join } = require("path");
const { spawnSync } = require("child_process");
module.exports = {
  commands: [
    {
      name: "podlink",
      description: "Execute native linking for IOS projects",
      func: () => {
        process.chdir(join(process.cwd(), "ios"));
        spawnSync("pod", ["install"], { stdio: "inherit" });
      }
    }
  ]
};
