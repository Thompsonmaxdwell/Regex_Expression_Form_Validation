import { inputs, p } from '/src/js/element.js'
import { pattern } from '/src/js/pattern.js'




inputs.forEach((input) => {
    input.addEventListener('keyup', function ({ target: { dataset, value } }) {
        let result = value.match(pattern[dataset.name])
        if (result == null) {

            input.className = 'error'

        } else {

            input.classList.remove('error');
            input.style.border = '2px green solid'
        }

    })
})

