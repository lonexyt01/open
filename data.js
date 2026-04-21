const DATA = {

intro: `
Qullar mehnati quldorlar uchun foydasiz ekani ayon bo‘la boshlagan.

Ko‘plab quldorlar qullarni yer ijarachilariga aylantira boshlagan.

Qullar qo‘zg‘olonidan qo‘rqib, yer egalari yerlarini kichik bo‘laklarga bo‘lib, erkin kambag‘allarga ijaraga bergan.

Ijarachilar dehqonchilik bilan shug‘ullangan va hosilning bir qismini yer egasiga bergan.

Mayda yer ijarachilari kolonlar deb atalgan.

Bora-bora mutlaq qaram qullar soni kamaygan.
`,

slaves: `
Rimdagi qullar soni Qadimgi Misr va Qadimgi Yunonistonga qaraganda ancha ko‘p bo‘lgan.

Zafarli yurishlar natijasida Rimda qullar soni nihoyatda oshib ketgan.

Qullarga mehnati uchun haq to‘lanmagan.

Shuning uchun qullar imkon qadar kam va yomon ishlagan, bora-bora ularning mehnat unumdorligi pasaygan.
`,

plan: `
------------------------------------------------------------------------>🌿Reja:<------------------------------------------------------------------------
1. Rimda Quldorlik
2. Gladiatorlar Janglari
3. Spartak Qo‘zg‘oloni
`,

gladiators: `
Rimliklarning sevimli tomoshalaridan biri gladiatorlar jangi bo‘lgan.

Gladiatorlarning aksariyati qullar yoki jinoyatchilar bo‘lgan.

Ular maxsus yopiq maktablarda tayyorlangan va tomoshabinlar ko‘nglini xushlash uchun jang qilishga majbur etilgan.

Gladiatorning tirik qolishi tomoshabinlar xohishiga bog‘liq bo‘lgan.

Agar tomoshabinlar bosh barmog‘ini yuqoriga ko‘tarsa, gladiator tirik qolgan, pastga qaratsa — o‘ldirilgan.

Janglar katta tosh stadionlar — amfiteatrlarda bo‘lib o‘tgan.

Kolizey 50 ming tomoshabin sig‘dirgan eng katta amfiteatr bo‘lgan.

Gladiatorlar yovvoyi hayvonlar — arslonlar, qoplonlar, darg‘azab ho‘kizlar bilan ham jang qilgan.
`,

colosseum: `
Mil. avv. 74-yilda Spartak boshchiligida qullar qo‘zg‘oloni boshlangan.

Bu qo‘zg‘olon qadimgi dunyodagi eng ommaviy va uyushgan qo‘zg‘olonlardan biri bo‘lgan.

Spartak frakiyalik qul bo‘lib, Kapuya shahridagi gladiatorlik maktabiga sotilgan.

Spartak va uning 200 ga yaqin tarafdorlari qo‘riqchilarga hujum qilib, maktabdan qochib ketgan.

Ular Vezuviy tog‘i yaqinidagi qoyaga chiqib olgan.

Asta-sekin boshqa qullar ham ularga qo‘shilgan va qo‘zg‘olon kengaygan.

Qo‘zg‘olonni bostirish uchun yuborilgan 3 ming kishilik qo‘shin Spartak tomonidan tor-mor etilgan.

Keyinchalik Spartakka qarshi Mark Krass boshchiligida katta qo‘shin jo‘natilgan.

Mil. avv. 71-yil bahorida bo‘lib o‘tgan hal qiluvchi jangda Spartak lashkari tor-mor etilgan.

Spartak ana shu jangda halok bo‘lgan.
`

};

const QUESTIONS = [
{q:"Rim nima edi?", a:["Imperiya","Orol","Shahar"], c:0},
{q:"Qullar kim?", a:["Asir","Qirol","Savdogar"], c:0},
{q:"Gladiator nima?", a:["Jangchi","Dehqon","Ustoz"], c:0},
{q:"Kolizey nima?", a:["Arena","Uy","Bozor"], c:0},
{q:"Rim qayerda?", a:["Yevropa","Osiyo","Afrika"], c:0},

{q:"Qullar erkin edimi?", a:["Yo‘q","Ha","Ba’zida"], c:0},
{q:"Gladiatorlar qayerda jang qilgan?", a:["Kolizey","Ko‘cha","Uy"], c:0},
{q:"Kolizey sig‘imi?", a:["50 000+","5 000","10 000"], c:0},
{q:"Rim armiyasi?", a:["Kuchli","Zaif","Yo‘q"], c:0},
{q:"Qullar hayoti?", a:["Og‘ir","Boy","Erkin"], c:0},

{q:"Rim poytaxti?", a:["Rim","London","Parij"], c:0},
{q:"Gladiator hayoti?", a:["Xavfli","Oson","Tinch"], c:0},
{q:"Kolizey nima uchun?", a:["Jang","Maktab","Bozor"], c:0},
{q:"Qullar kimga bo‘ysungan?", a:["Xo‘jayinga","Do‘stga","Qirolga"], c:0},
{q:"Rim kuchi nimada?", a:["Armiya","Pul","Orol"], c:0},

{q:"Gladiatorlar nima bilan jang qilgan?", a:["Qurol","Kitob","Pul"], c:0},
{q:"Rim jamiyati?", a:["Qatlamli","Teng","Erkin"], c:0},
{q:"Kolizey qayerda?", a:["Italiya","Fransiya","Ispaniya"], c:0},
{q:"Qullar qayerda ishlagan?", a:["Qurilish","IT","Ofis"], c:0},
{q:"Gladiatorlar mashhur bo‘lishi mumkinmi?", a:["Ha","Yo‘q","Kam"], c:0},

{q:"Rim nimasi bilan mashhur?", a:["Kolizey","Piramida","Minora"], c:0},
{q:"Gladiatorlar kim uchun jang qilgan?", a:["Tomoshabinlar","Oila","Do‘stlar"], c:0},
{q:"Kolizeyda nima bo‘lgan?", a:["Janglar","Dars","Savdo"], c:0},
{q:"Qullar ozod bo‘lishi mumkinmi?", a:["Ba’zida","Hech qachon","Har doim"], c:0},
{q:"Rim imperiyasi kuchlimi?", a:["Ha","Yo‘q","Zaif"], c:0}
];

const IMAGES = {
intro: "intro.jpg",
plan: "plan.jpg",
slaves: "slaves.jpg",
gladiators: "gladiator.jpg",
colosseum: "colosseum.jpg"
};