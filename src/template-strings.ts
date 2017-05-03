let lyrics = "I wont let you down";
let html = `<div>${lyrics}</div>`

console.log(html);

const escapeHtml = (literals: TemplateStringsArray, ...placeholders: Array<string>) => {
    let result = "";
    for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g,  '&amp;')
            .replace(/"/g,  '&quot;')
            .replace(/'/g,  '&#39;')
            .replace(/</g,  '&lt;')
            .replace(/>/g,  '&gt;');
    }

    result += literals[literals.length - 1];
    return result;
};

let say = "a bird in hand > two in the bush";
let html2 = escapeHtml`<div>I just want to say that ${say}</div>`;
console.log(html2);
