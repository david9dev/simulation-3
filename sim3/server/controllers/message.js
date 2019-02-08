module.exports = {

    getPostById: function(request, response)
    {
        const {id} = request.params
        request.app.get('db').messages.get_post_by_id(id).then((post) =>
        {
            response.status(200).send(post);
        })
    },
    getPosts: function(request, response)
    {
        request.app.get('db').messages.get_posts().then((posts) =>
        {
            response.status(200).send(posts);
        })
    },
    createPost: function(request, response)
    {
        const {title, img, content, userid} = request.body
        request.app.get('db').messages.create_post({title, img, content, userid})
        .then(() =>
        {
            response.sendStatus(200);
        })
    }
};