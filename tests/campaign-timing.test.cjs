const { test } = require("node:test"),
  assert = require("node:assert/strict"),
  ts = require("typescript"),
  fs = require("fs"),
  vm = require("vm");
const scope = {};
vm.runInNewContext(
  ts.transpileModule(fs.readFileSync("app/campaigns/timing.ts", "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText,
  { exports: scope },
);
const c = {
  starts: "2026-10-01T00:00:00+02:00",
  ends: "2026-11-01T00:00:00+02:00",
};
test("campaign respects start and exact expiry", () => {
  assert.equal(scope.isActive(c, Date.parse(c.starts) - 1), false);
  assert.equal(scope.isActive(c, Date.parse(c.starts)), true);
  assert.equal(scope.isActive(c, Date.parse(c.ends) - 1), true);
  assert.equal(scope.isActive(c, Date.parse(c.ends)), false);
});
