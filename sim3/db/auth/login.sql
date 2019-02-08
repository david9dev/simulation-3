create table if not exists users (
    id serial primary key,
    username varchar(20),
    password varchar(100),
    profile_pic text
);
select * from  users
where username = $1;