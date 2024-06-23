import { TAcadamicSemesterCode, TAcadamicSemesterName, TAcademicSemesterNameCodeMapper, TMonths } from "./academicSemester.interface";

export const Months: TMonths[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const academicSemesterName: TAcadamicSemesterName[] = ['Autumn', 'Summer', 'Fall']

export const academicSemesterCode: TAcadamicSemesterCode[] = ['01', '02', '03']

export const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    Autumn: "01",
    Summer: "02",
    Fall: "03"
}