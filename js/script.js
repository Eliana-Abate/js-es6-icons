// Costruzione template icona con ciclo For-each

const printIcons = (array, targetElement) => {

    let iconTemplate = '';

    array.forEach((element, index) => {
        //Creo variabile per gestire l'offset
        let hasOffset = '';
        if (index == 0 || index % 5 == 0) {
            hasOffset += "offset-md-1";
        }
        //copio struttura creata in html, inserisco le proprietà degli oggetti
        iconTemplate += `
        <div class="col col-sm-4 col-md-2 ${hasOffset}">
            <div class="card">
                <div class="card-body">
                    <i class="${element.family} ${element.prefix}${element.name} fa-2x ${element.type}"></i>
                    <h6>${element.name.toUpperCase()}</h6>
                </div>
            </div>
        </div>
        `;
    });

    targetElement.innerHTML = iconTemplate;

}
 


//Filtro Select
const selectField = document.getElementById('form-selection');

selectField.addEventListener('change', () => {
    const selectionValue = selectField.value;

    if (selectionValue === 'all'){
        printIcons (icons, iconSection);
        return;
    }

    const filteredIcons = icons.filter((arrayElement) => {
        if (selectionValue === arrayElement.type) {
            return true;
        }
        return false;
    });

    printIcons (filteredIcons, iconSection);

});




//Ciclo per far scrivere le proprietà del select in maniera automatica

const allTypes = [];

icons.forEach((element) => {
    if(!allTypes.includes(element.type)){
        allTypes.push(element.type);
    }
});

console.log(allTypes);



//! Adesso le diverse proprietà "TYPE" diventano elementi dell'array 'allTypes' e questo mi permette di usare un altro ciclo FOR-EACH per costruire la stringa per le OPTIONS"


let option = '<option selected value = "all">All</option>';

allTypes.forEach((element) => {
    option += `<option value = "${element}">${element.charAt(0).toUpperCase()}${element.slice(1)}</option>`;
});





// Stampa in Html
const iconSection = document.querySelector('#icons .row');
printIcons (icons, iconSection);

selectField.innerHTML = option;
