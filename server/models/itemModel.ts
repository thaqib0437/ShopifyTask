import { Schema, model} from 'mongoose';

const reqIntValidator = {
    type: Number,
    required: true,
    validate:
    {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
    }
}


interface IItem {
    name: string,
    code: string,
    quantity: bigint,
    price: number
}

const ItemSchema = new Schema<IItem>
    (
        {
            name: {type: String, required: true},
            code: {type: String, required: true, unique: true},
            quantity: reqIntValidator,
            price: {type: Number, required: true}
        }
    )




const Item = model<IItem>("Item", ItemSchema)


// JSON Validator for request body

export {Item, ItemSchema, IItem}