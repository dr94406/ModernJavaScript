// 맵은 Set와 유사하지만 키/값 쌍으로 이루어진다.

const family = new Map();

family.set("Dad", 40);
family.set("Mom", 50);
family.set("Son", 20);

family;
// Map {"Dad" => 40, "Mom" => 50, "Son" => 20}
family.size;
// 3

family.forEach((val, key) => console.log(key, val));
// Dad 40
// Mom 50
// Son 20


for (const [key, val] of family) {
    console.log(key, val);
}
// Dad 40
// Mom 50
// Son 20


// Set은 for of 루프로만 반복할 수 있지만, Map은 반복을 위해 for of 루프와 forEach 함수 둘 다 사용할 수 있다.

