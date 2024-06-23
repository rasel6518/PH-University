import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcadamicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";


const createAcademicSemesterIntoDB = async (payload: TAcadamicSemester) => {


    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error('Invalid Semester Code')
    }

    const result = await AcademicSemester.create(payload)

    return result
}


const getAllAcademicSemestersFromDB = async () => {
    const result = await AcademicSemester.find()

    return result;
}

const getSingleAcademicSemesterFromDB = async (id: string) => {
    const result = await AcademicSemester.findById(id)
    return result;

}

const updateAcademicSemesterFromDB = async (id: string, payload: Partial<TAcadamicSemester>) => {

    if (payload.name &&
        payload.code && academicSemesterNameCodeMapper[payload.name] !== payload.code
    ) {
        throw new Error('Invalid Semester Code');
    }

    // if (payload.name && payload.code && academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    //     throw new Error("Invalid Semester code")
    // }

    const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, { new: true })

    return result;
}



export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterFromDB,
}