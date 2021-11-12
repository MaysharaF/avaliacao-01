const statesBrazil = ['São Paulo', 'Pará', 'Paraná'];

const invoicesFilter = (invoices) => {
    var filtered = invoices.filter((invoice) => invoice.valor > 2000);

    filtered = filtered.filter((invoice) =>
    ((invoice.value > 2500) ||
        (new Date().getMonth() - (invoice.date.getMonth()) < 1)))

    filtered = filtered.filter((invoice) =>
    ((invoice.value > 3000) ||
        (new Date().getMonth() - (invoice.client.inclusionDate.getMonth()) < 2)
    ))

    filtered = filtered.filter((invoice) =>
        (invoice.value < 4000) && !statesBrazil.includes(invoice.client.state))

    return filtered;
}
module.exports = invoicesFilter;

