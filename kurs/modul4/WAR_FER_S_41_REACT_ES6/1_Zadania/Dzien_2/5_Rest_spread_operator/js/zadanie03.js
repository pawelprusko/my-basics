let people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];


function setFunnyName(...arg) {
    arg.forEach((element) => {
        people.push(element)
    })

}
setFunnyName(1,2,3, {aka: 2, awa: 4});
console.log(people)

