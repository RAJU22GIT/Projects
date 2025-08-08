using bookshop.db from '../db/schema';

service BookService {
    entity BooksSet as projection on db.Books;
    entity AuthorSet as projection on db.Authors;
}

