import React from "react";
import { render } from "@testing-library/react";
import Questions from "./Questions";

describe("Questions tests", () => {
  it("should render", () => {
    expect(render(<Questions />)).toBeTruthy();
  });
});
