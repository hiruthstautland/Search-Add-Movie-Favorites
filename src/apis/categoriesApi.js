const categories = [
  { value: "Romance", id: 1, age: 6 },
  { value: "Comedy", id: 2, age: 6 },
  { value: "Action", id: 3, age: 12 },
  { value: "Documentary", id: 4, age: 9 },
  { value: "Children", id: 5, age: 0 },
  { value: "Thrillers", id: 6, age: 15 },
  { value: "Horror", id: 7, age: 18 },
];

function checkAge(age) {
  let askPremission = true;
  let ageLimit;

  switch (age) {
    case 0:
      ageLimit = 0;
      askPremission = false;
      break;
    case 6:
      ageLimit = 6;
      break;
    case 9:
      ageLimit = 9;
      break;
    case 12:
      ageLimit = 12;
      break;
    case 15:
      ageLimit = 15;
      break;
    case 18:
      ageLimit = 18;
      break;
    default:
      ageLimit = 18;
      break;
  }

  return {
    askPremission,
    ageLimit,
  };
}

export function getCategories(age) {
  let { askPremission, ageLimit } = checkAge(age);
  let allowedCategories = categories.filter((type) => {
    return type.age <= ageLimit;
  });
  return { allowedCategories, askPremission };
}

const lists = [
  { id: 1, name: "SUMMER" },
  { id: 2, name: "WINTER" },
  { id: 5, name: "Vallhall" },
];
export function getLists(id) {
  // search algo
  return lists.filter((list) => list.id == id);
}
