import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterServices } from "./academicSemester.service";


const createAcademicSemester = catchAsync(async (req, res) => {

    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Semester is created Successfully',
        data: result
    })
})

const getAllAcademicSemester = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semesters are retrieved succesfully",
        data: result
    })
})

const getSingleAcademicSemester = catchAsync(async (req, res) => {
    const { semesterId } = req.params
    const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semester is retrieved succesfully by SemesterId",
        data: result
    })

})

const updateAcademicSemester = catchAsync(async (req, res) => {
    const { semesterId } = req.params;
    const result = await AcademicSemesterServices.updateAcademicSemesterFromDB(semesterId, req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semester is Updated Successfully",
        data: result
    })
})


export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateAcademicSemester,
}