let nbLigne = process.argv[2];

for (let i = 1; i <= nbLigne; i++) {
    let txt = "";
    for (let j = 1; j <= nbLigne - i; j++) txt += " ";
    for (let k = 1; k <= i; k++) txt += "#";
    console.log(txt);
}

