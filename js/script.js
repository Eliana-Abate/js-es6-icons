// Costruzione template icona con ciclo For-each

let iconTemplate = '';

icons.forEach ((icon) => {
    //copio struttura creata in html e inserisco le proprietà degli oggetti
    iconTemplate += `
    <div class="col col-sm-4 col-md-2 offset-md-1">
        <div class="card">
            <div class="card-body">
                <i class="${icons.family} ${icons.prefix}${icons.type} fa-2x"></i>
                <h6>${icons.name}</h6>
            </div>
        </div>
    </div>
    `;
});