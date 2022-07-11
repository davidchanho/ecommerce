describe("tests associations", () => {
    // beforeEach((done) => {
    //     testDB();
    //     const category = new db.Category({
    //         name: "publication2",
    //     });
    //     const product = new Product({
    //         name: "comment",
    //     });
    //     const user = new User({
    //         email: "user@email.com",
    //         password: "1234Pass!",
    //     });
    //     const post = new Post({
    //         body: "postBody",
    //     });
    //     post.userId = user.id;
    //     post.commentId = comment.id;
    //     user.posts.push(post);
    //     comment.users.push(user);
    //     comment.posts.push(post);
    //     publication.comments.push(comment);
    //     publication.users.push(user);
    //     Promise.all([
    //         comment.save(),
    //         publication.save(),
    //         user.save(),
    //         post.save(),
    //     ]).then(() => {
    //         done();
    //     });
    // });
    // it.only("should find publications by id", (done) => {
    //     Publication.findOne({ name: "publication2" })
    //         .populate({
    //             path: "comments",
    //             model: "comment",
    //             populate: { path: "posts", model: "post" },
    //         })
    //         .populate({
    //             path: "comments",
    //             model: "comment",
    //             populate: { path: "users", model: "user" },
    //         })
    //         .populate({
    //             path: "users",
    //             model: "user",
    //             populate: { path: "posts", model: "post" },
    //         })
    //         .then((publication: IPublication) => {
    //             expect(publication.name).toBe("publication2");
    //             const { comments, users } = publication;
    //             assert(comments[0].name === "comment");
    //             assert(comments[0].users[0].email === "user@email.com");
    //             assert(comments[0].posts[0].body === "postBody");
    //             assert(users[0].email === "user@email.com");
    //             assert(users[0].posts[0].body === "postBody");
    //             done();
    //         });
    // });
});
