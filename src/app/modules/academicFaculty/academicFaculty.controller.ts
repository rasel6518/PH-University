import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultyService } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async (req, res) => {

    const result = await AcademicFacultyService.createAcademicFacultyIntoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Faculty is created successfully!',
        data: result
    })

})

const getAllAcademicFaculties = catchAsync(async (req, res) => {
    const result = await AcademicFacultyService.getAllAcademicFacultiesFromDB()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculties are retrieved succesfully",
        data: result
    })
})

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
    const { facultyId } = req.params;
    const result = await AcademicFacultyService.getSingleAcademicFacultyFromDB(facultyId)


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculty is retrieved successfully by FacultyId",
        data: result
    })
})

const updateAcademicFaculty = catchAsync(async (req, res) => {
    const { facultyId } = req.params;
    const result = await AcademicFacultyService.updateAcademicFacultyFromDB(facultyId, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Faculty is updated successfully',
        data: result
    })
})



export const AcademicFacultyController = {
    createAcademicFaculty,
    getAllAcademicFaculties,
    getSingleAcademicFaculty,
    updateAcademicFaculty,
}