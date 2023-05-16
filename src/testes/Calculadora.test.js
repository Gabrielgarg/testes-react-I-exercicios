import { render, screen } from "@testing-library/react";
import Calculator from "../components/Calculator";
import userEvent from "@testing-library/user-event";

describe("Testando funcoes do codigo", () => {
  test("Verificar se as funcionalidades: +,-,/,* estao funcionando", async () => {
    render(<Calculator />);
    const elemento1 = screen.getByText("+");
    const elemento2 = screen.getByText("-");
    const elemento3 = screen.getByText("/");
    const elemento4 = screen.getByText("*");

    expect(elemento1).toBeInTheDocument();
    expect(elemento2).toBeInTheDocument();
    expect(elemento3).toBeInTheDocument();
    expect(elemento4).toBeInTheDocument();
  });
  test("Verificar cliks se estao funcionando", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    const elemento1 = screen.getByText("5");
    const elemento2 = screen.getByText("*");
    const elemento3 = screen.getByText("2");
    const elemento4 = screen.getByText("=");

    // const button = screen.getByRole("button", { name: /5/i });
    // const button2 = screen.getByRole("button", { name: "*" });
    // const button3 = screen.getByRole("button", { name: /2/i });
    // const button4 = screen.getByRole("button", { name: /"="/i });

    await user.click(elemento1);
    // const value1 = screen.getByText("5");

    await user.click(elemento2);
    // const value2 = screen.getByText("*");

    await user.click(elemento3);
    // const value3 = screen.getByText("2");

    // expect(value1).toBeInTheDocument();
    // expect(value2).toBeInTheDocument();
    // expect(value3).toBeInTheDocument();

    await user.click(elemento4);

    const value = screen.getByText("10");

    expect(value).toBeInTheDocument();

    // await user.type(input, "{5}");
    // await user.type(input, "{*}");
    // await user.type(input, "{2}");
    // await user.type(input, "{=}");

    // expect(elemento1).toBeInTheDocument();
    // expect(elemento2).toBeInTheDocument();
    // expect(elemento3).toBeInTheDocument();
    // expect(elemento4).toBeInTheDocument();
  });
  test("Verificar cliks se estao funcionando", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    const elemento1 = screen.getByText("5");
    const elemento2 = screen.getByText("*");
    const elemento3 = screen.getByText("2");
    const elemento4 = screen.getByText("=");
    const elemento5 = screen.getByText("+");
    const elemento6 = screen.getByText("1");
    const elemento7 = screen.getAllByText("0");

    // const button = screen.getByRole("button", { name: /5/i });
    // const button2 = screen.getByRole("button", { name: "*" });
    // const button3 = screen.getByRole("button", { name: /2/i });
    // const button4 = screen.getByRole("button", { name: /"="/i });

    await user.click(elemento1);
    // const value1 = screen.getByText("5");

    await user.click(elemento2);
    // const value2 = screen.getByText("*");

    await user.click(elemento3);
    // const value3 = screen.getByText("2");

    await user.click(elemento4);

    const value = screen.getByText("10");

    expect(value).toBeInTheDocument();

    await user.click(elemento5);
    await user.click(elemento6);
    await user.click(elemento7);

    screen.debug();

    // const result2 = screen.getByText("20");
    const result3 = screen.getByDisplayValue("20");
    screen.logTestingPlaygroundURL();
    expect(result3).toBeInTheDocument();
  });
});
