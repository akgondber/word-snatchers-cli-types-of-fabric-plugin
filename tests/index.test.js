import { test } from "uvu";
import * as assert from "uvu/assert";
import WordSnatchersCliTypesOfFabricPlugin from "../index.js";

let wordSnatchersCliTypesOfFabricPlugin;

test.before.each(() => {
  wordSnatchersCliTypesOfFabricPlugin =
    new WordSnatchersCliTypesOfFabricPlugin();
});

test("WordSnatchersCliTypesOfFabricPlugin#build", () => {
  const items = wordSnatchersCliTypesOfFabricPlugin.build();

  items.map((item) =>
    assert.ok(item.definition.length > 4 && item.word.length > 1)
  );
});

test.run();
