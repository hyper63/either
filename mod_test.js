import { assertEquals } from "./test_deps.js";
import { fromNullable, Left, Right } from "./mod.js";

const { test } = Deno;

test("Right on", () => assertEquals(Right("on").extract(), "on"));

test("Left off", () => assertEquals(Left("off").extract(), "off"));

test("trap nulls", () =>
  assertEquals(
    fromNullable(null)
      .extract(),
    null,
  ));

test("pass if not null", () =>
  assertEquals(
    fromNullable(1)
      .map((x) => x + 1)
      .extract(),
    2,
  ));
