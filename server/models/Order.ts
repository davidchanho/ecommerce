import {getModelForClass, prop, Ref} from '@typegoose/typegoose'
import {Product} from './Product'

export class Order {
    @prop({required: true})
    name!: string

    @prop({required: true, default: new Date()})
    purchase_date!: Date

    @prop({required: true})
    image!: string

    @prop({ref: () => Product})
    items!: Ref<Product>[]
}   

export default getModelForClass(Order)