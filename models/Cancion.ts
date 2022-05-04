import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Canciones extends BaseEntity {
 @PrimaryGeneratedColumn()
 id: number

 @Column({type: 'varchar', length: 250, nullable: false, unique: true})
 titulo: string
 
 @Column({type: 'varchar', length: 250, nullable: false})
 autor: string

 @Column({type: 'varchar', length: 250, nullable: false})
 album: string

 @Column({type: 'varchar', length: 250, nullable: false})
 duracion: string

 @Column({type: 'varchar', length: 250, nullable: false})
 genero: string

 @Column({type: 'varchar', length: 1000, nullable: true})
 imagen: string

 @Column({type: 'varchar', length: 1000, nullable: false, unique: true})
 linkyoutube: string

 @CreateDateColumn()
 createdAt: Date

 @UpdateDateColumn()
 updatedAt: Date
}