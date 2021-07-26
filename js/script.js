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
                    <i class="${element.family} ${element.prefix}${element.name} fa-2x"></i>
                    <h6>${element.name.toUpperCase()}</h6>
                </div>
            </div>
        </div>
        `;
    });

    targetElement.innerHTML = iconTemplate;

}
 



// Stampa in Html
const iconSection = document.querySelector('#icons .row');
printIcons (icons, iconSection);
