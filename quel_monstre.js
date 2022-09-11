exports.action = function (data) {

console.log(data.monster)
console.log("Recherche monstre")
console.log("Clara doit chercher quel monstre je suis...")

    var monster = "";
        if  (data.monster !== undefined) {
            var fs=require('fs')
            var fichier=fs.readFileSync('./plugins/quelmonstre/monstre.json','utf8')
            var fichier=fichier.split(',')
            var aleatoire=Math.floor((Math.random() * fichier.length-1) + 1);
            console.log('Pour moi, vous êtes '+fichier[aleatoire])
            var monster=fichier[aleatoire]

  

    ClaraIASpeech('Après quelque recherche pour moi, vous serez sûrement '+monster)
    }
}