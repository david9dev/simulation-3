select title, img, content u.username 
from posts as p
join users as u on p.author_id = u.id
where id = $1;