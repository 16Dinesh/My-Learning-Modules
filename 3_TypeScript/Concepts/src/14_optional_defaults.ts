function greetOP(name: string, message?: string) {
  if (message) {
    console.log(`${message}, ${name}`);
  } else {
    console.log(`Hello, ${name}`);
  }
}

greetOP("Zeke");

function greetDef(name: string, message: string = "Hello") {
  console.log(`${message}, ${name}!`);
}

greetDef("Zeke");

function connect(host: string, port?: number, secure?: boolean) {
  const p = port ?? 80;
  const s = secure ?? false;

  return `Connect ${host} ${p} ${secure}`;
}

console.log(connect("localhost", 100, true))
