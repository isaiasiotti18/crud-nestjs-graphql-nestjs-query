import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  brand: string;

  @Field()
  category: string;

  @Field(() => Int)
  price: number;
}
