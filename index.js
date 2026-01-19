#!/usr/bin/env node

import inquirer from "inquirer";
import { execa } from "execa";
import chalk from "chalk";

/* ================= GRACEFUL EXIT ================= */

process.on("SIGINT", () => {
  console.log(chalk.yellow("\n\n👋 Cancelled by user. Bye!\n"));
  process.exit(0);
});

/* ================= LOGO ================= */

function showLogo() {
  console.log("\n");
  console.log(
    chalk.green(`
██████╗ ███╗   ██╗      ██╗███╗   ██╗██╗████████╗
██╔══██╗████╗  ██║      ██║████╗  ██║██║╚══██╔══╝
██████╔╝██╔██╗ ██║█████╗██║██╔██╗ ██║██║   ██║   
██╔══██╗██║╚██╗██║╚════╝██║██║╚██╗██║██║   ██║   
██║  ██║██║ ╚████║      ██║██║ ╚████║██║   ██║   
╚═╝  ╚═╝╚═╝  ╚═══╝      ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   
`)
  );
  console.log(chalk.green("Create with love in India 🇮🇳"));
  console.log(chalk.gray("GitHub → https://github.com/getsettalk\n"));
}

/* ================= VALIDATION ================= */

function validateProjectName(name) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(name)
    ? true
    : "❌ Use PascalCase, letters & numbers only (e.g. MyApp)";
}

function validateVersion(version) {
  return /^0\.\d+\.\d+$/.test(version)
    ? true
    : "❌ Version must look like 0.83.1";
}

/* ================= RN VERSION OPTIONS ================= */

const RN_VERSIONS = [
  {
    name: chalk.green("latest (0.83.1)"),
    value: { tag: "latest", label: "latest (0.83.1)" }
  },
  { name: "0.83.0", value: { tag: "0.83.0", label: "0.83.0" } },
  { name: "0.82.2", value: { tag: "0.82.2", label: "0.82.2" } },
  { name: "0.82.1", value: { tag: "0.82.1", label: "0.82.1" } },
  { name: "0.82.0", value: { tag: "0.82.0", label: "0.82.0" } },
  { name: "0.81.4", value: { tag: "0.81.4", label: "0.81.4" } },
  { name: "0.81.3", value: { tag: "0.81.3", label: "0.81.3" } },
  { name: "0.81.2", value: { tag: "0.81.2", label: "0.81.2" } },
  { name: "0.81.1", value: { tag: "0.81.1", label: "0.81.1" } },
  { name: "0.81.0", value: { tag: "0.81.0", label: "0.81.0" } },
  {
    name: chalk.yellow("Custom (enter manually)"),
    value: { tag: "custom", label: "Custom" }
  }
];

/* ================= MAIN ================= */

async function run() {
  showLogo();

  const args = process.argv.slice(2);
  let projectName = args.find(a => !a.startsWith("--"));

  /* ---- Project name ---- */
  if (!projectName) {
    const res = await inquirer.prompt({
      type: "input",
      name: "name",
      message: "📦 Project name:",
      validate: validateProjectName
    });
    projectName = res.name;
  } else {
    const valid = validateProjectName(projectName);
    if (valid !== true) {
      console.log(chalk.red(valid));
      process.exit(1);
    }
  }

  /* ---- Version selection (stable rawlist) ---- */
  const { versionChoice } = await inquirer.prompt({
    type: "rawlist",
    name: "versionChoice",
    message: "⚙️ Select React Native version:",
    choices: RN_VERSIONS
  });

  let finalVersion;
  let versionLabel;

  if (versionChoice.tag === "custom") {
    const res = await inquirer.prompt({
      type: "input",
      name: "customVersion",
      message: "✏️ Enter React Native version:",
      validate: validateVersion
    });
    finalVersion = res.customVersion;
    versionLabel = chalk.yellow(`custom (${finalVersion})`);
  } else {
    finalVersion = versionChoice.tag;
    versionLabel =
      finalVersion === "latest"
        ? chalk.green(versionChoice.label)
        : chalk.cyan(versionChoice.label);
  }

  /* ---- Confirmation ---- */
  const { confirm } = await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message: `🚀 Create React Native project "${chalk.cyan(
      projectName
    )}" with ${versionLabel}?`,
    default: true
  });

  if (!confirm) {
    console.log(chalk.yellow("\n❌ Cancelled\n"));
    return;
  }

  /* ---- Run RN CLI ---- */
  const npxCmd = process.platform === "win32" ? "npx.cmd" : "npx";

  console.log(
    chalk.green(`\n🚀 Creating React Native project (${finalVersion})...\n`)
  );

  await execa(
  npxCmd,
  [
    `@react-native-community/cli@${finalVersion === "latest" ? "latest" : finalVersion}`,
    "init",
    projectName,
    ...(finalVersion === "latest" ? [] : ["--version", finalVersion])
  ],
  { stdio: "inherit" }
);

}

/* ================= START ================= */

run().catch(err => {
  console.error(chalk.red("\n❌ Error:"), err.message);
  process.exit(1);
});
