const express = require('express'); 
const app = express();
const port = 3000;
const fetch = require('node-fetch');
const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const isUp = require('is-up');
const nodemailer = require('nodemailer');


answer = [['title', 'description', 'value']]


const vgmUrl= 'https://www.pagesjaunes.fr/annuaire/chercherlespros?quoiqui=serrurier&ou=Boulogne-Billancourt&univers=pagesjaunes&idOu=';

// got(vgmUrl).then(response => {
//   const dom = new JSDOM(response.body);
//   const nodeList = [];
//   dom.window.document.querySelector('.company-name.a').forEach(company => {
//     nodeList.push(company.title);
//     //console.log(company.title.textContent);
//   });
// }).catch(err => {
//   console.log(err);
// });

// IP de ma box
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
var ip = require("ip");
const { response } = require('express');
var reponseIp = ["IP", "L'IP que vous utilisez", ip.address()];
answer.push(reponseIp)

//cours de l’Ethereum
fetch('https://api.coingecko.com/api/v3/simple/price?ids=0-5x-long-ethereum-token&vs_currencies=eur')
    .then(res => res.json())
    .then(json => console.log(json));
/*
    reponseEthereum = ["Ethereum", "Le cours de l'ETH", json],
    answer.push(reponseEthereum),
    console.log(answer));
*/

        console.log(answer)
// intranet Up or Down
if (isUp('https://intranetv2.supinternet.fr')){
    var responseUpDown = ["Intranet", "L'Intranet d'epitech digital", "En Ligne"]
    answer.push(responseUpDown)
    console.log(answer);
}
else {
    var responseUpDown = ["Intranet", "L'Intranet d'epitech digital", "Hors Ligne"]
    answer.push(responseUpDown)
    console.log(answer);
}

// Mailer 

async function main() {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  

    let info = await transporter.sendMail({
      from: '"Noemie " <noemie@example.com>', 
      to: "bar@example.com",
      subject: "Rattapage - Node JS",
      text: "Hello world?", 
      html: "<b>Hello world?</b>", 
    });
  
    console.log("Message sent: %s", info.messageId);
  
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);