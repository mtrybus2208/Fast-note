export class Note {
  _id?: string;
  title: string;
  description: string;
  date: string;
  tags: string;
  importance: any;

  constructor( obj?: any ) {
    if ( obj && obj._id ) { this._id = obj && obj._id; }
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.date = obj && obj.date || null;
    this.tags = obj && obj.tags || null;
    this.importance = obj && obj.importance || false;
  }
}
