async function asyncExample() {
  const a = await Promise.resolve("foo");
  console.log("and this waits for the await resolve", a);
}

// asyncExample();

async function asyncFetch() {
  const a = await fetch("pets.json");
  const response = await a.json();
  return response;
}

console.log("this continues");

asyncFetch()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
