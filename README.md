
# 🚀 rn-init

A modern, interactive CLI to create React Native projects easily — without remembering long commands.

Built with ❤️ in India 🇮🇳  
GitHub: https://github.com/getsettalk

---

## ✨ Why rn-init?

Creating a React Native project usually requires remembering long commands like:

```bash
npx @react-native-community/cli@latest init MyApp
````

or for older versions:

```bash
npx @react-native-community/cli@0.83.1 init MyApp --version 0.83.1
```

**`rn-init` simplifies all of this into one clean command** with an interactive experience.

---

## 🎯 Features

* ✅ Short & memorable command
* 🎨 Beautiful terminal UI
* 📦 Optional project name (prompt if missing)
* 🔢 Choose React Native version (latest / older / custom)
* 🧠 Proper validation (project name & version)
* 🛑 Graceful cancel (Ctrl + C)
* 💻 Works on macOS, Windows & Linux
* ⚡ Always uses official React Native Community CLI

---

## 📦 Usage

### Create a project (interactive)

```bash
npx rn-init
```

### Create a project with name

```bash
npx rn-init MyApp
```

You will be prompted to:

1. Enter project name (if not provided)
2. Select React Native version
3. Confirm project creation

---

## 🔢 React Native Version Options

* `latest (0.83.1)`
* Older stable versions
* **Custom version** (manual input, e.g. `0.81.4`)



This avoids npm dependency conflicts and follows official best practices.


## ⚠️ Before You Run rn-init (IMPORTANT)

Make sure your system is properly set up for React Native development.

### ✅ Required

* **Node.js** ≥ 18
* **npm** (comes with Node)

Check versions:

```bash
node -v
npm -v
```

---

## 🤖 Android Setup (Required for Android)

Install:

* **Android Studio**
* Android SDK
* Emulator or physical device

Follow official guide:
👉 [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)

Make sure:

* `ANDROID_HOME` is set
* Emulator runs successfully

---

## 🍎 iOS Setup (macOS only)

Install:

* **Xcode**
* Xcode Command Line Tools

```bash
xcode-select --install
```

Also install CocoaPods:

```bash
sudo gem install cocoapods
```

---

## 🛑 Cancel Anytime

You can safely cancel the process using:

```bash
Ctrl + C
```

`rn-init` exits gracefully without errors.

---

## 🧠 How It Works

* Uses **React Native Community CLI**
* No dependency hacks
* No global installs required
* Always compatible with official RN releases

---

## 📌 Best Practice

Always run via:

```bash
npx rn-init
```

This ensures you always use the **latest published version** of the CLI.

---

## 🧪 Example Flow

```text
✔ Project name: MyApp
✔ Select React Native version: latest (0.83.1)
✔ Create React Native project "MyApp"? Yes
```

---

## 🛠 Troubleshooting

### ❓ npm dependency errors?

You are safe — `rn-init` uses the official CLI method which avoids common npm peer dependency conflicts.

---

## 📄 License

MIT © getsettalk

---

## 🌟 Contributing

Pull requests are welcome!
If you have ideas or improvements, feel free to open an issue.

---

## ❤️ Support

If this project helped you:

* ⭐ Star the repo
* 🐦 Share with other React Native devs

Happy coding 🚀