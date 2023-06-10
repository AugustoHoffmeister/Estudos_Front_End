/* CODIGO ANTES

class ClsMedia {
    public media: number = 0
    public nota01: number = 0
    public nota02: number = 0
    public calcMedia(): void {
        this.media = (this.nota01 + this.nota02 ) / 2
    }
}
let media: ClsMedia = new ClsMedia()

media.nota01 = 6
media.nota02 = 8

media.calcMedia()

console.log(media.media)
*/

// CODIGO DEPOIS
class ClsMedia {
    public media: number = 0

    private tmpNota01: number = 0
    private tmpNota02: number = 0

    public get nota01(): number {
        return this.tmpNota01
    }
    public set nota01(nota: number) {
        this.tmpNota01 = nota
        this.calcMedia()      
    }

    public get nota02(): number {
        console.log('Estou dentro do get da nota 02')
        return this.tmpNota02
    }
    public set nota02(nota: number) {
        console.log('Estou dentro do set da nota 02...parametro recebido: ', nota)
        this.tmpNota02 = nota
        this.calcMedia()
    }


    private calcMedia(): void {
        this.media = (this.nota01 + this.nota02 ) / 2
    }
}
let media: ClsMedia = new ClsMedia()

media.nota01 = 6
console.log('media apos primeira atribuição:', media.media)

media.nota02 = 8
console.log('media apos segunda atribuição:', media.media)
