import { StatusTag } from "@components/status";
import { render } from "@testing-library/react";

describe("StatusTag component", () => {
  it("should render the status tag", () => {
    const { getByTestId } = render(
      <StatusTag
        data-testid="status-tag-test"
        status="AVAILABLE"
      />
    );

    expect(getByTestId("status-tag-test")).toBeInTheDocument();
  });

  it("should render the status tag with the correct text", () => {
    const { getByText } = render(<StatusTag status="AVAILABLE" />);

    expect(getByText("Disponível")).toBeInTheDocument();
  });

  it("should render with the correct text when status is OFF", () => {
    const { getByText } = render(<StatusTag status="AVAILABLE" />);

    expect(getByText("Indisponível")).toBeInTheDocument();
  });

  it("should render with the correct text when status is BUSY", () => {
    const { getByText } = render(<StatusTag status="BUSY" />);

    expect(getByText("Ocupado")).toBeInTheDocument();
  });

  it("should render with the correct text when status is WAITING", () => {
    const { getByText } = render(<StatusTag status="PAUSED" />);

    expect(getByText("Pausado")).toBeInTheDocument();
  });

  it("should render the status tag with the correct color when status is ON", () => {
    const { getByTestId } = render(
      <StatusTag
        data-testid="status-tag-test"
        status="AVAILABLE"
      />
    );

    expect(getByTestId("status-tag-test")).toHaveClass("bg-emerald-200");
  });

  it("should render the status tag with the correct color when status is OFF", () => {
    const { getByTestId } = render(
      <StatusTag
        data-testid="status-tag-test"
        status="OFFLINE"
      />
    );

    expect(getByTestId("status-tag-test")).toHaveClass("bg-slate-200");
  });

  it("should render the status tag with the correct color when status is BUSY", () => {
    const { getByTestId } = render(
      <StatusTag
        data-testid="status-tag-test"
        status="BUSY"
      />
    );

    expect(getByTestId("status-tag-test")).toHaveClass("bg-red-200");
  });

  it("should render the status tag with the correct color when status is WAITING", () => {
    const { getByTestId } = render(
      <StatusTag
        data-testid="status-tag-test"
        status="PAUSED"
      />
    );

    expect(getByTestId("status-tag-test")).toHaveClass("bg-cyan-200");
  });
});
