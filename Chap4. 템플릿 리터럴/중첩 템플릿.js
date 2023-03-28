const people  =[{
    name: 'Alberto',
    age: 27,
}, {
    name: 'Caroline',
    age: 27,
}, {
    name: 'Josh',
    age: 31,
}
];

const markup = `
<ul>
    ${people.map(person => `<li> ${person.name}</li>`)}
</ul>
`;
console.log(markup);

// <ul>
//      <li> Alberto</li>,<li> Caroline</li>,<li> Josh</li>


// 여기서는 map 함수를 사용하여 people의 각 원소에 대해 반복 동작을 수행하고 people 내에 있는 name을 담아 li 태그를 표시했다.