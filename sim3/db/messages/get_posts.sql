create table if not exists posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer references users(id)
);
select content, u.username 
from posts as p
join users as u on p.author_id = u.id;
;