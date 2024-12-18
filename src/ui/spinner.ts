import ora from "ora";

export const loader = (msg?: string) => {
  const spinner = ora({
    text: msg,
  }).start();

  return {
    stop: () => spinner.stop(),
    succeed: (msg?: string) => spinner.succeed(msg),
    fail: (msg?: string) => spinner.fail(msg),
    update: (msg: string) => (spinner.text = msg),
  };
};
