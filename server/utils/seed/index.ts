import db from "../../models";

async function seed() {
    const category = db.Category.create({});

    const product = db.Product.create({});
}
