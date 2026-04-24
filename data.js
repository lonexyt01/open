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
{q:"Qullar kim edi?", a:["Asirlar","Erkin odamlar","Qirollar"], c:0},
{q:"Qullar qanday paydo bo‘lgan?", a:["Urush orqali","O‘qish orqali","Sayohat orqali"], c:0},
{q:"Qullar erkin bo‘lganmi?", a:["Yo‘q","Ha","Har doim"], c:0},
{q:"Qullar qayerda ishlagan?", a:["Har joyda","Faqat uyda","Faqat maktabda"], c:0},
{q:"Qullar kimga tegishli edi?", a:["Xo‘jayinga","Do‘stiga","O‘ziga"], c:0},

{q:"Gladiatorlar kim edi?", a:["Jangchilar","Dehqonlar","Savdogarlar"], c:0},
{q:"Gladiatorlar qayerda jang qilgan?", a:["Kolizeyda","Uyda","Ko‘chada"], c:0},
{q:"Gladiatorlar nima bilan jang qilgan?", a:["Qurol","Kitob","Pul"], c:0},
{q:"Gladiatorlar hayoti qanday edi?", a:["Xavfli","Oson","Tinch"], c:0},
{q:"Gladiatorlar kim uchun jang qilgan?", a:["Tomoshabinlar uchun","O‘zlari uchun","Do‘stlari uchun"], c:0},

{q:"Qullar hayoti qanday edi?", a:["Og‘ir","Boy","Tinch"], c:0},
{q:"Qullar ozod bo‘lishi mumkinmi?", a:["Ba’zida","Hech qachon","Har doim"], c:0},
{q:"Qullar nima qilgan?", a:["Ishlagan","Faqat dam olgan","O‘qigan"], c:0},
{q:"Qullar pul olganmi?", a:["Yo‘q","Ha","Ko‘p"], c:0},
{q:"Qullar kim tomonidan boshqarilgan?", a:["Xo‘jayin","Do‘st","Qirol"], c:0},

{q:"Gladiatorlar mashhur bo‘lishi mumkinmi?", a:["Ha","Yo‘q","Kam"], c:0},
{q:"Gladiatorlar qayerda yashagan?", a:["Maxsus joylarda","Ko‘chada","Uyda"], c:0},
{q:"Gladiatorlar nimaga tayyorlangan?", a:["Jangga","O‘qishga","Savdoga"], c:0},
{q:"Gladiatorlar kim tomonidan tayyorlangan?", a:["Ustozlar","Do‘stlar","Qirol"], c:0},
{q:"Gladiatorlar o‘lim xavfi bormi?", a:["Ha","Yo‘q","Kam"], c:0},

{q:"Qullar qayerdan kelgan?", a:["Urushlardan","Uyidan","Maktabdan"], c:0},
{q:"Gladiatorlar kim bo‘lishi mumkin?", a:["Qullar yoki erkinlar","Faqat qirollar","Faqat bolalar"], c:0},
{q:"Qullar qanday yashagan?", a:["Og‘ir","Boy","Erkin"], c:0},
{q:"Gladiatorlar kimga tegishli edi?", a:["Xo‘jayinga","O‘ziga","Do‘stiga"], c:0},
{q:"Qullar o‘z hayotini tanlay olganmi?", a:["Yo‘q","Ha","Ba’zida"], c:0},

{q:"Gladiatorlar nima uchun jang qilgan?", a:["Shon-shuhrat va pul","Faqat o‘yin","Dam olish"], c:0},
{q:"Qullar va gladiatorlar o‘xshashmi?", a:["Biroz","Yo‘q","Ha"], c:0},
{q:"Qullar jang qilganmi?", a:["Ba’zida","Hech qachon","Har doim"], c:0},
{q:"Gladiatorlar Rimda muhimmi?", a:["Ha","Yo‘q","Kam"], c:0},
{q:"Qullar jamiyatda qanday o‘rin tutgan?", a:["Past qatlam","Yuqori qatlam","Teng"], c:0}
];
const IMAGES = {
intro: "intro.jpg",
plan: "plan.jpg",
slaves: "slaves.jpg",
gladiators: "gladiator.jpg",
colosseum: "colosseum.jpg"
};
