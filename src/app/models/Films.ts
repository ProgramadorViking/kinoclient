export interface Film{
    id:number;
    name:string;
    category:number;
    premiere:string;
    description:string;
    pegi:number;
    created_at?:Date;
    updated_at?:Date;
    image?:string;
    trailer?:string;
    duration?:number;
  };