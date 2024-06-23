
export type TMonths =
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December';

export type TAcadamicSemesterName = 'Autumn' | 'Summer' | 'Fall'
export type TAcadamicSemesterCode = '01' | '02' | '03'

export type TAcadamicSemester = {
    name: TAcadamicSemesterName,
    code: TAcadamicSemesterCode,
    year: string,
    startMonth: TMonths,
    endMonth: TMonths

}

export type TAcademicSemesterNameCodeMapper = {
    [key: string]: string
}