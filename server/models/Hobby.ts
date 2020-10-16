import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { Person } from './Person';

@Table
export class Hobby extends Model {
  @Column
  name: string;

  @ForeignKey(() => Person)
  PersonId: number;

  @BelongsTo(() => Person)
  personWhoHasThis: Person;
}
