import TabsAutomatic from "./TabsAutomatic.mjs";

// Initialize tablist
var tablists = document.querySelectorAll("[role=tablist].automatic");
for (var i = 0; i < tablists.length; i++) {
  new TabsAutomatic(tablists[i]);
}
