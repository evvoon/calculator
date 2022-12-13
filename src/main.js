import "./app.css";
import App from "./App.svelte";
import "@fontsource/inter";
import "@fontsource/jetbrains-mono";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
