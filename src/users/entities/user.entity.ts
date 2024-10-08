import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn, 
    UpdateDateColumn
} from 'typeorm';

@Entity({
    name: "users"
})

export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
