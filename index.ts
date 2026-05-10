interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;
const persons: Person[] = [

    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },

    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },

    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },

    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },

    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },

    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }

];

function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`);
}



function filterPersons<personType extends Person['type']>(
    persons: Person[],
    personType: personType,
    criteria: Partial<Omit<Extract<Person, { type: personType }>, 'type'>>
): Extract<Person, { type: personType }>[] {

    return persons
        .filter((p): p is Extract<Person, { type: personType }> => p.type === personType)
        .filter((person) => {
            return Object.entries(criteria).every(([key, value]) => {
                return person[key as keyof typeof person] === value;
            });
        });
}


const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });

const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });



console.log('Users of age 23:');

usersOfAge23.forEach(logPerson);



console.log();



console.log('Admins of age 23:');

adminsOfAge23.forEach(logPerson); 