
export interface IShippingCost {
    code: string,
    name: string,
    costs: {
        service: string,
        description: string,
        cost: {
            value: number,
            etd: string,
            note: string
        }[]
    }[]
}