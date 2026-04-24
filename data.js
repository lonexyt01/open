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
{q:"Qullar kim edi?", a:["Erkin odamlar","Asirlar","Qirollar"], c:0},
{q:"Qullar qanday yo‘l bilan kelgan?", a:["Urush orqali","Savdo orqali","Ikkalasi ham"], c:0},
{q:"Qullar erkin bo‘lganmi?", a:["Ha","Yo‘q","Ba’zida"], c:0},
{q:"Qullar qayerda ishlagan?", a:["Dalada","Uyda","Har joyda"], c:0},
{q:"Qullar kimga tegishli edi?", a:["Davlatga","Xo‘jayinga","Do‘stiga"], c:0},

{q:"Gladiatorlar kim edi?", a:["Jangchilar","Dehqonlar","Ustozlar"], c:0},
{q:"Gladiatorlar qayerda jang qilgan?", a:["Bozorda","Kolizeyda","Uyda"], c:0},
{q:"Gladiatorlar nima bilan jang qilgan?", a:["Kitob","Qurol","Qo‘l"], c:0},
{q:"Gladiatorlar erkin bo‘lganmi?", a:["Yo‘q","Ha","Har doim"], c:0},
{q:"Gladiatorlar kim uchun jang qilgan?", a:["O‘zlari","Tomoshabinlar","Do‘stlar"], c:0},

{q:"Qullar hayoti qanday edi?", a:["Oson","Og‘ir","Boy"], c:0},
{q:"Qullar ozod bo‘lishi mumkinmi?", a:["Yo‘q","Ha","Ba’zida"], c:0},
{q:"Qullar nima ish qilgan?", a:["O‘qigan","Ishlagan","Dam olgan"], c:0},
{q:"Qullar pul olganmi?", a:["Ha","Yo‘q","Ko‘p"], c:0},
{q:"Qullar kim tomonidan boshqarilgan?", a:["Do‘stlar","Xo‘jayin","Qirol"], c:0},

{q:"Gladiatorlar hayoti qanday edi?", a:["Tinch","Xavfli","Oson"], c:0},
{q:"Gladiatorlar mashhur bo‘lishi mumkinmi?", a:["Ha","Yo‘q","Kam"], c:0},
{q:"Gladiatorlar qayerda yashagan?", a:["Maktabda","Maxsus joyda","Ko‘chada"], c:0},
{q:"Gladiatorlar nimaga tayyorlangan?", a:["O‘qishga","Jangga","Savdoga"], c:0},
{q:"Gladiatorlar kim tomonidan tayyorlangan?", a:["Ustoz","Do‘st","Qirol"], c:0},

{q:"Qullar va gladiatorlar o‘xshashmi?", a:["Ha","Yo‘q","Biroz"], c:0},
{q:"Qullar jang qilganmi?", a:["Ha","Yo‘q","Ba’zida"], c:0},
{q:"Gladiatorlar o‘lim xavfi bormi?", a:["Yo‘q","Ha","Kam"], c:0},
{q:"Qullar o‘z hayotini tanlay olganmi?", a:["Ha","Yo‘q","Ba’zida"], c:0},
{q:"Gladiatorlar nima uchun jang qilgan?", a:["Pul","Shon-shuhrat","Ikkalasi ham"], c:0},

{q:"Qullar qayerdan kelgan?", a:["Urushdan","Uyidan","Maktabdan"], c:0},
{q:"Gladiatorlar kimlar bo‘lishi mumkin?", a:["Qullar","Erkinlar","Ikkalasi ham"], c:0},
{q:"Qullar qanday yashagan?", a:["Boy","Oddiy","Og‘ir"], c:0},
{q:"Gladiatorlar kimga tegishli edi?", a:["O‘ziga","Xo‘jayiniga","Davlatga"], c:0},
{q:"Qullar va gladiatorlar Rimda muhimmi?", a:["Ha","Yo‘q","Kam"], c:0}
];

const IMAGES = {
intro: "intro.jpg",
plan: "plan.jpg",
slaves: "slaves.jpg",
gladiators: "gladiator.jpg",
colosseum: "colosseum.jpg"
};
