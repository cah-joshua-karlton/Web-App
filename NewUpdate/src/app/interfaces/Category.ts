export interface Category {
    name: string,
    route: string,
    subcategories?: Category[]
}