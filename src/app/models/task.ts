export class Task{
    id:number;
    title:string;
    status:boolean;
    date:Date;

    constructor(i:number,t:string){
        this.id=i;
        this.title=t;
        this.status=false;
        this.date=new Date();
    }
}