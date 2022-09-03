
export type ArticleSummary = {
    id: number
    title: string
    intro: string
    date: string
}

export type ArticleImage = {
    id: number,
    position_after_paragraph: number,
    variants: [

    ]
}

export type ArticleImageVariant = {
    id: number,
    src: string,
    width: string,
}