import "./app.css";
import App from "./App.svelte";
import "@fontsource/inter";
import "@fontsource/jetbrains-mono";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
