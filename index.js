//select event lisntene
window.onload = function () {
    const offersSelection = document.querySelectorAll('.offer__header__select')

    offersSelection.forEach(select => {
        select.addEventListener('change', e => {
            const selectedOffer = document.querySelector('.offer--selected')

            if (e.target.parentElement.parentElement === selectedOffer) return 0

            selectedOffer.classList.remove('offer--selected')
            e.target.parentElement.parentElement.classList.add('offer--selected')
            document.querySelector('.bill__amount--digits').innerText = new RegExp('\\$.+USD').exec(e.target.parentElement.lastElementChild.textContent)[0]
        })
    })
};