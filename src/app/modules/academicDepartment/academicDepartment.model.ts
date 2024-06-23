import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";
import { string } from "zod";
import AppError from "../../Errors/AppError";


const academicDepartmentSchema = new Schema<TAcademicDepartment>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        academicFaculty: {
            type: Schema.Types.ObjectId,
            ref: 'AcademicFaculty',
        },
    },
    {
        timestamps: true,
    },
);





academicDepartmentSchema.pre('save', async function (next) {

    const isDepartmentExist = await AcademicDepartment.findOne({ name: this.name })

    if (isDepartmentExist) {
        throw new AppError(404, `${this.name} is already Exists`)
    }

    next()

})

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {

    const query = this.getQuery();


    const isDepartmentExist = await AcademicDepartment.findOne(query)

    if (!isDepartmentExist) {
        throw new AppError(404, `This department  does not Exists`)
    }

    next()


})


export const AcademicDepartment = model<TAcademicDepartment>('AcademicDepartment', academicDepartmentSchema)