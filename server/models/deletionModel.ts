import {Schema, model} from "mongoose";
import { IItem, ItemSchema } from "./itemModel";


interface IDeleteRecord{
    code:  string
    comment: string
    itemData: IItem,
    expireAt: Date
}

const deleteRecordSchema = new Schema<IDeleteRecord>(
    {
        code: {type: String, unique: true, required: true},
        comment: {type: String},
        itemData: ItemSchema,
        expireAt: {type: Date, default: Date.now, index: {expires: 60*5}} // expire after 5 minutes
    },
    {timestamps: true}
)

const deleteRecord = model<IDeleteRecord>("DeleteRecord", deleteRecordSchema)

export {deleteRecord};