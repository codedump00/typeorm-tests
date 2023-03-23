import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Category} from "./Category";

@Entity("user_posts")
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Category, {
        cascade: true,
    })
    @JoinTable({name: "post_categories", joinColumn: {name: "post_id"}, inverseJoinColumn: {name:"category_id"}})
    categories: Category[];
}