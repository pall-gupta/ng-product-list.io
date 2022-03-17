export interface Product{
    id: number;
    name:string;
    price:number;
    description: string;
}
export const products = [
    {
        id: 1,
        name:'Product 1',
        price:500,
        description:'This is product One'
    },
      {
        id: 2,
        name:'Product 2',
        price:1000,
        description:'This is product Two'
    },
      {
        id: 3,
        name:'Product 3',
        price:1500,
        description:'This is product Three'
    },
]