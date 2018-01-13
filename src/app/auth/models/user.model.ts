
import { Note } from './../../shared/models/note.model';

export class User {
  _id?: string;
  email?: string;
  notes?: Array<Note>;

  constructor( obj?: any ) {
    this._id = obj && obj._id || null;
    this.email = obj && obj.email || null;
    this.notes = obj && obj.notes || null;
  }
}
