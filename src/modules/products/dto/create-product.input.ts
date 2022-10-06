import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  brandId?: number;

  @Field(() => Float)
  price: number;
}
