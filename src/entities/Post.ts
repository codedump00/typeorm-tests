import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Category} from "./Category";

@Entity("posts")
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column("text")
    text: string;

    @ManyToMany(type => Category, {
        cascade: true,
    })
    @JoinTable({name: "post_categories", inverseJoinColumn: {name: "post_id"}, joinColumn: {name:"category_id"}})
    categories: Category[];

}