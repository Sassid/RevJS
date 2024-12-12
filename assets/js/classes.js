class Article {
    constructor(titre, description, isPublished) {
        this.titre = titre;
        this.description = description;
        this.isPublished = isPublished;
    }
    affiche() {
        console.log(this.titre);
    }
}

const article = new Article("blabla", "more blabla", true);
article.affiche();