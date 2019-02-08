const bcrypt = require('bcryptjs');
module.exports = {

    login: function(request, response)
    {
        const {username, password} =request.body
        request.app.get('db').auth.login(username).then((user) =>
        {
            if(!user[0])
            {
                response.status(400).json('invalid username')
            }
            else
            {
                const match = bcrypt.compareSync(password, user[0].password)
                if(!match)
                {
                    response.status(403).json('invalid password');
                }
                else
                {
                    delete user[0].password;
                    request.session.user = user[0];
                    response.status(200).send(request.session.user);
                }
            }
        })
    },
    register: function(request, response)
    {
        const {username, password} =request.body

        request.app.get('db').auth.login(username).then((user) =>
        {
            if(user[0])
            {
                response.status(400).json('username is already taken')
            }
            else
            {
                const hashPassword = bcrypt.hashSync(password);

                request.app.get('db').auth.register({username, password: hashPassword}).then((user) =>
                {
                    delete user[0].password;
                    request.session.user = user[0];
                    response.status(200).send(request.session.user);
                })
            }
        }) 
    },
    logout: function(request, response)
    {
        request.session.destroy();
        response.sendStatus(200);
    }
};