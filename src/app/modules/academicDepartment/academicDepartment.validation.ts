import { z } from "zod";


const createAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: 'Name is must be String',
            required_error: 'Name is must be Required'
        }),
        academicFaculty: z.string({
            invalid_type_error: 'AcademicFaculty is must be string'
        })
    })
})
const updateAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: 'Name is must be String',
            required_error: 'Name is must be Required'
        }).optional(),
        academicFaculty: z.string({
            invalid_type_error: 'AcademicFaculty is must be string'
        }).optional()
    })
})


export const AcademicDepartmentValidation = {
    createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema,

}