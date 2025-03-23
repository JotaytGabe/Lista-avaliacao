const people = [
    {
        name: "1° Akuma",
        evaluation: "Staff top 1, não há de que reclamar, prossiga assim."
    },
    {
        name: "2° Wynter",
        evaluation: "Staff bom, também não há muito de reclamar, apenas aumente mais a frequência das parcerias."
    },
    {
        name: "3° Jocca",
        evaluation: "Não há de que reclamar, se prosseguir assim, poderá subir no top staffs ou receber promoções."
    },
    {
        name: "4° Iza",
        evaluation: "Não há de que reclamar, é ativa(o) e sempre está monitorando, continue assim."
    },
    {
        name: "5° Sweet",
        evaluation: "Staff que esperavámos muito mais, por favor, melhore, fique mais online e colabore com o servidor, caso contrário terá o cargo removido."
    }
];

function displayPeople() {
    const peopleList = document.getElementById('people-list');
    people.forEach(person => {
        const listItem = document.createElement('li');
        listItem.textContent = person.name;
        listItem.onclick = () => showInfo(person);
        peopleList.appendChild(listItem);
    });
}

function showInfo(person) {

    const info = document.getElementById('info');

    info.innerHTML = `<strong>Nome:</strong> ${person.name}<br>

                      <strong>Avaliação:</strong> ${person.evaluation}`;

    document.getElementById('person-info').classList.remove('hidden');
}

function closeInfo() {
    document.getElementById('person-info').classList.add('hidden');
}

// Chama a função para exibir as pessoas na lista
displayPeople();
