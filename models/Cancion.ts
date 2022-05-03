import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Canciones extends BaseEntity {
 @PrimaryGeneratedColumn()
 id: number

 @Column()
 titulo: string
 
 @Column()
 autor: string

 @Column()
 album: string

 @Column()
 duracion: string

 @Column()
 genero: string

 @Column({length: 1000})
 imagen: string

 @Column({length: 1000})
 linkyoutube: string

 @CreateDateColumn()
 createdAt: Date

 @UpdateDateColumn()
 updatedAt: Date
}