class meal {
    constructor(id, categoriesId, spicy, vegeterian, glutenFree, duration, ingredients=[], ImgUrl, dishName, isFav)
    {
        this.id = id;
        this.categoriesId = categoriesId;
        this.spicy = spicy;
        this.vegeterian = vegeterian;
        this.glutenFree = glutenFree;
        this.duration = duration;
        this.ingredients = ingredients;
        this.ImgUrl = ImgUrl;
        this.dishName = dishName;
        this.isFav = isFav;
    }
}

export default meal;