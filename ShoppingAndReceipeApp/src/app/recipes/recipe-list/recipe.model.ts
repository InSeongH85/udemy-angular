/**
 * Recipe 하나에 대한 Model
 */
export class Recipe {
    public name:string;
    public description:string;
    public imagePath:string;

    constructor(name:string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}