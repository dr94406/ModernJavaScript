// 다음 예제 코드처럼, 필요하면 템플릿 리터럴 내에 함수를 전달할 수도 있다. (${groceryList(groceries.thhers)} 부분).

const groceries = {
    meat: "pork chop",
    veggie: "salad",
    fruit : "apple",
    others: ['mushrooms', 'unstant noodles', 'instant soup'],
};

// groceries의 각 값에 대해 map()을 수행하는 함수

function groceryList(others) {
    return `
    <p>
        ${others.map( other => ` <span>${other}</span>`).join('\n')}
    </p>
        `;
}

// p 태그 내에 모든 groceries를 출력 마지막은 **others** 배열의 모든 원소를 포함

const markup = `
    <div>
        <p>${groceries.meat}</p>
        <p>${groceries.veggie}</p>
        <p>${groceries.fruit}</p>
        <p>${groceryList(groceries.others)}</p>
    </div>
`;
// <div>
// <p>pork chop</p>
// <p>salad</p>
// <p>apple</p>
// <p>
// <p>
//      <span>mushrooms</span>
//      <span>instant noodles</span>
//      <span>instant soup</span>
//</p>
//</p>
//<div>

// 마지막 p 태그에서 함수 proceryList를 호출하여 다른 모든 others를 인수로 전달했다. 
// 함수 내에서 p 태그를 반환하고 map을 사용해서 groceries의 각 원소에 대해 반복하고 각 원소를 담은 span태그 배열 반환 및 join을 사용하여 span 뒤에 새 행 추가
