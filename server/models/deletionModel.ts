import {Schema, model} from "mongoose"
import { IItem, ItemSchema } from "./itemModel";

interface IDeleteRecord{
    comment: string
    itemData: IItem
}

const deleteRecordSchema = new Schema<IDeleteRecord>(
    {
        comment: {type: String},
        itemData: ItemSchema
    },
    {timestamps: true, expires: 7*24*60*60 } // Expire every 7 days
)

const deleteRecord = model<IDeleteRecord>("DeleteRecord", deleteRecordSchema)

export {deleteRecord};