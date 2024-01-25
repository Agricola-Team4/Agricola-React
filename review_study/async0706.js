function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getResource1() {
  await delay(2000);
  return { wood: 10, stone: 10, soil: 10 };
}
async function getResource2() {
  await delay(2000);
  return { adult: 2, baby: 3 };
}

async function getResource3() {
  await delay(2000);
  return { fence: 2, cowshed: 3 };
}

async function getAllResource() {
  const [data1, data2, data3] = await Promise.all([
    getResource1(),
    getResource2(),
    getResource3(),
  ]);
  const resource_object = {};
  resource_object['wood'] = data1.wood;
  resource_object['stone'] = data1.stone;
  resource_object['soil'] = data1.soil;
  resource_object['farmer'] = data2.adult;
  resource_object['baby'] = data2.baby;
  resource_object['fence'] = data3.fence;
  resource_object['stable'] = data3.cowshed;
  return resource_object;
}

console.log(getAllResource());

getAllResource().then(console.log);

function nestedFunction() {
  return getResource1();
}

async function nestedFunction2() {
  return await getResource2();
}

nestedFunction().then(res => console.log(res));
nestedFunction2().then(res => console.log(res));
