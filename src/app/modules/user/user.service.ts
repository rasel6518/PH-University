import mongoose from 'mongoose';
import config from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import AppError from '../../Errors/AppError';
import httpStatus from 'http-status';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // Create a user object
  const userData: Partial<TUser> = {};

  // If password is not given, use default password
  userData.password = password || (config.default_password as string);

  // Set student role
  userData.role = 'student';

  // Find academic semester info
  const admissionSemester = await AcademicSemester.findById(payload.admissionSemester);

  // Check if admissionSemester is found
  if (!admissionSemester) {
    throw new Error('Admission semester not found');
  }
  const session = await mongoose.startSession()
  try {

    session.startTransaction()
    // Set  generated ID
    userData.id = await generateStudentId(admissionSemester);

    // Create a user (transaction-1)
    const newUser = await User.create([userData], { session });//array

    // Create a student
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create new user")
    }
    // Set id, _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; // Reference _id

    // Create a Student (transaction-2)

    const newStudent = await Student.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create new student")
    }

    await session.commitTransaction();
    await session.endSession();
    return newStudent;


  } catch (err) {
    await session.abortTransaction();
    await session.endSession()
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to create ")

  }
};

export const UserServices = {
  createStudentIntoDB,
};
