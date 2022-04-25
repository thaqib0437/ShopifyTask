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

interface IWarehouse {
    location: String, 
    capacity: bigint
}

const warehouseSchema = new Schema<IWarehouse>
    (
        {
            location: {type: String, required: true, unique: true}, 
            capacity: reqIntValidator 
        }
    )



interface WarehouseRecord{
    warehouseLocation: string,
    allocation: bigint
}
const warehouseRecordSchema = new Schema<WarehouseRecord>
    (
        {
            warehouseLocation: {type: String, required: true},
            allocation: reqIntValidator
        }
    )




interface IItem {
    name: string,
    code: string,
    quantity: bigint,
    price: number
    warehouses: [WarehouseRecord]
}

const ItemSchema = new Schema<IItem>
    (
        {
            name: {type: String, required: true},
            code: {type: String, required: true, unique: true},
            quantity: reqIntValidator,
            price: {type: Number, required: true},
            warehouses: {type: [warehouseRecordSchema], 
                validate: [(v: [WarehouseRecord]) => v.length > 0, "No Locations"]}
        }
    )




const Item = model<IItem>("Item", ItemSchema)
const Warehouse = model<IWarehouse>("Warehouse", 
                                    warehouseSchema)


// JSON Validator for request body

export {Item, Warehouse}