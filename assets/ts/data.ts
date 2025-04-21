import type {
    LinkArray,
    CertificationArray,
    CareerArray,
    StrengthArray,
    SkillsArray,
    ProductArray
} from '~/assets/ts/interfaces.ts'

export const admin = "yasu"
export const adminUniversity = "とある大学"
export const adminEmail = "kangzhengxinzhuang@gmail.com"

const imgPath = "~/assets/img/"
const productDirOld = "../img/product/product"
const productDir = "/static/img/product/product"
const imgExtension = ".png"

function productPath(num: number): string {
    return productDir + num + imgExtension
}

export const links: string[] = [
    "Profile", "Career", "Strength", "Skills", "Product", "Contact"
]

export const linkArray: LinkArray[] = [
    { id: 1, text: links[0], link: 600},
    { id: 2, text: links[1], link: 1200},
    { id: 3, text: links[2], link: 1800},
    { id: 4, text: links[3], link: 2400},
    { id: 5, text: links[4], link: 3000},
    { id: 6, text: links[5], link: 3600},
]

export const certificationArray: CertificationArray[] = [
    {id: 1, text: "MOS Expert Excel", date: "2017-10"},
    {id: 2, text: "MOS Expert Word", date: "2017-11"},
    {id: 3, text: "MOS Specialist PowerPoint", date: "2017-11"},
    {id: 4, text: "MOS Specialist Access", date: "2017-12"},
    {id: 5, text: "Certify Excel 1級", date: "2017-12"},
    {id: 6, text: "Certify Word 1級", date: "2018-01"},
    {id: 7, text: "Certify PowerPoint 1級", date: "2018-01"},
    {id: 8, text: "Certify Access 1級", date: "2018-02"},
    {id: 9, text: "Certify Illustrator エキスパート", date: "2022-09"},
    {id: 10, text: "Certify Photoshop エキスパート", date: "2022-10"},
    {id: 11, text: "Certify Webクリエーター エキスパート", date: "2022-11"},
]
certificationArray.reverse()

export const careerArray: CareerArray[] = [
    {id: 1, title: "生誕", text:"1989年7月、生まれる。"},
    {id: 2, title: "子供時代", text:"絵を描いたり工作をしたりするのが好きな子供でした。"},
    {id: 3, title: "１０代", text:"ギターを始めました。"},
    {id: 4, title: "２０代", text:"後半で管施工管理技士になりました。"},
    {id: 5, title: "３０代", text:"プログラミングの勉強を始めました。"},
]

export const strengthArray: StrengthArray[] = [
    {id: 1, title: "手先が器用",
        text: "手先を使う作業が好きです。子供のころから手先を使うのが好きで、絵を描いたり工作をしたりしていました。",
        textDetail: "手先を使う作業が好きです。子供のころから手先を使うのが好きで、絵を描いたり工作をしたりしていました。最近でも（ヘタクソ）フィギュア製作や、オーディオアンプの自主制作に手を出したりと好奇心が尽きません。楽器の演奏でも役に立ってますネ。"
    },
    {id: 2, title: "問題解決力",
        text: "施工管理時代に培った問題解決力。作業効率は早く終わらせようするだけでは上がりません。エラーに早めに気づいて改善するのが重要です。",
        textDetail: "施工管理時代に培った問題解決力。作業効率は早く終わらせようするだけでは上がりません。エラーに早めに気づいて改善するのが重要です。" +
            "施工後の寸法計測では、1フロアにおよそ150の計測箇所がありまして、最初の頃は早く終わらせることを重視していましたが、" +
            "測定後の事務所での入力作業の際、計測した寸法にミスがあった場合、現場と事務所を行ったり来たりすることになり、タイムロスになりました。" +
            "そこで、なるべく現場で寸法の確認をすることで、現場にいる時間は増えましたが、事務所での入力の際のミスをなくし、業務を効率化できました。" +
            "最初の頃は夜8時ころまでかかっていた作業を、夕方6時くらいに終わらせるくらいには短縮できました。"
            },
    {id: 3, title: "集中力",
        text: "とにかく高い集中力。集中しだすと止まりません（笑）。",
        textDetail: "とにかく高い集中力。集中しだすと止まりません（笑）。前任者が2日かけて行っていた計測を、1日で終わらせることができ、以降計測の担当は自分一人に任せられるようになり、他の管理士達の負担を減らすことができるようになりました。"},
]
export const skillsArray: SkillsArray[] = [
    {id: 1, title: "What I do",
        text: "Webデザイン、Illustrator/Photoshopを使用したWebデザインからHTML/CSS/Javascriptを使用してのコーディングまでできます。" +
            "具体例は下のProductから。",
        textDetail: "Illustrator/Photoshopを使用したWebデザインからHTML/CSS/Javascript/vue.js/flaskを使用してのコーディングまでできます。" +
            "具体例はProductから。" +
            "他はPython、Javaが触れます。C言語も勉強中。"},
    {id: 2, title: "Certification", text: "certificationArrayを参照", textDetail: "certificationArrayを参照"},
    {id: 3, title: "未定", text: "非公開その３", textDetail: "非公開Detailその３"},
]

export const productArray: ProductArray[] = [
    {id: 1, title: "架空ねこカフェ", text: "架空のネコカフェのサイト。",
        textDetail: "架空のネコカフェのサイト。使用言語はVue.js。製作期間は3週間程。",
        src: 1, link: 'https://kakuunekocafe.netlify.app'},
    {id: 2, title: "ヨウムシミュレーター！？", text: "ヨウムっぽくしゃべる人工無能",
        textDetail: "ヨウムっぽくしゃべる人工無能です。読み込みに時間がかかる可能性があります。使用言語はFlaskで、ユーザーの入力した文章を覚えて返事をしたり、形態素解析によって覚えた文章を組み替えたりして返事をします。製作期間は２週間ほど。",
        src: 2, link: 'https://chatbotyoumu.onrender.com/'},
    {id: 3, title: "---", text: "製作中", textDetail: "製作中", src: 0, link: ''},
    {id: 4, title: "---", text: "製作中", textDetail: "製作中", src: 0, link: ''},
]

export const reversedProductArray: ProductArray[] = [...productArray].reverse()
