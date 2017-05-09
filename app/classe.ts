export class Category{
	public label: string;
	public id: number;
	
	constructor(label:string, id:number){
		this.label = label;
		this.id = id;
	}
}

export class Note{
	public id: number;
	public title: string;
	public content:string;
	public category: Category;
	public date: string;
	
	constructor(id:number,title:string,content:string, date:string, category: Category){
		this.id = id;
		this.title = title;
		this.content = content;
		this.date = date;	
		this.category = category;
	}
}