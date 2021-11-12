const invoicesFilter = require('../lib/filter');


class Client {
  constructor(name, inclusionDate, state) {
    this.name = name;
    this.inclusionDate = inclusionDate;
    this.state = state;
  }
}

class Invoice {
  constructor(codigo, value, date) {
    this.codigo = codigo;
    this.value = value;
    this.date = date;
  }
}

describe("Filter", () => {
  const client1 = new Client("Mayshara", new Date(2021, 11, 12), "Paraná");
  const client2 = new Client("Nokk", new Date(2021, 8, 11), "São Paulo");
  const client3 = new Client("Dokka", new Date(2021, 4, 10), "Pará");

  const invoice1 = new Invoice(1, 1630, new Date(2021, 11, 3), client1);
  const invoice2 = new Invoice(2, 1500, new Date(2021, 12, 2), client2);
  const invoice3 = new Invoice(3, 2000, new Date(2021, 12, 18), client3);

  test("If the invoice amount is less than 2000", () => {
    const invoices = [invoice1, invoice2, invoice3];

    const filteredInvoices = [];

    var result = invoicesFilter(invoices);

    expect(result).toEqual((filteredInvoices));

  })
});