namespace bookshop.db;

entity Authors{
key AuthorID : Integer;
    Author : String;
    Country : String;
    Books : Association to many Books on Books.Author = $self;
    
}

entity Books {
Key BookId : Integer;
    Title : String;
    Stock : Integer;
    Author : Association to  Authors;


}