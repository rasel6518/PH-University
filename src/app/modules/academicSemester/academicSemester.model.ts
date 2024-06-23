import { Schema, model } from "mongoose";
import { TAcadamicSemester } from "./academicSemester.interface";
import { Months, academicSemesterCode, academicSemesterName } from "./academicSemester.constant";


const academicSemesterShema = new Schema<TAcadamicSemester>({
    name: {
        type: String,
        required: true,
        enum: academicSemesterName
    },
    code: {
        type: String,
        required: true,
        enum: academicSemesterCode
    },
    year: {
        type: String,
        required: true
    },
    startMonth: {
        type: String,
        required: true,
        enum: Months
    },
    endMonth: {
        type: String,
        required: true,
        enum: Months
    }
}, {
    timestamps: true
}
)

academicSemesterShema.pre('save', async function (next) {

    const isSemesterExist = await AcademicSemester.findOne({
        year: this.year,
        name: this.name
    })

    if (isSemesterExist) {
        throw new Error("This Semester already exists!")
    }

    next()

})

export const AcademicSemester = model<TAcadamicSemester>("AcademicSemester", academicSemesterShema)


