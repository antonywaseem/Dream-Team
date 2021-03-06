// var storage = require("./fireBase/fireBase");
//  = fireBase.storage;
const form = {
  _id: "5cb2140021bafa4efc033a4f",
  createdByLawyer: false,
  companyName: "samsung",
  companyNameEnglish: "سامسونج",
  companyType: "SPC",
  regulatedLaw: "Law 159",
  headquarters: {
    governorate: " Roulette",
    city: "Stevens",
    address: "636 Dorset Street, Klagetoh, Maine, 1503",
    telephone: "+201 (916) 464-2871",

    fax: "808 490-2917"
  },
  financialInfo: {
    capital: "12222",
    currency: "USD"
  },
  formStatus: "lawyer",
  investor: "5cb1fc2317f0344cd0720692",
  dateOfApproval: "2/10/2018",
  board: []
};

const investor = {
  _id: "5cb201c6e5f6c336f0e3a712",
  rejectionMessage: "false",
  accountType: "investor",
  name: "Alex",
  gender: "Female",
  nationality: "Chinese",
  typeID: "100000000000001",
  numberID: "721122417",
  dateOfBirth: "1981-10-04T05:35:07.000+00:00",
  address: "566 Independence Avenue, Heil, Iowa, 6358",
  phoneNumber: "+201 (885) 547-3660",
  faxNumber: "(847) 561-2819",
  email: "gloveeer@unsdefined.biz",
  password: "$2a$10$stalMPxvAJCTARaZgUFz/.nxaXy2QYgWZmeQdanjV1zAm7n1gfPK6",
  capital: 1000000,
  capitalCurrency: "EGP",
  accountStatus: true,
  investorType: "GoodInvestor"
};

function upload(form, investor) {
  var html;
  var fs = require("fs");
  var pdf = require("html-pdf");
  var options;
  if (form.regulatedLaw == "Law 159") {
    html = fs.readFileSync("./resources/contract159.html", "utf8");
    options = { format: "A4" };
    html = html.replace(/{companyName}/g, form.companyName);
    html = html.replace(/{companyNameEng}/g, form.companyNameEnglish);
    html = html.replace(/{formId}/g, form._id);
    html = html.replace(/{Address}/g, form.headquarters.address);
    html = html.replace(/{idType}/g, investor.typeID);
    html = html.replace(/{idType}/g, investor.typeID);
    html = html.replace(/{DateOfBirth/g, investor.dateOfBirth);
    html = html.replace(/{Nationality}/g, investor.nationality);
    html = html.replace(/{Name}/g, investor.name);
    html = html.replace(/{currency}/g, form.financialInfo.currency);
    html = html.replace(/{capital}/g, form.financialInfo.capital);
    html = html.replace(/{dateOfApproval}/g, form.dateOfApproval);
    html = html.replace(/{investorName}/g, investor.name);
  }
  if (form.regulatedLaw == "Law 72") {
    html = fs.readFileSync("./resources/contract72.html", "utf8");
    options = { format: "A4" };
    html = html.replace(/{companyName}/g, form.companyName);
    html = html.replace(/{companyNameEng}/g, form.companyNameEnglish);
    html = html.replace(/{formId}/g, form._id);
    html = html.replace(/{Address}/g, form.headquarters.address);
    html = html.replace(/{idType}/g, investor.typeID);
    html = html.replace(/{idType}/g, investor.typeID);
    html = html.replace(/{DateOfBirth/g, investor.dateOfBirth);
    html = html.replace(/{Nationality}/g, investor.nationality);
    html = html.replace(/{Name}/g, investor.name);
    html = html.replace(/{currency}/g, form.financialInfo.currency);
    html = html.replace(/{capital}/g, form.financialInfo.capital);
    html = html.replace(/{dateOfApproval}/g, form.dateOfApproval);
    html = html.replace(/{investorName}/g, investor.name);
  }
  var name = form._id;
  var x = pdf
    .create(html, options)
    .toFile(`./resources/${name}.pdf`, function(err, res) {
      if (err) return console.log(err);
      console.log(res); // { filename: '/app/businesscard.pdf' }
    });
  console.log(typeof x);
  // var blob = new Blob([evt.target.result], { type: "pdf" });
  // const uploadTask = storage.ref(`pdfs/${form._id}`).put(x);
}

module.exports = upload;
