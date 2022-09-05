import { render, screen, fireEvent, getByText } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { articleSummaries } from "./mocks/articleSummaries";
import debug from "debug";

describe("Home", () => {
  beforeAll(() => {});

  beforeEach(() => {
    render(<Home articleSummaries={articleSummaries} />);
    const keywordInput = screen.getByRole("textbox", {
      name: "keyword",
    });
    fireEvent.change(keywordInput, { target: { value: "" } });
  });

  it("should render correct number of cards", () => {
    const allArticleLabels = screen.getAllByTestId("section-label");
    expect(allArticleLabels).toHaveLength(articleSummaries.length);
    // screen.debug()
  });

  it("should filter cards correctly(case insensitive)", () => {
    const keywordInput = screen.getByRole("textbox", {
      name: "keyword",
    });

    const keyword = "well";
    fireEvent.change(keywordInput, { target: { value: keyword } });
    const allArticleLabels = screen.getAllByTestId("section-label");

    expect(allArticleLabels).toHaveLength(2);
    allArticleLabels.forEach((label) =>
      expect(label).toHaveTextContent(/^Wellington$/)
    );
  });
});
