let persona = {
    altura:1.75,
    cara:'redonda',
    nariz:'grande',
    personalidad:'buena',
    vestimenta:'formal'
    };

/* document.write(persona.altura);
document.write('<br>');
document.write(persona.cara);
document.write('<br>');
document.write(persona.nariz);
document.write('<br>');
document.write(persona.personalidad);
document.write('<br>');
document.write(persona.vestimenta);
document.write('<hr>');
document.write(persona.trabaja);
document.write('<br>');
persona.trabaja = 'si';
document.write(persona.trabaja);
document.write('<br>');
document.write('<hr>');
document.write(persona.vestimenta);
document.write('<br>');
persona.vestimenta = 'informal';
document.write('<br>');
document.write(persona.vestimenta);
document.write('<br>');
document.write('<hr>');
delete persona.vestimenta;
document.write(persona.vestimenta);
document.write('<br>'); */

let altura = persona['altura'];
let cara = persona['cara'];
let nariz = persona['nariz'];
let personalidad = persona ['personalidad'];
let vestimenta = persona['vestimenta'];

const frase = `la altura de la persona es ${altura}
la cara de la persona es ${cara}
la nariz de la persona es ${nariz}
la personalidad de la persona es ${personalidad}
la vestimenta de la persona es ${vestimenta}
`
document.write(frase)