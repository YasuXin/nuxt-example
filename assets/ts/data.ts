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
export const adminEmail = "kone.ko2nekomi.mi69@gmail.com"

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

export const careerArray: CareerArray[] = [
    {id: 1, title: "生誕", text:"1989年7月、生まれる。"},
    {id: 2, title: "非公開", text:"2021年まで～"},
    {id: 3, title: "非公開", text:"2022年まで～"},
    {id: 4, title: "非公開", text:"2023年まで～"},
    {id: 5, title: "非公開", text:"2024年まで～"},
]

export const strengthArray: StrengthArray[] = [
    {id: 1, title: "粘り強さ", text: "非公開その１", textDetail: "非公開Detailその１"},
    {id: 2, title: "問題解決力", text: "非公開その２", textDetail: "非公開Detailその２"},
    {id: 3, title: "集中力", text: "非公開その３", textDetail: "非公開Detailその３"},
]
export const skillsArray: SkillsArray[] = [
    {id: 1, title: "What I do", text: "非公開その１", textDetail: "非公開Detailその１"},
    {id: 2, title: "Certification", text: "非公開その２", textDetail: "非公開Detailその２"},
    {id: 3, title: "未定", text: "非公開その３", textDetail: "非公開Detailその３"},
]

export const productArray: ProductArray[] = [
    {id: 1, title: "架空ねこカフェ", text: "架空のネコカフェのサイト。", textDetail: "架空のネコカフェのサイト。", src: 1, link: 'https://kakuunekocafe.netlify.app'},
    {id: 2, title: "---", text: "製作中", textDetail: "製作中", src: 0, link: ''},
    {id: 3, title: "---", text: "製作中", textDetail: "製作中", src: 0, link: ''},
    {id: 4, title: "---", text: "製作中", textDetail: "製作中", src: 0, link: ''},
]

export const reversedProductArray: ProductArray[] = [...productArray].reverse()
