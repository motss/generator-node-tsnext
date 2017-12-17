// @ts-check

export async function greeting(
  name: string = 'World'
) {
  try {
    return await greetingSync(name);
  } catch (e) {
    throw e;
  }
}

export function greetingSync(
  name: string = 'World'
) {
  return `Hello, ${name}!`;
}

export default greeting;
