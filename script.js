// Random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let i = 0; i < 5; i++)
{
    let num = getRandomInt(1, 3); // e.g., 7
    console.log(num);
}

