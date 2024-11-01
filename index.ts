import * as core from '@actions/core';

const sum = (a: number, b: number) => {
  return a + b;
};

async function run(): Promise<void> {
  try {
    const number1 = parseFloat(core.getInput('number1'));
    const number2 = parseFloat(core.getInput('number2'));

    const result = sum(number1, number2);

    // Set the output for the action
    core.setOutput('result', result.toString());
  } catch (error: Error | unknown) {
    core.setFailed((error as Error).message);
  }
}

run();

export default sum;
