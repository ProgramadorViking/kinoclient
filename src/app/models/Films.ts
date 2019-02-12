export interface Film{
    id:number;
    name:string;
    category:number;
    premier:string;
    description:string;
    pegi:number;
    created_at?:Date;
    updated_at?:Date;
    image?:string;
    trailer?:string;
  };